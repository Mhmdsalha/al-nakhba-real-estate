import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  location: string;
  badge: string;
  price: string;
  image: string;
};

type ProjectsGridProps = {
  projects: Project[];
  compact?: boolean;
};

export function ProjectsGrid({ projects, compact }: ProjectsGridProps) {
  return (
    <div className={compact ? "grid-3" : "project-grid"}>
      {projects.map((project) => (
        <article className="project-card card" key={project.title}>
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 980px) 100vw, 50vw" />
          <div className="project-strip glass-dark">
            <div className="project-strip-meta">
              <span className="chip">{project.badge}</span>
              <strong>{project.price}</strong>
            </div>
            <h3>{project.title}</h3>
            <p>{project.location}</p>
            <Link className="project-cta" href="/contact">
              عرض التفاصيل
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
