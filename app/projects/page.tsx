import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI engineering portfolio projects in computer vision and ML deployment."
};

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell pt-16 md:pt-20">
        <Link href="/" className="text-sm font-medium text-accentsoft link-hover">
          ← Back to Home
        </Link>
        <h1 className="mt-5 font-heading text-4xl font-semibold text-textmain md:text-5xl">
          AI Projects
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-textmuted">
          End-to-end machine learning projects with clear problem framing, data
          strategy, model selection, and measurable performance outcomes.
        </p>
      </section>
      <section className="section-shell pb-20 pt-10 md:pb-24">
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
