import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { FaStackOverflow } from "react-icons/fa";
import { cn, fadeIn, staggerContainer } from "@/lib/utils";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Archana U B",
          from_email: form.email,
          to_email: "archanaub649@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          // setTimeout(() => {
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon as possible.",
          });
          setIsSubmitting(false);

          setForm({
            name: "",
            email: "",
            message: "",
          });
          // }, 1500);
        },
        (error) => {
          setIsSubmitting(false);
          console.log(error);
          toast({
            title: "Something went wrong!",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          //   viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        {/* ------------------------ Grid: Left Info - Right Form ----------------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          //   viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* --------------------- Left: Contact Info --------------- */}
          <motion.div variants={fadeIn} className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 mt-4">
              Contact Information
            </h3>

            {/* Email */}
            <motion.div
              variants={fadeIn}
              className="flex items-start gap-4 text-left group"
            >
              <div className="p-3 rounded-full bg-primary/10 mt-1 group-hover:bg-primary/20 transition-all duration-300">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold mb-1">Email</h4>
                <a
                  href="mailto:archanaub649@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  archanaub649@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={fadeIn}
              className="flex items-start gap-4 text-left group"
            >
              <div className="p-3 rounded-full bg-primary/10 mt-1 group-hover:bg-primary/20 transition-all duration-300">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold mb-1">Phone</h4>
                <a
                  href="tel:+917909215545"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 790 921 5545
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeIn}
              className="flex items-start gap-4 text-left group"
            >
              <div className="p-3 rounded-full bg-primary/10 mt-1 group-hover:bg-primary/20 transition-all duration-300">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold mb-1">Location</h4>
                <p className="text-sm text-muted-foreground">
                  Kannur, Kerala, India
                </p>
              </div>
            </motion.div>

            {/* Connect With Me */}
            <motion.div variants={fadeIn} className="mt-16 text-center">
              <h4 className="font-medium mb-4 text-lg">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                {[
                  {
                    icon: <Linkedin size={20} />,
                    link: "https://www.linkedin.com/in/archanaub",
                  },
                  {
                    icon: <Twitter size={20} />,
                    link: "https://x.com/Archanaub24",
                  },
                  {
                    icon: <Instagram size={20} />,
                    link: "#",
                  },
                  {
                    icon: <FaStackOverflow size={20} />,
                    link: "https://stackoverflow.com/users/21011383/archana-u-b",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkbutton iconbutton transition-all duration-300 hover:scale-110"
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          {/* ------------------------------------------------------------- */}

          {/* --------------- Right: Contact Form ------------------------- */}
          <motion.div
            variants={fadeIn}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="John Doe..."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="john@gmail.com..."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
