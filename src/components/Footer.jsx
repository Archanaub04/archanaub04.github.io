import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-4 px-4 bg-card border-t border-border/10">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="w-8"> {/* Spacer for balance */}</div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-sm text-muted-foreground text-center flex-1"
        >
          &copy; {new Date().getFullYear()} Archanaub.co. All rights reserved.
        </motion.p>

        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
          aria-label="Back To Top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
