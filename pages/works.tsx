import Image from "next/image";
import avatar from "../public/Kolesnikova.jpg";

const Works = () => {
  return (
    <section>
      <div className="text-center">
        <h3 className="font-semibold text-2xl md:text-3xl py-2">
          Have a Look at my Works
        </h3>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-y-8 justify-around pt-8">
        <div className="mb-12 card md:w-2/5 w-full rounded aspect-[11/12] relative group shadow-lg overflow-hidden">
          <Image
            className="w-full h-full object-cover aspect-square"
            src={avatar}
            alt="WeatherApp Image"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-4 bg-white bg-opacity-90">
            <span className="-mb-16 group-hover:mb-0 text-3xl font-semibold group-hover:pb-0 transition-all duration-300">
              Weather App
            </span>
            <span className="lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-md text-gray-600 leading-8">
              Weather app made with Sass, Bootstrap, React.js, Axios, and
              OpenWeather API. Shows current temperature, humidity, wind speed.
              Has animated weather icons and a five-day forecast. <br /> This
              app also has a{" "}
              <a
                href="https://alekole-weather.netlify.app/"
                target="_blank"
                className="text-fuchsia-600"
              >
                Vanilla JS version
              </a>{" "}
              with a location finder.
            </span>
            <a
              href="https://alekole-weather-react.netlify.app/"
              target="_blank"
              className="mb-2 box-border font-bold w-fit px-2 py-1 border-2 rounded border-fuchsia-700 text-white bg-fuchsia-700 hover:text-fuchsia-700 hover:bg-white"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
        <div className="mb-12 card md:w-2/5 w-full rounded aspect-[11/12] relative group shadow-lg overflow-hidden">
          <Image
            className="w-full h-full object-cover aspect-square"
            src={avatar}
            alt="WeatherApp Image"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-4 bg-white bg-opacity-90">
            <span className="-mb-16 group-hover:mb-0 text-3xl font-semibold group-hover:pb-0 transition-all duration-300">
              Weather App
            </span>
            <span className="lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-md text-gray-600 leading-8">
              Weather app made with Sass, Bootstrap, React.js, Axios, and
              OpenWeather API. Shows current temperature, humidity, wind speed.
              Has animated weather icons and a five-day forecast. <br /> This
              app also has a{" "}
              <a
                href="https://alekole-weather.netlify.app/"
                target="_blank"
                className="text-fuchsia-600"
              >
                Vanilla JS version
              </a>{" "}
              with a location finder.
            </span>
            <a
              href="https://alekole-weather-react.netlify.app/"
              target="_blank"
              className="mb-2 box-border font-bold w-fit px-2 py-1 border-2 rounded border-fuchsia-700 text-white bg-fuchsia-700 hover:text-fuchsia-700 hover:bg-white"
            >
              Visit this Webpage
            </a>
          </div>
        </div>
        <div className="mb-12 card md:w-2/5 w-full rounded aspect-[11/12] relative group shadow-lg overflow-hidden">
          <Image
            className="w-full h-full object-cover aspect-square"
            src={avatar}
            alt="WeatherApp Image"
          />
          <div className="absolute transform lg:translate-y-3/4 group-hover:translate-y-0 transition-all duration-300 bottom-0 left-0 w-full flex flex-col gap-4 px-4 py-4 bg-white bg-opacity-90">
            <span className="-mb-16 group-hover:mb-0 text-3xl font-semibold group-hover:pb-0 transition-all duration-300">
              Weather App
            </span>
            <span className="lg:opacity-0 group-hover:opacity-100 transition-all duration-300 text-md text-gray-600 leading-8">
              Weather app made with Sass, Bootstrap, React.js, Axios, and
              OpenWeather API. Shows current temperature, humidity, wind speed.
              Has animated weather icons and a five-day forecast. <br /> This
              app also has a{" "}
              <a
                href="https://alekole-weather.netlify.app/"
                target="_blank"
                className="text-fuchsia-600"
              >
                Vanilla JS version
              </a>{" "}
              with a location finder.
            </span>
            <a
              href="https://alekole-weather-react.netlify.app/"
              target="_blank"
              className="mb-2 box-border font-bold w-fit px-2 py-1 border-2 rounded border-fuchsia-700 text-white bg-fuchsia-700 hover:text-fuchsia-700 hover:bg-white"
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
