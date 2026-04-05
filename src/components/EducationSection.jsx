import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { educationData } from "@/datas/education";
import { cardVariants } from "@/lib/animations";
import EducationCard from "./EducationCard";

// Education data with your actual information

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ margin: "0px 0px -100px 0px", once: true }}
          className="text-center mb-14"
        >
          <motion.div variants={fadeIn} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              My <span className="text-primary text-glow">Education</span>
            </h2>
            <p className="text-center text-foreground/70 max-w-2xl mx-auto">
              Formal education that built my technical foundation in computer
              science.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <EducationCard education={education} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
