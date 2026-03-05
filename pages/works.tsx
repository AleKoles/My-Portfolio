import Image from "next/image";
import author from "../public/Writerpage.webp";
import bee from "../public/beefybee.webp";
import animator from "../public/animator.webp";
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
    <div className="rounded relative group shadow-lg overflow-hidden">
       <div className="relative w-full aspect-[16/10]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Overlay */}
      <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-3 bg-[#fff8e5] bg-opacity-80 sm:bg-opacity-90 dark:bg-slate-600 dark:bg-opacity-80">
        <p className="lg:group-hover:mb-0 text-lg md:text-xl font-semibold group-hover:pb-0 transition-all duration-300 dark:text-white">
          {title}
        </p>

        <div className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-slate-600 dark:text-white leading-6 lg:leading-8">
          {description}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="md:mb-2 box-border font-bold w-fit px-3 py-1 border-2 duration-150 ease-in-out rounded border-sky-700 dark:border-amber-400 text-white dark:text-slate-600 bg-sky-700 dark:bg-amber-400 hover:text-sky-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-opacity-0"
        >
          Visit this Webpage
        </a>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section className="mx-auto max-w-7xl">
      {/* Solo Projects */}
      <div className="text-center">
        <h3 className="font-semibold text-2xl md:text-3xl py-2 dark:text-white">
          My Solo Projects
        </h3>
        <p className="dark:text-white/70 md:text-lg">From idea to deployment</p>
      </div>

      <div className="flex flex-col lg:grid grid-cols-3 gap-8 justify-around pt-8">
        <ProjectCard
          image={author}
          alt="Personal Author's Website"
          title="Author&apos;s Personal Website"
          href="https://alexandrajpeters.com/"
          description={
            <>
              A React.js multipage website with EmailOctopus integration and a Kindle
              Cover Guides Generator (exports PNG with guides).
            </>
          }
        />

        <ProjectCard
          image={bee}
          alt="BeefyBee Website"
          title="B2B Web Agency"
          href="https://beefybee.com/"
          description={
            <>
              A bilingual SPA for a Ukrainian web agency. Made with React, Tailwind CSS,
              and GSAP. Find the source code on my{" "}
              <a
                className="text-sky-600 dark:text-amber-400"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AleKoles/web_agency"
              >
                GitHub
              </a>
              .
            </>
          }
        />

        <ProjectCard
          image={animator}
          alt="Animator Portfolio"
          title="CG Artist Portfolio"
          href="https://petrov-3d-animation.netlify.app/"
          description={
            <>
              Single page portfolio website built with Alpine.js, Vite, Tailwind CSS,
              and GSAP. Find the source code on my{" "}
              <a
                className="text-sky-600 dark:text-amber-400"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AleKoles/aha-animator"
              >
                GitHub
              </a>
              .
            </>
          }
        />
      </div>

      {/* Team Projects */}
      <div className="text-center mt-12">
        <h3 className="font-semibold text-2xl md:text-3xl py-2 dark:text-white">
          Team Projects
        </h3>
        <p className="dark:text-white/70 md:text-lg">
          From wireframe and prototype to frontend implementation
        </p>
      </div>

      <div className="flex flex-col lg:grid grid-cols-3 gap-8 justify-around pt-8">
        <ProjectCard
          image={sart}
          alt="S-Art E-Commerce Website"
          title="S-Art E-Commerce Webpage"
          href="https://s-art.work/"
          description={<>Implemented with MODX, Alpine.js, GSAP, and Tailwind.</>}
        />
      </div>
    </section>
  );
};

export default Works;