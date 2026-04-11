import Image from "next/image";
import preview from "../public/statCard.webp";

const tags = [
  "Design System",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Storybook",
  "Figma",
  "Medusa.js",
  "WCAG 2.2",
];

export default function SaasUiCard() {
  return (
    <section className="mx-auto max-w-7xl px-4">

      {/* Header */}
      <div className="text-center pb-8">
        <h3 className="font-bold text-2xl md:text-3xl py-2 dark:text-white uppercase tracking-tighter opacity-90">
          SaaS Component Architecture
        </h3>

        <p className="dark:text-white/80 text-slate-700 md:text-lg max-w-2xl mx-auto">
          A design system for complex SaaS interfaces, extended into a production Medusa.js admin panel.
        </p>
      </div>

      {/* Card */}
      <article
        className="focusable-card group rounded-xl relative shadow-2xl overflow-hidden
        bg-[#fff9e8] dark:bg-slate-900 border border-slate-200 dark:border-slate-700
        transition-all hover:border-sky-500/50 dark:hover:border-amber-400/50"
      >
        <div className="flex flex-col lg:flex-row">

          {/* Image */}
          <div className="relative w-full lg:w-1/2 aspect-[16/10] lg:aspect-[4/3] overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800">
            <Image
              src={preview}
              alt="SaaS UI component system used in a Medusa.js admin interface"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 px-6 py-8 lg:py-12 lg:px-10 justify-center">

            {/* Meta */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 dark:text-amber-400 mb-2">
                System Integration · 2026
              </p>

              <h4 className="text-2xl md:text-3xl font-bold dark:text-white leading-tight">
                Design System × Medusa.js Admin
              </h4>
            </div>

            {/* Description */}

              <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg leading-relaxed">
              An accessibility-first component system designed for high-density SaaS interfaces,
              built with strict token-based architecture and WCAG 2.2 constraints.

              <br /><br />

              The design system is fully defined and documented, with a growing component library
              currently being implemented across a WIP Medusa.js admin interface.

              <br /><br />

              This integration serves as a real-world validation layer for the system,
              translating complex commerce data into a structured, multi-theme UI with consistent interaction patterns.

              <br /><br />

              Early integration work has already highlighted improvements in clarity and reduced interaction complexity in dense admin workflows.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 py-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold
                  bg-sky-50 dark:bg-slate-800 text-sky-800 dark:text-slate-300
                  border border-sky-100 dark:border-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <nav className="flex flex-wrap gap-4 mt-2" aria-label="Project links">
              <a
                href="https://saas-ui-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center font-bold px-6 py-2.5 rounded-full
                bg-sky-700 dark:bg-amber-400 text-white dark:text-slate-900
                hover:bg-sky-800 dark:hover:bg-amber-300 shadow-md transition"
              >
                Live Storybook
              </a>

              <a
                href="https://www.notion.so/designengineer/Portfolio-Oleksandra-Kolesnikova-33f65fba422880a89134d5ed8be42699"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center font-bold px-6 py-2.5 border-2
                border-slate-300 dark:border-slate-600 rounded-full
                text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Notion Case Study
              </a>

            
            </nav>

          </div>
        </div>
      </article>
    </section>
  );
}