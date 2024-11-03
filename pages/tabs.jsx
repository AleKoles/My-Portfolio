import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiGreensock,
  SiReact,
  SiTailwindcss,
  SiAlpinedotjs,
  SiFigma,
  SiJavascript,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { DiPhotoshop, DiSass, DiIllustrator } from "react-icons/di";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
      <div className="flex flex-wrap mx-auto max-w-7xl">
        <div className="w-full">
          <div
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          >
            <div className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-semibold text-2xl md:text-3xl px-5 py-3 block leading-normal " +
                  (openTab === 1
                    ? "text-black border-b-4 border-sky-700 dark:border-amber-400 dark:text-white"
                    : "text-gray-600 dark:text-gray-200")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
              >
                <h3>About me</h3>
              </a>
            </div>
            <div className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-semibold text-2xl md:text-3xl px-5 py-3 block leading-normal " +
                  (openTab === 2
                    ? "text-black border-b-4 border-sky-700 dark:border-amber-400 dark:text-white"
                    : "text-gray-600 dark:text-gray-200")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
              >
                <h3>My Toolbox</h3>
              </a>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "block" : "hidden"}
                  id="link1"            
                >
                  <p className="py-5 text-md lg:text-xl text-gray-600 dark:text-white leading-8">
                    I am a frontend developer passionate about web content
                    creation and delivering outstanding user experience. I
                    develop SEO friendly websites optimized for speed and
                    readability with responsive design, and fun animations.
                  </p>
                </div>
                <div
                  className={openTab === 2 ? "block" : "hidden"}
                  id="link2"                
                >
                  <div className="flex justify-center xl:justify-between align-middle flex-wrap gap-8 py-5">
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <AiOutlineHtml5 className="text-4xl mx-auto" />
                      <h4>HTML5</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <SiCss3 className="text-4xl mx-auto" />
                      <h4>CSS</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <DiSass className="text-4xl mx-auto" />
                      <h4>Sass</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <BsBootstrap className="text-4xl mx-auto" />
                      <h4>Bootstrap</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <SiTailwindcss className="text-4xl mx-auto" />
                      <h4>Tailwind</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <SiJavascript className="text-4xl mx-auto" />
                      <h4>JavaScript</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <SiReact className="text-4xl mx-auto" />
                      <h4>React</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <SiAlpinedotjs className="text-4xl mx-auto" />
                      <h4>Alpine.js</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <SiGreensock className="text-4xl mx-auto" />
                      <h4>GSAP</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <FaGitAlt className="text-4xl mx-auto" />
                      <h4>Git</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <SiFigma className="text-4xl mx-auto" />
                      <h4>Figma</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <DiPhotoshop className="text-4xl mx-auto" />
                      <h4>Photoshop</h4>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black dark:text-gray-200 dark:hover:text-white">
                      <DiIllustrator className="text-4xl mx-auto" />
                      <h4>Illustrator</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;

