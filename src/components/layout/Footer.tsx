import Link from 'next/link'

import SocialMediaBlock from '@/components/blocks/SocialMediaBlock'
import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/Logo'
import imageNotAI from '@public/img/Developed-By-Human-Not-By-AI-Badge-black.svg'
import Image from 'next/image'

const navigation = [
  {
    title: 'Site Map',
    links: [
      { title: 'Home', href: '/' },
      { title: 'Blog', href: '/blog' },
      { title: 'Projects', href: '/projects' }
    ]
  },
  {
    title: 'Projects',
    links: [
      { title: 'This Website', href: '/projects/website' },
      { title: 'Pixelated Realms Podcast', href: '/projects/pixelated-realms' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/projects'
      }
    ]
  }
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">{section.title}</div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link href={link.href} className="transition hover:text-neutral-950">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <SocialMediaBlock />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <div className="flex">
            <Link href="/" aria-label="Home">
              <Logo className="h-8" fillOnHover />
            </Link>
            <Image src={imageNotAI} alt="Developed by human, not by AI" className="ml-4 h-8" />
          </div>
          <p className="text-sm text-neutral-700">© Alex Salerno {new Date().getFullYear()}</p>
        </div>
      </FadeIn>
    </Container>
  )
}
