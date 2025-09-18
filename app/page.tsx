// import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Spacing } from "./components/spacing";
// import { Status } from "./components/status";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="sm" />
      <Hero />
      {/* <Spacing size="sm"/>
      <Status/> */}
      {/* <Spacing size="sm"/> */}
      <Skills />
      <Spacing size="sm" />
      <Projects />
      <Spacing size="sm" />
      <Contact />
      <Spacing size="sm" />
      <Footer />
    </main>
  );
}
