import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import AllProjectSection from "./AllProjectsSection";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // or 'smooth'
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />

      <main className="mt-10">
        <AllProjectSection />
      </main>
    </div>
  );
};

export default ProjectsPage;
