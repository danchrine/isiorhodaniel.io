# Portfolio Update — Deploy Guide

Modern redesign for **Isiorho Macaulay Daniel** cybersecurity portfolio.

## What changed

- Unified **clean modern dark** design (Linear / Vercel style) with refined cyber accents
- Shared `style.css` across all pages
- Sticky glass navigation + mobile menu
- **Back** button on every page (uses browser history, falls back to Home)
- Improved layout, typography, cards, and hover animations
- Professional “View Certificates” flow kept on Professional page
- Certificate **View / Close** toggles unchanged on Certificates page
- Reports viewer modal preserved
- Tools search & phase grid preserved

## Files to replace in your repo

Copy these files into the root of `isiorhodaniel.io` (overwrite existing):

```
style.css
index.html
professional.html
tools-methodology.html
report.html
reference.html
certificate.html
contact.html
```

Keep your existing `assets/` folder (profile photo, certificates, report files).

## Deploy (make it live)

```bash
cd path/to/isiorhodaniel.io
# paste/overwrite the files above
git add style.css index.html professional.html tools-methodology.html report.html reference.html certificate.html contact.html
git commit -m "Modern redesign: unified dark cyber UI, back nav, polish"
git push origin main
```

GitHub Pages will update in 1–2 minutes:
https://danchrine.github.io/isiorhodaniel.io/

## Optional

- If profile image fails, ensure `assets/profile.jpg` exists.
- Certificate images: `assets/deloitte-cert.jpg`, `tryhackme-cert.jpg`, `coursera-cert.jpg`, etc.
