
import About from "./components/about";
import CardStacks from "./components/cards-stacks";
import Footer from "./components/footer";
import Header from "./components/header";
import Principal from "./components/principal";
import Projects from "./components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <Principal />
      </div>

      <CardStacks />
      
      <About />

      <Projects />

      <Footer/>
    </div>
  );
}
