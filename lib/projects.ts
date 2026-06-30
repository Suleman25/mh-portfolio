/**
 * The 14 projects. All text (descriptions, roles, deliverables, highlights,
 * materials, scope) is transcribed verbatim from the portfolio PDF.
 * Images + captions come from the auto-generated manifest in project-images.ts.
 */
import {
  PROJECT_IMAGES,
  type GalleryImage,
  type ProjectImages,
} from "@/lib/project-images";

export type ProcessStep = { title: string; body: string };

export type BentoSpan = "sm" | "wide" | "tall" | "lg";

type ProjectContent = {
  number: string;
  title: string;
  slug: string;
  category: string;
  span: BentoSpan;
  coverFit: "cover" | "contain";
  description: string;
  role?: readonly string[];
  deliverables?: readonly string[];
  highlights?: readonly string[];
  process?: readonly ProcessStep[];
  materials?: readonly string[];
  scope?: readonly string[];
  note?: string;
  location?: string;
};

export type Project = ProjectContent & ProjectImages;

const PROCESS_STANDARD: readonly ProcessStep[] = [
  {
    title: "Residential Design",
    body: "Thoughtful layouts and timeless architectural expressions.",
  },
  {
    title: "Technical Drawings",
    body: "Accurate plans and elevations for construction documentation.",
  },
  {
    title: "3D Modeling",
    body: "Clean, organized SketchUp models for efficient design development.",
  },
  {
    title: "Photorealistic Visualization",
    body: "High quality renders that communicate design intent with clarity.",
  },
];

const CONTENT: readonly ProjectContent[] = [
  {
    number: "01",
    title: "Kitchen Project",
    slug: "kitchen-project",
    category: "Interior · Documentation",
    span: "wide",
    coverFit: "cover",
    description:
      "Developed a complete kitchen documentation and visualization package from architect-provided drawings and design references. Produced coordinated floor plans, elevations, electrical layouts, 3D modeling, material selections, and photorealistic renderings to support design development and client presentation.",
    role: [
      "Interior Modeling",
      "Interior Rendering",
      "Following Material Palette",
      "2D Floor Plan",
      "2D Elevations",
      "Dimensional Plan",
      "Electrical Plan",
    ],
    deliverables: [
      "Kitchen & Laundry Dimensional Plan",
      "Kitchen Layout Plan",
      "Kitchen Electrical Plan",
      "Kitchen Elevations",
      "Laundry Elevations",
    ],
    materials: [
      "Shaker Cabinets — Soft Neutral",
      "Quartz Countertop",
      "Hexagon Backsplash",
      "Warm Brass Hardware",
      "Light Wood Flooring",
    ],
    note: "All drawings are dimensioned and coordinated for construction reference and execution.",
  },
  {
    number: "02",
    title: "Basic Permit Set — Master Bedroom Addition",
    slug: "master-bedroom-permit-set",
    category: "Construction Documents",
    span: "sm",
    coverFit: "cover",
    description:
      "Assisted the client through the permit approval process by developing the proposed extension layout, creating the supporting 3D model, and preparing a coordinated permit drawing package including site plans, floor plans, roof plans, and elevations for submission and review.",
    role: [
      "Layout for Client Approval",
      "Site Plan",
      "Existing Plan",
      "Proposed Plan",
      "Proposed Roof Plan",
      "Elevations",
    ],
    scope: [
      "New master bedroom addition",
      "New master bath and closet",
      "New kids room",
      "Extending Sunroom",
    ],
    location: "207 Town Acres Lane, Roselle, Illinois 60172",
  },
  {
    number: "03",
    title: "3D Model / Rendering Project",
    slug: "3d-model-rendering",
    category: "Visualization",
    span: "lg",
    coverFit: "cover",
    description:
      "Supported the architect by transforming provided plans, elevations, and design information into a detailed SketchUp model and presentation-ready visualizations. Produced interior and exterior renderings to help communicate the design intent during client presentations and project development.",
    highlights: [
      "Modern architectural expression with clean lines and natural material palette.",
      "Open plan interiors with a focus on natural light and spatial flow.",
      "High quality materials and custom details throughout.",
      "Photorealistic visualization for presentation and design intent.",
    ],
    materials: ["Stone", "Wood", "Concrete", "Glass", "Metal", "Fabric"],
  },
  {
    number: "04",
    title: "Basic Permit Set — Detached Garage",
    slug: "garage-permit-set",
    category: "Construction Documents",
    span: "sm",
    coverFit: "cover",
    description:
      "Developed a permit drawing package for a detached garage extension, including plans, elevations, sections, and supporting visualizations for approval and construction.",
    role: [
      "Layout for Client Approval",
      "Floor Plans",
      "Roof Details",
      "Elevations",
      "Sections",
      "Visualization",
    ],
  },
  {
    number: "05",
    title: "3D Modeling — Residential",
    slug: "residential-3d-modeling",
    category: "Visualization",
    span: "tall",
    coverFit: "cover",
    description:
      "A collaboration of residential project including 3d modeling and exterior rendering.",
    process: PROCESS_STANDARD,
    materials: [
      "Natural Stone",
      "Light Brick",
      "Roof Material",
      "Wood Accent",
      "Black Windows",
      "Stucco Finish",
    ],
  },
  {
    number: "06",
    title: "Bathroom Project",
    slug: "bathroom-project",
    category: "Interior · Documentation",
    span: "sm",
    coverFit: "cover",
    description:
      "Developed bathroom drawings and visualizations from client sketches and references to support design validation and project coordination.",
    role: [
      "Interior Modeling",
      "Interior Rendering",
      "Following Material Palette",
      "2D Floor Plan",
      "2D Elevations",
      "Dimensional Plan",
    ],
  },
  {
    number: "07",
    title: "Clinic Interior",
    slug: "clinic-interior",
    category: "Commercial · Interior",
    span: "wide",
    coverFit: "cover",
    description:
      "Supported the clinic interior project through floor plan development, 3D modeling, and presentation-ready visualizations.",
    role: [
      "Floor Plan Layout",
      "Interior Modeling",
      "Interior Rendering",
      "Following Material Palette and Furniture Selection",
    ],
  },
  {
    number: "08",
    title: "Bathroom Project",
    slug: "bathroom-documentation",
    category: "Interior · Documentation",
    span: "tall",
    coverFit: "cover",
    description:
      "Developed bathroom documentation, 3D models, and visualizations from client-provided information and reference material.",
    role: [
      "Interior Modeling",
      "Interior Rendering",
      "Following Material Palette",
      "2D Floor Plan",
      "2D Elevations",
      "Dimensional Plan",
    ],
  },
  {
    number: "09",
    title: "3D Modeling",
    slug: "3d-modeling",
    category: "Visualization",
    span: "sm",
    coverFit: "cover",
    description:
      "Converted architectural drawings into detailed SketchUp models and photorealistic visualizations for design presentation.",
    process: PROCESS_STANDARD,
  },
  {
    number: "10",
    title: "Modern Bathroom",
    slug: "modern-bathroom",
    category: "Interior · Visualization",
    span: "sm",
    coverFit: "cover",
    description:
      "Produced working drawings, 3D models, and renderings to support the development and presentation of a bathroom renovation.",
    role: [
      "Interior Modeling",
      "Interior Rendering",
      "Following Material Palette and Furniture Selection",
    ],
  },
  {
    number: "11",
    title: "2D Layout Plan",
    slug: "2d-layout-plan",
    category: "Space Planning",
    span: "sm",
    coverFit: "contain",
    description:
      "Developed a detailed space planning layout to support furniture coordination and efficient space utilization.",
    role: ["Floor Plan Layout", "Dimensioned Furniture Layout"],
  },
  {
    number: "12",
    title: "Bedroom 2D Details",
    slug: "bedroom-2d-details",
    category: "Detailing",
    span: "sm",
    coverFit: "contain",
    description:
      "Produced detailed joinery drawings and elevations for custom bedroom millwork based on architect-provided designs.",
    role: ["Dressing Wall 2D Details", "Media Wall 2D Details (as per the architect)"],
  },
  {
    number: "13",
    title: "Kitchen Details",
    slug: "kitchen-details",
    category: "Detailing",
    span: "sm",
    coverFit: "contain",
    description:
      "Translated architect-provided kitchen layouts into coordinated construction drawings and elevations.",
    role: ["Floor Plan Layout", "Dimensioned Plan", "Elevations"],
  },
  {
    number: "14",
    title: "Laundry Details",
    slug: "laundry-details",
    category: "Detailing",
    span: "sm",
    coverFit: "contain",
    description:
      "Produced coordinated laundry room drawings, elevations, lighting plans, and tile layouts for construction documentation.",
    role: [
      "Floor Plan Layout",
      "Dimensioned Plan",
      "Lighting Plan",
      "Elevations",
      "Tile Layout Plan",
    ],
  },
];

export const PROJECTS: readonly Project[] = CONTENT.map((c) => {
  const imgs = PROJECT_IMAGES[c.slug];
  if (!imgs) throw new Error(`No images for project slug: ${c.slug}`);
  return { ...c, ...imgs };
});

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export function getAdjacent(slug: string): { prev: Project; next: Project } {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  return { prev, next };
}

export type { GalleryImage };
