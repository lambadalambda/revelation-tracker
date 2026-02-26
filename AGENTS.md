# AGENTS.md — Revelation Tracker

## Project

A vibe-coded single-page web app that tracks the Book of Revelation's prophecies against real-world events, with a big progress bar showing how far along the apocalypse we are.

Think: beautiful, slightly unhinged, the kind of website someone would actually share on social media. Dark aesthetic, maybe some particle effects, smooth animations. The tone is deadpan serious — it presents itself as a legitimate tracker, not a joke. The humor comes from the execution being *too good*.

## Stack

- **Pure HTML/CSS/JS** — single page, no build tools, no frameworks
- Static site that can be opened from a file or served from anywhere
- Modern CSS (grid, custom properties, animations, backdrop-filter)
- Vanilla JS for interactivity

## Development Rules

### TDD — Test-Driven Development
1. **Write tests FIRST** before implementing any feature
2. Use a lightweight test approach (inline test runner or simple assertions)
3. Tests should cover: data model, progress calculations, event matching logic
4. Run tests before every commit — never commit failing tests

### Git Discipline
1. **Commit early and often** — small, topical commits
2. Each commit should do ONE thing and have a clear message
3. Commit message format: `type: description` (feat, fix, test, style, docs, refactor)
4. Never commit broken code — tests must pass

### Changelog
1. Maintain `CHANGELOG.md` at project root
2. Update it with every meaningful change
3. Format: Keep It Simple — date, description, that's it

## Architecture

### Data Model
- Array of prophecy objects, each with:
  - `id` — unique identifier
  - `reference` — Bible verse (e.g., "Revelation 6:1-2")
  - `title` — short name (e.g., "First Seal: The White Horse")
  - `description` — what the prophecy says
  - `status` — "fulfilled" | "in_progress" | "pending" | "disputed"
  - `matchedEvents` — array of real-world events claimed to match
  - `confidence` — 0-100 percentage (how confident the tracker is)
  - `category` — "seal" | "trumpet" | "bowl" | "sign" | "other"

### Progress Calculation
- Overall progress = weighted average of all prophecies
- Fulfilled = 100%, in_progress = 50%, disputed = 25%, pending = 0%
- The big progress bar reflects this

### UI Sections
1. **Hero** — Big progress bar with percentage, dramatic tagline
2. **Timeline** — Scrollable list of prophecies in order
3. **Event Matcher** — Each prophecy expandable to show matched events
4. **Stats Dashboard** — Seals opened, trumpets sounded, bowls poured

## Tone & Aesthetic
- Dark mode, deep purples/reds/golds
- Think: if a megachurch had a Bloomberg terminal
- Subtle animations — progress bar pulses gently, particles float
- Typography: mix of serif (biblical quotes) and mono (data/stats)
- Deadpan serious UI copy — no winking at the camera
- Mobile responsive

## Content Guidelines
- Use actual Revelation text (KJV for that gravitas)
- Match with real events that dispensationalist/Left Behind types actually claim
- Include some that are genuinely plausible-sounding and some that are a stretch
- The confidence percentages should feel algorithmic even though they're hand-tuned
- Include a fake "Last Updated" timestamp and "Data Sources" footer
