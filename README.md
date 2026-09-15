# FDP Mission Hub

A GitHub Pages-ready website for Year 7 students learning **fractions, decimals and percentages**.

## What is included

- Landing page grouped into **Support**, **Consolidate** and **Extend**
- **12 missions total** with **4 missions in each group**
- Each mission includes:
  - a **Learn** section with worked examples
  - a **Practice** section with correct/incorrect feedback, hints and reteaching
  - a **Quiz** section with score summary
  - downloadable **Word-compatible evidence** as a `.doc` file
- Built with plain **HTML, CSS and JavaScript**
- Suitable for **GitHub Pages** hosting
- Curated **Corbettmaths Primary** support-video links embedded within relevant missions

## Mission groups

### Support
1. Converting Between Fractions, Decimals and Percentages - Level 1
2. Equivalent Fractions - Level 1
3. Ordering and Rounding Decimals - Level 1
4. Calculating Percentages - Level 1

### Consolidate
5. Converting Between Fractions, Decimals and Percentages - Level 2
6. Adding Fractions
7. Mixed Numbers and Improper Fractions
8. Adding and Subtracting Decimals

### Extend
9. Converting Between Fractions, Decimals and Percentages - Level 3
10. Multiplying and Dividing Fractions
11. Multiplying and Dividing Decimals
12. Percentage of a Quantity

## Repository structure

```text
fdp-mission-hub/
├── index.html
├── mission.html
├── css/
│   └── style.css
├── js/
│   ├── missions.js
│   └── app.js
└── README.md
```

## How to upload to GitHub

1. Create a new GitHub repository.
2. Upload all files and folders from this project.
3. Make sure `index.html` is in the root of the repository.
4. Commit the files.

## How to enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Save.
6. GitHub will publish the site and provide a link.

## Editing missions

All mission content lives in:

```text
js/missions.js
```

You can edit:
- titles
- examples
- practice questions
- hints
- reteaching text
- quiz questions
- accepted answers

## Notes

- Students should enter their name and class before completing the quiz.
- Quiz results download as a `.doc` file that can usually be opened in Microsoft Word.
- This project is intentionally simple so it can be maintained easily in a school setting.

## Compatibility note

This package includes a homepage redesign based on the uploaded `index_Version3.html` and `css_style_Version3.css`, while preserving required mission-page styles so the interactive missions continue to work correctly.
