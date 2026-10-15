import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { getPhoneUrl, getWhatsAppUrl } from "@/lib/config";

export function SiteFooter() {
  const whatsappUrl = getWhatsAppUrl("Hola, quiero hacer una consulta a BunkerLock");
  const phoneUrl = getPhoneUrl();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a className="wordmark wordmark--footer" href="/" aria-label="BunkerLock, inicio">
              <span className="wordmark__mark" aria-hidden="true" />
              <span className="wordmark__text">
                Bunker<span>Lock</span>
              </span>
            </a>
            <p>Puertas blindadas y herrería para proyectos reales.</p>
          </div>
          <div className="site-footer__links">
            <p className="site-footer__label">Explorá</p>
            <a href="#servicios">Servicios</a>
            <a href="#trabajos">Trabajos</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="site-footer__contact">
            <p className="site-footer__label">Contacto</p>
            {whatsappUrl ? (
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" size={16} /> WhatsApp
              </a>
            ) : null}
            {phoneUrl ? (
              <a href={phoneUrl}>
                <Phone aria-hidden="true" size={15} /> Llamar
              </a>
            ) : null}
            {!whatsappUrl && !phoneUrl ? (
              <p className="site-footer__pending">
                Datos oficiales pendientes de confirmación.
              </p>
            ) : null}
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} BunkerLock</span>
          <span>Seguridad con confianza.</span>
          <a href="#contenido">
            Volver arriba <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}