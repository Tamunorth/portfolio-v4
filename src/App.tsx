import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { BigTextMarquee } from "./components/BigTextMarquee";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CursorGlow } from "./components/animations";

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <BigTextMarquee />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
