import useSEO from "../hooks/useSEO";
import Publications from "../sections/Publications";

export default function ResearchPage() {
  useSEO({
    title: "Research",
    description:
      "Peer-reviewed research and preprints in machine learning, computational healthcare, and trustworthy AI.",
    path: "/research",
  });

  return (
    <main id="main-content" tabIndex={-1}>
      <Publications asPage />
    </main>
  );
}
