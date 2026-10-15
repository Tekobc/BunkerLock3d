import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found" id="contenido">
      <div className="container">
        <p className="eyebrow eyebrow--light">404 · BunkerLock</p>
        <h1>No encontramos esta página.</h1>
        <p>Volvé al inicio y contanos qué necesitás.</p>
        <Link className="button button--light" href="/">
          <ArrowLeft aria-hidden="true" size={18} /> Volver al inicio
        </Link>
      </div>
    </main>
  );
}
