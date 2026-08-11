import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel p-6">
      <h3 className="font-heading text-2xl font-semibold text-textmain">
        {project.title}
      </h3>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-textmuted">
        <p>
          <span className="font-semibold text-accentsoft">Problem:</span>{" "}
          {project.problem}
        </p>
        <p>
          <span className="font-semibold text-accentsoft">Dataset:</span>{" "}
          {project.dataset}
        </p>
        <p>
          <span className="font-semibold text-accentsoft">Model:</span>{" "}
          {project.model}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.metrics.map((metric) => (
          <span
            key={metric}
            className="rounded-full border border-borderline bg-slatebase/60 px-3 py-1 text-xs font-medium text-textmain"
          >
            {metric}
          </span>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap gap-3 text-sm">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-borderline px-4 py-2 text-textmain transition-colors duration-200 hover:border-accentsoft hover:text-accentsoft"
          >
          GitHub
        </Link>
        {project.demoUrl && (
        <Link
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-accent px-4 py-2 font-semibold text-slatebase transition-colors duration-200 hover:bg-accentsoft"
          >
        Live Demo
        </Link>
      )}
      </div>
    </article>
  );
}
