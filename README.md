# BunkerLock

Landing page en Next.js App Router, TypeScript estricto y Tailwind CSS v4. La estructura sigue el archivo context.md.

## Requisitos

- Node.js 20.9 o posterior
- npm 10 o posterior

## Desarrollo local

1. Copiá .env.example como .env.local.
2. WhatsApp, teléfono y email ya están configurados con los datos de contacto provistos. Ajustalos en `.env.local` si hace falta.
3. Instalá dependencias con npm install.
4. Iniciá el servidor con npm run dev.

Comandos disponibles: npm run lint, npm run typecheck, npm run test, npm run build.

## Prueba de la capa 3D

- La capa se importa después de que la página carga y queda ociosa.
- Agregá ?no3d=1 para forzar el poster ilustrado sin WebGL.
- Agregá ?debug3d en desarrollo para identificar el modo de prueba.
- El poster se conserva sin WebGL; su animación CSS se desactiva con movimiento reducido.
- El hero tiene una animación CSS sutil e independiente de WebGL; Save-Data y hardware de baja capacidad evitan cargar el canvas.
- El canvas actual está vacío y solo verifica la inicialización diferida de WebGL y los fallbacks; no es una escena ni una especificación de producto.

## Assets y datos pendientes

El logo JPEG original está en public/brand/bunkerlock-logo.jpeg; el encabezado y el pie usan su versión PNG transparente en public/brand/bunkerlock-logo-transparent.png. Las seis fotos están en public/photos/, incluida foto6.jpeg (un portón). La galería usa fotos reales con next/image; el poster SVG sigue como ilustración geométrica provisional del hero y no es una fotografía de un trabajo realizado.

Antes de publicar, confirmar los tipos y características de cada puerta, la vigencia de los datos de contacto, zona, horarios, garantías, respuestas del FAQ y textos legales. El formulario todavía no está implementado.

## Vercel

Importá el repositorio en Vercel y configurá las variables de .env.example en cada entorno. La indexación y el sitemap se habilitan cuando hay URL pública y entorno de producción. La política de privacidad, formulario de leads, email, anti-spam, escenas finales y analítica pertenecen a fases posteriores.