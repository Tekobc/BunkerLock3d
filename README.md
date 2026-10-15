# BunkerLock

Landing page en Next.js App Router, TypeScript estricto y Tailwind CSS v4. La estructura sigue el archivo context.md.

## Requisitos

- Node.js 20.9 o posterior
- npm 10 o posterior

## Desarrollo local

1. Copiá .env.example como .env.local.
2. Completá los datos reales que tengas; los canales vacíos permanecen desactivados.
3. Instalá dependencias con npm install.
4. Iniciá el servidor con npm run dev.

Comandos disponibles: npm run lint, npm run typecheck, npm run test, npm run build.

## Prueba de la capa 3D

- La capa se importa después de que la página carga y queda ociosa.
- Agregá ?no3d=1 para forzar el poster estático.
- Agregá ?debug3d en desarrollo para identificar el modo de prueba.
- Se conserva el poster con movimiento reducido, Save-Data, hardware de baja capacidad o falta de WebGL.
- El canvas actual está vacío y solo verifica la inicialización diferida de WebGL y los fallbacks; no es una escena ni una especificación de producto.

## Assets y datos pendientes

El logo del cliente está en public/brand/bunkerlock-logo.jpeg y las cinco fotos en public/photos/. La galería usa fotos reales con next/image; el poster SVG sigue como ilustración geométrica provisional del hero y no es una fotografía de un trabajo realizado.

Antes de publicar, confirmar los tipos y características de cada puerta, teléfonos, WhatsApp, email, zona, horarios, garantías, respuestas del FAQ y textos legales. La página deja los canales de contacto sin activar hasta cargar un número real.

## Vercel

Importá el repositorio en Vercel y configurá las variables de .env.example en cada entorno. La indexación y el sitemap se habilitan cuando hay URL pública y entorno de producción. La política de privacidad, formulario de leads, email, anti-spam, escenas finales y analítica pertenecen a fases posteriores.