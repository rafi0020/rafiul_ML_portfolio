# MD Rafiul Islam — Machine Learning & Computer Vision Engineer

Source for [rafiulislam.me](https://rafiulislam.me), a recruiter-focused portfolio covering production computer vision, Edge AI, and applied ML research.

## What the portfolio demonstrates

- End-to-end enterprise computer vision: RTSP ingestion, model inference, tracking, temporal rules, evidence generation, APIs, and deployment
- Industrial safety and SOP monitoring for manufacturing environments
- Banking surveillance and identity-aware video analytics
- ISO 6346 container-code OCR and Bangla ANPR
- NVIDIA Jetson, ONNX, TensorRT, and multi-GPU deployment
- Peer-reviewed research in Bengali voice-based mental-health assessment
- Interpretable medical AI and robust evaluation

Enterprise case studies are intentionally sanitized. They explain the engineering problem, architecture, reliability mechanisms, and deployment context without publishing credentials, private endpoints, camera addresses, proprietary thresholds, or client-confidential implementation details.

## Technology

- React 18 and React Router
- Vite
- Custom responsive CSS
- GitHub Pages and GitHub Actions
- Structured project and publication data in JSON

## Local development

```bash
git clone https://github.com/rafi0020/rafiul_ML_portfolio.git
cd rafiul_ML_portfolio
npm install
npm run dev
```

Build the production bundle with:

```bash
npm run build
```

Node.js 20 or newer is recommended.

## Content map

- `src/sections/Hero.jsx` — positioning and portfolio summary
- `src/sections/Experience.jsx` — professional and research experience
- `src/sections/Skills.jsx` — demonstrated technical capabilities
- `src/data/projects.json` — project case studies
- `src/data/publications.json` — publication metadata
- `public/cv/` — downloadable CV assets

## Deployment

Pushes to `main` are built and deployed through the GitHub Actions workflow in `.github/workflows/deploy.yml`. The custom domain is configured through `public/CNAME`.

## Contact

- [LinkedIn](https://www.linkedin.com/in/rafi009)
- [GitHub](https://github.com/rafi0020)
- [Google Scholar](https://scholar.google.com/citations?user=ORj6wioAAAAJ)
- [Portfolio](https://rafiulislam.me)
- Email: rafiulislam1921@gmail.com

## Content and release checks

`npm test` checks data regressions, featured selection, publication relationships, and typed result context. `npm run build` validates content, builds the client, prerenders 35 routes, and checks generated routes, headings, links, assets, social metadata, and the sitemap. No new runtime dependencies are required.

Headline statistics and route metadata live in `src/data/portfolio.js`. Projects use explicit `projectType`, `maturity`, `parentSystem`, `highlights`, and `workflow` fields. A case-study count includes separately presented modules and R&D; it is not a count of independent deployments. Study metrics are reported results, not independently reproduced benchmarks.

Workflow diagrams are conceptual, with matching PNG files for social previews and readable HTML stages on detail pages. Static route HTML exposes the same content to crawlers before React loads. The deployment writes a public `release.json` containing only the deployed commit and page count so releases can be verified.

See `design-qa.md` for the scope and limits of verification.
