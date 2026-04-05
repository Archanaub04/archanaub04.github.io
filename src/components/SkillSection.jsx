import { useState } from "react";
import { cn, fadeIn, staggerContainer } from "@/lib/utils";
import { skills, categories } from "@/datas/skillsData";
import { motion } from "framer-motion";

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // get color by prficiency level
  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case "Expert":
        return "text-primary";
      case "Advanced":
        return "text-indigo-500";
      case "Intermediate":
        return "text-teal-500";
      case "Beginner":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ margin: "0px 0px -100px 0px" }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Technical <span className="text-primary text-glow">Skills</span>
          </h2>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Here's a showcase of my technical skills and expertise. Filter by
            category to see specific skills.
          </p>
        </motion.div>

        {/* categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-4 py-1.5 rounded-full transition-all duration-300 text-sm flex items-center gap-1.5",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary/70 text-foreground hover:bg-primary-hover hover:text-primary-foreground"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* skills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          viewport={{ margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {filteredSkills.map((skill) => (
            // skill card ------------------------------------------

            <motion.div
              key={skill.id}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-card p-3 rounded-lg border border-border/50 hover:shadow-sm transition-all duration-300 card-hover hover:scale-[1.02] group"
            >
              {/* skill logo */}
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="text-2xl p-1.5 rounded-md bg-background group-hover:bg-primary/10 transition-colors duration-300"
                >
                  {skill.icon}
                </motion.div>

                {/* skill name & category */}
                <div>
                  <h3 className="font-semibold text-base">{skill.name}</h3>
                  <span className="text-xs text-muted-foreground capitalize">
                    {skill.category}
                  </span>
                </div>
              </div>

              <div className="mt-2">
                {/* proficiency level */}
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-muted-foreground">
                    Proficiency
                  </span>
                  <span
                    className={`text-xs font-semibold ${getProficiencyColor(
                      skill.proficiency
                    )}`}
                  >
                    {skill.proficiency}
                  </span>
                </div>

                {/* proficiency level progress bar */}
                <div className="w-full bg-secondary/30 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r origin-left animate-[grow_1.5s_ease-out] transition-all duration-1000 ease-out",
                      skill.proficiency === "Expert" &&
                        "from-primary to-primary/70",
                      skill.proficiency === "Advanced" &&
                        "from-indigo-700 to-indigo-600",
                      skill.proficiency === "Intermediate" &&
                        "from-teal-500 to-teal-400",
                      skill.proficiency === "Beginner" &&
                        "from-gray-400 to-gray-300"
                    )}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </motion.div>

            // -----------------------------------------------------
          ))}
        </motion.div>

        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-8"
          >
            <p className="text-muted-foreground">
              No skills found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillSection;
