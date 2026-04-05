import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Code2 } from "lucide-react";
import { projects } from "@/datas/ProjectsData";
import { Link, useNavigate } from "react-router-dom";

const NewProjectsSection = () => {
  const MotionLink = motion(Link);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const navigate = useNavigate();

  const featuredProjects =
    projects?.filter((p) => p.featured)?.slice(0, 6) ||
    projects?.slice(0, 3) ||
    [];

  const projectCount = featuredProjects.length;

  if (projectCount === 0) return null;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 relative min-h-screen"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Code2 size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-center mb-8 max-w-2xl mx-auto text-foreground/80">
            Here are some of my recent projects
          </p>
        </div>

        {/* ------------------ Main Grid ------------------ */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 min-h-[80vh]">
          {/* ----------- RIGHT SIDE - Text ----------- */}
          <div className="lg:w-2/5 relative">
            <div className="h-[80vh] flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="pl-4 w-full"
                >
                  <h3 className="text-xl font-bold mb-2 text-left text-foreground">
                    {featuredProjects[activeIndex]?.title}
                  </h3>
                  <p className="text-base mb-3 text-left text-primary font-semibold">
                    {featuredProjects[activeIndex]?.subtitle}
                  </p>
                  <p className="mb-6 text-shadow-black text-left text-md leading-relaxed">
                    {featuredProjects[activeIndex]?.description}
                  </p>
                  <div className="mb-6">
                    <ul className="space-y-2 text-left">
                      {featuredProjects[activeIndex]?.keyFeatures?.map(
                        (feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span
                              className="mt-1.5 flex-shrink-0"
                              style={{
                                color:
                                  featuredProjects[activeIndex]?.themeColor ||
                                  "#805ad5",
                              }}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current"
                              >
                                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                              </svg>
                            </span>
                            <span className="text-sm flex-1 mt-1.5 text-foreground font-semibold">
                              {feature}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProjects[activeIndex]?.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-md border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {featuredProjects[activeIndex]?.demoURL && (
                      <a
                        href={featuredProjects[activeIndex]?.demoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 text-white cosmic-button cursor-pointer"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                    )}
                    {featuredProjects[activeIndex]?.gitHubURL && (
                      <a
                        href={featuredProjects[activeIndex]?.gitHubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 text-white cosmic-button cursor-pointer"
                      >
                        View Code <Github size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ----------- LEFT SIDE - Image ----------- */}
          <div className="lg:w-3/5 flex items-center h-[80vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full rounded-2xl overflow-hidden border-border pb-6"
                style={{ perspective: 1000 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 blur-3xl"
                  style={{
                    background: `radial-gradient(circle at center, ${
                      featuredProjects[activeIndex]?.colorStart || "#7e22ce"
                    }, ${
                      featuredProjects[activeIndex]?.colorEnd || "#0f172a"
                    })`,
                  }}
                />

                <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-white mb-4">
                    <p className="text-2xl opacity-80 text-left">
                      {featuredProjects[activeIndex]?.shortDescription ||
                        "Highlight Project"}
                    </p>
                    <MotionLink
                      to={`/projects/${featuredProjects[activeIndex]?.slug}`}
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full hover:text-white hover:bg-card-500/40 transition-all duration-300 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo(0, 0);
                        setTimeout(() => {
                          navigate(
                            `/projects/${featuredProjects[activeIndex]?.slug}`
                          );
                        }, 100);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </MotionLink>
                  </div>

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotateY: -20,
                      rotateX: 5,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="rounded-xl border border-white/10 shadow-xl mx-auto w-[85%] h-[75%] overflow-hidden cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center",
                    }}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setTimeout(() => {
                        navigate(
                          `/projects/${featuredProjects[activeIndex]?.slug}`
                        );
                      }, 100);
                    }}
                  >
                    <img
                      src={featuredProjects[activeIndex]?.image || ""}
                      alt={
                        featuredProjects[activeIndex]?.title || "Project Image"
                      }
                      className="w-full h-full object-cover object-top transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ----------- Navigation Dots ----------- */}
        <div className="flex justify-center mt-8 gap-2">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                index === activeIndex
                  ? "bg-purple-400"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* ----------- View All Button ----------- */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="group cosmic-button relative inline-flex items-center gap-2 w-fit mx-auto font-semibold hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);

              setTimeout(() => {
                navigate("/projects");
              }, 100);
            }}
          >
            <span className="absolute inset-0 rounded-full bg-primary opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2 text-sm">
              View All Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewProjectsSection;
