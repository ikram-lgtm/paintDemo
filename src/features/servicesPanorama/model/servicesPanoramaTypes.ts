export type ServicePillarId =
  | "interior"
  | "exterior"
  | "placo"
  | "plastering"
  | "taping"
  | "renovation";

export type ServicePillar = Readonly<{
  id: ServicePillarId;
  label: string;
  icon: string;
}>;

export type ServicesPanoramaCopy = Readonly<{
  eyebrow: string;
  headingLead: string;
  headingGoldFirst: string;
  headingGoldSecond: string;
  stripAriaLabel: string;
  panoramaAlt: string;
  panoramaCaption: string;
}>;
