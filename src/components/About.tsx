import { FadeIn, StaggerChildren, StaggerItem, Marquee, TiltCard } from "./animations";
import { skills } from "@/data/projects";
import { Code2, Smartphone, Globe, Layers } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Full Stack",
    description:
      "I work across the entire stack — frontend, backend, databases, infrastructure. One person, end-to-end delivery.",
  },
  {
    icon: Smartphone,
    title: "Mobile Engineering",
    description:
      "Flutter, Kotlin, Swift. Native performance with cross-platform efficiency. I've shipped apps with millions of users.",
  },
  {
    icon: Globe,
    title: "Web Platforms",
    description:
      "React, Next.js, TypeScript. Server-rendered, edge-deployed, performance-obsessed web applications.",
  },
  {
    icon: Code2,
    title: "Backend & APIs",
    description:
      "Node.js, GraphQL, REST, Firebase, Supabase. I design the systems that power the interfaces.",
  },
];

const stats = [
  { value: "5+", label: "Years building" },
  { value: "9+", label: "Products shipped" },
  { value: "3", label: "Platforms" },
  { value: "40%", label: "Best sales lift" },
];

export function About() {
  return (
    <section id="about" className="flex flex-col items-center py-24 md:py-36 px-6 sm:px-8">
      <div className="w-full max-w-[1152px]">
        {/* Section label */}
        <FadeIn className="text-center">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">
            About
          </span>
        </FadeIn>

        {/* Main heading */}
        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] leading-[1.05] mt-5 mb-6">
            Software engineer
            <br />
            who ships{" "}
            <span className="text-text-muted">complete products</span>
          </h2>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.2} className="flex justify-center">
          <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-[1.7] text-center max-w-[640px] mb-14 md:mb-16">
            I'm a full-stack software engineer. Over the past 5+ years I've
            architected and shipped everything from AI-powered marketplaces
            and fintech payment rails to cloud POS systems and social platforms.
            I own every layer of the stack.
          </p>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={0.3} className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-[640px] mb-20 md:mb-24">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight">
                  {stat.value}
                </span>
                <p className="text-text-muted text-xs mt-1.5 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Highlight cards */}
        <StaggerChildren
          staggerDelay={0.08}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-20 md:mb-24"
        >
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <TiltCard tiltAmount={5} className="h-full">
                <div className="group px-7 py-7 sm:px-8 sm:py-8 rounded-sm bg-surface border border-border hover:border-border-light transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-sm bg-accent/[0.08] flex items-center justify-center mb-6 group-hover:bg-accent/[0.15] transition-colors duration-300">
                    <item.icon size={18} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Tech marquee */}
        <FadeIn className="text-center">
          <h3 className="text-text-muted text-xs font-semibold uppercase tracking-[0.2em] mb-6 font-body">
            Stack
          </h3>
        </FadeIn>
        <div className="border-y border-border/50 py-5">
          <Marquee speed={25}>
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 rounded-sm text-xs font-medium bg-surface border border-border text-text-muted whitespace-nowrap tracking-wide uppercase"
              >
                {skill.name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
