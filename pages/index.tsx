import Head from "next/head";

import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oleksandra Kolesnikova Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section>
          <nav className="py-8 px-2 md:px-4 flex justify-between">
            <h1 className="font-bold uppercase">Developer Portfolio</h1>
            <ul className="flex justify content-between gap-8 font-semibold">
              <li className="mt-1 cursor-pointer">
                <BsFillMoonStarsFill />
              </li>
              <li>Skills</li>
              <li>Works</li>
              <li>Contact Me</li>
              <li>
                <a
                  className="box-border px-2 py-1 border-2 rounded border-amber-400 text-white bg-amber-400 hover:text-amber-400 hover:bg-white"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="bg-amber-400 h-fit lg:h-screen">
          <h1 className="font-bold text-5xl tracking-wide">
            Oleksandra Kolesnikova
          </h1>
          <h2 className="font-semibold text-3xl">Frontend Developer</h2>
        </section>
      </main>
    </>
  );
}
