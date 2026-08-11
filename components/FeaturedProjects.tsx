import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="section-shell pt-20 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Selected AI projects showing model performance and deployment
            strategy.
          </p>
        </div>
        <Link
          href="/projects"
          className="text-sm font-semibold text-accentsoft link-hover"
        >
          View All Projects
        </Link>
      </div>
      <div className="mt-8 grid gap-6">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
