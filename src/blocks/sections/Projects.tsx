import { FadeIn } from '@/components/FadeIn'
import Section from '@/components/layout/Section'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@public/img/laptop.jpg'

const projects = [
  {
    title: 'Personal Website',
    description: 'Someting something',
    image: imageLaptop,
    href: '/work/web-development',
  },
]

export default function Projects() {
  return (
    <Section title="Projects" description='"Ideas are easy. Implementation is hard." - Guy Kawasaki'>
      <div className="lg:flex lg:items-center lg:justify-end">
        {projects.map((project) => {
          return (
            <>
              <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                  <StylizedImage
                    src={project.image}
                    sizes="(min-width: 1024px) 41rem, 31rem"
                    className="justify-center lg:justify-end"
                  />
                </FadeIn>
              </div>
              <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">{project.description}</div>
            </>
          )
        })}
      </div>
    </Section>
  )
}
