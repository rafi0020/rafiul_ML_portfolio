import useSEO from "../hooks/useSEO";
import Contact from "../sections/Contact";

export default function ContactPage() {
  useSEO({
    title: "Contact",
    description: "Get in touch about roles, collaborations, or research enquiries.",
    path: "/contact",
  });

  return (
    <main id="main-content" tabIndex={-1}>
      <Contact />
    </main>
  );
}
