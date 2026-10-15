import Image from "next/image";
import { ArrowDown, ArrowUpRight, CircleHelp, Mail, Phone } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, services } from "@/lib/content";
import { getEmailUrl, getPhoneUrl, getWhatsAppUrl, siteConfig } from "@/lib/config";

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
  const phoneUrl = getPhoneUrl();
  const emailUrl = getEmailUrl();

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
            <svg className="why-visual__scene" viewBox="0 0 440 320" fill="none">
              <defs>
                <radialGradient id="welding-glow">
                  <stop stopColor="#fff8d7" />
                  <stop offset="0.38" stopColor="#f5c76a" stopOpacity="0.95" />
                  <stop offset="1" stopColor="#f5c76a" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="gate-metal" x1="264" y1="80" x2="405" y2="240">
                  <stop stopColor="#9ab5c7" />
                  <stop offset="1" stopColor="#45657d" />
                </linearGradient>
              </defs>

              <path d="M38 254H414" stroke="#49677d" strokeWidth="3" />
              <path d="M70 254v28m300-28v28" stroke="#49677d" strokeWidth="4" />

              <g stroke="url(#gate-metal)" strokeLinecap="round" strokeLinejoin="round">
                <path d="M264 72h138v168H264z" strokeWidth="5" />
                <path d="M298 75v162m35-162v162m35-162v162M267 112h132m-132 42h132m-132 42h132" strokeWidth="3" />
                <path d="M264 240h138" strokeWidth="5" />
              </g>
              <path d="M285 82v146m35-146v146m35-146v146m35-146v146" stroke="#d1e0e9" strokeOpacity="0.22" />

              <path
                d="M118 139c-18 3-30 12-39 29l-23 59 20 8 25-45-8 62h91l-12-67 23 40 19-11-31-58c-8-13-20-21-39-22z"
                fill="#18364d"
                stroke="#91aabd"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path d="m83 173-19 49m98-47 20 42" stroke="#b4c9d7" strokeWidth="8" strokeLinecap="round" />
              <path d="M95 97c0-27 15-43 39-43s39 17 39 42v30l-17 21h-47l-14-21z" fill="#24445c" stroke="#a9c0cf" strokeWidth="3" />
              <path d="M99 91h76v24h-76z" fill="#0a1d2d" stroke="#a9c0cf" strokeWidth="3" />
              <path d="M111 98h48v11h-48z" fill="#9cc8e3" fillOpacity="0.78" />
              <path d="m151 143 10 12" stroke="#a9c0cf" strokeWidth="3" strokeLinecap="round" />

              <path d="m183 188 57 5" stroke="#c7d6df" strokeWidth="10" strokeLinecap="round" />
              <path d="m229 190 35 4-8 10-30-4z" fill="#dce6ec" stroke="#526f84" strokeWidth="2" strokeLinejoin="round" />
              <path d="m254 195 10-1" stroke="#f6d783" strokeWidth="4" strokeLinecap="round" />

              <circle className="welding-scene__arc-glow" cx="264" cy="194" r="30" fill="url(#welding-glow)" />
              <path className="welding-scene__arc" d="m259 187 8 6-5 4 7 5-10 2 2-7-8-3z" fill="#fff8d7" />
              <g className="welding-scene__sparks" stroke="#f6d783" strokeLinecap="round" strokeWidth="2.5">
                <path d="m264 192 13-15m-11 18 20-3m-23 7 13 12m-16-17-12-12m13 16-18 2" />
                <circle cx="281" cy="188" r="2" fill="#fff8d7" stroke="none" />
                <circle cx="246" cy="178" r="1.8" fill="#fff8d7" stroke="none" />
                <circle cx="277" cy="210" r="1.7" fill="#fff8d7" stroke="none" />
              </g>
              <g className="welding-scene__sparks welding-scene__sparks--delayed" stroke="#9cc8ff" strokeLinecap="round" strokeWidth="2">
                <path d="m264 192 4-20m-5 24 16 10m-17-14-16-7" />
                <circle cx="269" cy="172" r="1.6" fill="#d9edff" stroke="none" />
                <circle cx="282" cy="207" r="1.5" fill="#d9edff" stroke="none" />
              </g>
            </svg>
            <span className="why-visual__caption">Herrería a medida · hecho para tu espacio</span>
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
              Escribinos por WhatsApp o email, o llamanos. El formulario de contacto se
              incorpora en la siguiente fase.
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
              <span className="contact-pending">Escribinos por email o llamanos.</span>
            )}
            <div className="contact-details" aria-label="Datos de contacto">
              {phoneUrl ? (
                <a href={phoneUrl}>
                  <Phone aria-hidden="true" size={17} />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              ) : null}
              {emailUrl ? (
                <a href={emailUrl}>
                  <Mail aria-hidden="true" size={17} />
                  <span>{siteConfig.email}</span>
                </a>
              ) : null}
            </div>
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