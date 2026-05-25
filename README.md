# Gabriel Kaminise — Professional Portfolio

A premium, bilingual (EN / PT-BR) professional portfolio website for a Backend Java Developer & SRE/DevOps engineer.

**Live URL:** [portfolio.gabrielmisao.com.br](https://portfolio.gabrielmisao.com.br)

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Archivo (headings) + Space Grotesk (body) via Google Fonts
- **Theme:** next-themes (dark/light toggle)
- **i18n:** Custom React Context (EN default + PT-BR)

---

## Running Locally

### Prerequisites
- Node.js 18+
- npm

### Steps

```bash
# 1. Clone or copy the project
cd gabriel-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## Building for Production

```bash
npm run build
npm start
```

---

## Adding Your CV

Place your CV file at:

```
public/cv/gabriel-kaminise-cv.pdf
```

The "Download CV" buttons throughout the site link to this file.

---

## Deploying to Vercel

### Option 1: Via Vercel CLI

```bash
# Install Vercel CLI (once)
npm install -g vercel

# Deploy from project root
vercel

# Follow prompts - it auto-detects Next.js
```

### Option 2: Via Vercel Dashboard

1. Push your project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Vercel auto-detects Next.js — click **Deploy**.
5. Done. Your site gets a `.vercel.app` URL immediately.

---

## Connecting the Subdomain `portfolio.gabrielmisao.com.br`

After deploying to Vercel:

1. **In Vercel Dashboard:**
   - Go to your project → **Settings** → **Domains**
   - Click **Add Domain**
   - Type: `portfolio.gabrielmisao.com.br`
   - Vercel shows you the required DNS records

2. **In your DNS provider (where gabrielmisao.com.br is registered):**
   - Add a **CNAME** record:
     - Name: `portfolio`
     - Value: `cname.vercel-dns.com`
   - Or use the **A record** values Vercel provides

3. **Wait for DNS propagation** (usually 1–30 minutes).

4. Vercel automatically provisions an SSL certificate.

---

## Project Structure

```
gabriel-portfolio/
├── app/
│   ├── globals.css          # Global styles, CSS variables, utility classes
│   ├── layout.tsx           # Root layout with SEO metadata, font loading, providers
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── Header.tsx           # Sticky nav, language switcher, theme toggle, mobile menu
│   ├── Hero.tsx             # Hero section with animated service health card
│   ├── About.tsx            # Bio, stats, location, language info
│   ├── Positioning.tsx      # "What I bring to engineering teams" cards
│   ├── Experience.tsx       # Animated vertical timeline
│   ├── Skills.tsx           # Categorized skill matrix with pills
│   ├── Projects.tsx         # Project cards with stack tags and status
│   ├── CareerFocus.tsx      # Target roles + value propositions + CTA
│   ├── Education.tsx        # Education cards
│   ├── Certifications.tsx   # Learning roadmap with progress bars
│   ├── Contact.tsx          # Contact CTA section
│   ├── Footer.tsx           # Minimal dark footer
│   └── ui/
│       ├── LanguageContext.tsx   # EN/PT-BR React Context + localStorage
│       ├── SectionHeading.tsx    # Reusable animated section title
│       └── AnimatedSection.tsx   # Scroll-triggered fade-up wrapper
├── lib/
│   ├── translations.ts      # All UI strings in EN and PT-BR
│   ├── data.ts              # All structured content (experiences, skills, projects, etc.)
│   └── utils.ts             # cn() helper for class merging
└── public/
    └── cv/                  # Place gabriel-kaminise-cv.pdf here
```

---

## Editing Content

### Updating your information
- **Text content (bilingual):** Edit `lib/translations.ts` — every visible string in both EN and PT-BR
- **Experiences, skills, projects:** Edit `lib/data.ts` — structured content arrays
- **Add a new project:** Add an entry to the `projects` array in `lib/data.ts`
- **Add a new certification:** Add an entry to the `certifications` array in `lib/data.ts`

### Adding your photo
Replace the initials avatar in `components/About.tsx` with an `<Image>` component:
```tsx
import Image from 'next/image'
// Replace the initials div with:
<Image src="/images/gabriel.jpg" alt="Gabriel Kaminise" fill className="object-cover" />
```
Place your photo at `public/images/gabriel.jpg`.

---

## Suggested GitHub Projects to Add Later

To strengthen the portfolio, consider adding these real projects to GitHub and linking them:

1. **Java REST API** — A CRUD REST API with Spring Boot, JPA/Hibernate, PostgreSQL, Docker Compose, and unit tests. Shows backend fundamentals.

2. **GKFitSystem** — The swimming school management SaaS. Even a partial implementation shows SaaS architecture thinking.

3. **Observability Demo** — A Spring Boot app with Micrometer + Prometheus metrics, structured logging, health endpoints, and a Docker Compose stack with Grafana.

4. **Incident RCA Template** — A GitHub repository with documented postmortem templates and example root cause analyses (anonymized). Shows your SRE mindset.

5. **DevOps Pipeline** — A GitHub Actions CI/CD pipeline for a Java app: build → test → Docker build → push to registry. Shows CI/CD knowledge.

---

## Future Improvements

- [ ] Add real project screenshots/images to project cards
- [ ] Add your actual photo in the About section
- [ ] Add a working contact form (EmailJS, Resend, or Formspree)
- [ ] Add GitHub API integration to show live repository stats
- [ ] Add a blog section for technical articles
- [ ] Add Google Analytics or Vercel Analytics
- [ ] Add real CV PDF file to `public/cv/`
- [ ] Link real GitHub projects once they are published
- [ ] Add og:image (Open Graph social preview image)
- [ ] Consider adding case study detail pages for projects

---

## License

Personal portfolio — all rights reserved.
