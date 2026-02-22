import Image from "next/image";
import author from "../public/Writerpage.webp";
import bee from "../public/beefybee.webp";
import animator from "../public/animator.webp";
import sart from "../public/s-art.webp";

const Works = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="text-center">
        <h3 className="font-semibold text-2xl md:text-3xl py-2 dark:text-white">
          My Solo Projects
        </h3>
        <p className="dark:text-white/70 md:text-lg">From idea to deployment</p>
      </div>
      <div className=" flex flex-col lg:grid grid-cols-3 gap-8 justify-around pt-8">
      
        <div className="card rounded relative group shadow-lg box-shadow overflow-hidden">
          
          <Image
            className="object-cover"
            src={author}
            alt="Personal Author's Website"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-3 bg-[#fff8e5] bg-opacity-80 sm:bg-opacity-90 dark:bg-slate-600 dark:bg-opacity-80">
            <p className="lg:group-hover:mb-0 text-lg md:text-xl font-semibold group-hover:pb-0 transition-all duration-300 dark:text-white">
              Author&apos;s Personal Website
            </p>
            <p className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-slate-600 dark:text-white leading-6 lg:leading-8">
              A React/Vite multipage website with EmailOctopus integration and Kindle Cover Guides Generator (creates and exports png with guides).
            </p>
            <a
              href="https://alexandrajpeters.com/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit duration-150 ease-in-out px-3 py-1 border-2 rounded border-sky-700 dark:border-amber-400 text-white dark:text-slate-600 bg-sky-700 dark:bg-amber-400 hover:text-sky-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-opacity-0"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
        <div className="card rounded relative group box-shadow shadow-lg overflow-hidden">
          <Image
            className="object-cover"
            src={bee}
            alt="BeefyBee Image"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-3 bg-[#fff8e5] bg-opacity-80 sm:bg-opacity-90 dark:bg-slate-600 dark:bg-opacity-80">
            <h4 className="lg:group-hover:mb-0 text-gl md:text-xl font-semibold group-hover:pb-0 transition-all duration-300 dark:text-white">
              B2B Web Agency
            </h4>
            <p className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-slate-600 leading-6 lg:leading-8 dark:text-white">
              A bilingual SPA for a Ukrainian web agency. Made with React, Tailwind CSS, and GSAP.
              Find the source code on my{" "}
              <a
                className="text-sky-600 dark:text-amber-400"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AleKoles/web_agency"
              >
                GitHub
              </a>
              .
            </p>
            <a
              href="https://beefybee.com/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit px-3 py-1 border-2 duration-150 ease-in-out rounded border-sky-700 dark:border-amber-400 text-white dark:text-gray-500 bg-sky-700 dark:bg-amber-400 hover:text-sky-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-opacity-0"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
        <div className="card rounded relative group box-shadow shadow-lg overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src={animator}
            alt="Animator Portfolio"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-3 bg-[#fff8e5] bg-opacity-80 sm:bg-opacity-90 dark:bg-slate-600 dark:bg-opacity-80">
            <h4 className="lg:group-hover:mb-0 text-gl md:text-xl font-semibold group-hover:pb-0 transition-all duration-300 dark:text-white">
              CG Artist Portfolio
            </h4>
            <p className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-slate-600 leading-6 lg:leading-8 dark:text-white">
             Single page portfolio website built with Alpine.js, Vite, Tailwind CSS, and GSAP. Find the source code on my{" "}
              <a
                className="text-sky-600 dark:text-amber-400"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AleKoles/aha-animator"
              >
                GitHub
              </a>
              .
            </p>
            <a
              href="https://petrov-3d-animation.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit px-3 py-1 border-2 duration-150 ease-in-out rounded border-sky-700 dark:border-amber-400 text-white dark:text-gray-500 bg-sky-700 dark:bg-amber-400 hover:text-sky-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-opacity-0"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="font-semibold text-2xl md:text-3xl py-2 dark:text-white">
          Team Projects
        </h3>
        <p className="dark:text-white/70 md:text-lg">From Wireframe and Prototype to Frontent Implementation</p>
      </div>
      <div className=" flex flex-col lg:grid grid-cols-3 gap-8 justify-around pt-8">
      
        <div className="card rounded relative group shadow-lg box-shadow overflow-hidden">
          
          <Image
            className="object-cover"
            src={sart}
            alt="Personal Author's Website"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-3 bg-[#fff8e5] bg-opacity-80 sm:bg-opacity-90 dark:bg-slate-600 dark:bg-opacity-80">
            <p className="lg:group-hover:mb-0 text-lg md:text-xl font-semibold group-hover:pb-0 transition-all duration-300 dark:text-white">
              S-Art E-Commerece Webpage
            </p>
            <p className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-slate-600 dark:text-white leading-6 lg:leading-8">
              Implemented with MODX, Alpine.js, GSAP, and Tailwind.
            </p>
            <a
              href="https://s-art.work/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit duration-150 ease-in-out px-3 py-1 border-2 rounded border-sky-700 dark:border-amber-400 text-white dark:text-slate-600 bg-sky-700 dark:bg-amber-400 hover:text-sky-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-opacity-0"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Works;
