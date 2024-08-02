import Head from "next/head";
import { TbTie } from "react-icons/tb";
import { SlMagicWand } from "react-icons/sl";
import { useState } from "react";
import Link from "next/link";
import Tabs from "./tabs";
import Works from "./works";
import Footer from "./footer";
import ScrollUp from "./scrollup";
import Hero from "./hero";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
       <Head>
      <title>Oleksandra Kolesnikova | Frontend Developer Portfolio</title>
      <meta
        name="description"
        content="Web frontend developer's portfolio showcasing expertise in HTML, CSS, JavaScript, React, and more. Explore my projects, skills, and contact information."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.svg" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Oleksandra Kolesnikova | Frontend Developer Portfolio" />
      <meta
        property="og:description"
        content="Oleksandra Kolesnikova's professional frontend developer portfolio showcasing expertise in HTML, CSS, JavaScript, React, and more. Explore my projects, skills, and contact information."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kolesnikova-portfolio.netlify.app/" />
      <meta property="og:image" content="https://kolesnikova-portfolio.netlify.app/Kolesnikova2.webp" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kolesnikova-portfolio.netlify.app/" />
      <meta property="twitter:title" content="Oleksandra Kolesnikova | Frontend Developer Portfolio" />
      <meta
        property="twitter:description"
        content="Oleksandra Kolesnikova's professional frontend developer portfolio showcasing expertise in HTML, CSS, JavaScript, React, and more. Explore my projects, skills, and contact information."
      />
      <meta property="twitter:image" content="https://kolesnikova-portfolio.netlify.app/Kolesnikova2.webp" />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Oleksandra Kolesnikova" />
      <meta name="keywords" content="frontend developer, web developer, HTML, CSS, JavaScript, React, Alpine.js, GSAP, MODX, Wagtail, Tailwind, Bootstrap, portfolio, Oleksandra Kolesnikova" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://kolesnikova-portfolio.netlify.app/" />
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
                  href="https://drive.google.com/uc?export=download&id=17-lQ9rvbonVJ_JA_0_I3QiIfhcItFgMK"
                >
                  Resume
                </Link>
              </li> 
            </ul>
          </nav>
        </section>
        <Hero />
        <Tabs />
        <Works />
        <Footer />
        <ScrollUp />
      </main>
    </div>
  );
}
