import { motion } from "framer-motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import {
  timelineDateVariants,
  experienceCardVariants,
  experiencePointVariants,
  technologyTagsVariants,
  getDateTransition,
  getCardTransition,
  getPointTransition,
  getTagsTransition,
} from "@/lib/animations";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "hsl(var(--card))",
        color: "hsl(var(--foreground))",
        border: "1px solid hsl(var(--border))",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
        padding: "12px",
        margin: "4px 0",
      }}
      contentArrowStyle={{
        borderRight: "7px solid hsl(var(--card))",
      }}
      date={
        <motion.div
          variants={
            index % 2 === 0
              ? timelineDateVariants.left
              : timelineDateVariants.right
          }
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={getDateTransition(index)}
          className="text-primary font-medium text-sm"
        >
          {experience.period}
        </motion.div>
      }
      iconStyle={{
        background: "#fff",
        border: `3px solid ${experience.color}`,
        boxShadow: `0 0 15px ${experience.color}30`,
        width: "50px",
        height: "50px",
      }}
      icon={
        <img
          src={experience.logo}
          alt={`${experience.company} logo`}
          className="w-full h-full object-contain rounded-full"
          style={{ padding: "2px" }}
        />
      }
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={experienceCardVariants}
        viewport={{ once: true }}
        transition={getCardTransition(index)}
      >
        <div className="mb-3">
          <h3 className="text-lg font-bold text-foreground mb-1">
            {experience.role}
          </h3>

          <h4 className="text-base font-semibold text-primary mb-2">
            {experience.company}
          </h4>

          <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              {experience.period}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              {experience.location}
            </div>
            <div className="flex items-center gap-1">
              <Briefcase size={12} />
              {experience.type}
            </div>
          </div>
        </div>

        <ul className="space-y-1.5 mb-2 text-left">
          {experience.points.map((point, pointIndex) => (
            <motion.li
              key={pointIndex}  
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={getPointTransition(index)}
              variants={experiencePointVariants}
              className="text-xs text-muted-foreground flex items-start gap-1.5"
            >
              <span className="text-primary mt-1 text-xs flex-shrink-0">•</span>
              <span className="leading-relaxed">{point}</span>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={getTagsTransition(index)}
          variants={technologyTagsVariants}
          className="flex flex-wrap gap-1.5"
        >
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-md border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
