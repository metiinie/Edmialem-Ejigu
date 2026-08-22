# Edmealem Ejigu Business Group — Official Website
## Complete Build Documentation

**Version:** 2.0 (Credibility-First Rebuild)
**Prepared for:** Edmealem Ejigu Business Group
**Document purpose:** Full reference for developing, verifying, launching, and maintaining the official corporate website

---

## PART 1 — STRATEGIC FOUNDATION

### 1.1 What this website is for

This website is not a marketing brochure. It is a **B2B corporate credibility platform**.

Its single job is to answer the question an international visitor asks within the first 10 seconds:

> *"Is this a real, capable, trustworthy company I can do business with?"*

Every design decision, every word of copy, and every piece of data on the site must serve that question.

### 1.2 Who visits this website

| Visitor Type | What They Need to See |
|---|---|
| **International supplier** | Can this company reliably receive, clear, and distribute my equipment in Ethiopia? |
| **International agricultural buyer** | Can this company supply compliant, specification-grade commodities at volume? |
| **Government / institutional procurement officer** | Can this company execute a complex, multi-item supply contract? |
| **Domestic investor or partner** | What does this group actually own and operate? |
| **Job applicant** | Is this a serious, stable organization worth working for? |

### 1.3 The corporate identity — in one sentence

> **Edmealem Ejigu Business Group is a diversified Ethiopian trading and investment company connecting international suppliers and buyers with Ethiopia through industrial imports, agricultural exports, procurement, logistics, and investment activities.**

This sentence is the anchor. Every page on the website must be consistent with it.

### 1.4 The four business pillars

The website is structured around four clearly defined pillars. These are not arbitrary — they reflect the actual documented business activities of the group.

```
EDMEALEM EJIGU BUSINESS GROUP
│
├── 1. IMPORT & INDUSTRIAL SUPPLY
│       Heavy machinery, commercial vehicles,
│       tires, components — from Asia/Europe
│       into Ethiopia via Djibouti corridor
│
├── 2. AGRICULTURAL COMMODITY EXPORT
│       Sesame, pulses, oilseeds, Arabica coffee
│       from Ethiopia to 81 buyers in
│       UAE, China, Singapore, India, Vietnam, UK
│
├── 3. PROCUREMENT & GOVERNMENT SUPPLY
│       Construction materials, generators, AV systems
│       supplied to Ethiopian federal/regional
│       institutions via competitive tender
│
└── 4. HOSPITALITY & INVESTMENT
        3-star hotel venture in Debre Markos;
        real estate; other commercial ventures
```

### 1.5 The two-way trade identity

The group's most distinctive characteristic is that it operates in **both directions simultaneously**:

- **Inbound:** Capital goods from global manufacturers → Ethiopia
- **Outbound:** Ethiopian agricultural commodities → international buyers

The hero section of the website visualizes this two-way flow. This is the **signature design element** — it communicates the business model instantly, without words.

---

## PART 2 — CONTENT STANDARDS

### 2.1 The three content tiers

Before any content goes live, it must be classified into one of three tiers:

| Tier | Definition | Action |
|---|---|---|
| **Tier 1 — Verified** | Confirmed directly by the company with documentation | Publish with confidence |
| **Tier 2 — Trade data supported** | Appears in credible third-party trade databases (Volza, Tendata, Panjiva) | Publish with careful wording (e.g. "trade records indicate", "documented shipments") |
| **Tier 3 — Inferred / unverified** | Appears in research but not confirmed by company or primary source | Do NOT publish until the company confirms |

### 2.2 Language rules — what to say and what not to say

#### Words and phrases that must NEVER appear on this website

| Do NOT use | Use instead |
|---|---|
| "Formidable conduit" | "Established importer" |
| "Elite global industrial giants" | "Global manufacturers" |
| "Absolute supply chain sovereignty" | "End-to-end import logistics" |
| "Dominant, diversified holding group" | "Diversified trading and investment company" |
| "Millions of dollars" (unverified) | Omit or replace with verified figures |
| "Organic" (unless certified) | "Agricultural commodities" |
| "Zero pesticide" (unless tested/certified) | "Subject to pre-shipment testing" |
| "Trusted Global Partners" (for manufacturers) | "Global Sourcing Network" |
| "Official distributor of [Brand]" | "Sourcing relationships include..." |
| "Founded in 1995" | "Building on trading experience since 1995, formally established 2004" |
| "Conglomerate" | "Diversified business group" |
| "Massive" / "elite" / "unassailable" | Remove entirely |

#### Correct framing for the company history
```
WRONG:  "Founded in 1995..."
RIGHT:  "Building on trading experience dating back to 1995,
         Edmealem Ejigu Business Group was formally established
         as a business group in 2004."
```

#### Correct framing for manufacturer relationships
```
WRONG:  "Trusted Global Partners: HITACHI · SANY · EPIROC"
RIGHT:  "Global Sourcing Network — manufacturers sourced from:
         HITACHI · SANY · EPIROC · LINGONG · THRIVENI
         [Trade data indicates sourcing relationships.
         Official distributor status subject to
         verification by the company.]"
```

#### Correct framing for CEO biography
```
WRONG:  "Chief of Party for the USAID Supply Chain
         Strengthening Activity at Management Sciences
         for Health — managing $30M budgets and 120 staff"
RIGHT:  "Edmealem Ejigu has extensive experience in
         supply chain logistics and institutional program
         management, including US Government-funded
         logistics programs in Ethiopia."
[NOTE: All specific titles, organizations, and figures
 must be approved by Edmealem Ejigu personally before
 publication. The CEO profile page should not go live
 without his written sign-off.]
```

### 2.3 The quality and compliance section — critical guidance

The 2022 Chinese customs suspension affecting Ethiopian sesame exporters is a matter of public record. The website's response to this must be:

1. **Do not mention the suspension explicitly** — there is no need to draw attention to it
2. **Do not make claims that could be disproved** — no "zero pesticide", no "fully organic", no absolute guarantees
3. **Describe process, not outcomes** — explain *what the company does* (testing, grading, phytosanitary compliance), not *what it promises*
4. **Before publishing the quality section**, confirm directly with the group:
   - What testing protocols are currently in use?
   - Which export markets are currently active?
   - What certifications does the company currently hold?
   - Is the company currently in good standing with Chinese customs authorities?

The current quality section in the website is deliberately written in process-oriented language. It should remain that way.

---

## PART 3 — DESIGN SYSTEM

### 3.1 Color tokens

| Name | Hex | Usage |
|---|---|---|
| `--navy` | `#0B1628` | Primary background — deep, serious, international |
| `--navy-mid` | `#132035` | Secondary background — section alternates |
| `--navy-soft` | `#1A2C45` | Cards, panels, elevated surfaces |
| `--amber` | `#B8830A` | Primary brand accent — muted, institutional gold |
| `--amber-lt` | `#D4A020` | Hover states, data highlights |
| `--amber-dim` | `rgba(184,131,10,0.14)` | Subtle amber fills |
| `--stone` | `#F5F0E8` | Primary text on dark |
| `--stone-mid` | `#E8E1D4` | Secondary text |
| `--slate-blue` | `#2B5BA8` | Import data accent (cool, industrial) |
| `--green-trade` | `#1E5C3A` | Export data accent (agricultural) |
| `--border` | `rgba(245,240,232,0.12)` | Subtle borders |
| `--border-amber` | `rgba(184,131,10,0.25)` | Amber-tinted borders |

**Design rationale:** Deep navy + muted amber reads as "international logistics / trade company." It avoids the clichéd bright gold on black that reads as generic "luxury African brand." The slate-blue and trade-green are functional — they visually separate import data (blue = industrial, cold) from export data (green = agricultural, organic).

### 3.2 Typography

| Role | Font | Weights | Usage |
|---|---|---|---|
| **Display** | DM Serif Display | Regular, Italic | Section headings, hero title, card titles |
| **Body** | DM Sans | 300 (Light), 400, 500, 600 | All body copy, UI labels, navigation |
| **Data / Mono** | IBM Plex Mono | 400, 600 | Statistics, percentages, HS codes, tags, technical labels |

**Why this pairing:** DM Serif Display has earned authority but feels contemporary — not the British broadsheet affect of Playfair, not as decorative as a historical serif. DM Sans is its designed companion. IBM Plex Mono signals precision and transparency — specifically appropriate for a trading company that needs to display data credibly.

**Import from Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet">
```

### 3.3 The signature design element

**The two-way trade flow diagram** in the hero section is the unique visual element that makes this site identifiable. It shows:

```
[Global Manufacturers] → [Ethiopia] ← machinery arrives
[Ethiopia] → [International Buyers] ← commodities leave
```

This is not decoration. It is the business model illustrated. No other Ethiopian trading company has this as their hero element. It should be preserved in any redesign.

### 3.4 Spacing and layout

- **Section padding:** 96px top/bottom on desktop, 64px on mobile
- **Container max-width:** 1180px, centered, 48px horizontal padding
- **Grid gaps:** 80px for two-column layouts, 48px for card grids
- **Border-radius:** 0px throughout — deliberately square/rectangular for institutional seriousness
- **Dividers:** 1px solid `var(--border)` — hairline only, never decorative rules

### 3.5 Motion principles

- **Scroll reveals:** Elements fade up (`opacity: 0 → 1`, `translateY: 22px → 0`) at 0.65s ease
- **Staggered delays:** 0s, 0.1s, 0.15s, 0.2s — subtle, not theatrical
- **Data bars:** Animate from 0% → actual value over 1.1s cubic-bezier when the containing section enters the viewport
- **SVG background in hero:** Animated trade flow lines — subtle, 7% opacity. Not distracting.
- **Hover states:** 0.2s transitions on color, border-color, and very subtle translateY(-1px) on buttons
- **No parallax** — causes performance issues on mobile and can feel gimmicky for B2B audiences

---

## PART 4 — PAGE-BY-PAGE CONTENT SPECIFICATION

### 4.1 Navigation

**Items (in order):**
About · Businesses · Global Trade · Compliance · Careers · **Contact** (CTA button)

**Behavior:**
- Sticky on scroll, background deepens from 94% to 98% opacity
- Language toggle bar above nav (EN / 中文 / العربية)
- Mobile: hamburger opens a full-width dropdown

**Language toggle — important note:** The language buttons are currently placeholders. Full multilingual support (Mandarin, Arabic) must be implemented using a proper i18n framework (recommended: i18next for JavaScript, or server-side with separate HTML files per language). Do not launch the language toggles as live buttons without actual translated content behind them.

### 4.2 Hero section

**Headline:** "Connecting Ethiopia to Global Markets"
*(Three lines: "Connecting" / "Ethiopia" in italic amber / "to Global Markets")*

**Sub-copy:**
> Edmealem Ejigu Business Group is a diversified Ethiopian trading and investment company — bringing industrial and commercial goods in, sending Ethiopia's finest agricultural commodities out, and building domestic ventures across logistics, procurement, and hospitality.

**Two CTAs:**
- Primary: "Explore Our Businesses" → `#businesses`
- Ghost: "Partner With Us" → `#contact`

**Trade flow diagram:** (see Section 3.3)
- Left column: Inbound flow (world → Ethiopia, import chips in blue)
- Right column: Outbound flow (Ethiopia → world, export chips in green)
- Below: 4 key statistics (282 / 195 / 81 / 30+)

**Background:** Animated SVG with amber and slate-blue trade route lines at 7% opacity. Runs continuously but is subtle — atmospheric, not distracting.

**Stats bar content:**
| Stat | Value | Label |
|---|---|---|
| Import shipments | 282 | Verified import shipments |
| Export shipments | 195 | Export shipments dispatched |
| Export buyers | 81 | Verified international buyers |
| Years of activity | 30+ | Years of trading activity |

*All four statistics are Tier 2 (trade data supported). The "30+" is calculated from the 1995 founding of trading activities, which is appropriate.*

### 4.3 About section

**Two columns:**
- Left: Company narrative (history, structure, scope)
- Right: CEO profile card

**Company narrative — approved copy:**
The copy must communicate:
1. Trading roots to 1995, formal incorporation 2004 (careful framing — see Section 2.2)
2. Registered names: Edmealem Ejigu Tessema + Edmealem Ejigu Import Export
3. Headquarters: Birhanena Selam Building, 4 Kilo, Addis Ababa
4. Four-pillar business description (not just "import/export")
5. Operational footprint: domestic Ethiopia + international trade corridors

**CEO profile — what to include (pre-verification):**
- Full name: Edmealem Ejigu
- Title: Founder & Chief Executive Officer
- Education: B.Pharm (Addis Ababa University) + MBA (Indira Gandhi National Open University)
- Background summary: supply chain logistics, pharmaceutical sector, US Government-funded programs in Ethiopia — *without specific employer names or budget figures until verified*

**CEO profile — ⚠ VERIFICATION REQUIRED before publishing:**
- [ ] Current role title and employer (Management Sciences for Health / USAID program)
- [ ] Previous titles (Chemonics International — Country Director)
- [ ] Budget oversight figures ($30M)
- [ ] Team size figures (120 staff)
- [ ] Years of experience (26 years total, 19 years USG-funded)
- [ ] Ministry of Health advisory/editorial contributions
- [ ] Approved professional photograph
- [ ] Written approval from Edmealem Ejigu on the published biography

### 4.4 Businesses section (tabbed)

**Four tabs:**
1. Import & Industrial Supply
2. Agricultural Export
3. Procurement & Trading
4. Hospitality & Investment

**Tab 1 — Import:**
- Heading: "Heavy Machinery & Commercial Equipment"
- Products listed (all Tier 2):
  - Bulldozers, Angledozers, Graders, Levellers, Excavators, Shovel Loaders (HS 8429)
  - Commercial Freight Trucks, Goods Transport Vehicles (HS 8704)
  - Truck Mixers, Cranes
  - Heavy-Duty Tires — Bus/Lorry (HS 4011)
  - Automotive Components, Clutch Systems (HS 8708)
- Sourcing origins bar chart (data from trade records)
- Sourcing network chips: HITACHI · SANY · EPIROC · LINGONG · THRIVENI
- Note: *"Trade data indicates sourcing relationships. Official distributor status subject to verification."*

**Tab 2 — Export:**
- Heading: "Ethiopian Agricultural Commodities for Global Markets"
- Products with HS codes (all Tier 2 from trade records):
  - Sesame Seeds (HS 12074090)
  - Rapeseed & Canola
  - General Oilseeds (HS 12079990)
  - Green Mung Beans (HS 07133300)
  - Dry Peas (HS 07132020)
  - White Beans
  - Ethiopian Arabica Coffee — Guji Grade 2 (HS 09011100)
- Export destinations bar chart
- Verified buyers: CMC · Thien Thanh I/E · N.A. Sesame Works

**⚠ VERIFICATION REQUIRED for export tab:**
- [ ] Current active export commodities (may have changed since data was collected)
- [ ] Current active export markets
- [ ] Current phytosanitary certification status
- [ ] Specific product technical specifications (moisture %, admixture %) — get from the company
- [ ] Current Chinese market status (is the company currently exporting to China?)

**Tab 3 — Procurement:**
- Products: Granite tiles, wooden doors, indoor display systems, 30KVA generators, construction packages
- Projects referenced: Defense Construction Enterprise (10-story project), Hawassa City Administration
- **⚠ Verify**: Can these projects be named publicly? Some government clients prefer confidentiality.

**Tab 4 — Investment:**
- Hotel venture: 3-star, Debre Markos, Amhara Region, licensed ~2019–2020
- **⚠ VERIFICATION REQUIRED:**
  - [ ] Hotel name
  - [ ] Current operational status
  - [ ] Any other investment or real estate ventures to include
  - [ ] Whether the group wishes this to be prominently featured

### 4.5 Global Trade section

**Two-column layout:**
- Left: Four key stats (282 / 195 / 81 / 6+) + descriptive copy
- Right: Export markets table with flags, strategic role, and % volume

**Logistics corridor strip (below main grid):**
Four-step process: Overseas Factory → Djibouti/Asha Dewelle → Inland Transit → Addis Ababa

**⚠ VERIFICATION REQUIRED:**
- [ ] Is the Djibouti/Asha Dewelle corridor the primary route currently used?
- [ ] Can the company confirm the documented transit protocols (2-day timeline, centralized maintenance)?
- [ ] What is the current status of these logistics operations?

### 4.6 Quality & Compliance section

**Six cards:**
1. Pre-Shipment Testing (pesticide residues, moisture, admixture)
2. Supply Chain Traceability (source to shipment)
3. Phytosanitary Certification (EPHRA framework)
4. Packaging Standards (moisture-resistant, food-grade, ocean freight)
5. Grading & Sorting (mechanical sorting, moisture testing)
6. Continuous Improvement (process-oriented, not promise-oriented)

**Call to action:** "Request Compliance Documentation" → contact form

**Critical notes:**
- No absolute claims ("zero pesticide", "fully organic")
- No certifications mentioned unless the company provides documentation for them
- All copy is process-description, not outcome-guarantee
- This section should be reviewed and approved by the company before launch

### 4.7 Careers section

**Four current roles (based on documented recruitment history):**
1. Senior Accountant / Financial Controller (5+ years, Master's, CPA/IFRS)
2. Import & Export Documentation Officer (3+ years, sector-specific)
3. Agricultural Quality Inspector (2+ years)
4. Machinery Procurement Specialist (4+ years, HS 8429/8704)

**⚠ VERIFICATION REQUIRED:**
- [ ] Which of these roles are currently open?
- [ ] Are there additional roles not captured in the research?
- [ ] What is the current application process? (The website removes the physical document requirement)
- [ ] Should a digital application form be built into this page?

**Culture section:** Emphasizes international exposure, institutional systems, merit-based advancement — all verifiable from the company's known business model.

### 4.8 Contact section

**Left column — company information:**
- Address: Birhanena Selam Printing Enterprise Building, 4th Floor, Side Building, 4 Kilo, Addis Ababa
- Phones: +251 111 578 728 / +251 111 566 579 / +251 911 226 783 / +251 930 035 411
- Fax: +251 111 568 701
- Email: **⚠ IMPORTANT — the current email is infoedme92@gmail.com (a Gmail address). The website must display a professional enterprise domain email (e.g. info@edmealemgroup.com). This requires the domain and email hosting to be set up BEFORE the website launches.**

**Right column — inquiry form:**
- Fields: Name, Company, Email, Country, Inquiry Type (grouped dropdown), Message
- Inquiry types grouped by: Trade / Business / Other
- Response promise: "Within 2 business days" — only include if the company can actually commit to this

---

## PART 5 — TECHNICAL REQUIREMENTS

### 5.1 Domain and hosting

| Action | Recommendation | Priority |
|---|---|---|
| **Domain acquisition** | Register `edmealemgroup.com` (preferred) or `edmealem.et` (Ethiopian ccTLD) | **Critical — do first** |
| **Legacy domain redirect** | Set up 301 permanent redirect from `edmealemimportexport.com` → new domain | High |
| **Email hosting** | Set up Google Workspace or Microsoft 365 for `@edmealemgroup.com` | **Critical — before launch** |
| **SSL certificate** | HTTPS required — included with most hosting plans | Critical |
| **Hosting** | Any major provider (Netlify, Vercel for static; AWS/DigitalOcean for CMS-backed) | High |

### 5.2 Recommended tech stack

**Option A — Simple (recommended to start):**
- Static HTML/CSS/JS (as built)
- Hosted on Netlify or Vercel (free tier sufficient)
- Contact form via Formspree or Netlify Forms
- No backend required

**Option B — CMS-backed (for easy content updates):**
- Astro or Next.js frontend
- Sanity.io or Contentful as headless CMS
- Allows non-technical staff to update job listings, news, product specs
- Recommended when the company wants to manage content independently

**Option C — Full CMS (if team is non-technical):**
- WordPress with a custom theme matching this design
- Easier for staff to update
- Requires ongoing maintenance and security updates

**Recommendation:** Start with Option A for launch speed. Migrate to Option B when the company is ready to self-manage content.

### 5.3 Contact form backend

The contact form needs a backend to function. Options:

| Service | Cost | Setup |
|---|---|---|
| **Formspree** | Free (50 submissions/month) | Add `action="https://formspree.io/f/[ID]"` |
| **Netlify Forms** | Free (100/month) | Add `netlify` attribute to form |
| **EmailJS** | Free (200/month) | JavaScript SDK, no server needed |
| **Custom backend** | Server cost | Full control, requires developer |

**Routing:** Each inquiry type in the dropdown should route to a different email address:
- Import inquiries → `import@edmealemgroup.com`
- Export inquiries → `export@edmealemgroup.com`
- Careers → `hr@edmealemgroup.com`
- General → `info@edmealemgroup.com`

### 5.4 Multilingual support

The website currently shows language toggle buttons (EN / 中文 / العربية) as **UI placeholders only**. Before activating them:

1. Commission professional translation of all content into Mandarin and Arabic
2. Implement i18next or a similar i18n framework
3. Create separate URL paths: `/en/`, `/zh/`, `/ar/`
4. Ensure RTL layout works correctly for Arabic

**Do not activate language toggles with placeholder text.** It will undermine credibility with exactly the buyers you're trying to reach.

### 5.5 Performance requirements

| Metric | Target | Why |
|---|---|---|
| **Page load (LCP)** | < 2.5 seconds | International visitors on variable connections |
| **Mobile responsiveness** | All breakpoints down to 375px | Majority of visitors in target markets use mobile |
| **Google fonts** | Preconnect + preload | Avoid font flash |
| **Images** | WebP format, lazy loading | Reduce payload |
| **Accessibility** | WCAG 2.1 AA | Focus states, contrast ratios, alt text |

### 5.6 SEO requirements

**Target keywords (B2B focused):**
- "Ethiopia heavy machinery importer"
- "Ethiopian sesame exporter"
- "Ethiopian agricultural commodity supplier"
- "Addis Ababa import export company"
- "Ethiopian oilseed exporter"
- "Guji coffee exporter Ethiopia"
- "Ethiopian mung bean supplier"
- "Sany machinery distributor Ethiopia"

**Technical SEO checklist:**
- [ ] `<title>` tags unique per page (max 60 chars)
- [ ] Meta descriptions per page (max 160 chars)
- [ ] Open Graph tags for social sharing
- [ ] Canonical URLs
- [ ] XML sitemap
- [ ] Robots.txt
- [ ] Structured data (Organization schema, LocalBusiness schema)
- [ ] Google Business Profile verified and linked

**Sample Organization schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Edmealem Ejigu Business Group",
  "alternateName": ["Edmealem Ejigu Tessema", "Edmealem Ejigu Import Export"],
  "foundingDate": "2004",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Birhanena Selam Building, 4th Floor, 4 Kilo",
    "addressLocality": "Addis Ababa",
    "addressCountry": "ET"
  },
  "telephone": ["+251111578728", "+251111566579"],
  "url": "https://www.edmealemgroup.com",
  "description": "Diversified Ethiopian trading and investment company — import, export, procurement, logistics, and investment."
}
```

---

## PART 6 — SOCIAL MEDIA CONSOLIDATION

The website currently has social media buttons that link to `#`. These must be properly connected **before launch**.

### 6.1 Accounts to create

| Platform | Handle (suggested) | Priority | Content focus |
|---|---|---|---|
| **LinkedIn** | linkedin.com/company/edmealem-ejigu-business-group | **High** | B2B partnerships, corporate news, job listings |
| **X (Twitter)** | @EdmealemGroup | Medium | Trade announcements, market updates |
| **Facebook** | facebook.com/EdmealemGroup | Medium | Domestic audience, general company updates |

**LinkedIn strategy:** The CEO's personal LinkedIn profile is reportedly active and well-connected in supply chain circles. Create a company page and ask the CEO to link it as "Company." This transfers significant professional credibility to the corporate page immediately.

### 6.2 What to post — by platform

**LinkedIn (monthly minimum: 4 posts):**
- Shipment milestones ("282 verified import shipments and counting")
- Agricultural harvest/sourcing updates
- Job openings (route to careers page)
- Industry commentary on Ethiopian trade
- Participation in trade fairs or government tender results

**X / Twitter (weekly minimum: 2 posts):**
- Trade news affecting Ethiopia
- Port updates, corridor news
- Short commodity market observations
- Company milestones

**Facebook (2x/month):**
- Company news in Amharic + English
- Photos of operations (machinery delivery, agricultural sourcing)
- Job openings for domestic applicants

---

## PART 7 — INFORMATION REQUIRED FROM THE CLIENT

This section is the most important part of this document for the website developer.

**Before the website can be finalized and launched, the following information must be collected directly from Edmealem Ejigu Business Group:**

### 7.1 Legal and corporate

- [ ] Official registered company name(s) — certified copy
- [ ] Business registration certificate(s)
- [ ] Tax Identification Number (for footer/legal page if required)
- [ ] Official business license
- [ ] Establishment/registration date confirmation (formal: 2004?)
- [ ] Current employee headcount (permanent and temporary)

### 7.2 Brand identity

- [ ] Official company logo (vector format: .SVG or .AI preferred; minimum .PNG at 2x resolution)
- [ ] Official brand colors (if any defined)
- [ ] Company profile PDF (if one exists)
- [ ] Any existing brochures or marketing materials

### 7.3 Leadership

- [ ] CEO full name confirmation: Edmealem Ejigu (and full legal name for formal use)
- [ ] Current job title at the business group
- [ ] CEO approved biography — written and signed off by the CEO personally
- [ ] Professional photograph (high resolution, business setting)
- [ ] LinkedIn profile URL
- [ ] Education credentials: confirm Addis Ababa University (B.Pharm) and IGNOU (MBA)
- [ ] Career history: confirm which employers and roles can be named publicly
- [ ] Can "USAID", "Chemonics", "Management Sciences for Health" be named on the website?
- [ ] What specific public health projects or publications can be referenced?

### 7.4 Import division

- [ ] Current active import product categories (confirm the list is current)
- [ ] Current supplier relationships — which manufacturer names/logos may be displayed?
- [ ] Are any official distributor or dealer agreements in place? (If yes: documentation)
- [ ] Current import volumes or revenue range (if the company wishes to disclose)
- [ ] Photos of machinery and vehicles delivered (for gallery)
- [ ] Current logistics corridor in use (Djibouti? Asha Dewelle? Both?)

### 7.5 Export division

- [ ] Current active export commodities (confirm which are currently traded)
- [ ] Current active export markets (confirm which markets are currently served)
- [ ] Are exports to China currently active? (Context: the 2022 suspension)
- [ ] Current phytosanitary certification documentation
- [ ] Any other export certifications held
- [ ] Product technical specifications per commodity (moisture %, admixture %, grade standards)
- [ ] Packaging specifications per commodity
- [ ] Photos of commodities, sorting/grading facilities, packaging

### 7.6 Quality and compliance

- [ ] What chemical/pesticide residue testing is currently in place?
- [ ] Which laboratories are used for pre-shipment testing?
- [ ] What traceability systems are in place?
- [ ] What is the current status with Chinese customs authorities?
- [ ] Any recent audit results or compliance certifications?

### 7.7 Procurement and government supply

- [ ] Which government projects may be named on the website?
- [ ] Which project clients have given permission to be referenced?
- [ ] Current active procurement areas
- [ ] Any framework agreements or preferred supplier registrations

### 7.8 Hospitality and investment

- [ ] Hotel name in Debre Markos
- [ ] Current operational status of the hotel
- [ ] Hotel star rating confirmation (3-star)
- [ ] Photos of the hotel
- [ ] Any other investment or real estate projects to include

### 7.9 Operations and contact

- [ ] Confirmation of all telephone numbers (currently: +251 111 578728, +251 111 566579, +251 911 226783, +251 930 035411)
- [ ] Confirmation of fax number: +251 111 568 701
- [ ] New professional email addresses (requires domain to be set up first)
- [ ] WhatsApp business number (for international buyers in Middle East and Asia)
- [ ] WeChat ID (for Chinese buyer communication — highly recommended)
- [ ] Correct building name and floor details for the 4 Kilo headquarters
- [ ] Google Maps pin for the office

### 7.10 Careers

- [ ] Which roles are currently open?
- [ ] Confirmed salary ranges (optional — most Ethiopian companies omit)
- [ ] Confirmed benefits
- [ ] Application process — digital only? Who reviews applications?
- [ ] Is a digital application system needed (form integrated into website)?

---

## PART 8 — LAUNCH CHECKLIST

### 8.1 Pre-launch (before going live)

**Legal and content**
- [ ] All Tier 3 (unverified) content removed or replaced with company-confirmed information
- [ ] CEO biography written and signed off by Edmealem Ejigu
- [ ] Quality section reviewed and approved by the company
- [ ] All manufacturer names reviewed (confirm sourcing relationship language is appropriate)
- [ ] Contact information confirmed accurate
- [ ] Email domain set up and working (info@edmealemgroup.com)

**Technical**
- [ ] Domain acquired and pointing to hosting
- [ ] SSL certificate active (HTTPS)
- [ ] 301 redirect from legacy domain to new domain
- [ ] Contact form tested and submissions delivered to correct inbox
- [ ] Mobile layout tested on actual devices (iPhone, Android)
- [ ] Tested on: Chrome, Firefox, Safari, Edge
- [ ] Google Analytics / Search Console connected
- [ ] Robots.txt and sitemap.xml submitted to Google
- [ ] Organization schema markup validated (schema.org validator)
- [ ] Page speed test run (Google PageSpeed Insights — target 85+ mobile)
- [ ] All social media links point to real, active accounts
- [ ] Language toggle buttons either active (with real translations) or removed until ready

**Content**
- [ ] All placeholder text replaced
- [ ] All `⚠ verification required` notes resolved and removed from live copy
- [ ] All images have alt text
- [ ] All phone numbers are click-to-call links (tel: protocol)
- [ ] All email links are mailto: links
- [ ] No broken links

### 8.2 Post-launch (first 30 days)

- [ ] Submit URL to Google Search Console for indexing
- [ ] Update all third-party directory listings (TradeKey, Volza, 2Merkato, HaHuJobs) to point to the new official website
- [ ] Create LinkedIn company page and link CEO's personal profile
- [ ] Create X and Facebook accounts
- [ ] Update email signature for all staff to use new domain
- [ ] Send announcement to existing business contacts

### 8.3 Ongoing (monthly)

- [ ] Review Google Analytics — which pages are getting traffic? Where do visitors drop off?
- [ ] Post minimum 4 updates on LinkedIn
- [ ] Keep job listings current
- [ ] Review contact form submissions — are inquiry types correct? Are visitors using the form?
- [ ] Check all phone numbers and emails are still correct
- [ ] Update news section (if implemented) with any trade milestones or company announcements

---

## PART 9 — CONTENT VERIFICATION TRACKING SHEET

Use this table during the client verification process. Mark each item as the information is confirmed.

| Item | Source (Research) | Status | Verified Content | Verified By | Date |
|---|---|---|---|---|---|
| Formal establishment year | 2004 | ⬜ Unverified | | | |
| Trading start year | 1995 | ⬜ Unverified | | | |
| Registered names | Tessema / Import Export | ⬜ Unverified | | | |
| Headquarters address | 4 Kilo, Birhanena Selam Bldg, 4F | ⬜ Unverified | | | |
| Phone numbers (4 listed) | Trade directories | ⬜ Unverified | | | |
| Permanent staff count | 96 permanent | ⬜ Unverified | | | |
| Temp staff count | 250 temporary | ⬜ Unverified | | | |
| Import shipment count | 282 (Volza/Tendata) | ⬜ Trade data only | | | |
| Export shipment count | 195 (Volza/Tendata) | ⬜ Trade data only | | | |
| Export buyer count | 81 unique buyers | ⬜ Trade data only | | | |
| CEO education (B.Pharm) | Research document | ⬜ Unverified | | | |
| CEO education (MBA) | Research document | ⬜ Unverified | | | |
| CEO USAID role | Research document | ⬜ Unverified | | | |
| CEO MSH role title | Research document | ⬜ Unverified | | | |
| CEO Chemonics role | Research document | ⬜ Unverified | | | |
| CEO $30M budget oversight | Research document | ⬜ Unverified | | | |
| CEO 120-person team | Research document | ⬜ Unverified | | | |
| CEO MOH advisory role | Research document | ⬜ Unverified | | | |
| Hitachi sourcing relationship | Trade records | ⬜ Trade data only | | | |
| Sany sourcing relationship | Trade records | ⬜ Trade data only | | | |
| Epiroc sourcing relationship | Trade records | ⬜ Trade data only | | | |
| Hotel in Debre Markos | Research document | ⬜ Unverified | | | |
| Hotel star rating (3-star) | Research document | ⬜ Unverified | | | |
| Hotel licensing year | Research document | ⬜ Unverified | | | |
| Defense Construction Enterprise supply | Research document | ⬜ Unverified | | | |
| Hawassa City Administration tender | Research document | ⬜ Unverified | | | |
| Chinese customs suspension (2022) | Ethiopian media (Ethiopia Nege) | ⬜ Unverified with company | | | |
| Current Chinese export status | Unknown | ⬜ Must confirm | | | |
| Current phytosanitary certs | Unknown | ⬜ Must collect | | | |
| Djibouti corridor logistics | Research document | ⬜ Unverified | | | |
| 2-day transit timeline | Research document | ⬜ Unverified | | | |

---

## PART 10 — SUMMARY AND GUIDING PRINCIPLES

### The ten rules for this website

1. **Credibility over promotion.** The website's job is to make the company look trustworthy — not to make it look larger than it is.

2. **Three content tiers.** Every claim must be Tier 1 (company-verified), Tier 2 (trade-data supported, carefully worded), or Tier 3 (not published). No exceptions.

3. **The CEO biography requires the CEO's personal sign-off.** Do not publish specific employer names, titles, budgets, or project names without his written approval.

4. **Never claim distributor status unless documented.** Manufacturer names in the sourcing network section must be accompanied by the caveat that official distributor agreements are subject to company verification.

5. **The quality section describes process, not outcomes.** No absolute claims. No certification claims without documentation. No promises of zero pesticides or organic status.

6. **Email domain before launch.** The website must not launch with a Gmail address. The new enterprise email domain must be set up and working first.

7. **Language toggles: either real or removed.** Do not publish non-functional language buttons. Commission translations before activating them.

8. **The two-way trade flow diagram is the signature element.** Preserve it in any redesign. It uniquely communicates the business model visually.

9. **Build for international buyers first.** The primary measure of success is whether an international supplier or agricultural buyer reading the site decides to make contact. Every design and content decision should be evaluated against this standard.

10. **The website controls the narrative.** Every third-party directory listing should eventually link back to this official site. The site is the canonical source of truth about the company.

---

*Document prepared alongside website v2.0 (HTML file: edmealem-group-v2.html)*
*For questions about this documentation, refer to the design and content notes in Section 2–3.*
