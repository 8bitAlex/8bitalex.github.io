import { RootLayout } from '@/components/layout/RootLayout'
import '@/style/tailwind.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s by Alex Salerno',
    default: 'Alex Salerno | Software Engineer',
  },
  creator: 'Alex Salerno',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    'Alex Salerno',
    'Software Engineer',
    'Full Stack Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Java',
    'Scala',
    'Distributed Systems',
    'API Frameworks',
    'Cloud Computing',
    'Agile Leadership',
    'Open Source',
    'Veteran',
    'Software Development',
    'Software Engineering',
    'Web Development',
    'Web Applications',
    'Frontend Development',
    'Backend Development',
    'DevOps',
    'Microservices',
    'Tooling',
    'Developer Tools',
    'Software Architecture',
    'GraphQL',
    'REST',
    'Agile',
    'Workday',
    'Innovative Defense Technologies',
    'California Army National Guard',
    'SPAWAR',
    'IDT',
    'Software Development Life Cycle',
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <GoogleAnalytics gaId="G-LH0F01NP3E" />
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
