# context.md — Landing page de BunkerLock (v4 · experiencia 3D)

> Documento de contexto para agentes de código (Codex). Leelo completo antes de escribir código.
> Es la **fuente de verdad** del proyecto: si cambian los requisitos, se actualiza en el mismo commit.
> Los ítems marcados `TODO(cliente)` son datos que el cliente aún no entregó: **no los inventes**; usá el placeholder indicado y dejalo señalado.
> **Novedades v4:** dirección de diseño inmersiva con **three.js** (sección 4.1), paleta real extraída del logo (3.3), inventario de los assets ya entregados (2.1) y reglas de rendimiento/fallbacks para 3D (4.1 y 9).

---

## 0. Norte del proyecto (leer primero)

**Qué es:** una **landing page profesional de una sola página, con experiencia inmersiva en 3D (three.js)**, para **BunkerLock**, fabricante y comerciante de **puertas blindadas** y **herrería en general** (rejas, portones, escaleras, barandas, aberturas metálicas, trabajos a medida).

**Qué NO es:** no hay catálogo, no hay fichas de modelos, no hay e-commerce, no hay precios. Se comunica **la empresa, lo que hace y cómo contactarla**.

**Objetivo:** transmitir *seguridad con confianza* y convertir visitas en **consultas** (WhatsApp y formulario corto).

**Los cinco principios que mandan sobre cualquier decisión:**

1. **Confianza** — se ve sólida, honesta y real (fotos reales, datos reales, sin promesas exageradas).
2. **Claridad** — en menos de 10 segundos se entiende qué hace BunkerLock y cómo contactarla.
3. **Facilidad** — pocos pasos, textos simples, perfecta en celular.
4. **Calidad técnica** — rápida, accesible, segura y lista para producción en **Vercel**.
5. **Impacto con propósito** — el 3D y el movimiento cuentan la historia de la marca (solidez, cierre, protección). **Nunca compiten con la conversión ni con el rendimiento:** si hay conflicto, ganan los principios 1 a 4.

> **Regla de oro del 3D:** el sitio tiene que ser **100 % usable y legible sin 3D** (sin WebGL, sin JS, con `prefers-reduced-motion`, en celulares de gama baja). El 3D es una capa de impacto, no el contenido.

**Conversión (en orden de prioridad):**
1. Click en **WhatsApp**.
2. Envío del **formulario de contacto** (corto).
3. **Llamada** (mobile).

**Mercado e idioma:** Argentina · **es-AR** (voseo moderado).

---

## 1. Público y contexto de uso

Particulares (casas y departamentos), constructoras y arquitectos, comercios y empresas, consorcios y administradores. Muchos llegan desde el **celular**, desde Google o desde un enlace compartido por WhatsApp. Diseñar **mobile-first**, pensando en el alcance del pulgar.

---

## 2. Marca, assets y tono

### 2.1 Assets entregados (inventario actualizado)

El cliente entregó **1 logo y 6 fotos**, disponibles en `public/`. Se revisaron visualmente los siete archivos.

**Logo** — `public/brand/bunkerlock-logo.jpeg`, 1024×1024, JPEG original con fondo blanco opaco. Muestra un escudo azul marino con remaches y filete interior, un símbolo central plateado y el wordmark “BunkerLock”. Para el sitio se generó `public/brand/bunkerlock-logo-transparent.png`, conservando el JPEG original sin cambios; el encabezado y el pie usan un recorte CSS del escudo y el texto del sitio mantiene el nombre legible. No se vectorizó.
- `TODO(cliente)`: pedir SVG vectorial, fondo transparente y versión solo escudo para favicon y escena 3D.
- `TODO(cliente)`: confirmar el significado del símbolo central; no explicarlo ni destacarlo en el copy.

**Fotos** (las descripciones evitan afirmar materiales o características que el cliente todavía no confirmó):

| Recibido | Ruta en el proyecto | Tamaño | Qué se ve |
|---|---|---:|---|
| `foto1.jpeg` | `public/photos/01-puerta-blanca-interior.jpeg` | 2448×3264 | Puerta blanca de paneles, abierta, con escalera y baranda al fondo. |
| `foto2.jpeg` | `public/photos/02-puerta-madera-detalle.jpeg` | 1200×1600 | Puerta de tono madera oscuro con paneles horizontales y tirador vertical. |
| `foto3.jpeg` | `public/photos/03-puerta-blanca-rejas.jpeg` | 1200×1600 | Puerta blanca con laterales de rejas ornamentales. |
| `foto4.jpeg` | `public/photos/04-puerta-madera-laterales.jpeg` | 1200×1600 | Puerta central de tono madera con laterales vidriados y marcos blancos. |
| `foto5.jpeg` | `public/photos/05-puerta-blanca-interior-abierta.jpeg` | 2448×3264 | Puerta blanca de dos paneles, abierta, vista desde el interior. |
| `foto6.jpeg` | `public/photos/foto6.jpeg` | 720×960 | Portón oscuro de paneles horizontales con una puerta peatonal integrada. |

Las seis fotos son verticales 3:4. La galería las presenta con recorte 4:5 mediante `next/image`; los originales pesan entre 66 y 181 KB. Las fotos 03 y 04 muestran vehículos y calle al fondo. No se distinguen patentes en la revisión visual; comprobarlas otra vez en el Preview de Vercel antes de publicar.

**Decisiones de uso:**
1. Las fotos quedan en la galería; el hero mantiene su poster ilustrado con movimiento CSS sutil porque ninguna foto entregada es horizontal. La animación respeta `prefers-reduced-motion`.
2. No se afirma que las puertas sean blindadas, ni se atribuyen materiales, fabricación propia o características de cerradura.
3. El texto alternativo describe únicamente lo visible en cada fotografía.
4. El JPEG original del logo se conserva sin cambios; el sitio usa la versión PNG con fondo transparente. Para un favicon vectorial o una escena 3D se necesita el SVG/escudo que el cliente aún debe entregar.

**Ubicación de assets:**

```text
public/
├─ brand/
│  ├─ bunkerlock-logo.jpeg
│  └─ bunkerlock-logo-transparent.png
├─ photos/
│  ├─ 01-puerta-blanca-interior.jpeg
│  ├─ 02-puerta-madera-detalle.jpeg
│  ├─ 03-puerta-blanca-rejas.jpeg
│  ├─ 04-puerta-madera-laterales.jpeg
│  ├─ 05-puerta-blanca-interior-abierta.jpeg
│  └─ foto6.jpeg
└─ posters/
   └─ door-fallback.svg
```

> **Verificación de Fase 0 (15-10-2026):** el logo y las seis fotos están presentes en `public/`. La galería y las ubicaciones se actualizaron; siguen pendientes la versión vectorial de marca, las confirmaciones de producto y los datos comerciales reales.

### 2.2 Tono y voz
- **Personalidad:** robusta, confiable, cercana, profesional. Industria argentina, trabajo bien hecho.
- **Tono:** claro, firme y amable. Hablamos de vos ("contanos qué necesitás"). Frases cortas, sin jerga innecesaria.
- **Prohibido:** "inviolable", "100% seguro", "indestructible" y toda promesa absoluta. Usar "alta resistencia", "mayor seguridad", "reforzada".
- **Evitar:** estética militar/agresiva o que genere miedo. La seguridad se transmite con **solidez y calma**.
- **«Épico» significa** escala, luz, profundidad y movimiento fluido; **no** significa dramatismo, oscuridad amenazante ni lenguaje bélico. «Amigable» significa esquinas suaves, ritmo calmo, copy cercano y microinteracciones amables.

### 2.3 Microcopy de referencia
| Situación | Texto |
|---|---|
| CTA principal | "Pedir presupuesto" |
| CTA secundario | "Escribinos por WhatsApp" |
| Formulario enviado | "¡Listo! Recibimos tu consulta. Te respondemos a la brevedad." (ajustar al plazo real `TODO(cliente)`) |
| Error de campo | "Revisá tu email: parece que falta algo." |
| Error del servidor | "Algo falló de nuestro lado. Probá de nuevo o escribinos por WhatsApp." |
| 404 | "No encontramos esta página. Volvé al inicio." |

---

## 3. Dirección de diseño (UI/UX actual)

### 3.1 Concepto visual
**"Solidez cinematográfica":** una experiencia **épica pero amable**. Secuencia de bloques **azul marino profundo** (hero, momentos clave, CTA final) que alternan con secciones **claras y aireadas**; metales plateados, luz de borde fría y profundidad real gracias a **three.js**; tipografía grande y segura; fotografía real del cliente como prueba. Todo se mueve con **suavidad** (inercia de scroll, easing largo, reveals escalonados) y nunca con brusquedad.

- **Emoción buscada:** "acá hay algo sólido y bien hecho, y me atienden bien".
- **Metáfora central:** *el cierre* — una puerta que se ve fuerte, una cerradura cuyos pasadores avanzan, un escudo que se asienta. Es la historia visual de la marca.
- **Tema:** base clara + bloques oscuros; modo oscuro soportado (`prefers-color-scheme`), con tokens desde el inicio.

### 3.2 Fundamentos de diseño a aplicar
- **Mobile-first**, layouts fluidos con Grid/Flexbox; **container queries** para componentes autónomos.
- **Tipografía fluida** con `clamp()`; **fuentes variables** autohospedadas (`next/font`), máx. 2 familias.
- **Espaciado en base 4/8 px**, mucho espacio en blanco, ritmo vertical consistente.
- **Un foco por sección y un CTA primario por vista.**
- **Bento grid** para ventajas/servicios (con moderación).
- **Color con tokens semánticos**, contraste **WCAG 2.2 AA** mínimo.
- **Microinteracciones útiles** (150–250 ms); nada decorativo que moleste.
- **Animaciones al scroll sutiles** (CSS scroll-driven o IntersectionObserver), respetando **`prefers-reduced-motion`**.
- **Estados completos** en cada componente: default, hover, focus-visible, active, disabled, loading, error.
- **Targets táctiles ≥ 44×44 px**; foco visible y **no tapado** por el header sticky.
- **Scroll suave entre secciones** con `scroll-margin-top` para compensar el header.
- Íconos de una sola librería (Lucide), trazo uniforme.
- **Fotografía real > ilustración > stock.**

**Movimiento y 3D (ver 4.1):**
- **Smooth scroll** con inercia suave (Lenis), desactivado con `prefers-reduced-motion`. **Prohibido el scroll-jacking:** nunca bloquear ni secuestrar el scroll nativo; los tramos "pinned" son cortos y se pueden saltar.
- **Scroll storytelling:** un progreso 0→1 del scroll gobierna cámara y objetos 3D (GSAP ScrollTrigger), y a la vez los reveals del texto.
- **Detalles de UI con carácter:** reveal de títulos por línea, botones magnéticos (solo con puntero fino), tarjetas con *tilt* sutil, marquee lento de materiales/terminaciones, cursor de contexto **solo** en desktop.
- Contenido primero: nada de loaders largos. Si hace falta uno, ≤ 1,2 s con el escudo del logo; lo ideal es que el contenido aparezca y el 3D entre con *fade*.
- Duraciones: micro 150–250 ms; reveals 500–800 ms; transiciones de cámara 1–1,6 s con easing suave. Sin rebotes exagerados.

### 3.3 Tokens de diseño (Tailwind v4 `@theme` / variables CSS)
Paleta derivada del logo (azul marino + plata/gris). Los valores marcados con ≈ son **estimados**: el agente los confirma contra el SVG y valida contraste AA antes de fijarlos.

```css
/* Marca (del logo) */
--brand-navy-900: #05223A;   /* ≈ azul marino del escudo (muestreado) */
--brand-navy-800: #0A2E4D;
--brand-navy-700: #123D63;
--brand-steel-500: #6B6B6B;  /* ≈ gris de "Lock" */
--brand-silver-300: #C9D1DA;
--brand-silver-100: #EEF1F5;

/* Tema claro */
--color-bg:            #F6F8FB;
--color-surface:       #FFFFFF;
--color-surface-alt:   #E9EEF4;
--color-ink:           #0B1522;
--color-ink-muted:     #4A5668;
--color-border:        #D8DFE8;
--color-dark:          #05223A;   /* bloques oscuros: hero, momentos clave, CTA */
--color-dark-deep:     #031526;   /* fondo de escena 3D */
--color-dark-surface:  #0A2E4D;
--color-cta:           #05223A;   /* botón primario sobre fondo claro (texto blanco) */
--color-cta-on-dark:   #FFFFFF;   /* botón primario sobre fondo oscuro (texto azul marino) */
--color-glow:          #6FB6FF;   /* luz de borde / glow en escenas y detalles sobre oscuro */
--color-warm:          #E0A84B;   /* OPCIONAL: toque cálido puntual (≤ 5 % de la UI) */
--color-whatsapp:      #25D366;   /* solo botón de WhatsApp */
--color-success:       #2F8F63;
--color-danger:        #C23B3B;
--color-focus:         #2563EB;   /* en fondos oscuros usar un anillo claro (#9CC8FF) */

/* Forma y movimiento */
--radius-sm: 8px; --radius-md: 14px; --radius-lg: 22px; --radius-pill: 999px;
--shadow-sm: 0 1px 2px rgb(5 34 58 / .08);
--shadow-md: 0 12px 32px rgb(5 34 58 / .16);
--ease-out: cubic-bezier(.2,.8,.2,1);
--ease-cinema: cubic-bezier(.65,0,.35,1);
--dur-fast: 150ms; --dur-base: 220ms; --dur-slow: 500ms; --dur-scene: 1200ms;
```
En modo oscuro: invertir `bg/surface/ink/border` hacia la familia navy, mantener `glow` y revalidar contraste. `--color-warm` es una **propuesta**: se usa solo si el cliente la aprueba (no está en el logo).

### 3.4 Tipografía
- **Títulos:** el wordmark del logo es una **sans geométrica bold**; usar una que combine (sugeridas: *Sora*, *Manrope* o *Plus Jakarta Sans*), peso 600–700. Evitar condensadas agresivas.
- **Texto:** *Inter* (o similar) variable, 16–18 px, interlineado 1.5–1.65.
- Escala fluida: `h1: clamp(2.25rem, 1.6rem + 3vw, 4rem)` · `h2: clamp(1.75rem, 1.4rem + 1.6vw, 2.75rem)` · `h3: clamp(1.25rem, 1.1rem + .7vw, 1.625rem)`.
- Largo de línea cómodo: 60–75 caracteres.

### 3.5 Componentes (solo los necesarios para la landing)
`Button` (primary / secondary / ghost / whatsapp) · `Container` / `Section` / `SectionHeading` · `Card` · `Badge` · `Header` (sticky, se compacta al scroll) · `MobileNav` (drawer accesible) · `Footer` · `Input/Textarea/Select/Checkbox` + `FormField` · `Accordion` (FAQ) · `Dialog/Lightbox` (galería) · `Toast` · `FloatingWhatsApp` · `MobileActionBar`.

**Experiencia 3D / movimiento:** `SceneCanvas` (canvas único, carga diferida) · `HeroScene` · `LockScene` · `GalleryScene` · `ShieldScene` · `StaticFallback` (poster) · `SmoothScroll` (provider) · `ScrollProgress` · `Reveal` · `TiltCard` · `MagneticButton` · `Marquee`.

Usar primitivas accesibles (**Radix UI / shadcn/ui**) personalizadas con los tokens.

### 3.6 Navegación de una sola página
- **Header sticky:** logo + 4–5 anclas (Servicios · Por qué elegirnos · Trabajos · Contacto) + botón "Pedir presupuesto". Resaltar la sección activa.
- **Mobile:** drawer con enlaces grandes y CTA visible; **barra de acción inferior** (WhatsApp · Llamar · Presupuesto) que no tape contenido ni el botón flotante.
- **Skip link** al contenido principal.

---

## 4. Estructura de la landing (secciones en orden)

Una sola ruta `/`. Cada sección con `id` para anclas, un solo `h1` en todo el documento.

| # | Sección | Objetivo | Contenido |
|---|---|---|---|
| 1 | **Hero** | Captar y explicar en 10 s | Escena 3D a pantalla completa (puerta de paneles, luz de borde, parallax suave) + `h1` con la propuesta de valor (ej.: "Puertas blindadas y herrería a medida, fabricadas para protegerte"), subtítulo de una línea, CTA doble (Pedir presupuesto / WhatsApp). Texto siempre en HTML, nunca dentro del canvas. Fallback: poster estático |
| 2 | **Franja de confianza** | Dar seguridad rápido | 3–4 datos **reales**: trayectoria, fabricación propia, instalación, garantía (`TODO(cliente)`) |
| 3 | **Servicios** (bento) | Mostrar qué hacemos sin catálogo | Puertas blindadas · Herrería (rejas, portones, escaleras, barandas) · Trabajos a medida. Cada tarjeta: título, 1–2 líneas, ícono o foto, enlace "Consultar" que abre el formulario con el interés precargado |
| 4 | **Por qué BunkerLock** | Diferenciarse | Fabricación propia, materiales y terminaciones, atención directa, instalación, post-venta (solo lo que sea cierto) |
| 5 | **Cómo trabajamos** | Bajar la fricción | Consulta → medición → presupuesto → fabricación → instalación → garantía |
| 6 | **Trabajos realizados** | Prueba social visual | Las fotos reales del cliente (5 iniciales, ver 2.1) en galería con tarjetas verticales + *tilt*; opcionalmente carrusel 3D curvo con alternativa HTML. Lightbox accesible. Sin direcciones exactas |
| 7 | **Testimonios** | Credibilidad | Solo si hay reales (`TODO(cliente)`); si no, **omitir la sección** |
| 8 | **Preguntas frecuentes** | Resolver dudas y sumar SEO | 5–7 preguntas en lenguaje simple (medidas, tiempos, instalación, zona, garantía) con respuestas aprobadas por el cliente |
| 9 | **Contacto / CTA final** (bloque oscuro) | Convertir | Formulario corto + WhatsApp + teléfono + dirección y horarios + mapa (carga diferida) |
| 10 | **Footer** | Cierre y legales | Logo, contacto, zona de cobertura, redes, enlaces legales |

**Regla:** si una sección no tiene contenido real suficiente, se omite o se simplifica; no se rellena.

### 4.1 Experiencia 3D (three.js)

#### 4.1.1 Principios
1. **Contenido primero.** `h1`, textos, CTAs y formulario son HTML real. El canvas es decorativo: `aria-hidden="true"`, sin información exclusiva, y no captura eventos sobre los textos.
2. **Un solo canvas persistente** (`position: fixed`, detrás del contenido) cuyas escenas cambian con el scroll. Un único contexto WebGL rinde mejor en móvil y permite transiciones continuas. Si el agente propone otra arquitectura (p. ej. `View` de drei), que lo **justifique**.
3. **Procedural antes que modelos.** Geometría propia (cajas con bisel, extrusiones, cilindros) y materiales PBR (`MeshPhysicalMaterial`: metal, rugosidad, *clearcoat*) con un entorno liviano (HDRI chico o preset). Si hace falta un `.glb`: compresión Draco/meshopt, texturas KTX2/WebP.
4. **Marca real, no clichés.** Prohibidos candados "hacker", código tipo Matrix, motivos cripto y partículas decorativas en exceso.
5. **Sin afirmaciones falsas.** Las escenas muestran conceptos de la marca; no inventan certificaciones, espesores, materiales ni normas.

#### 4.1.2 Escenas propuestas

| Momento | Escena | Movimiento / interacción |
|---|---|---|
| **Hero** | **"La puerta":** puerta de paneles en relieve (inspirada en las fotos 01/02), marco metálico, manija y cilindro de acero inoxidable, sobre fondo navy profundo con niebla suave. Luz de borde `--color-glow` | Entrada con *dolly-in* y *fade*; parallax leve con el puntero (en táctil: deriva lenta automática, sin pedir permisos de giroscopio) |
| **Confianza / Por qué BunkerLock** | **"El cierre":** la cámara se acerca al canto de la puerta y los **pasadores salen uno a uno** de la cerradura, atados al progreso del scroll | Solo si el cliente confirma cerradura multipunto (`TODO(cliente)`; se ve en fotos 01/02). Si no, usar la puerta girando lentamente con detalles de terminación |
| **Servicios** | Sin canvas extra: tarjetas bento con *tilt* CSS, foto/ícono y reveal | Mantener liviano; 3D solo si sobra presupuesto |
| **Trabajos** | **"Pared de trabajos":** las fotos del cliente como planos en un carrusel curvo arrastrable | Click abre el lightbox HTML. **Alternativa obligatoria:** grid HTML con botones prev/next y teclado |
| **CTA final** | **"El escudo":** el escudo del logo extruido (`SVGLoader` + `ExtrudeGeometry`) con acabado acero y remaches, que se asienta y gira lento | Usar solo la silueta del escudo (ver observación del símbolo "B" en 2.1). Brillo suave sincronizado con el botón principal |

#### 4.1.3 Implementación
- **Stack:** `three` + `@react-three/fiber` + `@react-three/drei` (+ `@react-three/postprocessing` opcional). Importes **nombrados** para que el *tree-shaking* funcione.
- **Scroll → 3D:** el progreso de ScrollTrigger actualiza un valor compartido (ref/store liviano) que se lee en `useFrame`; sin re-renders de React por frame.
- **Carga:** `next/dynamic` con `ssr: false`, montado **después del LCP** (`requestIdleCallback` o al primer *idle*) y solo si pasa el *gating* (4.1.4).
- **Render:** `dpr` acotado (`[1, 1.75]` desktop, `[1, 1.5]` móvil) y `PerformanceMonitor` para bajar calidad si cae el FPS; `frameloop="demand"` (o pausa) cuando el canvas no es visible o la pestaña está oculta; sombras de contacto (`ContactShadows`) en lugar de *shadow maps* pesados.
- **Postprocesado:** opcional y solo en desktop (bloom/viñeta muy sutiles). Desactivado en móvil.
- **Limpieza:** `dispose` de geometrías, materiales y texturas al desmontar; sin fugas al navegar o redimensionar.
- **QA:** parámetro `?no3d=1` para forzar el fallback y `?debug3d` (solo en dev) para estadísticas.

#### 4.1.4 Gating y fallbacks (obligatorio)
Se mantiene visible el **poster de fallback** (candidato a LCP); su movimiento CSS suave se desactiva con `prefers-reduced-motion`. El canvas no se carga cuando ocurre cualquiera de estas condiciones:
- Sin WebGL, error de inicialización o `webglcontextlost`.
- `prefers-reduced-motion: reduce` o `Save-Data` activo.
- Dispositivo de gama baja (`deviceMemory` ≤ 2, `hardwareConcurrency` bajo o GPU tier 0–1 si se usa `detect-gpu`) o FPS sostenido bajo en los primeros segundos.
- JS deshabilitado: el contenido completo sigue legible y el poster visible.

#### 4.1.5 Presupuestos (objetivos a verificar con medición real)
- Chunk 3D **separado** del bundle inicial; objetivo ≤ ~250 KB gzip (verificar con bundle analyzer).
- Assets 3D propios ≤ ~1 MB en total (sin contar fotos de galería); texturas de fotos ≤ 1024 px.
- Escena móvil: pocos draw calls y geometría liviana; objetivo **60 fps en gama media**, mínimo estable 30 fps o activar fallback.
- Probar en **dispositivos reales** (un Android de gama media y un iPhone), no solo en emulación.

#### 4.1.6 Qué NO hacer
- No bloquear el scroll nativo ni secuestrar la rueda/gestos.
- No poner texto, botones o formulario dentro del canvas.
- No cargar el 3D antes del contenido ni subir la nota de LCP por su culpa.
- No autoplay de audio. No cursor personalizado en táctil.
- No usar movimiento brusco, parpadeos ni más de ~3 grandes transiciones simultáneas.
- No sumar escenas "porque quedan lindas": cada una debe sostener un mensaje de la marca.

---

## 5. Formulario de contacto

Corto y amable (la landing no necesita un wizard).

- **Campos:** nombre · teléfono (o WhatsApp) · email (opcional si hay teléfono) · "¿Qué necesitás?" (puerta blindada / herrería / a medida / otro) · mensaje (opcional) · casilla de consentimiento de privacidad.
- Si el usuario llega desde una tarjeta de servicio, **precargar el interés**.
- **Zod en cliente y servidor**; límites de longitud en todos los campos; **honeypot** + **rate limiting** por IP.
- Estados: cargando, éxito, error (con alternativa por WhatsApp).
- Accesibilidad: labels reales, errores en `aria-live`, teclado completo, foco gestionado.
- Enviar email al equipo comercial (Resend). Escapar y sanitizar el contenido del email.
- Evento de analítica `generate_lead` al enviar con éxito.

```ts
type ContactRequest = {
  name: string;
  phone: string;
  email?: string;
  interest: "puerta-blindada" | "herreria" | "a-medida" | "otro";
  message?: string;
  consent: boolean;
  honeypot?: string; // debe llegar vacío
};
```

## 6. WhatsApp
- Botón flotante + barra inferior mobile; no tapa contenido crítico.
- Enlace `https://wa.me/<NUMERO>?text=<mensaje-codificado>`; WhatsApp configurado: `+54 9 11 2407-3143` (`NEXT_PUBLIC_WHATSAPP_NUMBER`).
- **Mensaje prellenado contextual** (ej. desde Servicios: "Hola, quiero consultar por puertas blindadas").
- Evento `click_whatsapp` con la sección de origen.

---

## 7. Stack técnico

| Capa | Elección | Motivo |
|---|---|---|
| Framework | **Next.js (App Router, última estable) + TypeScript estricto** | SEO, rendimiento, integración nativa con Vercel |
| Estilos | **Tailwind CSS v4** (tokens en `@theme`) | Consistencia y velocidad |
| Componentes | **Radix UI / shadcn/ui** + propios | Accesibilidad de base |
| Íconos | **Lucide** | Consistencia |
| 3D | **three** + **@react-three/fiber** + **@react-three/drei** (+ postprocessing opcional) | Escenas declarativas en React, ecosistema maduro. Verificar compatibilidad de versiones con la versión de React/Next vigente |
| Scroll y animación | **Lenis** (smooth scroll) + **GSAP / ScrollTrigger** (storytelling) + **CSS**; `motion` solo para transiciones de UI | Scroll fluido y sincronización scroll↔3D. Confirmar condiciones de licencia vigentes de GSAP |
| Formulario | **React Hook Form + Zod** | Validación tipada cliente/servidor |
| Contenido | Archivo tipado (`lib/content.ts`) | Una landing no necesita CMS ni MDX |
| Email | **Resend** (Route Handler / Server Action) | Notificación de leads |
| Anti-spam | Honeypot + rate limit (+ Turnstile/BotID opcional) | Sin fastidiar al usuario |
| Analítica | **Vercel Web Analytics + Speed Insights** (+ GA4 opcional) | Medir conversiones |
| Calidad | ESLint, Prettier, `tsc`, Vitest, Playwright, axe | Mantenibilidad |

Principios: **Server Components por defecto**, `"use client"` solo donde haya interactividad (header activo, formulario, lightbox, nav mobile); no sumar dependencias que la plataforma ya resuelve; las dependencias de 3D y scroll quedan **justificadas por el pedido de diseño**; cualquier otra o cualquier cambio de stack, **avisar y justificar**.

### Estructura de carpetas
```
/
├─ app/
│  ├─ page.tsx                   # la landing
│  ├─ layout.tsx
│  ├─ api/contact/route.ts       # endpoint del formulario (o Server Action)
│  ├─ politica-de-privacidad/page.tsx
│  ├─ opengraph-image.tsx        # OG dinámico (next/og) usando el logo
│  ├─ sitemap.ts
│  ├─ robots.ts
│  └─ not-found.tsx
├─ components/
│  ├─ ui/                        # primitivas
│  ├─ sections/                  # Hero, Trust, Services, Why, Process, Gallery, Faq, Contact
│  └─ three/                     # SceneCanvas, HeroScene, LockScene, GalleryScene, ShieldScene, StaticFallback
├─ hooks/                        # useScrollProgress, useReducedMotion3D, useGpuGate
├─ lib/
│  ├─ config.ts                  # contacto, redes, horarios (única fuente de verdad)
│  ├─ content.ts                 # textos de la landing, FAQ, servicios
│  ├─ schemas.ts                 # zod
│  └─ seo.ts
├─ public/
│  ├─ brand/
│  ├─ photos/
│  ├─ 3d/
│  └─ posters/
├─ styles/globals.css            # tokens @theme
└─ tests/
```

---

## 8. SEO

- Una sola página indexable + política de privacidad. Metadata completa (title ≤ 60, description ≤ 155), Open Graph y Twitter Cards con **imagen OG** generada con `next/og`.
- **JSON-LD:** `LocalBusiness`/`Organization` (con NAP real) y `FAQPage`.
- `sitemap.ts` y `robots.ts`; en **preview: `noindex`**.
- `h1` único con la palabra clave principal natural; jerarquía de encabezados correcta.
- Palabras clave a validar con el cliente: *puertas blindadas, puertas de seguridad, herrería a medida, rejas, portones, escaleras metálicas, barandas, fabricante de puertas blindadas* + zona `TODO(cliente)`.
- SEO local: nombre, dirección y teléfono consistentes en todo el sitio; preparar Google Business Profile.
- Favicon e íconos generados desde el logo (`favicon-source.png`), incluyendo `apple-touch-icon` y `manifest`.

## 9. Rendimiento y accesibilidad

**Lighthouse mobile:** Performance ≥ 90 **con 3D activo** y ≥ 95 con el fallback · Accessibility ≥ 95 · Best Practices ≥ 95 · SEO ≥ 95. Si el 3D empuja la nota por debajo, se optimiza o se degrada el 3D; **no** se relajan accesibilidad ni LCP.
**Core Web Vitals:** LCP < 2.5 s · CLS < 0.1 · INP < 200 ms.

- **3D sin costo de carga inicial:** el LCP lo resuelve el `h1` y/o el poster (con `priority`), nunca el canvas; el chunk 3D se carga después. Medir **INP** con el 3D corriendo (hilo principal libre).
- `next/image` con `sizes` correctos y dimensiones declaradas; **`priority` solo en la imagen del hero**; resto diferido.
- Si el hero lleva video: corto, silenciado, comprimido, con `poster`, sin autoplay bajo `prefers-reduced-motion`.
- `next/font` con `display: swap` y subconjuntos; scripts de terceros con `next/script` y estrategia diferida; mapa cargado de forma diferida.
- **WCAG 2.2 AA:** HTML semántico, teclado completo, foco visible, skip link, contraste AA, `alt` útiles, labels reales, `prefers-reduced-motion` y `prefers-color-scheme` respetados. Probar con **axe** y con un lector de pantalla en el flujo del formulario.

---

## 10. Despliegue en Vercel

### 10.1 Flujo
1. Repo en GitHub (`main` = producción). Cada PR genera un **Preview Deployment** para revisar con el cliente.
2. Importar el repo en Vercel (Next.js se detecta automáticamente).
3. Cargar **variables de entorno** por entorno (Production / Preview / Development).
4. Conectar el dominio propio (si es `.com.ar`, configurar los registros DNS que indique Vercel desde NIC Argentina o el proveedor de DNS). HTTPS automático. Definir redirección `www` ↔ raíz.
5. Activar **Web Analytics** y **Speed Insights**.
6. Verificar el dominio en Resend (SPF/DKIM) y probar que los leads llegan en producción.

### 10.2 Configuración recomendada
- Página estática (SSG); solo el endpoint del formulario es dinámico.
- **Región de la función** del formulario cercana a Argentina (p. ej. `gru1`, São Paulo); verificar disponibilidad en el plan.
- **Rate limiting:** reglas del firewall de Vercel y/o store externo (p. ej. Upstash Redis vía Vercel Marketplace). Verificar la opción vigente al implementarlo.
- Cabeceras de seguridad en `next.config` (CSP razonable, `X-Content-Type-Options`, `Referrer-Policy`, `frame-ancestors`).
- Previews con `noindex` y sin analítica de producción.

### 10.3 Variables de entorno
```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_GA_ID=            # opcional
RESEND_API_KEY=
LEADS_TO_EMAIL=
LEADS_FROM_EMAIL=
TURNSTILE_SECRET_KEY=         # opcional
UPSTASH_REDIS_REST_URL=       # opcional (rate limit)
UPSTASH_REDIS_REST_TOKEN=     # opcional
```
Mantener `.env.example` actualizado; `.env.local` en `.gitignore`. **Nunca** hardcodear secretos.

### 10.4 Nota de plan
El plan **Hobby** de Vercel está pensado para uso personal/no comercial; un sitio de empresa debería ir en un plan acorde (Pro). Confirmar condiciones vigentes antes del lanzamiento.

### 10.5 Checklist de lanzamiento
- [ ] Build de producción sin errores
- [ ] Variables cargadas en Production
- [ ] Formulario probado de punta a punta (email recibido, errores, anti-spam)
- [ ] WhatsApp y teléfono verificados desde un celular real
- [ ] Lighthouse y axe revisados
- [ ] Metadata, OG, favicon, sitemap, robots y JSON-LD verificados
- [ ] Dominio, HTTPS y redirecciones configurados
- [ ] Analítica y Speed Insights activos
- [ ] Política de privacidad y aviso de cookies publicados
- [ ] Sitio enviado a Google Search Console

---

## 11. Seguridad y privacidad

- Toda entrada de usuario es no confiable: validar, sanitizar y escapar (también en el email de leads).
- Rate limiting + honeypot; no exponer detalles de errores internos.
- **Coherencia con el rubro:** no publicar direcciones exactas de clientes ni detalles que debiliten la seguridad de instalaciones reales.
- Política de privacidad conforme a la **Ley 25.326** (Argentina); aviso de cookies si hay analítica o píxeles; consentimiento en el formulario. Textos legales validados por el cliente/asesor legal (`TODO(cliente)`).
- Mantener dependencias al día y revisar `npm audit` antes de lanzar.

---

## 12. Convenciones de código

- **TypeScript estricto**; prohibido `any` sin justificación comentada.
- Componentes `PascalCase`, hooks `useCamelCase`, utilidades en `kebab-case`.
- Una responsabilidad por componente; abstraer a la tercera repetición.
- Comentarios que expliquen el **por qué**, no el qué.
- Manejo explícito de errores; nada de `catch` vacíos.
- Estilos solo con **tokens**; cero colores/tamaños mágicos en JSX.
- Textos en `lib/content.ts`, no dispersos en JSX.
- **Conventional Commits**, commits pequeños y atómicos.
- No refactorizar código ajeno al pedido "de paso".
- Scripts: `npm run dev | build | start | lint | typecheck | test | test:e2e`.

---

## 13. Pendientes del cliente

- [ ] Logo en **SVG** con fondo transparente, versión **solo escudo** y versión para fondo oscuro
- [ ] Confirmar si el símbolo **"B" tipo Bitcoin** del logo es intencional y qué representa
- [ ] Tipo de cada puerta de las fotos (blindada / seguridad / placa), material y si es **fabricación propia**; confirmar si usan **cerradura multipunto**
- [ ] Confirmar si las fotos 04 y 05 son el mismo frente (cara exterior e interior)
- [ ] Originales sin compresión de las fotos 03, 04 y 05
- [ ] Todas las fotos disponibles, en la mejor calidad posible, con permiso de uso
- [x] Teléfono, WhatsApp y email: `+54 9 11 2407-3143` · `bunkerlock.puertas@gmail.com`
- [ ] Dirección, horarios y redes sociales
- [ ] Zona de cobertura / ciudades donde instalan
- [ ] Datos reales de confianza: años de trayectoria, garantía, plazos, fabricación propia
- [ ] Respuestas reales para el FAQ
- [ ] Testimonios (opcional, con permiso)
- [ ] Textos legales
- [ ] Dominio y acceso a GitHub/Vercel

**Fotos que conviene pedir** (ya hay 5, ver 2.1; en orden de utilidad): 1) una **foto horizontal** bien iluminada de una puerta terminada (mejora el fallback y la imagen OG), 2) **detalle de la cerradura y los pasadores** (inspira la escena "El cierre"), 3) taller o proceso de fabricación, 4) el equipo trabajando, 5) trabajos **terminados y limpios** (sin obra ni herramientas), 6) fachada o showroom. Opcional: un **video corto** (5–10 s) de una puerta cerrando.

---

## 14. Forma de trabajo esperada del agente

1. **Antes de codear:** leer este archivo, revisar el repo y los assets en `public/`, y proponer un plan breve.
2. **Ambigüedad importante → preguntar.** Si es menor, elegir el default razonable y **declarar la suposición**.
3. **Avanzar por fases** (sección 15), sin adelantar funcionalidades.
4. **Verificar de verdad:** correr `lint`, `typecheck`, `build` y tests; revisar en mobile. No decir "debería funcionar" si se puede comprobar.
5. **Cada entrega incluye:** qué se hizo, **decisión de diseño y trade-off principal**, alternativas descartadas, limitaciones conocidas y pendientes.
6. **No agregar dependencias** sin justificarlo.
7. **No inventar contenido de marca** (datos técnicos, certificaciones, testimonios, cifras).
8. **No construir catálogo, modelos ni precios.** Si hace falta algo así, consultarlo antes.

---

## 15. Plan por fases

**Fase 0 — Fundaciones:** proyecto Next.js + TS + Tailwind v4 (+ **spike técnico de 3D**: canvas vacío cargado de forma diferida, gating, poster y medición base de rendimiento), inventario de assets, paleta desde el logo, tokens (claro/oscuro), tipografías, ESLint/Prettier, `lib/config.ts`, `.env.example`, componentes base, layout (header sticky, nav mobile, footer, barra de acción), repo conectado a Vercel con previews.

**Fase 1 — Landing completa (sin 3D):** Hero con **poster de fallback ilustrado**, confianza, servicios, por qué elegirnos, proceso, galería con lightbox, FAQ, contacto, botón flotante de WhatsApp. La página debe quedar **completa y presentable sin 3D**.

**Fase 1.5 — Experiencia 3D:** smooth scroll, scroll storytelling y escenas de 4.1 **de a una** (primero Hero, luego Cierre, Trabajos y Escudo), cada una con su fallback y medición de FPS/Lighthouse antes de pasar a la siguiente.

**Fase 2 — Conversión:** formulario con validación, anti-spam, email y eventos de analítica.

**Fase 3 — SEO y legal:** metadata, OG dinámico, JSON-LD, favicon/íconos, sitemap/robots, política de privacidad, aviso de cookies.

**Fase 4 — Pulido y lanzamiento:** auditoría Lighthouse/axe, pruebas E2E del formulario, revisión de contenido con el cliente, dominio y checklist 10.5.

**Futuro (fuera de alcance ahora):** catálogo, blog, CMS, cotizador, subida de fotos en el formulario.

---

## 16. Definición de "terminado" (por tarea)

- [ ] Cumple lo pedido y las convenciones de este documento
- [ ] `lint`, `typecheck` y `build` pasan
- [ ] Probado en móvil, tablet y desktop; modo claro y oscuro
- [ ] Accesible por teclado, foco visible, contraste AA
- [ ] Si toca 3D: fallback verificado (`?no3d=1`, sin WebGL, `prefers-reduced-motion`), FPS medido en dispositivo real y sin fugas de memoria
- [ ] Usa tokens y componentes base
- [ ] Sin secretos ni datos inventados
- [ ] Casos límite contemplados (vacíos, muy largos, caracteres especiales, bots, sin JS)
- [ ] Preview de Vercel revisado
- [ ] Explicación breve de decisiones, trade-offs y pendientes

---

## 17. Primer prompt sugerido para Codex

> Leé `context.md` completo. El logo está en `public/brand/` y las fotos en `public/photos/` (inventario inicial en 2.1: contrastalo con lo que ves y corregilo si no coincide). Ejecutá la **Fase 0**: inventariá los assets, confirmá la paleta azul marino/plata contra el logo y proponé los tokens; inicializá Next.js (App Router) con TypeScript estricto y Tailwind v4; configurá `next/font`; creá los componentes base y el layout global (header sticky con anclas, nav mobile, footer, barra de acción mobile). Incluí el **spike de 3D** (canvas único cargado de forma diferida con `next/dynamic`, gating y fallback con poster, `?no3d=1`) sin construir todavía las escenas finales. Dejá `.env.example`, scripts de lint/typecheck/test y un README breve con cómo correr y desplegar en Vercel. Antes de empezar mostrame tu plan en pocas líneas, decime cómo resolverías el hero (3D + fallback), qué riesgos de rendimiento ves y cualquier duda sobre el logo o las fotos; al terminar, resumí decisiones, trade-offs y pendientes.

---

## 18. Norte final

- **Prioridad absoluta:** que cualquier visitante pueda pedir presupuesto o escribir por WhatsApp en **menos de 10 segundos**.
- **El 3D suma asombro, nunca fricción.** Si hay que elegir entre una escena espectacular y una página rápida y clara, gana la página rápida y clara.
- Ante la duda entre más cosas o más claridad: **claridad, velocidad y amabilidad**.
- Si falta un dato del cliente o algo no se puede verificar, **decirlo explícitamente** en lugar de suponerlo.
