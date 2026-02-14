import { FadeIn, MagneticButton } from "./animations";
import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center py-24 md:py-36 px-6 sm:px-8">
      <div className="w-full max-w-[896px] text-center">
        <FadeIn className="text-center">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase font-body">
            Contact
          </span>
        </FadeIn>

        <FadeIn delay={0.1} className="text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] mt-5 mb-6 leading-[1.05]">
            Have a project?
            <br />
            <span className="text-text-muted">Let's build it.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} className="flex justify-center">
          <p className="text-text-muted text-sm sm:text-base max-w-[480px] leading-[1.7] mb-12">
            I'm always open to interesting engineering challenges.
            Whether you need a full-stack product, a mobile app, or
            technical consultation — let's talk.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex justify-center">
          <MagneticButton>
            <a
              href="mailto:admin@tamunorth.com"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-sm bg-accent text-background font-semibold text-sm tracking-wide hover:bg-accent-hover transition-all duration-200"
            >
              <Mail size={16} strokeWidth={1.5} />
              admin@tamunorth.com
            </a>
          </MagneticButton>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-16 flex items-center justify-center gap-5">
            <div className="h-px w-12 bg-border" />
            <span className="text-text-muted text-xs tracking-wide uppercase">
              or find me on
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-8">
            {[
              { label: "GitHub", href: "https://github.com/tamunorth" },
              { label: "LinkedIn", href: "https://linkedin.com/in/tamunorth" },
              { label: "Twitter", href: "https://twitter.com/tamunorth" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-text-muted hover:text-accent transition-colors duration-200 text-xs font-medium tracking-wide uppercase"
              >
                {link.label}
                <ArrowUpRight size={12} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
