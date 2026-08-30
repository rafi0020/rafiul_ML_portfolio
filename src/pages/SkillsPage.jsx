import useSEO from "../hooks/useSEO";
import Skills from "../sections/Skills";

export default function SkillsPage() {
  useSEO({
    title: "Skills",
    description:
      "Computer vision, deep learning, edge deployment, and backend tooling used to ship production AI systems.",
    path: "/skills",
  });

  return (
    <main id="main-content" tabIndex={-1}>
      <Skills asPage />
    </main>
  );
}
