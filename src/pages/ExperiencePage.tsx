import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
