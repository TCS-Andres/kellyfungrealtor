import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg-light text-center px-5">
      <h1
        className="text-6xl font-bold text-brand-blue mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        404
      </h1>
      <p className="text-xl text-text-primary mb-2">Page Not Found</p>
      <p className="text-text-secondary mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-brand-blue px-8 py-3 text-white font-bold transition-all hover:scale-[1.03] hover:shadow-lg"
      >
        Go Home
      </Link>
    </div>
  );
}
