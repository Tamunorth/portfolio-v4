import { Marquee } from "./animations";

const words = [
  "FULL STACK",
  "REACT",
  "FLUTTER",
  "NODE.JS",
  "TYPESCRIPT",
  "GRAPHQL",
  "MOBILE",
  "WEB",
  "NEXT.JS",
  "SWIFT",
];

export function BigTextMarquee() {
  return (
    <div className="py-10 md:py-14 border-y border-border/20 overflow-hidden">
      <Marquee speed={35}>
        {words.map((word) => (
          <span
            key={word}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-text-primary/[0.03] whitespace-nowrap select-none"
          >
            {word}
            <span className="mx-8 text-accent/10">&middot;</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
