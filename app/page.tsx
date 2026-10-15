import Image from "next/image";
import { ArrowDown, ArrowUpRight, CircleHelp, Shield } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, services } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/config";

const processSteps = [
  {
    number: "01",
    title: "Nos contás",
    text: "Describinos el espacio y qué necesitás resolver.",
  },
  {
    number: "02",
    title: "Revisamos el proyecto",
    text: "Con la información disponible definimos cómo seguir.",
  },
  {
    number: "03",
    title: "Coordinamos",
    text: "Los detalles de medición, presupuesto y trabajo se confirman en cada caso.",
  },
];

export default function HomePage() {
  const whatsappUrl = getWhatsAppUrl("Hola, quiero hacer una consulta a BunkerLock");

  return (
    <main id="contenido">
      <HeroSection />

      <section className="section section--light" id="servicios" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            eyebrow="Qué hacemos"
            title="Soluciones para cada espacio"
            description="Puertas blindadas y herrería general para hogares, comercios y proyectos."
            id="services-title"
          />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card__top">
                  <span className="service-card__number">{service.number}</span>
                  <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.7} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="text-link" href="#contacto">
                  Consultar <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy" id="por-que" aria-labelledby="why-title">
        <div className="container why-layout">
          <div className="why-visual" aria-hidden="true">
            <div className="why-visual__halo" />
            <div className="why-visual__shield">
              <Shield size={74} strokeWidth={1.1} />
              <span className="why-visual__line" />
            </div>
            <span className="why-visual__caption">BunkerLock · puertas y herrería</span>
          </div>
          <div className="why-copy">
            <p className="eyebrow eyebrow--light">Una conversación clara</p>
            <h2 id="why-title">Primero entendemos qué necesitás.</h2>
            <p>
              Cada casa, comercio y proyecto tiene un contexto distinto. Contanos qué
              querés resolver y compartinos los detalles que ya tengas; así podemos
              orientarte sobre el próximo paso.
            </p>
            <a className="button button--light" href="#contacto">
              Contanos tu idea <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="trabajos" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading
            eyebrow="Trabajos realizados"
            title="Una muestra de puertas y accesos."
            description="Fotos reales de distintos trabajos y soluciones para cada espacio."
            id="work-title"
          />
          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card" key={project.number}>
                <div className="work-card__media">
                  <Image
                    className="work-card__image"
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 760px) 46vw, (max-width: 1100px) 30vw, 360px"
                  />
                  <span className="work-card__number">{project.number}</span>
                </div>
                <div className="work-card__caption">
                  <h3>{project.title}</h3>
                  <a
                    className="work-card__link"
                    href="#contacto"
                    aria-label={"Consultar por " + project.title}
                  >
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light process-section" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading
            eyebrow="Cómo empezar"
            title="Un primer paso simple."
            description="Los pasos concretos se confirman según el tipo de trabajo y la zona."
            id="process-title"
          />
          <ol className="process-grid">
            {processSteps.map((step) => (
              <li className="process-card" key={step.number}>
                <span className="process-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--contact" id="contacto" aria-labelledby="contact-title">
        <div className="container contact-panel">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--light">Contacto</p>
            <h2 id="contact-title">Contanos qué necesitás.</h2>
            <p>
              Completá los canales oficiales de contacto para activar WhatsApp y llamada.
              El formulario se incorpora en la siguiente fase.
            </p>
            {whatsappUrl ? (
              <a
                className="button button--light"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Escribinos por WhatsApp <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            ) : (
              <span className="contact-pending">TODO(cliente): falta confirmar WhatsApp y teléfono.</span>
            )}
          </div>
          <div className="contact-mark" aria-hidden="true">
            <CircleHelp size={34} strokeWidth={1.2} />
            <span>¿Qué necesitás resolver?</span>
            <ArrowDown size={18} strokeWidth={1.5} />
          </div>
        </div>
      </section>
    </main>
  );
}