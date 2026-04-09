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

  return (
    <div className={`${align} ${maxW} mb-12`}>
      <div className="flex items-center gap-2 mb-4" style={{ justifyContent: alignment === "center" ? "center" : "flex-start" }}>
        <span className="block w-10 h-px bg-brand-gold" />
        <span
          className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {eyebrow}
        </span>
        <span className="block w-10 h-px bg-brand-gold" />
      </div>
      <h2
        className={`text-3xl md:text-[42px] font-bold leading-tight ${
          light ? "text-white" : "text-text-primary"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
