import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { Container } from '@/components/layout/Container'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { TagList, TagListItem } from '@/components/TagList'
import { loadProjects, type MDXEntry, type Project } from '@/lib/mdx'

export default async function ProjectLayout({
  project,
  children
}: {
  project: MDXEntry<Project>
  children: React.ReactNode
}) {
  const allProjects = await loadProjects()
  const moreProjects = allProjects.filter((someProject) => someProject.title !== project.title).slice(0, 2)

  const startYear = project.startDate.split('-')[0]
  const endYear = project.date.split('-')[0]

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Project" title={project.title} centered>
            <p className="text-justify">{project.description}</p>
            <div className="flex justify-center gap-x-4">
              {project.website && (
                <Button href={project.website} className="mt-6">
                  Website
                </Button>
              )}
              {project.repo && (
                <Button href={project.repo} className="mt-6" invert>
                  Source code
                </Button>
              )}
              {project.support && (
                <Button href={project.support} className="mt-6" invert>
                  Support
                </Button>
              )}
            </div>
          </PageIntro>
          <FadeIn>
            <div className="mt-18 border-t border-neutral-200 bg-white/50 sm:mt-24 lg:mt-32">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">Type</dt>
                      <dd>{project.type}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">Status</dt>
                      <dd>{project.status}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">Year{startYear != endYear && 's'}</dt>
                      <dd>
                        <time dateTime={startYear}>{startYear}</time>
                        {startYear != endYear && (
                          <>
                            &nbsp;- <time dateTime={endYear}>{endYear}</time>
                          </>
                        )}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>
            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="mx-auto -my-px max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage
                  {...project.image}
                  quality={90}
                  className="max-h-[80vh] object-cover"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-9 sm:mt-12 lg:mt-16">
          <MDXComponents.wrapper>
            <FadeInStagger>
              <FadeIn>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  <TagList>
                    {project.tags?.map((tag, idx) => (
                      <TagListItem key={idx} className="text-sm font-semibold text-neutral-950">
                        {tag}
                      </TagListItem>
                    ))}
                  </TagList>
                </div>
              </FadeIn>
              <FadeIn>
                <Border className="mt-6 pt-6">{children}</Border>
              </FadeIn>
            </FadeInStagger>
          </MDXComponents.wrapper>
        </Container>
      </article>

      {moreProjects.length > 0 && (
        <PageLinks className="mt-24 sm:mt-32 lg:mt-40" title="More projects" pages={moreProjects} />
      )}
    </>
  )
}
