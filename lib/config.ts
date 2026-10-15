function normalizePhone(value: string | undefined): string | undefined {
  const digits = value?.replace(/\D/g, "");
  return digits && digits.length >= 8 ? digits : undefined;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const siteConfig = {
  name: "BunkerLock",
  description:
    "Puertas blindadas y herrería a medida para hogares, comercios y proyectos.",
  siteUrl: siteUrl || undefined,
  whatsappNumber: normalizePhone(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
  phoneNumber: normalizePhone(process.env.NEXT_PUBLIC_PHONE_NUMBER),
} as const;

export function getWhatsAppUrl(message: string): string | undefined {
  if (!siteConfig.whatsappNumber) return undefined;

  return (
    "https://wa.me/" +
    siteConfig.whatsappNumber +
    "?text=" +
    encodeURIComponent(message)
  );
}

export function getPhoneUrl(): string | undefined {
  return siteConfig.phoneNumber ? "tel:+" + siteConfig.phoneNumber : undefined;
}