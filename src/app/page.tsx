import FadeIn from "@/components/FadeIn";
import DynamicYear from "@/components/DynamicYear";

const products = [
  {
    name: "Goodbite",
    description: "A food scoring platform for Indian packaged food products.",
    href: "https://goodbite.in",
    linkText: "Visit goodbite.in",
    accent: "goodbite" as const,
  },
  {
    name: "living.so",
    description: "AI-powered personal home page builder for creators.",
    href: "https://living.so",
    linkText: "Visit living.so",
    accent: "living" as const,
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted mb-10">
      // {children}
    </p>
  );
}

function ProductCard({
  name,
  description,
  href,
  linkText,
  accent,
}: (typeof products)[number]) {
  return (
    <div
      className={`card-${accent} bg-surface p-8 transition-all duration-500 group`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`block w-2 h-2 rounded-full ${
            accent === "goodbite" ? "bg-goodbite" : "bg-living"
          }`}
        />
        <h3 className="font-mono text-xl tracking-wide">{name}</h3>
      </div>
      <p className="font-sans text-muted leading-relaxed mb-6">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`link-underline inline-flex items-center gap-2 font-mono text-sm ${
          accent === "goodbite" ? "text-goodbite" : "text-living"
        } transition-opacity hover:opacity-80`}
      >
        {linkText}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div className="dot-grid" aria-hidden="true" />
        <div className="relative z-10 text-center">
          <h1 className="hero-title font-mono text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight">
            ANEPICTALE
          </h1>
          <p className="hero-title font-mono text-2xl sm:text-3xl md:text-4xl tracking-[0.35em] text-muted mt-2 uppercase">
            Labs
          </p>
          <p className="hero-subtitle font-sans text-lg sm:text-xl text-muted mt-8 max-w-md mx-auto leading-relaxed">
            Building products that make everyday life smarter.
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-border opacity-50" />
        </div>
      </section>

      <hr className="divider mx-6 sm:mx-12 lg:mx-24" />

      {/* ── Products ──────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-24 max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>Products</SectionLabel>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <FadeIn key={product.name} delay={i * 150}>
              <ProductCard {...product} />
            </FadeIn>
          ))}
        </div>
      </section>

      <hr className="divider mx-6 sm:mx-12 lg:mx-24" />

      {/* ── About ─────────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-24 max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>About</SectionLabel>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="border-l-2 border-border pl-6 max-w-2xl">
            <p className="font-sans text-lg text-muted leading-relaxed">
              Anepictale Labs is a technology company building products at the
              intersection of data, AI, and everyday life. Based in Gurgaon,
              India.
            </p>
          </div>
        </FadeIn>
      </section>

      <hr className="divider mx-6 sm:mx-12 lg:mx-24" />

      {/* ── Footer ────────────────────────────── */}
      <footer className="px-6 sm:px-12 lg:px-24 py-16 max-w-5xl mx-auto">
        <FadeIn>
          <div className="space-y-3 font-mono text-xs text-muted leading-relaxed">
            <p>
              <span className="text-border mr-2">//</span>
              hello@anepictale.com
            </p>
            <p>
              <span className="text-border mr-2">//</span>
              CIN: U62099HR2024PTC120917
            </p>
            <p>
              <span className="text-border mr-2">//</span>
              WeWork Two Horizon Center, Golf Course Road, DLF-5, Gurugram
              &mdash; 122002, Haryana
            </p>
            <div className="pt-8">
              <p className="text-border">
                &copy; <DynamicYear /> Anepictale Labs Private Limited
              </p>
            </div>
          </div>
        </FadeIn>
      </footer>
    </main>
  );
}
