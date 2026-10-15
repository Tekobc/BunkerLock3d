import { MessageCircle, Phone, Send } from "lucide-react";
import { getPhoneUrl, getWhatsAppUrl } from "@/lib/config";

export function MobileActionBar() {
  const whatsappUrl = getWhatsAppUrl("Hola, quiero hacer una consulta a BunkerLock");
  const phoneUrl = getPhoneUrl();

  return (
    <nav className="mobile-action-bar" aria-label="Acciones de contacto">
      {whatsappUrl ? (
        <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
          <MessageCircle aria-hidden="true" size={19} />
          <span>WhatsApp</span>
        </a>
      ) : null}
      {phoneUrl ? (
        <a href={phoneUrl} aria-label="Llamar a BunkerLock">
          <Phone aria-hidden="true" size={18} />
          <span>Llamar</span>
        </a>
      ) : null}
      <a className="mobile-action-bar__primary" href="#contacto">
        <Send aria-hidden="true" size={17} />
        <span>Presupuesto</span>
      </a>
    </nav>
  );
}