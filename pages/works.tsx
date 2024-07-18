import Image from "next/image";
import weather from "../public/weather.webp";
import dictionary from "../public/dictionary.webp";
import animator from "../public/animator-portfolio.webp";
import gem from "../public/SpiritStone.webp";

const Works = () => {
  return (
    <section>
      <div className="text-center">
        <h3 className="font-semibold text-2xl md:text-3xl py-2 dark:text-white">
          Have a Look at my Works
        </h3>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-8 justify-around pt-8">
        <div className="card rounded relative group shadow-lg overflow-hidden">
          <Image
            className="object-cover"
            src={weather}
            alt="WeatherApp Image"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-4 bg-white bg-opacity-80 sm:bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-80">
            <span className="lg:group-hover:mb-0 text-lg md:text-2xl font-semibold group-hover:pb-0 transition-all duration-300 dark:text-white">
              Weather App
            </span>
            <span className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 dark:text-white leading-6 lg:leading-8">
              An app made with Sass, Bootstrap, React.js, Axios, and OpenWeather
              API. Shows current weather and a five-day forecast.
              <br /> This app also has a{" "}
              <a
                href="https://alekole-weather.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-fuchsia-600 dark:text-amber-400"
              >
                Vanilla JS version
              </a>{" "}
              .
            </span>
            <a
              href="https://alekole-weather-react.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit px-2 py-1 border-2 rounded border-fuchsia-700 dark:border-amber-400 text-white dark:text-gray-500 bg-fuchsia-700 dark:bg-amber-400 hover:text-fuchsia-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-opacity-0"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
        <div className="card rounded relative group shadow-lg overflow-hidden">
          <Image
            className="object-cover"
            src={animator}
            alt="Animator Image"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-4 bg-white bg-opacity-80 sm:bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-80">
            <span className="lg:group-hover:mb-0 text-lg md:text-2xl font-semibold group-hover:pb-0 transition-all duration-300 dark:text-white">
              Animator&apos;s Portfolio
            </span>
            <span className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 dark:text-white leading-6 lg:leading-8">
              A muti-page cv/portfolio for a CG artist made with React and
              Tailwind CSS. Transition between pages is enabled with React
              Router. <br /> Find the source code on my{" "}
              <a
                className="text-fuchsia-600 dark:text-amber-400"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AleKoles/animator-cv-portfolio"
              >
                GitHub
              </a>
              .
            </span>
            <a
              href="https://petrov-3d-animator.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit px-2 py-1 border-2 rounded border-fuchsia-700 dark:border-amber-400 text-white dark:text-gray-500 bg-fuchsia-700 dark:bg-amber-400 hover:text-fuchsia-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-opacity-0"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
        <div className="card rounded relative group shadow-lg overflow-hidden">
          <Image
            className="object-cover"
            src={dictionary}
            alt="DictionaryApp Image"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-4 bg-white bg-opacity-80 sm:bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-80">
            <span className="lg:group-hover:mb-0 text-gl md:text-2xl font-semibold group-hover:pb-0 transition-all duration-300 dark:text-white">
              Dictionary App
            </span>
            <span className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 leading-6 lg:leading-8 dark:text-white">
              A thesaurus with word definition, examples, and illustrations.
              Made with React, Bootstrap, Sass, Google Dictionary API, and
              Pexels API.
              <br /> Find the source code on my{" "}
              <a
                className="text-fuchsia-600 dark:text-amber-400"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AleKoles/react-dictionary-app"
              >
                GitHub
              </a>
              .
            </span>
            <a
              href="https://alekole-dictionary.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit px-2 py-1 border-2 rounded border-fuchsia-700 dark:border-amber-400 text-white dark:text-gray-500 bg-fuchsia-700 dark:bg-amber-400 hover:text-fuchsia-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-opacity-0"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
        <div className="card rounded relative group shadow-lg overflow-hidden">
          <Image
            className="object-cover"
            src={gem}
            alt="SpiritStone Image"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-4 bg-white bg-opacity-80 sm:bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-80">
            <span className="lg:group-hover:mb-0 text-gl md:text-2xl font-semibold group-hover:pb-0 transition-all duration-300 dark:text-white">
              Small Business Webpage
            </span>
            <span className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 leading-6 lg:leading-8 dark:text-white">
              A business webpage for a small gem-cutting business in Ukraine. Made with React, Tailwind CSS, and GSAP.
              <br /> Find the source code on my{" "}
              <a
                className="text-fuchsia-600 dark:text-amber-400"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AleKoles/spiritstone"
              >
                GitHub
              </a>
              .
            </span>
            <a
              href="https://spiritstone-gemworks.com/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit px-2 py-1 border-2 rounded border-fuchsia-700 dark:border-amber-400 text-white dark:text-gray-500 bg-fuchsia-700 dark:bg-amber-400 hover:text-fuchsia-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-opacity-0"
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
