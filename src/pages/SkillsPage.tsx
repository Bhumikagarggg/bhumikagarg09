import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
