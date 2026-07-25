import { Link } from "react-router-dom";
import Icon from "./Icon";

/**
 * The "see the full version of this section" link that appears at the bottom
 * of every condensed homepage section. Previously this markup plus its inline
 * styles was copy-pasted into five separate section components.
 */
export default function SectionCTA({ to, state, children }) {
  return (
    <div className="section-cta">
      <Link to={to} state={state} className="btn btn-primary">
        {children}
        <Icon name="arrowRight" />
      </Link>
    </div>
  );
}
