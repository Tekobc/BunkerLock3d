import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";
import { SceneGate } from "@/components/three/scene-gate";

export function HeroSection() {
  const whatsappUrl = getWhatsAppUrl("Hola, quiero consultar por una puerta o trabajo de herrería");

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <Image
          className="hero__poster"
          src="/posters/door-fallback.svg"
          alt=""
          width={1200}
          height={1280}
          preload
          sizes="(max-width: 760px) 100vw, 62vw"
        />
        <div className="hero__vignette" />
        <div className="hero__grid" />
        <SceneGate />
      </div>
      <div className="container hero__content">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span className="status-dot" />
            BunkerLock <span aria-hidden="true">/</span> Puertas y herrería
          </div>
          <h1 id="hero-title">
            Protección sólida.
            <br />
            <span>Hecha a tu medida.</span>
          </h1>
          <p className="hero__description">
            Puertas blindadas y herrería para hogares, comercios y proyectos. Contanos qué
            necesitás.
          </p>
          <div className="hero__actions">
            <a className="button button--light" href="#contacto">
              Pedir presupuesto <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <a className="button button--outline-light" href={whatsappUrl ?? "#contacto"}>
              {whatsappUrl ? "Escribinos por WhatsApp" : "Ver opciones de contacto"}
            </a>
          </div>
          <div className="hero__note">
            <span className="hero__note-rule" />
            Herrería general · Trabajos a medida
          </div>
        </div>
        <a className="hero__scroll" href="#servicios" aria-label="Bajar a servicios">
          <span>Deslizá para conocer más</span>
          <ArrowDown aria-hidden="true" size={17} />
        </a>
      </div>
    </section>
  );
}