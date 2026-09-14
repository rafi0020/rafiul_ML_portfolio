import useSEO from "../hooks/useSEO";
import { ROUTE_META } from "../data/portfolio";
import Contact from "../sections/Contact";

export default function ContactPage() {
  useSEO({ ...ROUTE_META["/contact"], path: "/contact" });

  return (
    <main id="main-content" tabIndex={-1}>
      <Contact asPage />
    </main>
  );
}
