import { motion } from "framer-motion";
import { cardVariants, tagVariants } from "@/lib/animations";
import { Calendar, MapPin, BookOpen } from "lucide-react";

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="relative group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 
          hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-lg hover:shadow-primary/10 
          hover:-translate-y-1 h-full"
    >
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="text-3xl p-2 bg-primary/10 rounded-lg">
            {education.logo}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {education.degree}
            </h3>
            <p className="text-primary font-medium">{education.institution}</p>
          </div>
        </div>

        {/* Meta information */}
        <div className="flex flex-wrap gap-4 mb-5 text-sm text-foreground/70 justify-center">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {education.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {education.location}
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            {education.grade}
          </div>
        </div>

        {/* Course Tags */}
        <div className="mt-auto">
          <h4 className="text-sm font-medium text-foreground mb-3">
            Key Courses & Skills:
          </h4>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={{
              hidden: { transition: { staggerChildren: 0.05 } },
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {education.courses.map((course, idx) => (
              <motion.span
                key={idx}
                variants={tagVariants}
                className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
              >
                {course}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
