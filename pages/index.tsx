import Head from "next/head";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Nav } from "../components/Nav";
import { About } from "../components/About";
import { Service } from "../components/Service";
import { Work } from "../components/Work";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="SOuydXDlnwUyQdZkzpta5SdTno76qKhMMZ96aEZj05c"
        />
        <title>Santiago Segurado | Full Stack Developer</title>
        <meta
          name="description"
          content="Soy Santiago Segurado desarrollado Full Stack hace 3 años, trabajemos juntos!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta
          property="og:title"
          content="Santiago Segurado Desarrollado Full Stack"
        />
        <meta
          property="og:description"
          content="En mi portafolio podras ver mis utlimos proyectos"
        />
        <meta property="og:image" content="/ogImage.svg" />
        <meta
          name="keywords"
          content="Programador, Full Stack, Front End, Back End, Developer, JavaScript, React"
        />
      </Head>
      <main className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Banner />
        <Nav />
        <About />
        <div className="h-[200px]"></div>
        <Service />
        <div className="h-[200px]"></div>
        <Work />
        <Contact />
        <div className="h-[200px]"></div>
      </main>
    </>
  );
}
