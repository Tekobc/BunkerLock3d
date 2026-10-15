"use client";

import { Canvas } from "@react-three/fiber";
import { useCallback, useEffect, useRef } from "react";
import type { WebGLRenderer } from "three";

type ThreeSpikeProps = { debug?: boolean };

/** Phase 0 keeps the scene empty and verifies only deferred WebGL setup and fallback handling. */
export function ThreeSpike({ debug = false }: ThreeSpikeProps) {
  const cleanupRef = useRef<(() => void) | null>(null);

  const handleCreated = useCallback(({ gl }: { gl: WebGLRenderer }) => {
    const canvas = gl.domElement;
    const onLost = (event: Event) => {
      event.preventDefault();
      canvas.closest(".scene-canvas")?.setAttribute("data-webgl-lost", "true");
    };
    const onRestored = () => {
      canvas.closest(".scene-canvas")?.removeAttribute("data-webgl-lost");
    };

    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);
    cleanupRef.current = () => {
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
    };
  }, []);

  useEffect(() => () => cleanupRef.current?.(), []);

  return (
    <div className="scene-canvas" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 34 }}
        dpr={[1, 1.5]}
        frameloop="demand"
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        onCreated={handleCreated}
      />
      {debug ? <div className="scene-debug">WebGL activo · spike técnico</div> : null}
    </div>
  );
}
