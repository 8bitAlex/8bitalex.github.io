import { faBluesky, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import Link from 'next/link'

export const socialMediaProfiles = [
  { title: 'GitHub', href: 'https://github.com/8bitAlex', icon: faGithub },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/8bitalex/', icon: faLinkedin },
  { title: 'Youtube', href: 'https://www.youtube.com/@TheRealEightBitAlex', icon: faYoutube },
  { title: 'Bluesky', href: 'https://bsky.app/profile/8bitalex.bsky.social', icon: faBluesky },
]

export function SocialMedia({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <ul role="list" className={clsx('flex gap-x-10', invert ? 'text-white' : 'text-neutral-950', className)}>
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx('transition', invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700')}
          >
            <FontAwesomeIcon icon={socialMediaProfile.icon} inverse={invert} size="2xl" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
