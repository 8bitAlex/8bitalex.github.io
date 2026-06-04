'use client'

import { usePathname } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import { usePostHog } from 'posthog-js/react'

function PageView() {
  const pathname = usePathname()
  const posthog = usePostHog()

  useEffect(() => {
    // Don't gate on NEXT_PUBLIC_POSTHOG_KEY — it isn't reliably set under
    // next-on-pages builds (see providers.tsx for why the key is hardcoded).
    // `!posthog` is the real guard: if init didn't happen there's nothing
    // to capture against.
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
