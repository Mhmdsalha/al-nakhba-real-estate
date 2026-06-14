import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/site";

export function FeaturedProjects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="مشاريع مختارة"
          title="فرص لها عنوان"
          description="ليست كثرة الخيارات هي القيمة، بل وضوح ما يناسبك منها."
        />
        <ProjectsGrid projects={featuredProjects} />
      </div>
    </section>
  );
}
