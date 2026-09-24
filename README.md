# Leaf It Alone: website

Multi-page marketing site for Leaf It Alone Lawn & Landscaping (Guelph, ON). Built with Astro as a static site. It has no database and no CMS; content lives in `src/data` and `src/content/blog`.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
```

## Is there a backend?

No. It's a static site: plain HTML/CSS/JS files with no server code and no database. The only thing that needs a service is the quote form:

- **Netlify (recommended):** works automatically through Netlify Forms. No setup, no code.
- **Any other host (Vercel, Cloudflare Pages…):** create a free form at [formspree.io](https://formspree.io) and set `PUBLIC_FORM_ENDPOINT` to its URL in the host's environment variables (see `.env.example`).

## Deploy on Vercel (current host)

`vercel.json` turns on clean URLs (so `/about` serves `about.html`) and carries the old Wix blog redirects.

**Quote form on Vercel:** Vercel has no built-in form handling, so:
1. Create a free form at [formspree.io](https://formspree.io) with Josh@leafitalone.ca as the recipient.
2. In Vercel: **Project → Settings → Environment Variables**, add `PUBLIC_FORM_ENDPOINT` = the Formspree URL (e.g. `https://formspree.io/f/abcdwxyz`), for Production and Preview.
3. Redeploy, then send a test quote with a photo.

Until that variable is set, the form opens the visitor's email app with the request filled in and addressed to Josh, so no leads are lost (photos can't be attached that way).

## Deploy on Netlify

1. In Netlify, choose **Add new site → Import from Git → GitHub** and pick `Ojulari123/leafitalone`. Netlify reads the build settings from `netlify.toml` (`npm run build`, publish `dist`, Node 22).
2. Deploy. Then open **Forms → Notifications** and add an email notification to Josh@leafitalone.ca.
3. Send a test quote with two or three services and a photo, and check that it arrives.
4. Under **Domain management**, add `www.leafitalone.ca` as the primary domain (the bare `leafitalone.ca` redirects to it). Point DNS at Netlify only **after** the launch checklist below is done.

`public/_redirects` sends old Wix blog URLs that haven't been migrated to related pages. Pages build as `/about.html` and are served at `/about`, which matches the existing Wix URLs.

## Pages (28)

| Page | URL |
| --- | --- |
| Home | `/` |
| Services overview | `/services` |
| 11 service pages (same URLs as the Wix site) | `/lawn-mowing-guelph`, `/spring-cleanup-guelph`, `/fall-cleanups-guelph`, `/sod-installation-guelph`, `/mulch-installation-guelph`, `/stone-installation-guelph`, `/tree-trimming-removal-guelph`, `/shrub-trimming-removal-guelph`, `/hedge-trimming-guelph`, `/rototilling-guelph`, `/seeding-fertilizing-guelph` |
| Projects gallery (filter + lightbox) | `/projects` |
| Reviews | `/testimonials` (same URL as Wix) |
| About | `/about` |
| Service areas | `/service-areas` |
| FAQ | `/faq` |
| Get a free quote (3-step form) | `/contact` (same URL as Wix) |
| Thank you (use as the conversion goal) | `/thank-you` |
| Blog + 4 posts (old `/post/…` URL format kept) | `/blog`, `/post/…` |
| Privacy (PIPEDA/CASL), Accessibility, 404 | `/privacy`, `/accessibility` |

## Where to edit things

- Phone, email, rating, social links: `src/data/site.ts`
- Services, prices, FAQs, mulch/stone options: `src/data/services.ts`
- Project photos + captions: `src/data/photos.ts`
- Reviews: `src/data/reviews.ts`
- Neighbourhoods / nearby towns: `src/data/areas.ts`
- Blog posts: add a Markdown file to `src/content/blog/` (the file name becomes the `/post/…` URL)
- Colours, fonts, buttons: `src/styles/global.css`

## Content to confirm with Josh before launch

Taken from the current site (safe): mowing from $55/visit, weed control from $50/application, the service descriptions, the six mulch colours, the six stone types, trees up to 15 ft, sod process + 4-week watering schedule, the "Why choose us" points, and reviews from Lorna and Sharon C.

**Needs confirmation (written as reasonable placeholders):**
- [ ] Google rating **5.0 from 29 reviews** (taken from a directory listing, so check the live number) and the "leave a review" link (`googleReviewUrl`)
- [ ] Nearby towns served (Rockwood, Puslinch, Aberfoyle, Eramosa, Arkell, Fergus, Elora)
- [ ] Business hours (hidden until filled in `site.ts`)
- [ ] About page: Josh's story and the owner quote ("If something is not right, tell me and I will make it right")
- [ ] FAQ policies: "Do I need to be home?", pricing from photos, how customers pay
- [ ] Privacy: the 12-month retention period for quote requests
- [ ] Insurance / WSIB status. This isn't claimed anywhere yet. If true, add it to the trust strip on the home page, because it's a strong trust signal.
- [ ] 6 to 8 more Google reviews to add to `reviews.ts`
- [ ] A photo of Josh (About page, marked `TODO`)

## Launch checklist

- [ ] **Ask Josh for the original phone photos.** Most of the copies on Wix were uploaded at only 960×720, which is why large images (like the home slideshow) look a little soft. The site never asks for more than the original size, so higher-resolution photos will sharpen everything automatically once `ORIGINAL` in `src/data/photos.ts` is updated.
- [ ] Export the original job photos from the Wix Media Manager into `public/photos/` and change `src()` in `src/data/photos.ts` to local paths. The site currently loads them from Wix's CDN, which will stop working if the Wix site is deleted.
- [ ] Migrate the 16 remaining Wix blog posts into `src/content/blog/` and remove their lines from `public/_redirects`
- [ ] Update the website link on the Google Business Profile, and make its services match these pages
- [ ] Add GA4 or Plausible, and track `/thank-you` views and `tel:` link clicks as conversions
- [ ] Consider downscaling uploaded photos in the browser. Netlify Forms caps a submission at about 8 MB, and the form currently rejects anything over 7 MB
- [ ] Submit `https://www.leafitalone.ca/sitemap-index.xml` in Google Search Console
- [ ] Replace the SVG leaf mark in `src/components/Logo.astro` with the original vector logo if Josh has one
