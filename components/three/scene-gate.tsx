"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { SceneErrorBoundary } from "@/components/three/scene-error-boundary";

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

type LowPowerNavigator = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

const SceneLoader = dynamic(
  () => import("@/components/three/three-spike").then((module) => module.ThreeSpike),
  { ssr: false, loading: () => null },
);

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!context) return false;

    context.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

export function SceneGate() {
  const [sceneState, setSceneState] = useState({ enabled: false, debug: false });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("no3d") === "1") return;

    const lowPowerNavigator = navigator as LowPowerNavigator;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = lowPowerNavigator.connection?.saveData === true;
    const lowMemory = (lowPowerNavigator.deviceMemory ?? Infinity) <= 2;
    const lowCoreCount = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;

    if (reducedMotion || saveData || lowMemory || lowCoreCount || !supportsWebGL()) return;

    const debugMode = process.env.NODE_ENV === "development" && params.has("debug3d");

    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;
    let cancelled = false;
    const enableScene = () => {
      if (!cancelled) setSceneState({ enabled: true, debug: debugMode });
    };

    const scheduleAfterLoad = () => {
      const idleWindow = window as IdleWindow;
      if (idleWindow.requestIdleCallback) {
        idleHandle = idleWindow.requestIdleCallback(enableScene, { timeout: 2500 });
      } else {
        timeoutHandle = window.setTimeout(enableScene, 900);
      }
    };

    if (document.readyState === "complete") {
      scheduleAfterLoad();
    } else {
      window.addEventListener("load", scheduleAfterLoad, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", scheduleAfterLoad);
      const idleWindow = window as IdleWindow;
      if (idleHandle !== undefined) idleWindow.cancelIdleCallback?.(idleHandle);
      if (timeoutHandle !== undefined) window.clearTimeout(timeoutHandle);
    };
  }, []);

  if (!sceneState.enabled) return null;

  return (
    <SceneErrorBoundary>
      <SceneLoader debug={sceneState.debug} />
    </SceneErrorBoundary>
  );
}