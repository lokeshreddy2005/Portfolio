# Lokesh Reddy — Portfolio

A recruiter-facing developer portfolio for Bolla Lokesh Reddy, built with Next.js (App Router), TypeScript, and Tailwind CSS. All content is data-driven — projects, experience, achievements, and skills live in `data/*.ts` and the UI renders from them, so nothing needs to be touched in components to update content.

Live at: **https://bolla-lokesh-reddy.vercel.app** · Source: [github.com/lokeshreddy2005/Portfolio](https://github.com/lokeshreddy2005/Portfolio)

## Tech stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4, with a category-based color system (`lib/category-colors.ts`) and a multi-color "aurora" gradient in the hero
- **Animation:** Framer Motion — scroll-reveal on every section (`components/motion/reveal.tsx`), animated stat counters (`components/motion/counter.tsx`), a fade/slide transition between pages (`components/motion/page-transition.tsx`), and animated project-grid filtering
- **Icons:** lucide-react (+ two hand-rolled brand SVGs for GitHub/LinkedIn, since lucide-react no longer ships brand logos)
- **Theme:** next-themes (light/dark/system, no flash on load)
- No database, no backend — content is TypeScript data files; the contact form opens the visitor's email client (see "Contact form" below).

## Folder structure

```
app/                  routes (App Router)
  page.tsx            home
  projects/            /projects and /projects/[slug]
  experience/          /experience
  achievements/        /achievements
  about/                /about
  resume/               /resume (tabbed: General / Software / Quant)
  contact/              /contact
  sitemap.ts, robots.ts, icon.tsx, not-found.tsx
components/
  layout/              navbar, footer, theme provider/toggle
  home/                 homepage sections
  projects/             project card, filter/search/track UI
  resume/               resume track switcher
  contact/              contact form
  motion/               reveal, counter, page-transition (Framer Motion)
  ui/                   button, badge, container, section heading, icons
data/                  ALL editable content lives here
  site.ts              site metadata + resumeTracks config
  social.ts, projects.ts, experience.ts,
  education.ts, achievements.ts, skills.ts
lib/
  types.ts             shared TypeScript interfaces for the data files
  utils.ts             cn() classnames helper
  category-colors.ts   color mapping per project category
public/
  resume.pdf            general resume
  resume-software.pdf   tailored for SWE roles
  resume-quant.pdf      tailored for quant roles
```

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint
npm run build   # production build (also type-checks)
npm run start   # serve the production build locally
```

## Two resumes, one portfolio

`/resume` has three tabs — **General**, **Software Engineering**, and **Quantitative Research** — configured in `resumeTracks` inside [`data/site.ts`](data/site.ts). Each tab shows its own PDF and its own "Key projects on this resume" list.

Projects are tagged with which resume(s) they belong to via the optional `tracks` field in [`data/projects.ts`](data/projects.ts):

```ts
tracks: ["software", "quant"],  // shows up on both tailored resumes
tracks: ["quant"],              // quant resume only
// omit `tracks` entirely for general-portfolio-only projects
```

The `/projects` page also has a "Software track / Quant track" filter using the same field, independent of the category filter.

## Updating content

Everything below is a data-file edit — no component changes needed.

**Add a project** — add an object to the `projects` array in [`data/projects.ts`](data/projects.ts). Give it a unique `slug`; that becomes its URL at `/projects/<slug>`. Set `featured: true` to show it on the homepage (keep it to ~5 at a time). Set `tracks` if it belongs on a tailored resume. Optional fields (`problem`, `approach`, `learnings`) render as extra sections on the project's page if present, and are hidden if omitted. Set `incomplete: true` to show a "Draft" badge instead of pretending a placeholder entry is finished — remove it once real content is in.

**Update experience** — edit [`data/experience.ts`](data/experience.ts). `type: "Internship"` and `type: "Leadership"` are grouped separately on `/experience`.

**Update achievements / education** — edit [`data/achievements.ts`](data/achievements.ts) and [`data/education.ts`](data/education.ts). Give a competitive-programming entry `value`/`suffix` (e.g. `value: 1400, suffix: "+ rating"`) to get the animated count-up on the homepage and achievements page.

**Update skills** — edit [`data/skills.ts`](data/skills.ts), grouped by category.

**Update social links** — edit [`data/social.ts`](data/social.ts). Leaving `url: undefined` on an entry (used currently for Codeforces/LeetCode, since no profile URL was provided) hides the link but keeps any `note` text visible.

**Replace a resume** — overwrite `public/resume.pdf`, `public/resume-software.pdf`, or `public/resume-quant.pdf` (keep the same filenames), or add a new track by adding an entry to `resumeTracks` in `data/site.ts` plus its PDF in `public/`.

**Add a new category color** — categories are typed in `lib/types.ts` (`ProjectCategory`) and colored in `lib/category-colors.ts`. Add both together when introducing a new category.

## Known placeholders to fill in

- **Project GitHub links** — every project in `data/projects.ts` has `github: undefined` with a `// TODO` comment. Add each project's real repo URL as you get them (see the list you were given for exactly which slugs need one).
- **Limit Order Book project** — added as a placeholder (`incomplete: true`) since it wasn't on any of the three resumes. Fill in `shortDescription`, `technologies`, and `highlights` in `data/projects.ts` once you send the details, then remove `incomplete: true` and set `featured: true` if it deserves a homepage spot.
- **Codeforces / LeetCode profile URLs** — `data/social.ts` shows the stats without a link since no handle URL was in any resume. Add `url: "https://codeforces.com/profile/<handle>"` etc. once you have them.
- **Domain** — `data/site.ts` `url` now points to `https://bolla-lokesh-reddy.vercel.app`. If you later buy a custom domain and add it in Vercel, update this to match so Open Graph/sitemap links stay correct.
- **Phone number** — deliberately left off the public site (avoids spam/robocalls); the resume PDFs and the email/GitHub/LinkedIn links are the contact surface. Add it to `data/social.ts` yourself if you want it public.

## Contact form

`components/contact/contact-form.tsx` validates input client-side, then opens the visitor's email client via a `mailto:` link pre-filled with their message — this works with zero backend. To upgrade to a proper in-page submit later, swap the `mailto:` in `handleSubmit` for a POST to [Formspree](https://formspree.io), [Resend](https://resend.com), or a Next.js API route.

## Deployed — free, on your own name

**Live now on Vercel** at **https://bolla-lokesh-reddy.vercel.app**, connected to this repo's `main` branch.

From now on: **edit → `git push` → live in ~60 seconds**, no manual redeploy step ever needed.

Deployed via: [vercel.com](https://vercel.com), signed in with the `lokeshreddy2005` GitHub account, repo imported with default build settings, then the project renamed (Settings → General → Project Name) to `bolla-lokesh-reddy` and that domain added under **Domains** (adding a `<name>.vercel.app` domain that matches your project name attaches instantly, no DNS needed).

**Optional later: a real custom domain** (e.g. `lokeshreddy.dev`, ~$10–15/year from Namecheap, Porkbun, or Google Domains — this part isn't free). Buy it, then in the same Vercel **Domains** settings, add it and follow the DNS instructions Vercel shows you (usually one CNAME record). SSL is provisioned automatically.

**Alternatives** (if you'd rather not use Vercel):
- **Cloudflare Pages** — also free, also auto-deploys from GitHub, slightly more setup for the Next.js runtime adapter.
- **GitHub Pages** — free and simple, but this app isn't currently configured for static export (`output: "export"` in `next.config.ts`), and GitHub Pages would serve it at `lokeshreddy2005.github.io/Portfolio` (a subpath) unless the repo is renamed to `lokeshreddy2005.github.io`. Vercel avoids all of this, which is why it's the recommendation.
