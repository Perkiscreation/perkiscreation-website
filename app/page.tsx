import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Products from "./components/Products";
import BeforeAfter from "./components/BeforeAfter";
import Process from "./components/Process";
import GoodToKnow from "./components/GoodToKnow";
import PersonalizationExample from "./components/PersonalizationExample";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Why />
      <Products />
      <BeforeAfter />
      <Process />
      <GoodToKnow />
      <PersonalizationExample />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}