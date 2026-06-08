# PSYCH 208 Exam Practice App

This is a static study app built from the provided lecture slides, with the annotated 2025 exam used only as a style reference for four-option MCQs.

## Run Locally

From `C:\Users\Alex\Documents\Sarah revision 208`:

```powershell
python -m http.server 8080 --bind 0.0.0.0 --directory study-app
```

On the same Wi-Fi network, open this on the iPad:

```text
http://YOUR_LOCAL_IP:8080
```

Progress is saved in the browser using `localStorage`, so each iPad/browser keeps its own answered, correct, missed, and seen-question history.

## Contents

- `questions.js`: topic summaries and the first 120 lecture-derived multiple-choice questions.
- `extra-questions.js`: an extra 120 questions, weighted toward quantitative/statistics revision.
- `app.js`: filtering, random question delivery, progress caching, answer checking, and review marking.
- `styles.css`: responsive layout for laptop and iPad screens.

## GitHub Pages

The repository-level workflow at `.github/workflows/deploy-study-app.yml` publishes only this `study-app` folder to GitHub Pages. Keep the lecture PDFs and extracted text out of the published Pages artifact unless they are intentionally being shared.
