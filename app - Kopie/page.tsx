import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Reservation from "./components/Reservation";
import Products from "./components/Products";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import GoodToKnow from "./components/GoodToKnow";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Reservation />
      <Products />
      <Process />
      <GoodToKnow />
      <FAQ />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  );
}
