import Image from "next/image";
import weather from "../public/weather.png";
import dictionary from "../public/dictionary.png";
import animator from "../public/animator-portfolio.png";

const Works = () => {
  return (
    <section className="mb-16">
      <div className="text-center">
        <h3 className="font-semibold text-2xl md:text-3xl py-2">
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
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-4 bg-white bg-opacity-80 sm:bg-opacity-90">
            <span className="lg:group-hover:mb-0 text-lg md:text-3xl font-semibold group-hover:pb-0 transition-all duration-300">
              Weather App
            </span>
            <span className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 leading-6 lg:leading-8">
              An app made with Sass, Bootstrap, React.js, Axios, and OpenWeather
              API. Shows current weather and a five-day forecast.
              <br /> This app also has a{" "}
              <a
                href="https://alekole-weather.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-fuchsia-600"
              >
                Vanilla JS version
              </a>{" "}
              .
            </span>
            <a
              href="https://alekole-weather-react.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit px-2 py-1 border-2 rounded border-fuchsia-700 text-white bg-fuchsia-700 hover:text-fuchsia-700 hover:bg-white"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
        <div className="card rounded relative group shadow-lg overflow-hidden">
          <Image
            className="object-cover"
            src={animator}
            alt="WeatherApp Image"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-4 bg-white bg-opacity-80 sm:bg-opacity-90">
            <span className="lg:group-hover:mb-0 text-lg md:text-3xl font-semibold group-hover:pb-0 transition-all duration-300">
              Animator&apos;s Portfolio
            </span>
            <span className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 leading-6 lg:leading-8">
              A muti-page cv/portfolio for a CG artist made with React and
              Tailwind CSS. Transition between pages is enabled with React
              Router. <br /> Find the source code on my{" "}
              <a
                className="text-fuchsia-600"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AleKoles?tab=repositories"
              >
                GitHub
              </a>
              .
            </span>
            <a
              href="https://petrov-3d-animator.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit px-2 py-1 border-2 rounded border-fuchsia-700 text-white bg-fuchsia-700 hover:text-fuchsia-700 hover:bg-white"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
        <div className="card rounded relative group shadow-lg overflow-hidden">
          <Image
            className="object-cover"
            src={dictionary}
            alt="WeatherApp Image"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-4 bg-white bg-opacity-80 sm:bg-opacity-90">
            <span className="lg:group-hover:mb-0 text-gl md:text-3xl font-semibold group-hover:pb-0 transition-all duration-300">
              Dictionary App
            </span>
            <span className="hidden sm:block lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 leading-6 lg:leading-8">
              A thesaurus with word definition, examples, and illustrations.
              Made with React, Bootstrap, Sass, Google Dictionary API, and
              Pexels API.
              <br /> Find the source code on my{" "}
              <a
                className="text-fuchsia-600"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AleKoles?tab=repositories"
              >
                GitHub
              </a>
              .
            </span>
            <a
              href="https://alekole-dictionary.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="md:mb-2 box-border font-bold w-fit px-2 py-1 border-2 rounded border-fuchsia-700 text-white bg-fuchsia-700 hover:text-fuchsia-700 hover:bg-white"
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
