import Image from "next/image";
import author from "../public/Writerpage.webp";
import bee from "../public/beefybee.webp";
import animator from "../public/bansa.webp";
import sart from "../public/s-art.webp";

type ProjectCardProps = {
  image: any;
  alt: string;
  title: string;
  description: React.ReactNode;
  href: string;
};

const ProjectCard = ({ image, alt, title, description, href }: ProjectCardProps) => {
  return (
    <div className="focusable-card group rounded-xl relative shadow-2xl overflow-hidden bg-[#fff9e8] dark:bg-slate-900 border border-slate-200 dark:border-slate-700 transition-all hover:border-sky-500/50 dark:hover:border-amber-400/50 group  hover:shadow-2xl">
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* The Legibility Fix: Glassmorphism Footer & Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end">
        {/* This div is the key: it provides a dark base for the title that is always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent translate-y-[82%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          {/* Background blur only on the dark part for extra "pop" */}
          <div className="absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-md transition-all" />
        </div>

        {/* Content Layer */}
        <div className="relative p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 z-10">
          <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-md">
            {title}
          </h4>

          {/* Description: Hidden until hover */}
          <div className="max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">    
            <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-4">
              {description}
            </p>
            <div className="rounded-full">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex outline-none items-center font-bold px-6 py-2.5 transition-all rounded-full bg-sky-700 dark:bg-amber-400 text-white dark:text-slate-900 hover:bg-sky-800 dark:hover:bg-amber-300 shadow-md"
              >
                View Live Project
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="text-center pb-8">
        <h3 className="font-bold text-2xl md:text-3xl py-2 dark:text-white uppercase tracking-tighter opacity-90">
        Systems & Interface Implementation
        </h3>
        <p className="dark:text-white/80 text-slate-700 md:text-lg max-w-2xl mx-auto">
        From concept to production-ready experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectCard
          image={animator}
          alt="Bahamas Air Navigation Services Authority"
          title="Aviation Data Systems"
          href="https://bansabahamas.com/notams.html"
          description={
            <>
              UI for real-time NOTAMs and flight data, integrating complex APIs while maintaining strict accessibility and national branding constraints.
            </>
          }
        />
        
        <ProjectCard
          image={sart}
          alt="S-Art E-Commerce Website"
          title="E-Commerce Architecture"
          href="https://s-art.work/"
          description={
            <>
              High-performance e-commerce platform built with MODX, Alpine.js, and GSAP, focused on fluid state transitions and smooth interaction patterns across complex user flows.
            </>
          }
        />
       
        <ProjectCard
          image={bee}
          alt="BeefyBee Website"
          title="B2B Web Systems"
          href="https://beefybee.com/"
          description={
            <>
              <p>
                B2B platform built with React and Tailwind, focused on modular UI structure, performance, and maintainable component architecture across a bilingual experience.
              </p>
            </>
          }
        />

        <ProjectCard
          image={author}
          alt="Personal Author's Website"
          title="Product Portfolio"
          href="https://alexandrajpeters.com/"
          description={
            <>
              <p>
              Product-focused platform with custom tools, including a Kindle Cover Generator designed to streamline content creation workflows through automated export logic.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default Works;