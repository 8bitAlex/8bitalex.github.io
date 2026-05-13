'use client'

import { usePathname } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import { usePostHog } from 'posthog-js/react'

function PageView() {
  const pathname = usePathname()
  const posthog = usePostHog()

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return
    if (!pathname || !posthog) return
    posthog.capture('$pageview', { $current_url: window.origin + pathname })
  }, [pathname, posthog])

  return null
}

export default function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PageView />
    </Suspense>
  )
}
