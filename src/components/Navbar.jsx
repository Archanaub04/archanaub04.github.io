import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/My-Portfolio/" },
  { name: "About", href: "/My-Portfolio/#about" },
  { name: "Skills", href: "/My-Portfolio/#skills" },
  { name: "Experience", href: "/My-Portfolio/#experience" },
  { name: "Education", href: "/My-Portfolio/#education" },
  { name: "Projects", href: "/My-Portfolio/#projects" },
  { name: "Contact", href: "/My-Portfolio/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-primary flex items-center mr-20" 
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Archana</span> Portfolio
          </span>
        </Link>

        {/* ----------------- desktop navbar ------------ */}
        <div className="hidden md:flex space-x-8 flex-grow justify-center">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              key={key}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* --------------------------------------------- */}

        {/* ---------------- mobile navbar -------------- */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        {/* -------------------------------------------- */}
      </div>
    </nav>
  );
};

export default Navbar;
