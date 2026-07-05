export type MetherProduct = {
  id: string;
  name: string;
  slug: string;
  status: "core" | "active" | "prototype" | "future";
  description: string;
};

export const productRegistry: MetherProduct[] = [
  {
    id: "core",
    name: "METHER Core",
    slug: "core",
    status: "core",
    description: "Shared brain, identity, configuration and platform foundation.",
  },
  {
    id: "ai",
    name: "METHER AI",
    slug: "ai",
    status: "future",
    description: "The living intelligence layer of the METHER ecosystem.",
  },
  {
    id: "legal",
    name: "METHER Legal",
    slug: "legal",
    status: "active",
    description: "AI-powered legal mail, deadline and calendar intelligence.",
  },
  {
    id: "field",
    name: "METHER Field",
    slug: "field",
    status: "prototype",
    description: "Fiber infrastructure planning, operations and finance layer.",
  },
  {
    id: "workforce",
    name: "METHER Workforce",
    slug: "workforce",
    status: "prototype",
    description: "Attendance, scheduling, store and workforce operations.",
  },
  {
    id: "cfo",
    name: "METHER CFO",
    slug: "cfo",
    status: "future",
    description: "Cash flow, banking, forecasting and company finance intelligence.",
  },
];
