interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  alignment?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = "center",
  light = false,
}: SectionHeadingProps) {
  const align = alignment === "center" ? "text-center" : "text-left";
  const maxW = alignment === "center" ? "max-w-3xl mx-auto" : "";
  const justify = alignment === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`${align} ${maxW} mb-10 md:mb-12`}>
      <div className={`flex items-center gap-2 mb-4 ${justify} flex-wrap`}>
        <span className="hidden sm:block w-8 h-px bg-brand-gold" />
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-brand-gold">
          {eyebrow}
        </span>
        <span className="hidden sm:block w-8 h-px bg-brand-gold" />
      </div>
      <h2
        className={`text-[28px] sm:text-3xl md:text-[42px] font-bold leading-tight ${
          light ? "text-white" : "text-text-primary"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 md:mt-4 text-[15px] md:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
