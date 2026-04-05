import { useState } from "react";
import { projects } from "@/datas/ProjectsData";
import { ExternalLink, Github, Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const [showAllTags, setShowAllTags] = useState({});

  const navigate = useNavigate();

  const featuredProjects =
    projects?.filter((p) => p.featured)?.slice(0, 6) ||
    projects?.slice(0, 3) ||
    [];

  const projectCount = featuredProjects.length;

  if (projectCount === 0) return null;

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ margin: "0px 0px -100px 0px" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Code2 size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-primary text-glow">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8 max-w-2xl mx-auto"
          >
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project) => (
            // project card ------------------------------
            <motion.div
              key={project.id}
              variants={fadeIn}
              className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-lg hover:shadow-primary/50 hover:scale-[1.02]"
            >
              {/* Top Bar with Links on Both Sides */}
              <div className="flex items-center justify-between p-1 bg-secondary/30 border-b border-border/30">
                {/* Left Link - Demo */}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.demoURL}
                  className="linkbutton iconbutton"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <ExternalLink size={15} />
                </motion.a>

                {/* Status Bar Below Top Bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="px-4 py-2 bg-secondary/20 border-b border-border/20"
                >
                  <div
                    className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500/15 border border-green-500/20 text-success"
                        : "bg-amber-500/15 border border-amber-500/20 text-warning"
                    }`}
                  >
                    {project.status}
                  </div>
                </motion.div>

                {/* Right Link - GitHub */}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.gitHubURL}
                  className="linkbutton bg-foreground/10 text-foreground hover:bg-foreground hover:text-background hover:shadow-foreground/25 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Github size={15} />
                </motion.a>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 opacity-80">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <motion.div className="flex flex-wrap gap-2">
                  {(showAllTags[project.id]
                    ? project.tags
                    : project.tags.slice(0, 6)
                  ).map((tag, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 text-xs text-normal font-medium bg-secondary/60 rounded-md border border-border/30 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {/* only show 6 tags and hide other and when clcik that expand uisng state
                        eg:

                        showAllTags = {
                            1: true,    // Project ID 1 shows all tags
                            2: false,   // Project ID 2 shows only 6 tags
                            3: true     // Project ID 3 shows all tags
                        }
                    */}
                  {project.tags.length > 6 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setShowAllTags((prev) => ({
                          ...prev,
                          [project.id]: !prev[project.id],
                        }))
                      }
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-all duration-300"
                    >
                      {showAllTags[project.id]
                        ? "Show Less"
                        : `+${project.tags.length - 6} more`}
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </motion.div>
            // ----------------------------------------------------------------
          ))}
        </motion.div>

        {/* View More Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/Archanaub04"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="group cosmic-button relative inline-flex items-center gap-2 w-fit mx-auto font-semibold hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg"
          >
            <span className="absolute inset-0 rounded-full bg-primary opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              Check My GitHub
              <Github
                size={18}
                className="transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-110"
              />
            </span>
          </motion.a>
        </motion.div> */}

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

export default ProjectsSection;
