'use client'

import posthog from 'posthog-js'
import { PostHogProvider as Provider } from 'posthog-js/react'

// Public PostHog project key (alexsalerno.dev, id 421445). `phc_` keys are
// publishable and safe to ship to the browser — they can only write events.
// Hardcoded instead of read from process.env because Cloudflare Pages' project
// env vars don't reliably flow through next-on-pages builds (the build sees
// NEXT_PUBLIC_POSTHOG_KEY as undefined even when configured), which silently
// broke ingestion in production.
const POSTHOG_KEY = 'phc_o3589uL92sVBKKiKom9pxff8aSNtYNxCPN39i8A9Xwkd'

if (typeof window !== 'undefined') {
  posthog.init(POSTHOG_KEY, {
    // Route capture through /ingest (proxied by Next.js rewrites in next.config.mjs)
    // so ad blockers don't drop the requests. ui_host keeps PostHog dashboard
    // links (toolbar, etc.) pointing at the real PostHog UI.
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: false,
  })
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return <Provider client={posthog}>{children}</Provider>
}
