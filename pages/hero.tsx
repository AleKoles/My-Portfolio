import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import avatar from "../public/Kolesnikova.webp";
import avatarDark from "../public/Kolesnikova2.webp";

const Hero = () => {
    return (
        <section className="h-fit mt-4">
        <div className="text-center p-6">
          <h2 className="font-bold text-4xl md:text-5xl text-fuchsia-700 tracking-wide py-2 dark:text-white">
            Oleksandra Kolesnikova
          </h2>
          <h3 className="font-semibold text-2xl md:text-3xl py-2  dark:text-amber-400">
            Frontend Developer and Web Content Designer
          </h3>
        </div>
        <div className="text-4xl text-gray-600 dark:text-gray-200 flex justify-center gap-16 py-3">
          <a
            href="https://www.linkedin.com/in/oleksandra-kolesnikova/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillLinkedin className="hover:scale-110 hover:text-black dark:hover:text-white" />
          </a>
          <a
            href="https://github.com/AleKoles"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillGithub className="hover:scale-110 hover:text-black dark:hover:text-white" />
          </a>
          <a
            href="mailto:kolesnikova.alexandra@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineMail className="hover:scale-110 hover:text-black dark:hover:text-white" />
          </a>
        </div>
        <div className="relative rounded-full w-72 h-72 mx-auto mt-10 mb-12 overflow-hidden border-2 dark:border-white">
          <Image
            src={avatar}
            className="dark:hidden"
            alt="Oleksandra Kolesnikova"
          />
          <Image
            src={avatarDark}
            className="hidden dark:block"
            alt="Oleksandra Kolesnikova"
          />
        </div>
        </section>
    );
  };
  
  export default Hero;


