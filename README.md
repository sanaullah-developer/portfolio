# AI Engineer Portfolio (Next.js + TypeScript)

A production-ready, responsive portfolio website for an AI Engineer, built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Folder Structure

```text
portfolio/
├─ app/
│  ├─ projects/
│  │  └─ page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ AboutSection.tsx
│  ├─ ContactSection.tsx
│  ├─ FeaturedProjects.tsx
│  ├─ HeroSection.tsx
│  ├─ ProjectCard.tsx
│  ├─ SiteFooter.tsx
│  ├─ SiteHeader.tsx
│  └─ SkillsSection.tsx
├─ data/
│  └─ projects.ts
├─ public/
│  └─ resume.pdf
├─ .gitignore
├─ next.config.ts
├─ next-env.d.ts
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ tsconfig.json
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Customize Content

- Update hero, about, skills, and contact information in `components/*.tsx`.
- Update projects in `data/projects.ts`.
- Replace `public/resume.pdf` with your actual CV.
- Replace placeholder URLs (`your-username`, `your-demo-link`, and domain placeholders).

## Deploy to Vercel

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. Go to Vercel Dashboard and click **Add New Project**.
3. Import the repository.
4. Vercel auto-detects Next.js. Keep default build settings:
   - Build Command: `next build`
   - Output Directory: `.next`
5. Click **Deploy**.
6. After deployment:
   - Set your final domain in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`.
   - Redeploy for updated SEO URLs.

## Notes

- Designed for a clean, professional AI engineering brand.
- Uses reusable typed components and project data.
- No unnecessary runtime libraries.
