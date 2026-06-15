# Portfolio Update Plan — reetbatra.vercel.app

## 1. Critical Bug Fix — WebGL Crash (do this first)

The site shows "Application error" because Vanta.js (Three.js/WebGL) throws on load in many environments. Replace both Vanta Globe (Hero) and Vanta Waves (Articles) with CSS gradient animations. Same dark feel, zero crash risk.

---

## 2. Hero (`components/Hero.tsx`)

- **Tagline** → `Developer Advocate, building at the intersection of crypto × AI`
- **Resume link** → Update the Google Drive link to your new PDF
- Drop the Vanta globe, use a CSS animated gradient or simple particle effect

---

## 3. New: Experience Section (`components/Experience.tsx`)

Add between Hero and Skills. Two cards:

### StarkWare — Developer Relations Engineer
- India's first Cairo bootcamp, 4,800+ developers, 11 events
- 40% onboarding improvement, 30% developer adoption growth
- $21K grants managed

### DablClub — Developer Relations
- AggLayer developer adoption, Dabl Learn platform
- Cross-ecosystem DevRel (Polygon ecosystem)

---

## 4. Skills (`components/Skills.tsx`)

**Add:** Python, Cairo, Claude API / Anthropic SDK, Vercel AI SDK, Git

**Remove:** Java, Storyblok, Bootstrap (irrelevant to AI/crypto/Web2 DevRel)

**Reorder:** TypeScript first → AI tools cluster → blockchain → web stack

---

## 5. Projects (`components/Projects.tsx`) — Full Swap

Remove all 4 current projects (Defi Sync, Sushi Man, NFT Minter, Brainwave). Replace with:

| Project | Stack | Link |
|---|---|---|
| **docs-parity** | TypeScript, Claude API, Firecrawl, Next.js | docsparity.vercel.app |
| **open-money-intel** | TypeScript, AI agents, Next.js | open-money-intel.vercel.app |
| **deja-vu-agent** | Python, FastAPI, LLM | github.com/reetbatra/deja-vu-agent |
| **zk-wordle** | Compact/Midnight, TypeScript, React | github.com/reetbatra/zk-wordle |
| **zk-cred-verifier** | TypeScript, ZK proofs | github.com/reetbatra/zk-cred-verifier |
| **chronos-gambit** | TypeScript, Move, Aptos | github.com/reetbatra/chronos-gambit |

---

## 6. Articles (`components/ArticleComponent.tsx`)

Keep all 6 articles. Remove the Vanta Waves background (same WebGL crash), replace with CSS background.

---

## 7. POW Section (`components/POW.tsx`)

Keep the 4 photo cards — content is good. Fix the typo: `"Inida"` → `"India"`.

---

## 8. Footer (`components/Footer.tsx`)

No changes needed.

---

## Implementation Order

1. Fix WebGL crash (Hero + Articles) — unblocks the live site from erroring
2. Update tagline + resume link in Hero
3. Swap Projects data
4. Update Skills (add/remove/reorder)
5. Create Experience component + wire into `page.tsx`
6. Fix POW typo
