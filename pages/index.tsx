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
  const [darkMode, setDarkMode] = useState(true); // SSR-safe default
  const [mounted, setMounted] = useState(false);

  // ─── Detect system theme AFTER mount ─────────────────────────────
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDarkMode(prefersDark);
    setMounted(true);
  }, []);

  // ─── Apply theme ONLY after mount ────────────────────────────────
  useEffect(() => {
    if (!mounted) return;

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode, mounted]);

  // ─── IMPORTANT: prevent hydration mismatch ───────────────────────
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#fff9e8] dark:bg-slate-900 transition-colors duration-500" />
    );
  }

  return (
    <>
      <Head>
        <title>
          Oleksandra Kolesnikova | UX Engineer | Product Designer | UI Systems Architect
        </title>

        <meta
          name="description"
          content="UX Engineer specializing in Design Systems and Frontend Development. Expert in React, TypeScript, Tailwind, Storybook, and WCAG 2.2 accessibility."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.svg" />

        <meta
          name="keywords"
          content="Design Engineer, UX Engineer, Design Systems, React, TypeScript, Medusa.js, Storybook, Tailwind CSS, Frontend Architecture, Design Technologist, Design Ops, UI Systems Architect, Product Engineer (Design-focused)"
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

      <div className="min-h-screen flex flex-col bg-[#fff9e8] dark:bg-slate-900 transition-colors duration-500">
        {/* ─── NAVBAR ───────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-[#fff9e8] dark:bg-slate-900 shadow-sm transition-colors duration-500">
          <nav className="px-4 py-3 md:px-6 md:py-4 mx-auto max-w-7xl flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="font-bold uppercase text-[13px] sm:text-sm md:text-base tracking-widest dark:text-white">
                <span className="text-sky-700 dark:text-amber-400">
                  Oleksandra
                </span>{" "}
                Kolesnikova
              </h1>

              <span className="hidden lg:inline opacity-60 ml-3 font-medium text-sm dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-3">
                 UX Engineer | Product Designer | Systems Architect
              </span>
            </div>

            <ul className="flex items-center gap-3 sm:gap-6 md:gap-8">
              {/* Theme toggle */}
              <li>
                <button
                  onClick={() => setDarkMode((prev) => !prev)}
                  aria-label={
                    darkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                  className="p-2 rounded-full transition-transform hover:scale-110 active:scale-95"
                >
                  {darkMode ? (
                    <SlMagicWand className="text-xl md:text-2xl text-amber-400" />
                  ) : (
                    <TbTie className="text-xl md:text-2xl text-sky-800" />
                  )}
                </button>
              </li>

              {/* CV button */}
              <li>
                <Link
                  className="flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2 bg-sky-700 dark:bg-amber-400 text-white dark:text-slate-900 hover:bg-sky-800 dark:hover:bg-amber-300 rounded-full font-bold text-[12px] md:text-sm transition-all shadow-md active:scale-95"
                  href="https://drive.google.com/uc?export=download&id=1t2ndTybEOShkNMgVD0j3LSQNwtB-yf3b"
                >
                  <span className="tracking-widest">CV</span>
                  <IoCloudDownloadOutline className="text-xl md:text-2xl" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* ─── MAIN CONTENT ─────────────────────────────────────── */}
        <main className="flex-1 pb-16 space-y-28">
          <Hero />
          <SaasUiCard />
          <Works />
        </main>

        {/* ─── FOOTER ───────────────────────────────────────────── */}
        <Footer />
        <ScrollUp />
      </div>
    </>
  );
}