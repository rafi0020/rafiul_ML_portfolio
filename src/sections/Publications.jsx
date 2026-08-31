import { useId, useState } from "react";
import pubs from "../data/publications.json";
import Icon from "../components/Icon";
import SectionCTA from "../components/SectionCTA";

function BibtexBlock({ bibtex, id }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="bibtex-block" id={id}>
      <button type="button" className="bibtex-copy" onClick={copy}>
        <Icon name={copied ? "check" : "copy"} size={14} />
        {copied ? "Copied" : "Copy"}
      </button>
      <pre><code>{bibtex}</code></pre>
    </div>
  );
}

export default function Publications({ compact = false, asPage = false }) {
  const [openBibtex, setOpenBibtex] = useState(null);
  const baseId = useId();
  const orderedPublications = [...pubs].sort((a, b) => a.year - b.year);
  const list = compact ? orderedPublications.slice(0, 2) : orderedPublications;
  const Heading = asPage ? "h1" : "h2";
  const CardHeading = asPage ? "h2" : "h3";

  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Icon name="book" />
            Publications
          </span>
          <Heading className="section-title">Research papers</Heading>
          <p className="section-subtitle">
            Peer-reviewed research and preprints in machine learning and AI
          </p>
        </div>

        <ul className="publications-list">
          {list.map((p) => {
            const panelId = `${baseId}-${p.id}`;
            const isOpen = openBibtex === p.id;

            return (
              <li key={p.id} className="publication-card">
                <p className="publication-venue">
                  <Icon name="book" size={14} />
                  {p.venue} &bull; {p.year}
                </p>
                <CardHeading className="publication-title">{p.title}</CardHeading>
                <p className="publication-authors">{p.authors || "MD Rafiul Islam et al."}</p>
                {p.abstract && <p className="publication-abstract">{p.abstract}</p>}

                <div className="publication-actions">
                  {p.bibtex && (
                    <button
                      type="button"
                      className="publication-btn"
                      onClick={() => setOpenBibtex(isOpen ? null : p.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <Icon name="doc" size={14} />
                      {isOpen ? "Hide BibTeX" : "BibTeX"}
                    </button>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="publication-btn">
                      <Icon name="externalLink" size={14} />
                      View paper
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer" className="publication-btn">
                      <Icon name="github" size={14} />
                      Code
                    </a>
                  )}
                </div>

                {isOpen && <BibtexBlock bibtex={p.bibtex} id={panelId} />}
              </li>
            );
          })}
        </ul>

        {compact && <SectionCTA to="/research">View all publications</SectionCTA>}
      </div>
    </section>
  );
}
