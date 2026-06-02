# alexsalerno.dev — personal site & blog

Source for my personal website at **[alexsalerno.dev](https://www.alexsalerno.dev/)** — a portfolio of the things I've built, a blog where I write about engineering decisions in long form, and the central place I direct people who want to understand how I work.

If you're a recruiter, hiring manager, or just curious — **start with [the live site](https://www.alexsalerno.dev/)**. This README is for people who want to look at the code.

[![License](https://img.shields.io/github/license/8bitAlex/8bitalex.github.io)](./LICENSE)
[![Version](https://img.shields.io/github/package-json/v/8BitAlex/8bitalex.github.io)](./package.json)

---

## Who I am

I'm **Alex Salerno**, a software engineer with 10+ years of experience in distributed systems, API frameworks, full-stack cloud application development, and developer tooling. Most recently I spent several years at Workday building backend systems, including the Graph API and API Router (Scala + Akka + GraphQL/REST). Before that: Innovative Defense Technologies, SPAWAR, and a stint in the California Army National Guard.

These days I'm building [**Raid**](https://github.com/8bitAlex/raid) — an open-source Go CLI for orchestrating multi-repo development workflows, currently approaching v1.0. I care about declarative configuration, opt-in telemetry, clean naming, and tools that explain themselves to humans and agents alike.

## Featured work

| Project | What it is |
|---|---|
| [**Raid**](https://github.com/8bitAlex/raid) | Open-source Go CLI for orchestrating multi-repo dev workflows. Declarative YAML, typed task primitives, MCP integration for AI agents. → [Technical deep dive on the blog](https://www.alexsalerno.dev/blog/raid-technical-deep-dive) |
| [**Alderman**](https://github.com/8bitAlex/Alderman-API) | Civic-tech project surfacing public-meeting information from local government. ([API](https://github.com/8bitAlex/Alderman-API) · [Web](https://github.com/8bitAlex/Alderman-Web)) |
| [**Pixelated Realms**](https://pixelatedrealms.com/) | Weekly video-game podcast I co-host. |

More under [/projects](https://www.alexsalerno.dev/projects).

## Recent writing

The blog is where I write about engineering decisions and retrospectives in long form, not link-roundups.

- [Building Raid: A Technical Deep Dive](https://www.alexsalerno.dev/blog/raid-technical-deep-dive) — a year after the design proposal, what got built and what I learned
- [Raid: A Tool for Orchestrating Distributed Application Development](https://www.alexsalerno.dev/blog/raid-design-proposal) — the original design proposal

## About this site (tech stack)

Built with **Next.js** (App Router) + **TypeScript** + **Tailwind**, long-form content in **MDX**, hosted on **Cloudflare Pages**, instrumented with **PostHog** and **Google Analytics**. Open-source under the [LICENSE](./LICENSE) — fork it if you want a starting point for your own.

## Run locally

```bash
git clone https://github.com/8bitAlex/8bitalex.github.io.git
cd 8bitalex.github.io
npm install
npm run dev      # http://localhost:3000
```

## Repo layout

- `src/app/` — Next.js routes (App Router). Blog posts under `src/app/blog/<slug>/page.mdx`, projects under `src/app/projects/<slug>/page.mdx`.
- `src/components/` — UI primitives, layout blocks, MDX components.
- `src/lib/` — Shared utilities, including the MDX loader.
- `public/` — Static assets (images, icons, fonts).

## Contact

- **GitHub** — [@8bitAlex](https://github.com/8bitAlex)
- **LinkedIn** — [linkedin.com/in/8bitalex](https://www.linkedin.com/in/8bitalex/)
- **Bluesky** — [@8bitalex.bsky.social](https://bsky.app/profile/8bitalex.bsky.social)
