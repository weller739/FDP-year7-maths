# FDP Mission Hub - Core and Extended Version

A GitHub Pages-ready website for Year 7 students learning **fractions, decimals, percentages and introductory ratio**.

## What is included

- **Core landing page** with the original 12 missions grouped as:
  - Support
  - Consolidate
  - Extend
- **Extended landing page** with **24 additional missions** grouped by **8 sub-topics**, each with **3 levels**
- A reusable **mission page** with:
  - Learn
  - Practice
  - Quiz
  - downloadable Word-compatible quiz evidence
- **Thinking prompts** for incorrect answers instead of revealing the answer
- **Encouraging feedback** and more student-friendly wording
- **Gamification** features including:
  - badges / trophies
  - progress tracking
  - mission status labels
  - Daymap upload check-off
- **Local storage save** so the site remembers progress, answers, student name and class on the same device/browser
- Selected **Corbettmaths Primary** support-video links embedded in relevant core missions

## File structure

```text
fdp-mission-hub-gamified/
├── index.html
├── extended.html
├── mission.html
├── css/
│   └── style.css
├── js/
│   ├── missions.js
│   └── app.js
└── README.md
```

## GitHub Pages setup

1. Create a new GitHub repository.
2. Upload the files and folders exactly as shown above.
3. Make sure `index.html` is in the **root** of the repository.
4. On GitHub, go to **Settings** → **Pages**.
5. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
6. Save.

## Important note about saved progress

The site uses **browser local storage**.
That means it will remember progress on the **same device and browser**, unless the browser data is cleared.

## Core mission count

- 12 core missions

## Extended mission count

- 24 extended missions
- 8 topics × 3 levels each

## Extended topics

1. Advanced FDP Conversions
2. Comparing and Ordering FDP
3. Fraction Operations in Context
4. Decimal Operations and Reasoning
5. Percentages in Real Life
6. Percentage Change and Reverse Thinking
7. Ratio Basics
8. Sharing and Scaling with Ratio

## Notes

- Quiz evidence downloads as a `.doc` file that can usually be opened in Microsoft Word.
- Incorrect responses use **thinking prompts** rather than giving away solutions.
- Students can mark a mission as **Uploaded to Daymap** once their evidence has been submitted.
