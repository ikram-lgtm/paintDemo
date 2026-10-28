/** Provide only verified team records with photo permission. */
export type ExpertTeamMember = Readonly<{
  id: string;
  name: string;
  role: string;
  avatarSrc: string;
  portraitSrc: string;
}>;

export type TeamExpertsCopy = Readonly<{
  eyebrow: string;
  headingLead: string;
  headingGoldFirst: string;
  headingGoldSecond: string;
  headingTail: string;
  description: string;
  rosterAriaLabel: string;
  members: readonly ExpertTeamMember[];
}>;
