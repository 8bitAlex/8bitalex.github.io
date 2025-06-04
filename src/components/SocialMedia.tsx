import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import Link from 'next/link'

export const socialMediaProfiles = [
  { title: 'GitHub', href: 'https://github.com/8bitAlex', icon: faGithub },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/8bitalex/', icon: faLinkedin },
  { title: 'Buy Me a Coffee', href: 'https://www.buymeacoffee.com/8bitalex', icon: faMugHot }
]

export function SocialMedia({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <ul role="list" className={clsx('flex gap-x-10', invert ? 'text-white' : 'text-neutral-950', className)}>
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className="transition hover:text-red-800"
          >
            <FontAwesomeIcon className="hover:scale-110" icon={socialMediaProfile.icon} size="2xl" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
