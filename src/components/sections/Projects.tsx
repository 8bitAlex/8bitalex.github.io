import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import ProjectQuote from '@/components/ProjectQuote'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { loadProjects, Project } from '@/lib/mdx'
import React from 'react'

function ProjectDetails({
  project,
  shape,
  children
}: {
  project: Project
  shape: 0 | 1 | 2
  children?: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              src={project.image.src}
              alt={project.title + ' image'}
              width={project.image.width}
              height={project.image.height}
              blurDataURL={project.image.blurDataURL}
              shape={shape}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {project.title}
            </h2>
            <div className="mt-6">{children}</div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              <TagList>
                {project.tags?.map((tag, idx) => (
                  <TagListItem key={idx} className="text-sm font-semibold text-neutral-950">
                    {tag}
                  </TagListItem>
                ))}
              </TagList>
            </div>

            <Border>
              <div className="mt-6 flex gap-x-4">
                <Button href={project.href} className="mt-6">
                  Find out more
                </Button>
              </div>
            </Border>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

export async function Projects() {
  const projects = await loadProjects()

  return (
    <div className="mt-18 space-y-18 [counter-reset:section]">
      {projects
        .sort((a, b) => a.order - b.order)
        .map((project, idx) => {
          return (
            <ProjectDetails project={project} key={idx} shape={(idx % 3) as 0 | 1 | 2}>
              {project.abstract}
            </ProjectDetails>
          )
        })}
    </div>
  )
}

export default function ProjectSection() {
  return (
    <div>
      <SectionIntro eyebrow="Projects" title="A Curated Collection of My Projects and Related Documentation.">
        <Button href="https://trello.com/b/LqyE5lHq/project-tracking" className="mt-6">
          Projects Tracker
        </Button>
        <ProjectQuote />
      </SectionIntro>
      <Projects />
    </div>
  )
}
