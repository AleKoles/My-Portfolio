import Head from "next/head";
import { TbTie } from "react-icons/tb";
import { SlMagicWand } from "react-icons/sl";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";

import Works from "./works";
import Footer from "./footer";
import ScrollUp from "./scrollup";
import Hero from "./hero";
import SaasUiCard from "./saas-ui";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true); // safe SSR default
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode, mounted]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Oleksandra | UX Engineer | Design Systems & Frontend</title>
        <meta
          name="description"
          content="UX Engineer specializing in Design Systems and Frontend Development. Expert in React, TypeScript, Tailwind, Storybook, and WCAG 2.2 accessibility."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="keywords"
          content="Design Engineer, UX Engineer, Design Systems, React, TypeScript, Medusa.js, Storybook, Chromatic, Tailwind CSS, Frontend Architecture"
        />
        <meta
          property="og:title"
          content="Oleksandra Kolesnikova | Senior Design Engineer"
        />
        <meta
          property="og:image"
          content="https://kolesnikova-portfolio.netlify.app/Kolesnikova2.webp"
        />
        <link rel="canonical" href="https://kolesnikova-portfolio.netlify.app/" />
      </Head>

      <main className="min-h-screen pb-16 bg-[#fff9e8] dark:bg-slate-900 transition-colors duration-500">
        <section className="sticky top-0 z-50 bg-[#fff9e8] dark:bg-slate-900 shadow-sm transition-colors duration-500">
          <nav className="px-4 py-3 md:px-6 md:py-4 mx-auto max-w-7xl flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="font-bold uppercase text-[13px] sm:text-sm md:text-base tracking-widest dark:text-white">
                <span className="text-sky-700 dark:text-amber-400">Oleksandra</span>{" "}
                Kolesnikova
              </h1>
              <span className="hidden lg:inline opacity-60 ml-3 font-medium tracking-normal normal-case text-sm dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-3">
                UX Engineer
              </span>
            </div>

            <ul className="flex items-center gap-3 sm:gap-6 md:gap-8">
              <li className="flex rounded-full items-center">
                {mounted ? (
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    className="p-2 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95"
                  >
                    {darkMode ? (
                      <SlMagicWand className="text-xl md:text-2xl text-amber-400" />
                    ) : (
                      <TbTie className="text-xl md:text-2xl text-sky-800" />
                    )}
                  </button>
                ) : (
                  <div className="p-2 w-8 h-8" />
                )}
              </li>

              <li className="rounded-full">
                <Link
                  className="flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2 bg-sky-700 dark:bg-amber-400 text-white dark:text-slate-900 hover:bg-sky-800 dark:hover:bg-amber-300 rounded-full font-bold text-[12px] md:text-sm transition-all shadow-md active:scale-95"
                  href="https://drive.google.com/uc?export=download&id=1uzkPnRTpDDnruGJ21kk1q5QT3FheikMX"
                >
                  <span className="tracking-widest">CV</span>
                  <IoCloudDownloadOutline className="text-xl md:text-2xl" />
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className="space-y-28">
          <Hero />
          <SaasUiCard />
          <Works />
        </section>

        <Footer />
        <ScrollUp />
      </main>
    </div>
  );
}