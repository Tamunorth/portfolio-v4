import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-bold text-base tracking-tight text-text-primary hover:text-accent transition-colors duration-200"
        >
          tamunorth
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-text-muted hover:text-text-primary transition-colors duration-200 font-medium tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:admin@tamunorth.com"
            className="text-[13px] font-medium px-5 py-2.5 rounded-sm bg-surface border border-border-light text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200 tracking-wide uppercase"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="absolute bottom-0 left-0 right-0 h-px bg-accent/50"
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    setIsOpen(false);
                    setTimeout(() => {
                      target?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors py-3 font-medium tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:admin@tamunorth.com"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium px-5 py-3 rounded-sm bg-surface border border-border-light text-text-secondary hover:text-text-primary transition-all text-center mt-3 tracking-wide uppercase"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
