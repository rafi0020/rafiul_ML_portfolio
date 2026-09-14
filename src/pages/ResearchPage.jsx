import useSEO from "../hooks/useSEO";
import { ROUTE_META } from "../data/portfolio";
import Publications from "../sections/Publications";

export default function ResearchPage() {
  useSEO({ ...ROUTE_META["/research"], path: "/research" });

  return (
    <main id="main-content" tabIndex={-1}>
      <Publications asPage />
    </main>
  );
}
