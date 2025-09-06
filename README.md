# Bowling Green Campaign Site

This repository contains planning documents and future source code for a fully static, bilingual campaign website built with GitHub Pages and Jekyll. The site is designed for a local campaign in Trinidad, Colorado and prioritizes accessibility, mobile performance, and clear language in both English and Spanish.

## Overview

The project aims to help voters quickly understand the candidate's platform, RSVP for events, volunteer, donate, and find voter information. All critical pages will have Spanish mirrors and a persistent language switch.

### Top-Level Navigation

Home | Issues | Events | Volunteer | Voter Info | Endorsements | Newsroom | Contact | Donate | Español

### Tech Stack

* **Host:** GitHub Pages using Jekyll
* **Languages:** HTML, CSS, JavaScript, Markdown, and YAML data files
* **Integrations:** Google Forms & Calendar, external donation processor, Plausible/GoatCounter analytics
* **Accessibility:** WCAG 2.2 AA, keyboard navigation, high-contrast and large-text toggles

## Repository Structure

```
/config.yml
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
/docs/
```

The `/docs` directory contains detailed planning materials, phase backlogs, and content checklists.

## Getting Started

1. Install Ruby and Bundler.
2. Run `bundle install` to install Jekyll and dependencies.
3. Serve locally with `bundle exec jekyll serve`.
4. Edit Markdown content or data files, then commit changes via pull request.

## Documentation

Additional documentation is available in the `docs/` folder:

* `PROJECT_PLAN.md` – complete site plan, requirements, and templates
* `WORK_ORDERS.md` – implementation tasks for developers/agents
* `COPY_ASSET_CHECKLIST.md` – list of required text and media assets
* `SPANISH_GLOSSARY.md` – consistent translations for navigation and content

## Contributing

* Maintain English and Spanish parity for all user-facing pages.
* Ensure all pages meet accessibility and performance goals.
* Use plain, concise language suitable for seniors and bilingual audiences.
* Commit changes through pull requests; include relevant documentation updates.

## License

A license has not yet been selected for this project.

