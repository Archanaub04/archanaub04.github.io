import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/datas/experiences";
import ExperienceCard from "./ExperienceCard";
import {
  timelineContainerVariants,
  bottomCtaVariants,
  getTimelineTransition,
  getCtaTransition,
} from "@/lib/animations";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from transparent via-primary/5 to primary"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ margin: "0px 0px -100px 0px", once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeIn} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Work <span className="text-primary text-glow">Experience</span>
            </h2>

            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
              Here's a timeline of my professional journey, highlighting key
              roles, responsibilities, and achievements that shaped my career.
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline Div starts */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          transition={getTimelineTransition()}
          variants={timelineContainerVariants}
          className="relative max-w-5xl mx-auto"
        >
          <VerticalTimeline lineColor="hsl(var(--border))" animate={true}>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </VerticalTimeline>

          {/* Bottom CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={getCtaTransition()}
            variants={bottomCtaVariants}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4 text-sm">
              Interested in my work? Let's discuss your next project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cosmic-button text-sm"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
