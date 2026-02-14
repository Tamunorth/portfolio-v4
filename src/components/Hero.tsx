import { motion } from "framer-motion";
import { TypingEffect, MagneticButton } from "./animations";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 pt-16 relative">
      {/* Single subtle radial glow — no grid, no dots */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-sm border border-border bg-surface/60 backdrop-blur-sm mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-text-muted text-xs font-medium tracking-wide uppercase">
            Available for new projects
          </span>
        </motion.div>

        {/* Main headline — large and bold */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] leading-[0.95] tracking-[-0.03em] mb-8"
        >
          I engineer
          <br />
          software
          <span className="text-accent">.</span>
          <br />
          <span className="text-text-muted">Full stack.</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="text-text-muted text-sm sm:text-base md:text-lg mb-8 font-body h-7"
        >
          <TypingEffect
            words={[
              "Mobile apps with Flutter & Swift",
              "Web platforms with React & Next.js",
              "Backend systems with Node & GraphQL",
              "Products people genuinely love",
            ]}
            className="text-text-secondary"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-text-muted text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12"
        >
          Full-stack engineer with 5+ years shipping production apps —
          from mobile-first products to scalable web platforms and
          everything in between.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-accent text-background font-semibold text-sm tracking-wide hover:bg-accent-hover transition-all duration-200"
            >
              View my work
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="mailto:admin@tamunorth.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm border border-border-light text-text-secondary font-medium text-sm tracking-wide hover:text-text-primary hover:border-text-muted hover:bg-surface/50 transition-all duration-200"
            >
              Let's talk
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-text-muted/50" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
