import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { siteConfig } from "@/lib/config";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const preview = process.env.VERCEL_ENV === "preview";

export const metadata: Metadata = {
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title: {
    default: "BunkerLock | Puertas blindadas y herrería a medida",
    template: "%s | BunkerLock",
  },
  description:
    "Puertas blindadas y herrería a medida para hogares, comercios y proyectos. Contanos qué necesitás.",
  applicationName: "BunkerLock",
  alternates: siteConfig.siteUrl ? { canonical: siteConfig.siteUrl } : undefined,
  robots: preview || process.env.VERCEL_ENV !== "production" || !siteConfig.siteUrl
    ? { index: false, follow: false }
    : undefined,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "BunkerLock",
    title: "BunkerLock | Puertas blindadas y herrería a medida",
    description:
      "Puertas blindadas y herrería a medida para hogares, comercios y proyectos.",
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "BunkerLock | Puertas blindadas y herrería a medida",
    description:
      "Puertas blindadas y herrería a medida para hogares, comercios y proyectos.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05223A",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-AR" className={[inter.variable, manrope.variable].join(" ")}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}