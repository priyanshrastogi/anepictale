import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { Particles } from "@/components/ui/particles";
import { WordRotate } from "@/components/ui/word-rotate";
import DynamicYear from "@/components/DynamicYear";
import Image from "next/image";

/* ── Data ──────────────────────────────────────── */

const products = [
  {
    name: "Goodbite",
    tagline: "Know what you eat.",
    description:
      "A food scoring platform that decodes nutrition labels on Indian packaged food — so you can make informed choices without a degree in chemistry.",
    href: "https://goodbite.in",
    linkText: "Visit goodbite.in",
    accent: "goodbite" as const,
    beamFrom: "#a78bfa",
    beamTo: "#7c3aed",
  },
  {
    name: "living.so",
    tagline: "Your corner of the internet.",
    description:
      "An AI-powered personal home page builder that gives creators a beautiful, living presence on the web — set up in minutes, not days.",
    href: "https://living.so",
    linkText: "Visit living.so",
    accent: "living" as const,
    beamFrom: "#f97316",
    beamTo: "#ea580c",
  },
];

const principles = [
  {
    icon: "01",
    title: "Data over opinions",
    body: "We build on real-world data, not assumptions. Every product decision is grounded in what users actually need — measured, tested, and validated.",
  },
  {
    icon: "02",
    title: "Simplicity as a feature",
    body: "Complex problems deserve simple interfaces. We obsess over removing friction so the technology disappears and only the value remains.",
  },
  {
    icon: "03",
    title: "Ship, learn, repeat",
    body: "We move fast with intention. Small, focused releases let us learn from real users and compound improvements over time.",
  },
];

const marqueeWords = [
  "Data-driven",
  "User-first",
  "AI-native",
  "Privacy-aware",
  "Open-minded",
  "India-built",
  "Design-obsessed",
  "Ship fast",
  "Stay curious",
  "Build different",
];

/* ── Components ────────────────────────────────── */

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted mb-12">
      // {children}
    </p>
  );
}

function ProductCard({
  name,
  tagline,
  description,
  href,
  linkText,
  accent,
  beamFrom,
  beamTo,
}: (typeof products)[number]) {
  return (
    <div
      className={`card-${accent} relative bg-surface hover:bg-surface-hover p-8 md:p-10 transition-all duration-500 group overflow-hidden`}
    >
      <BorderBeam
        size={120}
        duration={8}
        colorFrom={beamFrom}
        colorTo={beamTo}
        borderWidth={1}
      />
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`block w-2.5 h-2.5 rounded-full ${
            accent === "goodbite" ? "bg-goodbite" : "bg-living"
          }`}
        />
        <h3 className="font-mono text-xl md:text-2xl tracking-wide">
          {name}
        </h3>
      </div>
      <p
        className={`font-mono text-sm mb-4 ${
          accent === "goodbite" ? "text-goodbite" : "text-living"
        }`}
      >
        {tagline}
      </p>
      <p className="font-sans text-muted leading-relaxed mb-8">{description}</p>
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

function PrincipleCard({
  icon,
  title,
  body,
}: (typeof principles)[number]) {
  return (
    <div className="group">
      <div className="font-mono text-3xl text-border mb-4 group-hover:text-muted transition-colors duration-500">
        {icon}
      </div>
      <h3 className="font-mono text-lg tracking-wide mb-3">{title}</h3>
      <p className="font-sans text-muted leading-relaxed text-sm">{body}</p>
    </div>
  );
}

/* ── Page ──────────────────────────────────────── */

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.08}
          duration={3}
          repeatDelay={1}
          className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] fill-white/5 stroke-white/5"
        />
        <Particles
          className="absolute inset-0"
          quantity={50}
          color="#a78bfa"
          size={0.3}
          staticity={40}
          ease={60}
        />

        <div className="relative z-10 text-center max-w-3xl">
          <BlurFade delay={0.05} inView>
            <Image
              src="/logo.svg"
              alt="Anepictale Labs logo"
              width={56}
              height={56}
              className="mx-auto mb-8"
              priority
            />
          </BlurFade>

          <BlurFade delay={0.15} inView>
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-muted mb-6">
              A technology company
            </p>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none">
              ANEPICTALE
            </h1>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <p className="font-mono text-2xl sm:text-3xl md:text-4xl tracking-[0.35em] text-muted mt-2 uppercase">
              Labs
            </p>
          </BlurFade>

          <BlurFade delay={0.55} inView>
            <div className="mt-10 flex items-center justify-center gap-2 font-sans text-lg sm:text-xl text-muted">
              <span>Building products that make</span>
              <WordRotate
                words={[
                  "everyday life",
                  "food choices",
                  "personal branding",
                  "the internet",
                ]}
                duration={2500}
                className="font-sans text-lg sm:text-xl text-foreground font-medium"
              />
            </div>
            <p className="font-sans text-lg sm:text-xl text-muted -mt-1">
              smarter.
            </p>
          </BlurFade>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <BlurFade delay={0.8} inView>
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] text-border uppercase tracking-widest">
                scroll
              </span>
              <div className="w-px h-8 bg-border/50 animate-pulse" />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Marquee strip ─────────────────────── */}
      <div className="border-y border-border/50 bg-surface/50">
        <Marquee pauseOnHover className="py-4 [--duration:30s] [--gap:2rem]">
          {marqueeWords.map((word) => (
            <span
              key={word}
              className="font-mono text-xs tracking-widest uppercase text-muted/60 mx-4"
            >
              {word}
            </span>
          ))}
        </Marquee>
      </div>

      {/* ── Products ──────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-28 md:py-36 max-w-5xl mx-auto">
        <BlurFade delay={0.1} inView>
          <SectionLabel>Products</SectionLabel>
        </BlurFade>
        <BlurFade delay={0.15} inView>
          <p className="font-sans text-muted text-lg max-w-2xl mb-12 leading-relaxed">
            Two products. One mission: use data and AI to solve real, everyday
            problems — starting in India, built for the world.
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <BlurFade key={product.name} delay={0.2 + i * 0.15} inView>
              <ProductCard {...product} />
            </BlurFade>
          ))}
        </div>
      </section>

      <hr className="divider mx-6 sm:mx-12 lg:mx-24" />

      {/* ── Approach ──────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-28 md:py-36 max-w-5xl mx-auto">
        <BlurFade delay={0.1} inView>
          <SectionLabel>How we build</SectionLabel>
        </BlurFade>
        <BlurFade delay={0.15} inView>
          <p className="font-sans text-muted text-lg max-w-2xl mb-16 leading-relaxed">
            We&apos;re a small team that believes great products come from
            clear thinking, fast iteration, and an obsession with the details
            that matter.
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {principles.map((principle, i) => (
            <BlurFade key={principle.title} delay={0.2 + i * 0.12} inView>
              <PrincipleCard {...principle} />
            </BlurFade>
          ))}
        </div>
      </section>

      <hr className="divider mx-6 sm:mx-12 lg:mx-24" />

      {/* ── About ─────────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-24 py-28 md:py-36 max-w-5xl mx-auto">
        <BlurFade delay={0.1} inView>
          <SectionLabel>About</SectionLabel>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <div className="border-l-2 border-goodbite/30 pl-6 md:pl-8 max-w-2xl">
            <p className="font-sans text-lg md:text-xl text-muted leading-relaxed mb-4">
              Anepictale Labs is a technology company building products at the
              intersection of data, AI, and everyday life.
            </p>
            <p className="font-sans text-lg md:text-xl text-muted leading-relaxed">
              Founded in 2024 and based in Gurugram, India — we&apos;re here to
              build things that genuinely make a difference.
            </p>
          </div>
        </BlurFade>
      </section>

      <hr className="divider mx-6 sm:mx-12 lg:mx-24" />

      {/* ── Footer ────────────────────────────── */}
      <footer className="px-6 sm:px-12 lg:px-24 py-16 md:py-20 max-w-5xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Anepictale Labs logo"
                  width={24}
                  height={24}
                />
                <p className="font-mono text-sm tracking-wide">
                  Anepictale Labs
                </p>
              </div>
              <p className="font-sans text-muted text-sm leading-relaxed max-w-xs">
                Building products that make everyday life smarter.
              </p>
            </div>
            <div className="space-y-3 font-mono text-xs text-muted leading-relaxed">
              <p>
                <span className="text-border mr-2">//</span>
                <a
                  href="mailto:hello@anepictale.com"
                  className="hover:text-foreground transition-colors"
                >
                  hello@anepictale.com
                </a>
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
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border/50">
            <p className="font-mono text-[11px] text-border">
              &copy; <DynamicYear /> Anepictale Labs Private Limited
            </p>
          </div>
        </BlurFade>
      </footer>
    </main>
  );
}
