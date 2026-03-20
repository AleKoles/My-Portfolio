import Image from "next/image";
import preview from "../public/StatCards.webp";

const tags = ["React", "TypeScript", "Tailwind CSS", "Storybook", "Figma", "WCAG AA"];

export default function SaasUiCard() {
  return (
    <section className="mx-auto max-w-7xl">

      {/* Section header */}
      <div className="text-center py-8">
        <h3 className="font-semibold text-2xl md:text-3xl py-2 dark:text-white">
          SaaS Component Library
        </h3>
        <p className="dark:text-white/70 text-slate-600 md:text-lg">
          Accessible, token-driven React components for SaaS dashboards
        </p>
      </div>

      {/* Card */}
      <div className="rounded relative shadow-lg overflow-hidden bg-[#fff9e8] dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col lg:flex-row">

          {/* Image */}
          <div className="relative w-full lg:w-1/2 aspect-[16/10] lg:aspect-[4/3] overflow-hidden flex-shrink-0">
           
             
              <Image
                src={preview}
                alt="saas-ui Storybook — StatCard components"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
           
           
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 px-6 py-6 lg:py-8 lg:px-8 justify-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-amber-400 mb-1">
                Open Source · 2026
              </p>
              <h4 className="text-xl md:text-2xl font-semibold dark:text-white leading-tight">
                saas-ui
              </h4>
             
            </div>

            <p className="text-slate-700 dark:text-white/80 text-base leading-8">
              An open source component library built accessibility-first.
              Every component is designed in Figma, matched pixel-perfectly
              in code, and verified against WCAG AA in Storybook. Ships with
              three built-in themes — Violet, Amber, and Teal.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded text-xs font-medium bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://saas-fu6y8zyag-alekoles-projects.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="box-border font-bold w-fit px-3 py-1 border-2 duration-150 ease-in-out rounded border-sky-700 dark:border-amber-400 text-white dark:text-slate-600 bg-sky-700 dark:bg-amber-400 hover:text-sky-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-opacity-0"
              >
                Live Storybook
              </a>
              <a
                href="https://github.com/AleKoles/saas-ui"
                target="_blank"
                rel="noreferrer"
                className="box-border font-bold w-fit px-3 py-1 border-2 duration-150 ease-in-out rounded border-slate-400 dark:border-slate-500 text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                GitHub
              </a>
              <a
                href="https://www.figma.com/design/So0CS02VQjOtc3tEmZrOnt/saas-ui-%E2%80%94-Design-System?node-id=1-2&t=jTd6PEWvxpROwmAe-1"
                target="_blank"
                rel="noreferrer"
                className="box-border font-bold w-fit px-3 py-1 border-2 duration-150 ease-in-out rounded border-slate-400 dark:border-slate-500 text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                Figma
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}