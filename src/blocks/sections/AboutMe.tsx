import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imageAlex from '@public/img/alex-portrait.jpg'
import logoBrightPath from '@public/img/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@public/img/clients/family-fund/logo-light.svg'
import logoGreenLife from '@public/img/clients/green-life/logo-light.svg'
import logoHomeWork from '@public/img/clients/home-work/logo-light.svg'
import logoMailSmirk from '@public/img/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@public/img/clients/north-adventures/logo-light.svg'
import logoPhobiaLight from '@public/img/clients/phobia/logo-light.svg'
import logoUnseal from '@public/img/clients/unseal/logo-light.svg'
import Testimonial from '../Testimonial'
import { SectionHeader } from './SectionHeader'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

const aboutMeText =
  'Award-winning Software Engineer with 10+ years of experience in distributed systems, API frameworks, and full-stack application development.'

const vetBadge = (
  <div className="flex flex-row items-center">
    <FontAwesomeIcon className="mr-2 h-4" icon={faMedal} /> Veteran
  </div>
)

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
      <Container className="mt-8">
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Skills & Technology
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
