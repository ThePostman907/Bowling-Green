# Phase Plan

This document lists the phased development approach for the campaign website beyond the initial MVP.

## MVP (Ship in 7 Days)

**Objectives**
* Help voters understand the platform, RSVP, volunteer, donate, and obtain voter information in English or Spanish.
* Ensure mobile performance and accessibility.

**Required Pages & Components**
Home, Issues, Events, Volunteer, Voter Info, Donate, Contact, Endorsements, Newsroom, and Spanish mirrors for all.

**Acceptance Criteria**
* User can RSVP, volunteer, contact, and donate (via external link) in ≤90 seconds on a mid-range Android over 3G.
* All pages have Spanish counterparts and a persistent toggle.
* Keyboard-only navigation works; Lighthouse accessibility ≥90 on key pages.
* Voter Info page contains live official links and key dates.
* Footer shows “Paid for by [Committee Name] Treasurer [Name].”

## Phase 1 – Stability & Sharing

**Features**
1. Lite mode to reduce page weight by ≥40% on Home/Issues.
2. Print-optimized one-pagers for each issue.
3. Testimonials intake form feeding `_data/endorsements.yml`.
4. Event cards generated from `_data/events.yml`.
5. Basic SEO (titles, meta, OpenGraph, sitemap, robots).
6. Analytics goal tracking.

**Acceptance Criteria**
* Lite mode meets 40% transfer reduction goal.
* Each issue prints on a single page at 100% scale.
* At least five endorsements displayed with alt-texted images.

## Phase 2 – Engagement & Transparency

**Features**
1. Proposal explainer mini-sites with cost/feasibility FAQs.
2. Neighborhood listening map (SVG) with no-JS fallback.
3. Updates blog with tag filters rendered at build time.
4. Monthly email digest (EN & ES).
5. Accessibility upgrades: ARIA landmarks, improved skip links, larger mobile fonts.

**Acceptance Criteria**
* Proposal pages follow Problem → Evidence → Plan → Timeline → Funding → Local Benefits → FAQ.
* Neighborhood map accessible without JavaScript.

## Phase 3 – Persuasion & Polish

**Features**
1. Captioned explainer videos (≤120 s) per issue with Spanish subtitles and transcripts.
2. Endorsement filters (Veterans, Small Business, Educators, Neighborhoods).
3. Comparison matrix showing differences from opponents with citations.
4. Lighthouse CI enforcing minimum scores (Perf ≥90, A11y ≥95, Best Practices ≥90, SEO ≥90).

**Acceptance Criteria**
* Every video includes captions, Spanish subtitles, and an HTML transcript.
* CI blocks merges if Lighthouse scores fall below targets on Home, Issues, and Events.

