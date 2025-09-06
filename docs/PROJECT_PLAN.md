# Project Plan

This document consolidates the vision, requirements, and structure for the Bowling Green campaign website. It covers the ten core site components, technical decisions, accessibility goals, and operational guidelines.

## 1. Site Components

1. **Español ↔ English Toggle** – Maintain mirrored `/es/` pages and a persistent language switch in the header. Translate all forms and ensure content parity. Metric: sessions in Spanish and bounce-rate parity.
2. **Issues & Solutions Hub** – One page per issue with a 3-sentence summary, plain-language callouts, and printable one-page view. Checklist: problem, plan, local benefits, cost/feasibility, timeline, FAQs.
3. **Events & RSVP Center** – Embed a public Google Calendar with links to Google Form RSVPs and ICS "Add to Calendar" links. Include accessibility notes, Spanish details, and map links.
4. **Volunteer Hub** – Google Form sign-up with task checkboxes (door knocking, phone banking, rides, translation, signs). Auto-reply with next steps and toolkit. Include task descriptions, time estimates, training dates, and Spanish version.
5. **Voter Info Hub** – Step-by-step guidance with links to official state and county portals. Provide key dates, ID basics, accessibility info, FAQs, and Spanish mirrors.
6. **Donate Page** – Prominent donate button linking to an external processor. Include donor info requirements, "Paid for by" disclaimer, suggested amounts, and check mailing address.
7. **Endorsements & Neighbor Stories** – Grid or carousel of endorsements with quotes and photos. Collect testimonials through a Google Form and categorize with tags (veterans, small business, etc.).
8. **Newsroom / Media Kit** – Press-ready assets: bio, headshots, logos, platform one-pager, and contact info. Maintain an updates page for short posts.
9. **Contact & Office Hours** – Google Form for inquiries, plus phone/SMS and email. Optionally integrate Calendly for meetings. Provide Spanish form and privacy note.
10. **Accessibility & Senior-Friendly Controls** – Include font-size and high-contrast toggles, print-friendly pages, keyboard navigation, alt text, and labeled forms. Target WCAG 2.2 AA compliance.

## 2. Project Goals

* Inform and persuade Trinidad voters in clear, plain language.
* Enable quick access to platform summaries, events, volunteer opportunities, donation links, and voter guidance.
* Provide equal access in English and Spanish.

## 3. Target Audiences

Working parents, older adults, small business owners, low-income renters, veterans, teens/young adults, and new residents. All content must be bilingual and senior-friendly.

## 4. Information Architecture

Top navigation: Home | Issues | Events | Volunteer | Voter Info | Endorsements | Newsroom | Contact | Donate | Español. Spanish content lives under `/es/` with mirrored slugs.

## 5. Tech Stack & Repository Structure

* GitHub Pages with Jekyll
* Vanilla HTML/CSS/JS, Markdown content, YAML data
* Analytics via Plausible or GoatCounter
* Recommended repo tree:

```
/_config.yml
/_layouts/
/_includes/
/_data/
/assets/css/
/assets/js/
/index.md
/issues/
/events/
/volunteer/
/voter-info/
/endorsements/
/newsroom/
/contact/
/donate/
/es/...
```

## 6. Site-Wide Requirements

* Mobile-first; page weight ≤200 KB excluding images
* WCAG 2.2 AA accessibility and keyboard-only navigation
* Persistent EN↔ES toggle with human-reviewed translations
* No blocking fonts; responsive images with lazy-load
* "Last updated" stamp on every page with privacy note

## 7. External Integrations

* Google Forms for RSVP, Volunteer, Contact, Endorsements
* Google Calendar embed for events with ICS links
* Mailchimp or Buttondown for optional email list
* ActBlue/Anedot/Stripe for donations
* YouTube/Vimeo for video embeds
* Plausible or GoatCounter analytics

## 8. MVP Scope & Acceptance Criteria

**Pages:** Home, Issues, Events, Volunteer, Voter Info, Donate, Contact, Endorsements, Newsroom, plus Spanish mirrors. Users must be able to RSVP, volunteer, contact, and donate (external) within 90 seconds on 3G.

**Acceptance Criteria:**
* Spanish parity and persistent toggle across all pages
* Keyboard navigation for all interactive elements
* "Voter Info" includes working official links and key election dates
* Footer shows “Paid for by [Committee Name]” on every page

## 9. Phase Plan

* **Phase 1:** Lite mode, print one-pagers, endorsements intake, event cards, basic SEO, analytics goals.
* **Phase 2:** Proposal mini-sites, neighborhood listening map, updates blog, monthly email digest, ARIA improvements.
* **Phase 3:** Video hub with captions, endorsement filters, comparison matrix, Lighthouse CI for performance and accessibility.

## 10. Content Templates

Sample issue page front matter:

```
---
layout: page
title: Affordable Housing
slug: housing
lang: en
permalink: /issues/housing/
summary: "Rents are up; wages aren’t. Here’s how we add units and protect neighbors."
printable: true
tags: [issue]
---
```

Each issue page includes a 3-sentence summary, "What this means for Trinidad residents," plan steps, cost & feasibility, FAQs, and an update date.

## 11. Embeds & Snippets

The site will use standard iframe embeds for Google Forms and Calendar, an analytics script tag for Plausible, and JSON‑LD for event metadata.

## 12. Design System

System fonts, high-contrast palette, reusable components (button, card, nav, footer, language toggle, alerts), and print styles via `print.css`.

## 13. Privacy, Security, and Compliance

State what data is collected, avoid unnecessary third-party scripts, and display the required “Paid for by [Committee] Treasurer [Name]” disclaimer. Link to donation rules and contribution limits.

## 14. Analytics & Measurement

Track conversions (donate clicks, RSVP submissions, volunteer sign-ups, voter-info outbound clicks), monitor bounce rate, mobile load time, and Spanish usage.

## 15. Workflow & Governance

Roles include content, translator, web maintainer, and compliance reviewer. Process: Markdown draft → translation → PR review with accessibility check → merge → deploy. Update cadence: weekly events, biweekly issues, monthly digest.

## 16. Risks & Mitigations

* Embeds slowing pages → defer offscreen iframes and provide links
* Spanish parity gaps → require ES counterparts in same PR
* Forms blocked by content blockers → include “Open form in new tab” links

## 17. Backlog Summary

**MVP Backlog:** base theme, home, issues, events, volunteer, voter info, donate, contact, endorsements, newsroom, Spanish mirrors.

**Phase 1 Backlog:** lite mode, print one-pagers, endorsements intake, event cards, SEO, analytics goals.

**Phase 2 Backlog:** proposal minisite, neighborhood map, updates blog, stronger accessibility, monthly digest.

**Phase 3 Backlog:** video hub, endorsement filters, comparison matrix, Lighthouse CI gate.

## 18. Domain & Deployment

Initial deployment uses the default GitHub Pages URL. For a custom domain, add a CNAME file, configure DNS, and enable HTTPS. Internal links should be relative, and `baseurl` updated as needed.

## 19. Donation Processor Decision

Select a compliant processor (ActBlue, Anedot, Stripe-hosted, or checks). Update the Donate page link and ensure the “Paid for by…” footer appears on every page.

