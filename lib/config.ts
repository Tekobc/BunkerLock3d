function normalizePhone(value: string | undefined): string | undefined {
  const digits = value?.replace(/\D/g, "");
  return digits && digits.length >= 8 ? digits : undefined;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
const defaultPhoneNumber = "5491124073143";

export const siteConfig = {
  name: "BunkerLock",
  description:
    "Puertas blindadas y herrería a medida para hogares, comercios y proyectos.",
  siteUrl: siteUrl || undefined,
  whatsappNumber: normalizePhone(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) ?? defaultPhoneNumber,
  phoneNumber: normalizePhone(process.env.NEXT_PUBLIC_PHONE_NUMBER) ?? defaultPhoneNumber,
  phoneDisplay:
    process.env.NEXT_PUBLIC_PHONE_DISPLAY?.trim() || "+54 9 11 2407-3143",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "bunkerlock.puertas@gmail.com",
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

export function getEmailUrl(): string | undefined {
  return siteConfig.email ? "mailto:" + siteConfig.email : undefined;
}