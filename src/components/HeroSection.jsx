import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";

const HeroSection = () => {
  const roles = [
    "Full-Stack Developer",
    "Backend Developer",
    "PHP Developer",
    "Aspiring Frontend Developer",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ margin: "0px 0px -100px 0px" }}
          className="space-y-4 md:space-y-6"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Archana
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              U B
            </span>
          </motion.h1>

          {/* Role subtitle with typewriter effect */}
          <motion.div
            variants={fadeIn}
            className="text-lg md:text-2xl text-primary/90 h-8 md:h-10 flex items-center justify-center font-medium"
          >
            <Typewriter
              words={roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </motion.div>

          <p className="text-md md:text-lg max-auto text-muted-foreground opacity-0 animate-fade-in-delay-3 ">
            I’m a full-stack web developer crafting fast and scalable web apps.
            I specialize in Laravel, React, and modern JavaScript — blending
            clean backend architecture with sleek frontend experiences.
          </p>
          <motion.p
            variants={fadeIn}
            className="text-sm uppercase tracking-widest mt-6"
          >
            Tech I work with:
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="text-primary font-medium text-xl mt-4"
          >
            <Typewriter
              words={[
                "Laravel",
                "CodeIginter",
                "React",
                "JavaScript",
                "REST APIs",
                "jQuery",
                "AJAX",
              ]}
              loop={0} // infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <div className="cosmic-button w-[170px] justify-center mx-auto">
              <a href="#projects">View My Works</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* animate scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-1/2 flex flex-col items-center"
      >
        <a href="#about">
          <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1 animate-bounce"></div>
          </div>
        </a>
      </motion.div>

      {/* <div className="absolute bottom-6 left-1/2 transform -translate-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div> */}
    </section>
  );
};

export default HeroSection;
