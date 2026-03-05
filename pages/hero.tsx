import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineHtml5 } from "react-icons/ai";
import {
  SiCss3, SiGreensock, SiReact, SiTailwindcss,
  SiAlpinedotjs, SiFigma, SiJavascript,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { DiPhotoshop, DiSass, DiIllustrator } from "react-icons/di";
import { MdDevices, MdOutlineMap, MdOutlineAccountTree, MdOutlineSpaceDashboard } from "react-icons/md";
import Image from "next/image";
import avatar from "../public/Split.png";
import avatarDark from "../public/Split.png";
import { useRef, useEffect, useState } from "react";

const DEV_SKILLS = [
  { label: "HTML5",      Icon: AiOutlineHtml5 },
  { label: "CSS3",       Icon: SiCss3         },
  { label: "JavaScript", Icon: SiJavascript   },
  { label: "React",      Icon: SiReact        },
  { label: "Tailwind",   Icon: SiTailwindcss  },
  { label: "Alpine.js",  Icon: SiAlpinedotjs  },
  { label: "GSAP",       Icon: SiGreensock    },
  { label: "Git",        Icon: FaGitAlt       },
  { label: "Bootstrap",  Icon: BsBootstrap    },
  { label: "Sass",       Icon: DiSass         },
];

const DESIGN_SKILLS = [
  { label: "Illustrator",    Icon: DiIllustrator           },
  { label: "UI/UX",          Icon: MdDevices               },
  { label: "Photoshop",      Icon: DiPhotoshop             },
  { label: "Figma",          Icon: SiFigma                 },
  { label: "User Journey",   Icon: MdOutlineMap            },
  { label: "Prototyping",    Icon: MdOutlineAccountTree    },
  { label: "Design Systems", Icon: MdOutlineSpaceDashboard },
];

function arcPositions(count: number, side: "left" | "right", rx: number, ry: number, spreadDeg = 156) {
  return Array.from({ length: count }, (_, i) => {
    const base  = side === "right" ? -spreadDeg / 2 : 180 - spreadDeg / 2;
    const angle = base + (spreadDeg / (count - 1)) * i;
    const rad   = (angle * Math.PI) / 180;
    return { x: Math.cos(rad) * rx, y: Math.sin(rad) * ry };
  });
}

function useBobble(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (!ref.current) return;
    const dur  = 2400 + Math.random() * 700;
    const amp  = 5 + Math.random() * 5;
    const anim = ref.current.animate(
      [{ transform: "translateY(0px)" }, { transform: `translateY(-${amp}px)` }],
      { duration: dur, direction: "alternate", iterations: Infinity, easing: "ease-in-out" }
    );
    anim.currentTime = Math.random() * dur;
    return () => anim.cancel();
  }, [ref]);
}

type Skill = { label: string; Icon: React.ComponentType<{ size?: number; className?: string }> };

function Badge({ label, Icon, x, y, delay, iconSize }: Skill & { x: number; y: number; delay: number; iconSize: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useBobble(ref);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        translate: `calc(-50% + ${x}px) calc(-50% + ${y}px)`,
        animationDelay: `${delay}ms`,
      }}
      className="opacity-0 animate-[badgeFadeIn_0.45s_ease_forwards]"
    >
      <div className="flex flex-col items-center gap-0.5 cursor-default text-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150 ease-in-out">
        <Icon size={iconSize} />
        <span style={{ fontSize: iconSize * 0.38 }} className="font-bold tracking-wide whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}

function useContainerWidth() {
  const [width, setWidth] = useState(360);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth - 32);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}

const Hero = () => {
  const containerW = useContainerWidth();
  const BADGE_COL  = 72;

  const maxImgW = containerW >= 1280 ? 540 : 360;
  const imgW    = Math.min(maxImgW, containerW - BADGE_COL * 2 - 32);
  const imgH    = imgW * (420 / 360);
  const iconSize = Math.round(14 + (imgW / maxImgW) * 18);

  const rx = imgW / 2 + BADGE_COL * 0.55;
  const ry = imgH / 2 + BADGE_COL * 0.9;
  const W  = rx * 2 + BADGE_COL * 1.2;
  const H  = ry * 2 + BADGE_COL * 1.2;

  const leftPos  = arcPositions(DESIGN_SKILLS.length, "left",  rx, ry);
  const rightPos = arcPositions(DEV_SKILLS.length,    "right", rx, ry);

  return (
    <section className="h-fit mt-4 mx-auto max-w-7xl pb-16">
      <div className="text-center p-6">
        <h2 className="font-bold text-4xl md:text-5xl text-sky-700 tracking-wide py-2 dark:text-white">
          Oleksandra Kolesnikova
        </h2>
        <h3 className="font-semibold text-2xl md:text-3xl py-2 dark:text-amber-400">
          Frontend Design Engineer
        </h3>
      </div>

      <div className="text-4xl text-gray-600 dark:text-gray-200 flex justify-center gap-16 py-3">
        <a href="https://www.linkedin.com/in/oleksandra-kolesnikova/" target="_blank" rel="noreferrer noopener">
          <AiFillLinkedin className="hover:scale-110 hover:text-black dark:hover:text-white" />
        </a>
        <a href="https://github.com/AleKoles" target="_blank" rel="noreferrer noopener">
          <AiFillGithub className="hover:scale-110 hover:text-black dark:hover:text-white" />
        </a>
        <a href="mailto:kolesnikova.alexandra@gmail.com" target="_blank" rel="noreferrer noopener">
          <AiOutlineMail className="hover:scale-110 hover:text-black dark:hover:text-white" />
        </a>
      </div>

      <style>{`
        @keyframes badgeFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>

      <div
        className="relative mx-auto mt-10 mb-12"
        style={{ width: W, height: H, maxWidth: "100%" }}
      >
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            width: imgW, height: imgH,
          }}
        >
          <Image src={avatar}     className="dark:hidden"              alt="Oleksandra Kolesnikova" />
          <Image src={avatarDark} className="hidden w-full dark:block" alt="Oleksandra Kolesnikova" />
        </div>


        {DESIGN_SKILLS.map((s, i) => (
          <Badge key={s.label} {...s} x={leftPos[i].x}  y={leftPos[i].y}  delay={i * 100} iconSize={iconSize} />
        ))}
        {DEV_SKILLS.map((s, i) => (
          <Badge key={s.label} {...s} x={rightPos[i].x} y={rightPos[i].y} delay={i * 100} iconSize={iconSize} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-lg lg:text-xl text-center text-gray-600 dark:text-white leading-8">
          <p>Frontend Design Engineer operating at the intersection of design systems and frontend architecture. I transform high-fidelity concepts into accessible, scalable interfaces using React and modern CSS frameworks, ensuring seamless collaboration between design and engineering.</p>
        </div>
    </section>
  );
};

export default Hero;