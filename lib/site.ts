/**
 * Single source of truth for identity + about content.
 * All copy is transcribed verbatim from the portfolio PDF.
 */
import { IDENTITY_IMAGES } from "@/lib/project-images";

export const SITE = {
  name: "Moiez Hayee",
  wordmark: "moiez hayee",
  title: "Architectural Drafting & Visualization",
  subtitle: "Architectural Drafting | 3D Modeling | Architectural Visualization",
  portfolioYear: "2026",
  tagline:
    "Supporting architects and developers with production drawings, SketchUp modeling, and photorealistic visualizations. Full permit-ready construction document sets, not just renders.",
  availability: "Available worldwide · Remote collaboration",
  bio: [
    "Architect specializing in architectural drafting, SketchUp modeling, and visualization. Experienced in residential, commercial, and interior projects with a focus on documentation, detailing, and presentation.",
    "Supporting architects, interior designers, and developers through drafting, modeling, and visualization services.",
  ],
  email: "moiezarch@gmail.com",
  phone: "+92 335 6158073",
  phoneHref: "+923356158073",
  linkedin: "https://www.linkedin.com/in/moiez-hayee-74bb82144",
  linkedinLabel: "linkedin.com/in/moiez-hayee",
  images: IDENTITY_IMAGES,
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
] as const;

// Headline figures (p2 "Experience").
export const STATS: readonly { value: string; label: string }[] = [
  { value: "5+", label: "Years of experience" },
  { value: "80+", label: "Completed Projects" },
  { value: "100%", label: "Job Success Rate" },
] as const;

// Remaining "Experience" items — working style.
export const WORKFLOW: readonly string[] = [
  "Remote Collaboration Experience",
  "Fast Turnaround",
  "Loom Video Recording",
  "Zoom Collaborations",
] as const;

export const SOFTWARE: readonly string[] = [
  "AutoCAD",
  "SketchUp",
  "Lumion",
  "Photoshop",
] as const;

export const PROJECT_TYPES: readonly string[] = [
  "Residential",
  "Commercial",
  "Interior Design",
  "Landscape",
  "Hospitality",
  "Retail",
] as const;

export const SERVICES: readonly string[] = [
  "Architectural Drafting",
  "Construction Documentation",
  "Interior Drafting",
  "SketchUp Modeling",
  "Lumion Rendering",
  "Architectural Visualization",
] as const;
