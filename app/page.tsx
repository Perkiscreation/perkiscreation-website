import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Reservation from "./components/Reservation";
import Process from "./components/Process";
import GoodToKnow from "./components/GoodToKnow";
import BeforeAfter from "./components/BeforeAfter";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import BotanicalDivider from "./components/BotanicalDivider";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <Reservation />
      <Process />
      <GoodToKnow />
      <BeforeAfter />
      <FAQ />
      <BotanicalDivider />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  );
}
