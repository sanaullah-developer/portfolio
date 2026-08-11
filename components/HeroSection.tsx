import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section-shell pt-16 md:pt-24">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="tag">Available for AI/ML opportunities</p>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-textmain md:text-6xl">
            Sanaullah Afridi
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-accentsoft md:text-xl">
            AI Engineer | Computer Vision | ML Deployment
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-textmuted md:text-lg">
            Software Engineering student focused on shipping dependable AI
            products from prototype to production. I specialize in computer
            vision workflows, robust model evaluation, and backend integration
            for real-world deployment.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-slatebase transition-colors duration-200 hover:bg-accentsoft"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-xl border border-borderline px-6 py-3 text-sm font-semibold text-textmain transition-colors duration-200 hover:border-accentsoft hover:text-accentsoft"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="panel relative overflow-hidden p-6">
          <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-accent/20 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-sky-300/10 blur-2xl" />
          <p className="relative text-xs font-semibold uppercase tracking-widest text-accentsoft">
            Engineering Focus
          </p>
          <ul className="relative mt-6 space-y-4 text-sm text-textmuted">
            <li className="rounded-xl border border-borderline bg-slatebase/60 px-4 py-3">
              Model development with reproducible experiments
            </li>
            <li className="rounded-xl border border-borderline bg-slatebase/60 px-4 py-3">
              API-first deployment using FastAPI and Docker
            </li>
            <li className="rounded-xl border border-borderline bg-slatebase/60 px-4 py-3">
              End-to-end delivery from dataset to monitoring
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
