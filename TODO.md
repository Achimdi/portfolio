# TODO: portfolio

Nothing in this list appears on the site. Each item is missing evidence, a decision for you, or a follow-up.

## Evidence still missing

- [x] **NeuroScan: the train/validation split keeps each patient's scans together** (confirmed by you). The case study now says so.
- [ ] **NeuroScan: macro-F1 and per-class recall.** Calculated from the counts in `assets/img/confusion-matrix.webp`. Check them against your notebook before publishing anything:

  | Class | Test images | Recall | Precision | F1 |
  |---|---|---|---|---|
  | MildDemented | 659 | 26.1% | 6.7% | 0.11 |
  | ModerateDemented | 168 | 0.0% | 0.0% | 0.00 |
  | NonDemented | 40,852 | 81.0% | 95.5% | 0.88 |
  | VeryMildDemented | 4,505 | 54.6% | 27.6% | 0.37 |

  Macro-F1 is 0.34 and balanced accuracy is 40.4%. Overall accuracy is 77.35%, which matches the site.
- [ ] **NeuroScan: GitHub repo is private.** The case study says so. If you make https://github.com/Achimdi/neuroscan-ai public, add `{ label: 'GitHub', url: 'https://github.com/Achimdi/neuroscan-ai', github: true }` to its `links` in `src/data.mjs`, remove `repoNote`, and rebuild.
- [ ] **Twzee Foods: usage numbers or owner feedback.** Orders per week, visits, or a short quote from the owner. Only if you have them in writing.
- [x] **Tallybox demo business** is a test business (confirmed by you). The video caption now says "Demo on a test business".
- [ ] **Tallybox: real users.** If a real business starts using Tallybox, its name, how long it has used it, or a line from the owner would be strong evidence. Only with their permission.

## Please confirm

- [ ] **NeuroScan links.** The case study now links to the live web app (https://neuroscan-ai-yjp8.onrender.com/, sign-in required) and the model on Hugging Face. Both were already public. Remove them from `src/data.mjs` if you would rather not show them.
- [ ] **"Small and large businesses"** is used for Tallybox, as you asked. The Tallybox site itself says "shops, pharmacies and restaurants".
- [ ] **LinkedIn link.** Automated checks get LinkedIn's bot block (status 999), so open https://www.linkedin.com/in/chimdiume-azie-73a477448/ once yourself to confirm it is right.
- [ ] **`images/` folder.** Nine images from July (robots, app icons, brain graphic). Untouched and not committed, waiting for your instructions.

## Found while checking your other sites

- [x] **Twzee Foods free delivery is ₦30,000.** The live site and its code agree, and the portfolio now says ₦30,000. The laptop screenshot was retaken from the live site.
- [ ] **Twzee demo video still shows the old ₦25,000 banner** in its first few seconds (recorded on 21 Nov). The poster now uses a frame without it. Re-record the video if you want it to match exactly.

## Media

- [x] Videos compressed and trimmed (earlier round).
- [x] **Nellow video: saved logins blurred.** About 7–10 s into the video, Chrome's saved-logins list on the sign-in screen showed saved usernames and email addresses. It is blurred in this version. The live site still has the old video until you publish this branch.
- [x] Nellow workspace screenshot replaced with a frame from the current build (username blurred).
- [x] New screenshots: Tallybox from its built-in demo mode (made-up businesses and people, labelled on the page), Twzee Foods from the live site on a phone, Nellow answer with sources.
- [ ] **Higher-resolution Grad-CAM pair.** `mri-slice.webp` and `gradcam.webp` are 336×408 and look soft when enlarged. Export both at 672×816 or larger with the same framing.

## Search engines

- [ ] `robots.txt` only works at the root of the domain (achimdi.github.io/robots.txt), which is a different repository. Submit `https://achimdi.github.io/portfolio/sitemap.xml` in Google Search Console instead.
