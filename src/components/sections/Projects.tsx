import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { loadProjects, Project } from '@/lib/mdx'
import Link from 'next/link'
import React from 'react'
import { QuoteBanner } from '../blocks/QuoteBanner'
import { HeaderWithDivider } from '../blocks/TextHeaders'
import Section from '../layout/Section'

// Stable per-project slug derived from the project's href (/projects/<slug>).
// Used both as the anchor target on the section card and as the link href in
// the quick-links row, so clicking a chip scrolls down to the project.
function projectSlug(project: Project): string {
  return project.href.replace(/^\/projects\//, '').replace(/\/$/, '')
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 3 18 .5v2H0v1h18v2L24 3Z" />
    </svg>
  )
}

function QuickLinks({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {projects.map((p) => (
        <a
          key={p.title}
          href={`#${projectSlug(p)}`}
          className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
        >
          {p.title}
        </a>
      ))}
    </div>
  )
}

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
    <div id={projectSlug(project)} className="group/section scroll-mt-24 [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              src={project.image.src}
              alt={project.title + ' image'}
              width={project.image.width}
              height={project.image.height}
              {...(project.image.blurDataURL && { blurDataURL: project.image.blurDataURL })}
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
                {project.tags?.map((tag) => (
                  <TagListItem key={tag} className="text-sm font-semibold text-neutral-950">
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
    </div>
  )
}

// Compact row for projects that sit below the detailed ones. Keeps the anchor
// id so the quick-links chips still resolve for every project in the section.
function ProjectSummary({ project }: { project: Project }) {
  return (
    <li id={projectSlug(project)} className="scroll-mt-24">
      <FadeIn>
        <Border className="group relative pt-8">
          <Link href={project.href} className="block">
            <div className="flex items-baseline justify-between gap-x-8">
              <h3 className="font-display text-xl font-medium tracking-tight text-neutral-950 transition group-hover:text-neutral-700">
                {project.title}
              </h3>
              <ArrowIcon className="w-6 flex-none fill-neutral-950 transition group-hover:translate-x-2" />
            </div>
            <p className="mt-2 max-w-3xl text-base text-neutral-600">{project.description}</p>
            <span className="absolute inset-0" />
          </Link>
        </Border>
      </FadeIn>
    </li>
  )
}

function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-18 space-y-18 [counter-reset:section]">
      {projects.map((project, idx) => (
        <ProjectDetails project={project} key={project.title} shape={(idx % 3) as 0 | 1 | 2}>
          {project.abstract}
        </ProjectDetails>
      ))}
    </div>
  )
}

function MoreProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null
  return (
    <div className="mt-18">
      <FadeIn>
        <HeaderWithDivider name="More Projects" />
      </FadeIn>
      <FadeInStagger faster>
        <ul role="list" className="mt-10 space-y-10">
          {projects.map((project) => (
            <ProjectSummary key={project.title} project={project} />
          ))}
        </ul>
      </FadeInStagger>
    </div>
  )
}

type Props = {
  // Cap on how many projects get the full detail treatment (image, abstract,
  // tags). Any beyond the cap render as compact rows underneath. Omit to
  // detail every project, which is what the dedicated /projects page wants.
  detailedCount?: number
}

export default async function ProjectSection({ detailedCount }: Props = {}) {
  const projects = (await loadProjects()).sort((a, b) => a.order - b.order)
  const detailed = detailedCount === undefined ? projects : projects.slice(0, detailedCount)
  const remaining = detailedCount === undefined ? [] : projects.slice(detailedCount)

  return (
    <div>
      <Section
        eyebrow="Projects"
        title="Curated collection of my projects"
        description={<QuickLinks projects={projects} />}
      >
        <ProjectsList projects={detailed} />
        <MoreProjects projects={remaining} />
      </Section>
      <QuoteBanner author={{ name: 'Guy Kawasaki' }}>Ideas are easy. Implementation is hard</QuoteBanner>
    </div>
  )
}
