import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem } from "./animations";
import { type Project } from "@/data/projects";
import { useProjects } from "@/hooks/useProjects";
import { ExternalLink, Apple, Play } from "lucide-react";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const primaryLink = project.webLink || project.appStoreLink || project.playStoreLink;
  const iconClass =
    "w-11 h-11 rounded-sm bg-surface border border-border-light flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200";

  return (
    <div className="group relative rounded-sm bg-surface border border-border overflow-hidden hover:border-border-light transition-all duration-500 h-full">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-light">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading={index < 3 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

        {/* Link overlay: always mounted. Hidden on hover-capable devices until hover, always visible on touch. */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/70 backdrop-blur-sm transition-opacity duration-200 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
          {project.webLink && (
            <a
              href={project.webLink}
              target="_blank"
              rel="noopener noreferrer"
              className={iconClass}
              aria-label={`Visit ${project.title} website`}
            >
              <ExternalLink size={15} strokeWidth={1.5} />
            </a>
          )}
          {project.appStoreLink && (
            <a
              href={project.appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className={iconClass}
              aria-label={`${project.title} on App Store`}
            >
              <Apple size={15} strokeWidth={1.5} />
            </a>
          )}
          {project.playStoreLink && (
            <a
              href={project.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className={iconClass}
              aria-label={`${project.title} on Play Store`}
            >
              <Play size={15} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-5 sm:px-7 sm:py-6">
        <div className="flex items-start justify-between mb-3">
          {primaryLink ? (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-semibold text-sm tracking-tight text-text-primary hover:text-accent transition-colors"
            >
              {project.title}
            </a>
          ) : (
            <h3 className="font-display font-semibold text-sm tracking-tight text-text-primary">
              {project.title}
            </h3>
          )}
          <span className="text-text-muted/40 text-[11px] font-mono">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="text-text-muted text-xs leading-[1.7] mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-sm text-[10px] font-medium bg-background text-text-muted border border-border tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { projects } = useProjects();
  const initialProjects = projects.slice(0, 6);
  const remainingProjects = projects.slice(6);

  return (
    <section id="projects" className="flex flex-col items-center py-24 md:py-36 px-6 sm:px-8">
      <div className="w-full max-w-[1152px]">
        {/* Section header — centered */}
        <div className="text-center mb-14 md:mb-16">
          <FadeIn className="text-center">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">
              Work
            </span>
          </FadeIn>
          <FadeIn delay={0.1} className="text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] mt-4 mb-5 leading-[1.05]">
              Selected projects
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="flex justify-center">
            <p className="text-text-secondary text-sm md:text-base max-w-[480px] leading-[1.7]">
              Products I've engineered end-to-end — architecture, frontend,
              backend, and deployment. From idea to production.
            </p>
          </FadeIn>
        </div>

        {/* First 6 projects — always visible */}
        <StaggerChildren
          staggerDelay={0.06}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
        >
          {initialProjects.map((project, i) => (
            <StaggerItem key={project.id} index={i} staggerDelay={0.06}>
              <ProjectCard project={project} index={i} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Remaining projects — animated in smoothly */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 pt-3 md:pt-4">
                {remainingProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <ProjectCard project={project} index={i + 6} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show more */}
        <AnimatePresence>
          {!showAll && projects.length > 6 && (
            <motion.div
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center mt-14"
            >
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3.5 rounded-sm border border-border-light text-text-secondary hover:text-text-primary hover:border-text-muted hover:bg-surface/50 font-medium text-xs tracking-[0.15em] uppercase transition-all duration-200"
              >
                View all projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
