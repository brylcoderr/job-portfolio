# Shubham Kushwah — Developer Portfolio

A modern, single-page developer portfolio built with **Next.js 16**, **Tailwind CSS v4**, **Three.js**, and **Framer Motion**. Features a "coding vibes" aesthetic with terminal UI touches, interactive 3D elements, smooth scroll animations, and a persistent light/dark theme toggle.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-r185-black?logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **Interactive 3D Hero** — Wireframe icosahedron + particle network that reacts to mouse movement (react-three-fiber)
- **Terminal Typing Animation** — Fake terminal window with syntax-highlighted code that types out on load
- **Light & Dark Themes** — Toggle with persistence via `localStorage`, smooth CSS transitions, dark theme styled like a code editor
- **Scroll Reveal Animations** — Sections fade/slide into view using Framer Motion's `useInView`
- **3D Tilt Project Cards** — Spring-physics hover effect with perspective transforms
- **Animated Skill Pills** — Staggered entrance animations grouped by category
- **Timeline Experience Section** — Alternating left/right layout with pulsing dots
- **GitHub Contribution Heatmap** — Decorative contribution-style strip in the footer
- **Custom Cursor** — Dot + ring follower on desktop (auto-disabled on touch devices)
- **Mobile Responsive** — Hamburger nav with animated drawer, stacked layouts
- **SEO Ready** — Meta tags, Open Graph, semantic HTML, proper heading hierarchy

## 🛠 Tech Stack

| Layer        | Technology                                  |
| ------------ | ------------------------------------------- |
| Framework    | Next.js 16 (App Router, Static Export)      |
| Language     | TypeScript 5                                |
| Styling      | Tailwind CSS v4 (`@theme inline`)           |
| 3D Graphics  | Three.js + @react-three/fiber + @react-three/drei |
| Animations   | Framer Motion 13                            |
| Icons        | Lucide React + inline SVGs                  |
| Fonts        | Inter (body) + JetBrains Mono (code accent) |
| Deployment   | Vercel                                      |

## 📁 Project Structure

```
├── app/
│   ├── globals.css        # Design system, theme vars, animations
│   ├── layout.tsx         # Root layout, fonts, SEO meta tags
│   ├── page.tsx           # Single-page composition
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx         # Fixed glass-morphism nav + mobile drawer
│   ├── ThemeProvider.tsx   # Light/dark context with localStorage
│   ├── ThemeToggle.tsx     # Animated Sun/Moon toggle
│   ├── HeroScene.tsx      # Three.js 3D canvas (lazy-loaded)
│   ├── CustomCursor.tsx    # Desktop-only dot + ring cursor
│   ├── SectionReveal.tsx   # Reusable scroll-reveal wrapper
│   ├── Footer.tsx          # Contribution strip + social links
│   └── sections/
│       ├── Hero.tsx        # Name, tagline, terminal, CTAs
│       ├── About.tsx       # Bio + highlight cards
│       ├── Skills.tsx      # Animated skill pills by category
│       ├── Experience.tsx  # Timeline with 3 positions
│       ├── Projects.tsx    # 4 project cards with 3D tilt
│       ├── Testimonials.tsx# Placeholder logo strip
│       └── Contact.tsx     # Form + contact info + resume DL
└── public/
    └── resume.pdf          # Replace with your actual resume
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Info

Edit these files to swap in your own details:

- **Name, tagline, bio** → `components/sections/Hero.tsx` and `components/sections/About.tsx`
- **Skills** → `components/sections/Skills.tsx` — update the `SKILL_CATEGORIES` array
- **Experience** → `components/sections/Experience.tsx` — update the `EXPERIENCES` array
- **Projects** → `components/sections/Projects.tsx` — update the `PROJECTS` array with real titles, descriptions, tech stacks, and links
- **Contact info** → `components/sections/Contact.tsx` — update the `CONTACT_LINKS` array
- **Social links** → `components/Footer.tsx` — update the `SOCIAL_LINKS` array
- **Resume** → Replace `public/resume.pdf` with your actual file
- **SEO meta** → `app/layout.tsx` — update `metadata` export

### Theme Colors

All colors are defined as CSS custom properties in `app/globals.css`:

- Light theme → `:root { ... }`
- Dark theme → `[data-theme="dark"] { ... }`

Key variables: `--accent`, `--bg`, `--fg`, `--surface`, `--border-color`

### Contact Form

The form currently shows a success state but doesn't send emails. To wire it up:

1. **EmailJS** — Add your service/template IDs in `Contact.tsx`
2. **Formspree** — Replace the form `onSubmit` with a `fetch` to your Formspree endpoint
3. **Custom API** — Create an API route at `app/api/contact/route.ts`

## 🌐 Deployment

### Vercel (Recommended)

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) for automatic deployments.

## 📄 License

MIT — feel free to use this as a starting point for your own portfolio.
