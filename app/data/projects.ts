export type ProjectStatus = 'live' | 'in-progress' | 'archived';
export type ProjectType = 'tool' | 'webapp' | 'research' | 'api' | 'thesis';

export interface Project {
  slug: string;            // used for the URL: /projects/[slug]
  title: string;
  type: ProjectType;
  status: ProjectStatus;
  oneLiner: string;        // shown on the card
  description: string;     // longer text for the deep-dive page (markdown-friendly string)
  liveUrl?: string;
  repoUrl?: string;
  image?: string;          // path in /public
  featured?: boolean;      // show on homepage
  // thesis-only fields
  abstract?: string;
  pdfPath?: string;        // e.g. /thesis.pdf
}

export const projects: Project[] = [
  {
    slug: 'thesis',
    title: 'Your Thesis Title',
    type: 'thesis',
    status: 'in-progress',
    oneLiner: 'One-sentence summary of the thesis.',
    description: 'Longer write-up goes here.',
    abstract: 'Two-sentence non-technical abstract for recruiters.',
    pdfPath: '/thesis.pdf',
    featured: true,
  },
  {
    slug: 'album-recommender',
    title: 'Album Recommender',
    type: 'webapp',
    status: 'in-progress', // beta live
    oneLiner: 'A music recommender that suggests albums based on audio feature similarity.',
    description:
      'A Supabase-backed recommendation engine that computes cosine similarity across a feature matrix of albums, wrapped in a FastAPI backend and a lightweight static frontend styled like a library card catalog. A public beta is live, with a separate private repo handling data ingestion and a public repo serving the read-only app.',
    liveUrl: 'https://album-recommendations-public.vercel.app/',
    repoUrl: 'https://github.com/ChristianCrivelli/Album-Recommendations-Public',
    featured: true,
  },
  {
    slug: 'stock-culture',
    title: 'Stock & Culture',
    type: 'research',
    status: 'in-progress',
    oneLiner: 'An analysis of how public health and cultural indicators relate to stock performance.',
    description:
      'A Python-based research project examining whether population health metrics (e.g. obesity trends) show a measurable relationship with equity market performance.', //[TODO: add date range and number of data points once analysis is finalized]
    repoUrl: 'https://github.com/ChristianCrivelli/stock_culture',
  },
  {
    slug: 'civicus-api',
    title: 'Civic Data API',
    type: 'api',
    status: 'in-progress',
    oneLiner: 'A lightweight API surfacing civic and governance data for research use.',
    description:
      'A data pipeline and API built around civic and governance indicators for ~197 countries, refreshed weekly via automated pipeline, intended to make cross-country civic-space data more accessible for research. Code and access are not yet public — permissions are currently in progress.'
    // no repoUrl / liveUrl on purpose while access is pending
  },
  {
    slug: 'demographic-studies',
    title: 'Civic Freedom & Socioeconomic Development Nexus',
    type: 'research',
    status: 'in-progress',
    oneLiner:
      'Investigates whether civic freedom accelerates economic development and SDG/MPI progress.',
    description:
      'A data science project evaluating how civil liberties interact with economic outcomes and development goals across countries, with a focus on the downstream effects of civic freedom on the Sustainable Development Goals (SDGs) and the Multidimensional Poverty Index (MPI). Core question: do countries with higher civic freedom scores see faster development and quality-of-life gains?',
    repoUrl: 'https://github.com/ChristianCrivelli/demographic_studies',
  },
  {
    slug: 'city-walkability',
    title: 'City Walkability',
    type: 'research',
    status: 'in-progress',
    oneLiner: 'Analyzes pedestrian infrastructure networks to score urban walkability.',
    description:
      'A network-analysis project that models pedestrian nodes across a city to evaluate and compare walkability.',
    repoUrl: 'https://github.com/ChristianCrivelli/city_walkability', //[TODO: add number of nodes/edges analyzed and city scope]
  },
  {
    slug: '2vs3',
    title: '2 vs 3: NBA Shot Optimization',
    type: 'research',
    status: 'in-progress',
    oneLiner:
      'Treats the basketball court as a portfolio to find the optimal risk/reward frontier for shot selection.',
    description:
      'A mathematical optimization project inspired by the "Moreyball" analytics revolution, which frames shot selection as a multi-objective problem: maximizing expected value while accounting for variance. By treating the court as an asset portfolio, the model calculates the exact break-even frontier where a team cannot increase expected point return without increasing the risk of missing the shot — directly applying Pareto optimization to sports analytics.', //[TODO: add season(s)/dataset size once finalized, e.g. "trained on N shots across M NBA seasons"]
    repoUrl: 'https://github.com/ChristianCrivelli/2vs3',
    featured: true,
  },
  {
    slug: 'aging-simulator',
    title: 'Macro-to-Micro Longevity Forecasting',
    type: 'research',
    status: 'in-progress',
    oneLiner:
      'Models how delaying chronic illness reshapes national pension and healthcare solvency.',
    description:
      'A two-tier predictive pipeline ("End of Aging Clocks") quantifying national healthcare and pension solvency risk for 2030–2050. It intersects macro demographic shifts — modeled via the UN Population Prospects dataset and the standard Dependency Ratio — with a micro-level bio-informatic aging model trained on NHANES data to predict each person\'s "morbidity-free window." The pipeline runs 10,000 Monte Carlo trials to produce budget solvency profiles, with an interactive dashboard showing how a 2-year increase in healthy lifespan offsets sovereign debt risk from an aging population.',
    repoUrl: 'https://github.com/ChristianCrivelli/aging_simulator',
    featured: true,
  },
  {
    slug: 'flashcards',
    title: 'Notion Flashcards',
    type: 'tool',
    status: 'in-progress',
    oneLiner: 'Turns a Notion vocabulary database into a local flashcard study tool.',
    description:
      'A utility that pulls vocabulary entries from a Notion database, cleans and enriches them with definitions, and stores them in a local database for flashcard-style review.',
    repoUrl: 'https://github.com/ChristianCrivelli/flashcards',
  },
  {
    slug: 'portfolio-site',
    title: 'Personal CV & Developer Portfolio',
    type: 'webapp',
    status: 'live',
    oneLiner: 'This site — a Next.js portfolio centralizing my projects, skills, and background into one interactive showcase.',
    description:
      'A responsive personal portfolio built with Next.js and Tailwind, moving away from a static resume toward an interactive, continuously updated showcase. Features live GitHub activity, a skills radar chart, education/experience timelines, dynamic OG images, and JSON-LD structured data for discoverability.',
    liveUrl: 'https://my-cv-portfolio-alpha.vercel.app/',
    repoUrl: 'https://github.com/ChristianCrivelli/my-cv-portfolio',
  },
];