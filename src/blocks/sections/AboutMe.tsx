import { FadeIn } from '@/components/FadeIn'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imageAlex from '@public/img/alex-portrait.jpg'
import xpArmy from '@public/img/experience/CA-Army-logo.webp'
import xpIDT from '@public/img/experience/IDT-logo-border.png'
import xpSpawar from '@public/img/experience/SPAWAR-logo-border.gif'
import xpWorkday from '@public/img/experience/workday-reverse.svg'
import skillAgile from '@public/img/skills/skill-agile-light.svg'
import skillAPI from '@public/img/skills/skill-api-light.svg'
import skillCloud from '@public/img/skills/skill-cloud-light.svg'
import skillDistributed from '@public/img/skills/skill-dist-light.svg'
import skillGraphQL from '@public/img/skills/skill-graphql-light.png'
import skillJava from '@public/img/skills/skill-java-light.svg'
import skillNode from '@public/img/skills/skill-node-light-2.svg'
import skillReact from '@public/img/skills/skill-react-light.svg'
import skillScala from '@public/img/skills/skill-scala-light.svg'
import skillTypescript from '@public/img/skills/skill-typescript-light.svg'
import Testimonial from '../Testimonial'
import { SectionHeader } from './SectionHeader'
import ShowcaseList from './ShowcaseList'

const aboutMeText =
  'Award-winning Software Engineer with 10+ years of experience in distributed systems, API frameworks, and full-stack application development.'

const vetBadge = (
  <div className="flex flex-row items-center">
    <FontAwesomeIcon className="mr-2 h-4" icon={faMedal} /> Veteran
  </div>
)

const skills = [
  ['Java', skillJava],
  ['Scala', skillScala],
  ['Typescript', skillTypescript],
  ['GraphQL', skillGraphQL],
  ['React', skillReact],
  ['Node.js', skillNode],
  ['Cloud Computing', skillCloud],
  ['Distributed Systems', skillDistributed],
  ['API Frameworks', skillAPI],
  ['Agile Leadership', skillAgile],
]

const experience = [
  ['Workday', xpWorkday],
  ['California Army National Guard', xpArmy],
  ['Innovative Defense Technologies', xpIDT],
  ['SPAWAR', xpSpawar],
]

export function AboutMe() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-18 sm:mt-32 sm:py-22 lg:mt-56">
      <FadeIn>
        <SectionHeader title="About Me" className="!mt-0" invert />
        <Testimonial
          className="text-white"
          image={{ src: imageAlex }}
          bigText={aboutMeText}
          text="Alex Salerno"
          subtext={vetBadge}
        />
      </FadeIn>
      <ShowcaseList
        name="Skills & Technology"
        items={skills}
        className="md:mt-16"
        lgCol={5}
      />
      <ShowcaseList
        name="Experience"
        items={experience}
        className="md:mt-16"
        align="center"
        height={128}
      />
    </div>
  )
}
