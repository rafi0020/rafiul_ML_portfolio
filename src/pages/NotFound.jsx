import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import Icon from "../components/Icon";

export default function NotFound() {
  useSEO({
    title: "Page not found",
    description: "That page doesn't exist. Head back to the homepage.",
    noIndex: true,
  });

  return (
    <main id="main-content" tabIndex={-1} className="section not-found">
      <div className="container">
        <p className="section-label"><Icon name="repo" /> 404</p>
        <h1 className="section-title">That page doesn&rsquo;t exist</h1>
        <p className="section-subtitle">
          The link may be outdated, or the page has moved.
        </p>
        <div className="section-cta">
          <Link to="/" className="btn btn-primary">
            Back to homepage
            <Icon name="arrowRight" />
          </Link>
        </div>
      </div>
    </main>
  );
}
