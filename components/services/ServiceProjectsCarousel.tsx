"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/components/shared/ProjectsGrid";

type ServiceProjectsCarouselProps = {
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
  sectionId: string;
  allLabel: string;
};

function chunkProjects(projects: Project[]) {
  const groups: Project[][] = [];
  for (let index = 0; index < projects.length; index += 3) {
    groups.push(projects.slice(index, index + 3));
  }
  return groups;
}

export function ServiceProjectsCarousel({
  eyebrow,
  title,
  description,
  projects,
  sectionId,
  allLabel,
}: ServiceProjectsCarouselProps) {
  const reduced = useReducedMotion();
  const groups = useMemo(() => chunkProjects(projects), [projects]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setActive((current) => (current + 1) % groups.length);
  const previous = () => setActive((current) => (current - 1 + groups.length) % groups.length);

  useEffect(() => {
    if (reduced || paused || groups.length < 2) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % groups.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [groups.length, paused, reduced]);

  return (
    <section className="section selling-projects-section" id={sectionId}>
      <div className="container">
        <div className="selling-projects-head">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          <div className="selling-carousel-actions">
            <button aria-label="المجموعة السابقة" className="icon-button" onClick={previous} type="button">
              <ChevronRight size={19} />
            </button>
            <button aria-label="المجموعة التالية" className="icon-button" onClick={next} type="button">
              <ChevronLeft size={19} />
            </button>
            <ButtonLink href="/contact" variant="glass">
              {allLabel}
            </ButtonLink>
          </div>
        </div>

        <div
          className="selling-carousel-window"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            animate={{ x: `-${active * 100}%` }}
            className="selling-carousel-track"
            transition={reduced ? { duration: 0 } : { duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            {groups.map((group, groupIndex) => (
              <div className="selling-project-group" key={`${sectionId}-group-${groupIndex}`}>
                {group.map((project) => (
                  <article className="selling-project-card" key={project.title}>
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 980px) 100vw, 33vw" unoptimized />
                    <div className="selling-project-overlay">
                      <div>
                        <span className="chip">{project.badge}</span>
                        <h3>{project.title}</h3>
                        <p>{project.location}</p>
                      </div>
                      <div className="selling-project-meta">
                        <strong>{project.price}</strong>
                        <Link href="/contact">
                          عرض التفاصيل
                          <ArrowDownLeft size={15} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="carousel-dots" aria-label="مؤشر مجموعات المشاريع">
          {groups.map((_, index) => (
            <button
              aria-label={`عرض المجموعة ${index + 1}`}
              className={index === active ? "active" : ""}
              key={`${sectionId}-dot-${index}`}
              onClick={() => setActive(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
