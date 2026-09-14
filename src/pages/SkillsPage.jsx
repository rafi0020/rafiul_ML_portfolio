import useSEO from "../hooks/useSEO";
import { ROUTE_META } from "../data/portfolio";
import Skills from "../sections/Skills";

export default function SkillsPage() {
  useSEO({ ...ROUTE_META["/skills"], path: "/skills" });

  return (
    <main id="main-content" tabIndex={-1}>
      <Skills asPage />
    </main>
  );
}
