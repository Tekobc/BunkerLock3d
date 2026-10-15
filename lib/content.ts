export const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué elegirnos", href: "#por-que" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const services = [
  {
    number: "01",
    title: "Puertas blindadas",
    description:
      "Soluciones de acceso para casas, departamentos, comercios y proyectos.",
    interest: "puerta-blindada",
  },
  {
    number: "02",
    title: "Herrería",
    description:
      "Rejas, portones, escaleras, barandas y aberturas metálicas.",
    interest: "herreria",
  },
  {
    number: "03",
    title: "Trabajos a medida",
    description:
      "Contanos qué necesitás y evaluamos juntos el próximo paso.",
    interest: "a-medida",
  },
] as const;

export const projects = [
  {
    number: "01",
    title: "Puerta blanca en interior",
    image: "/photos/01-puerta-blanca-interior.jpeg",
    alt: "Puerta blanca abierta, con escalera y baranda al fondo.",
  },
  {
    number: "02",
    title: "Frente oscuro con paneles",
    image: "/photos/02-puerta-madera-detalle.jpeg",
    alt: "Puerta de tono madera oscuro con paneles horizontales y tirador vertical.",
  },
  {
    number: "03",
    title: "Acceso con rejas laterales",
    image: "/photos/03-puerta-blanca-rejas.jpeg",
    alt: "Puerta blanca con paneles horizontales, flanqueada por laterales con rejas ornamentales.",
  },
  {
    number: "04",
    title: "Puerta con laterales vidriados",
    image: "/photos/04-puerta-madera-laterales.jpeg",
    alt: "Puerta central de tono madera, acompañada por laterales vidriados con marcos blancos.",
  },
  {
    number: "05",
    title: "Puerta blanca de dos paneles",
    image: "/photos/05-puerta-blanca-interior-abierta.jpeg",
    alt: "Puerta blanca abierta de dos paneles, vista desde el interior.",
  },
] as const;