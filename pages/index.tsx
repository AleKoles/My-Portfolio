import Head from "next/head";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbTie } from "react-icons/tb";
import { SlMagicWand } from "react-icons/sl";
import Image from "next/image";
import { useState } from "react";
import avatar from "../public/Kolesnikova.jpg";
import avatarDark from "../public/Kolesnikova2.png";
import Link from "next/link";
import Tabs from "./tabs";
import Works from "./works";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Oleksandra Kolesnikova Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-8 pb-16 md:px-16 lg:px-40 dark:bg-gray-500">
        <section>
          <nav className="py-8 md:px-2 flex justify-between">
            <h1 className="font-bold uppercase text-lg tracking-wide dark:text-white">
              <span className="hidden sm:inline">Developer</span> Portfolio
            </h1>
            <ul className="flex justify content-between gap-8 font-semibold">
              <li className="mt-1 cursor-pointer">
                <TbTie
                  className="text-2xl dark:hidden"
                  onClick={() => setDarkMode(!darkMode)}
                />
                <SlMagicWand
                  className="text-2xl -mt-1 text-white hidden dark:inline"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <Link
                  className="box-border px-2 py-1 border-2 rounded border-fuchsia-700 dark:border-amber-400 text-white dark:text-gray-500 bg-fuchsia-700 dark:bg-amber-400 hover:text-fuchsia-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-gray-500"
                  href="https://drive.google.com/uc?export=download&id=15pNDxQcJxCk4G0rRf4Koridxd81vZeEu"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </section>
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
              rel="noreferrer"
            >
              <AiFillLinkedin className="hover:scale-110 hover:text-black dark:hover:text-white" />
            </a>
            <a
              href="https://github.com/AleKoles"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="hover:scale-110 hover:text-black dark:hover:text-white" />
            </a>
            <a
              href="mailto:kolesnikova.alexandra@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="hover:scale-110 hover:text-black dark:hover:text-white" />
            </a>
          </div>
          <div className="relative rounded-full w-72 h-72 mx-auto mt-10 mb-12 overflow-hidden border-2 border-white">
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
        <Tabs />
        <Works />
      </main>
    </div>
  );
}
