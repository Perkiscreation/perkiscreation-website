import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Products from "./components/Products";
import Reservation from "./components/Reservation";
import Process from "./components/Process";
import GoodToKnow from "./components/GoodToKnow";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Why />
      <Process />
      <Products />
      <Reservation />
      <GoodToKnow />
      <Contact />
      <FAQ />
      <Footer />
      <CookieBanner />
    </main>
  );
}
