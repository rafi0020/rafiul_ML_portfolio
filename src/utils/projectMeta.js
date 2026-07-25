/**
 * Shared lookup tables for project metadata presentation.
 *
 * Both Projects.jsx and ProjectDetail.jsx previously carried their own
 * near-identical 15-branch if/else chains returning inline SVG, so the two
 * views could (and did) drift apart. One table, two consumers.
 */

const METRIC_ICON_RULES = [
  [["accuracy", "precision", "auc", "mota", "compliance"], "check"],
  [["time", "speed", "fps", "latency", "resolution", "real-time", "live", "rtsp"], "gear"],
  [["deployment", "coverage", "cameras", "sites", "floor", "locations", "stores"], "pin"],
  [["reduction", "decrease", "workload", "savings", "efficiency"], "arrowRight"],
  [["dataset", "samples", "recordings", "records"], "doc"],
  [["model", "best"], "cap"],
];

const TECH_CLASS_RULES = [
  [["python"], "tech-python"],
  [["tensorflow"], "tech-tensorflow"],
  [["pytorch"], "tech-pytorch"],
  [["yolo"], "tech-yolo"],
  [["opencv"], "tech-opencv"],
  [["deep learning", "deeplearning"], "tech-dl"],
  [["nlp", "bert", "transformer"], "tech-nlp"],
  [["fastapi", "flask", "django"], "tech-web"],
  [["docker", "kubernetes"], "tech-devops"],
  [["postgres", "mongodb", "sql"], "tech-db"],
];

function match(rules, value, fallback) {
  const v = String(value).toLowerCase();
  const hit = rules.find(([keywords]) => keywords.some((w) => v.includes(w)));
  return hit ? hit[1] : fallback;
}

export const metricIcon = (key) => match(METRIC_ICON_RULES, key, "repo");
export const techClass = (tech) => match(TECH_CLASS_RULES, tech, "tech-default");

export const CATEGORY_ICON = {
  All: "🗂️",
  Industry: "🏭",
  Research: "📚",
  Academic: "🎓",
};
