import ArticleComponent from "@/components/ArticleComponent";
import ContactCTA from "@/components/ContactCTA";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import POW from "@/components/POW";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />
      <Experience />
      <Skills />
      <ArticleComponent />
      <POW />
      <Projects />
      <ContactCTA />
      <Footer />
    </main>
  );
}
