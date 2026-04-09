interface SectionWrapperProps {
  id?: string;
  className?: string;
  bgColor?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  className = "",
  bgColor = "bg-white",
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${bgColor} py-12 md:py-20 ${className}`}>
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">{children}</div>
    </section>
  );
}
