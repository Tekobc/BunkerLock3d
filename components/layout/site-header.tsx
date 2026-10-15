"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#servicios");
  const [compact, setCompact] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("has-js");
    return () => document.documentElement.classList.remove("has-js");
  }, []);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 16);
    const initialFrame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((element): element is Element => element !== null);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref("#" + visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (menuOpen && !dialog.open) dialog.showModal();
    if (!menuOpen && dialog.open) dialog.close();
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={["site-header", compact ? "site-header--compact" : ""].join(" ")}>
      <div className="container site-header__inner">
        <a className="wordmark" href="/" aria-label="BunkerLock, inicio">
          <span className="wordmark__mark" aria-hidden="true" />
          <span className="wordmark__text">
            Bunker<span>Lock</span>
          </span>
        </a>

        <nav className="primary-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a
              className={activeHref === item.href ? "is-active" : ""}
              aria-current={activeHref === item.href ? "location" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contacto">
          Pedir presupuesto <ArrowUpRight aria-hidden="true" size={15} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButtonRef}
        >
          {menuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      <dialog
        className="mobile-menu"
        id="mobile-navigation"
        ref={dialogRef}
        aria-label="Menú de navegación"
        onCancel={closeMenu}
        onClose={() => {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }}
      >
        <div className="mobile-menu__top">
          <span className="mobile-menu__label">Navegación</span>
          <button className="icon-button" type="button" onClick={closeMenu} aria-label="Cerrar menú">
            <X aria-hidden="true" size={21} />
          </button>
        </div>
        <nav aria-label="Navegación móvil">
          {navigation.map((item, index) => (
            <a
              href={item.href}
              key={item.href}
              onClick={closeMenu}
              className={activeHref === item.href ? "is-active" : ""}
            >
              <span>0{index + 1}</span>
              {item.label}
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ))}
          <a className="mobile-menu__cta" href="#contacto" onClick={closeMenu}>
            Pedir presupuesto <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </nav>
      </dialog>
    </header>
  );
}