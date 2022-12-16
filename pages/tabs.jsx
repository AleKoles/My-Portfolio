import React from "react";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiCss3,
  SiGreensock,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiJavascript,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiPhotoshop, DiSass } from "react-icons/di";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-semibold text-2xl md:text-3xl px-5 py-3  block leading-normal " +
                  (openTab === 1
                    ? "text-black border-b-4 border-fuchsia-700"
                    : "text-gray-600")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                What I Do
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-semibold text-2xl md:text-3xl px-5 py-3 block leading-normal " +
                  (openTab === 2
                    ? "text-black border-b-4 border-fuchsia-700"
                    : "text-gray-600")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                My Toolbox
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="py-5 text-md lg:text-lg text-gray-600 leading-8">
                    I am a frontend developer passionate about web content
                    creation and delivering outstanding user experience. I
                    develop SEO friendly websites with responsive design and
                    top-notch content readability.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex justify-between align-middle flex-wrap gap-4 py-5">
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <AiOutlineHtml5 className="text-4xl mx-auto" />
                      <p>HTML5</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <SiCss3 className="text-4xl mx-auto" />
                      <p>CSS</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <DiSass className="text-4xl mx-auto" />
                      <p>Sass</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <BsBootstrap className="text-4xl mx-auto" />
                      <p>Bootstrap</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <SiTailwindcss className="text-4xl mx-auto" />
                      <p>Tailwind</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <SiJavascript className="text-4xl mx-auto" />
                      <p>JavaScript</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <SiReact className="text-4xl mx-auto" />
                      <p>React</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <SiNextdotjs className="text-4xl mx-auto" />
                      <p>Next.js</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <SiGreensock className="text-4xl mx-auto" />
                      <p>GSAP</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <AiFillGithub className="text-4xl mx-auto" />
                      <p>GitHub</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <SiFigma className="text-4xl mx-auto" />
                      <p>Figma</p>
                    </div>
                    <div className="flex flex-col justify-center text-gray-600 hover:scale-110 hover:text-black">
                      <DiPhotoshop className="text-4xl mx-auto" />
                      <p>Photoshop</p>
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
