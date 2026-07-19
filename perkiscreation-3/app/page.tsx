import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Products from "./components/Products";
import GoodToKnow from "./components/GoodToKnow";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="promiseStrip">
          <span>Mit Liebe handgefertigt</span>
          <span>Echte Blüten</span>
          <span>Jedes Stück ein Unikat</span>
        </section>
        <Process />
        <Products />
        <GoodToKnow />
        <Contact />
      </main>
    </>
  );
}
