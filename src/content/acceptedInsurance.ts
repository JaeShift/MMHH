export type AcceptedInsuranceCarrier = {
  id: string;
  name: string;
  logoSrc: string;
  alt: string;
};

/** Single source of truth for in-network / accepted plan branding shown on the site. */
export const acceptedInsuranceCarriers: AcceptedInsuranceCarrier[] = [
  {
    id: "cigna",
    name: "Cigna - Evernorth",
    logoSrc: "/cigna.png",
    alt: "Cigna Evernorth",
  },
  {
    id: "uhc",
    name: "United Healthcare / Optum",
    logoSrc: "/united-healthcare.png",
    alt: "United Healthcare",
  },
  {
    id: "medical-mutual",
    name: "Medical Mutual - Supermed",
    logoSrc: "/MedicalMutual.webp",
    alt: "Medical Mutual Supermed",
  },
  {
    id: "anthem",
    name: "Anthem",
    logoSrc: "/Anthem.png",
    alt: "Anthem",
  },
  {
    id: "aetna",
    name: "Aetna",
    logoSrc: "/aetna.png",
    alt: "Aetna",
  },
  {
    id: "carelon",
    name: "Carelon",
    logoSrc: "/Carelon.png",
    alt: "Carelon",
  },
  {
    id: "multiplan",
    name: "MultiPlan",
    logoSrc: "/Multiplan.png",
    alt: "MultiPlan",
  },
  {
    id: "optum",
    name: "Optum",
    logoSrc: "/Optum-logo.png",
    alt: "Optum",
  },
  {
    id: "umr",
    name: "UMR",
    logoSrc: "/UMR.png",
    alt: "UMR",
  },
];

/** Readable list for body copy and FAQ answers, e.g. "A, B, and C". */
export function acceptedInsuranceNamesSentence(): string {
  const names = acceptedInsuranceCarriers.map((c) => c.name);
  if (names.length === 0) return "";
  if (names.length === 1) return names[0]!;
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

/** Comma-separated list for meta descriptions (keep under ~160 chars when used with a prefix). */
export function acceptedInsuranceNamesCommaList(): string {
  return acceptedInsuranceCarriers.map((c) => c.name).join(", ");
}
