import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./animations";
import { testimonials } from "@/data/projects";
import { Quote } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="flex flex-col items-center py-24 md:py-36 px-6 sm:px-8">
      <div className="w-full max-w-[896px] text-center">
        <FadeIn className="text-center">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">
            Testimonials
          </span>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.02em] mt-4 mb-14 md:mb-16 leading-[1.05]">
            What clients say
          </h2>
        </FadeIn>

        <div className="relative min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <Quote
                size={28}
                className="text-accent/20 mb-8"
                strokeWidth={1}
              />
              <blockquote className="font-display text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] leading-[1.5] text-text-primary tracking-[-0.01em] mb-10">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-sm bg-surface border border-border flex items-center justify-center text-text-muted font-semibold text-[11px] font-display tracking-wide">
                  {testimonial.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-xs text-text-primary font-display tracking-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-text-muted text-xs">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-sm transition-all duration-300 ${
                i === current
                  ? "w-8 bg-accent"
                  : "w-1.5 bg-border-light hover:bg-text-muted"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
