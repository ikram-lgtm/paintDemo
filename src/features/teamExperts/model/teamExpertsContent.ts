import type {
  ExpertTeamMember,
  TeamExpertsCopy,
} from "@/features/teamExperts/model/teamExpertsTypes";

export const TEAM_EXPERTS_ASSET_BASE = "/team-experts" as const;

const img = (file: string) => `${TEAM_EXPERTS_ASSET_BASE}/images/${file}`;

/** Layout roster with reference portraits (approved visual section). */
export const teamMembers: readonly ExpertTeamMember[] = [
  {
    id: "mark-jackson",
    name: "Mark Jackson",
    role: "Lead Interior Painter & Designer",
    avatarSrc: img("reference-avatar-01.webp"),
    portraitSrc: img("featured-reference.webp"),
  },
  {
    id: "valeria-novikova",
    name: "Valeria Novikova",
    role: "Interior Design Specialist",
    avatarSrc: img("reference-avatar-02.webp"),
    portraitSrc: img("featured-reference.webp"),
  },
  {
    id: "alex-podzemskiy",
    name: "Alex Podzemskiy",
    role: "Exterior Painting Expert",
    avatarSrc: img("reference-avatar-03.webp"),
    portraitSrc: img("featured-reference.webp"),
  },
  {
    id: "helen-reeves",
    name: "Helen Reeves",
    role: "Renovation Consultant",
    avatarSrc: img("reference-avatar-04.webp"),
    portraitSrc: img("featured-reference.webp"),
  },
  {
    id: "jake-nicholson",
    name: "Jake Nicholson",
    role: "Color Consultant",
    avatarSrc: img("reference-avatar-05.webp"),
    portraitSrc: img("featured-reference.webp"),
  },
];

export const teamExpertsCopy: TeamExpertsCopy = {
  eyebrow: "Our Professional Team",
  headingLead: "Meet The",
  headingGoldFirst: "Experts Our",
  headingGoldSecond: "Interior",
  headingTail: "Designers",
  description:
    "Our experienced team of interior painters, designers, and renovation experts work together to bring your vision to life with quality, precision, and care.",
  rosterAriaLabel: "Our team members",
  members: teamMembers,
};

const portraitById: Record<string, { avatar: string; portrait: string }> = {
  "mark-jackson": {
    avatar: img("reference-avatar-01.webp"),
    portrait: img("featured-reference.webp"),
  },
  "valeria-novikova": {
    avatar: img("reference-avatar-02.webp"),
    portrait: img("featured-reference.webp"),
  },
  "alex-podzemskiy": {
    avatar: img("reference-avatar-03.webp"),
    portrait: img("featured-reference.webp"),
  },
  "helen-reeves": {
    avatar: img("reference-avatar-04.webp"),
    portrait: img("featured-reference.webp"),
  },
  "jake-nicholson": {
    avatar: img("reference-avatar-05.webp"),
    portrait: img("featured-reference.webp"),
  },
};

export function buildTeamMembers(
  entries: readonly Readonly<{ id: string; name: string; role: string }>[],
): readonly ExpertTeamMember[] {
  return entries.flatMap((entry) => {
    const assets = portraitById[entry.id];
    if (!assets) return [];
    return [
      {
        id: entry.id,
        name: entry.name,
        role: entry.role,
        avatarSrc: assets.avatar,
        portraitSrc: assets.portrait,
      },
    ];
  });
}
