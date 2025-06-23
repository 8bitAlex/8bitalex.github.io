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
import ShowcaseList from '../blocks/ShowcaseList'
import Testimonial from '../blocks/Testimonial'
import { TextGridList } from '../blocks/TextGridList'
import { SectionHeader } from '../blocks/TextHeaders'

const aboutMeText =
  'Award-winning Software Engineer with 10+ years of experience in distributed systems, API frameworks, full-stack cloud application development, and developer tooling.'

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
  ['Agile Leadership', skillAgile]
]

const experience = [
  ['Workday', xpWorkday],
  ['California Army National Guard', xpArmy],
  ['Innovative Defense Technologies', xpIDT],
  ['SPAWAR', xpSpawar]
]

const values = [
  {
    title: 'Attention to Detail',
    text: 'I believe in the importance of details. I strive to ensure that every aspect of my work is polished and precise, from code quality to documentation to user experience, to deliver the best possible product.'
  },
  {
    title: 'Clean Maintainable Code',
    text: 'I believe in writing clean, maintainable code. Keeping solutions clear, readable, and organized to ensure others can easily understand, extend, and adapt software now and in the future.'
  },
  {
    title: 'Refactor Mercilessly',
    text: 'I believe in improving code without hesitation. Simplifying structure, removing duplication, and enhancing clarity to keep the software easy to maintain, flexible, and reliable over time.'
  },
  {
    title: 'Simplicity',
    text: 'I believe in the power of simplicity. I strive to create solutions that are straightforward and easy to understand, avoiding unnecessary complexity to enhance usability and maintainability.'
  },
  {
    title: 'Beginners Mindset',
    text: 'I believe in the power of a beginner’s mindset. I approach every challenge with curiosity and openness, ready to learn and adapt, and I encourage others to do the same.'
  },
  {
    title: 'Continuous Improvement',
    text: 'I believe in the value of continuous improvement. I strive to learn from every experience, seeking feedback and opportunities for growth to enhance my skills and the quality of my work.'
  }
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
          text="Alex Salerno (He/Him)"
          subtext={vetBadge}
        />
      </FadeIn>
      <ShowcaseList name="Skills & Technology" items={skills} className="mb-8 md:mt-22" wide />
      <ShowcaseList name="Experience" items={experience} className="mb-8 md:mt-22" center height={128} />
      <TextGridList title="Values" items={values} invert className="mb-8 md:mt-22" />
    </div>
  )
}
