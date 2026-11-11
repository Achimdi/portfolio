# TODO: portfolio v2

Nothing in this list appears on the page. Each item is either missing evidence, a decision for you, or a cleanup.

## Evidence still missing

- [ ] **NeuroScan: is the train/validation split by patient?** OASIS has many slices per person. If slices from one patient appear in both training and validation, the 98.66% is inflated. Confirm how the 80/20 split was made.
- [ ] **NeuroScan: macro-F1 and per-class recall.** I calculated these from the counts in `assets/img/confusion-matrix.webp`. Check them against your notebook before publishing anything:

  | Class | Test images | Recall | Precision | F1 |
  |---|---|---|---|---|
  | MildDemented | 659 | 26.1% | 6.7% | 0.11 |
  | ModerateDemented | 168 | 0.0% | 0.0% | 0.00 |
  | NonDemented | 40,852 | 81.0% | 95.5% | 0.88 |
  | VeryMildDemented | 4,505 | 54.6% | 27.6% | 0.37 |

  Macro-F1 is 0.34 and balanced accuracy is 40.4%. Overall accuracy is 77.35%, which matches the page.
- [ ] **NeuroScan: GitHub repo is private.** https://github.com/Achimdi/neuroscan-ai returns 404, so the button was left out. If you make the repo public, add this inside the NeuroScan `.project-body`, after the tags:
  ```html
  <div class="actions"><a class="btn btn-secondary" href="https://github.com/Achimdi/neuroscan-ai">GitHub<span class="sr-only"> repository for NeuroScan AI</span></a></div>
  ```
- [ ] **Twzee Foods: usage numbers or owner feedback.** Examples are orders per week, visits, or a short quote from the owner. Use them only if you have them in writing.
- [ ] **Nellow: a sample result.** A real question and Nellow's answer with its cited sources, as a screenshot or short text.

## Media

- [ ] **Compress both videos.** `nellow.mp4` is 28.4 MB and `twzee.mp4` is 26.2 MB. Neither is fast-start: the index sits at the end of the file. Install ffmpeg (`winget install Gyan.FFmpeg`), then run these in `assets/videos`:
  ```
  ffmpeg -i nellow.mp4 -c:v libx264 -preset slow -crf 26 -maxrate 1.5M -bufsize 3M -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart nellow-web.mp4
  ffmpeg -ss 2.5 -i twzee.mp4 -c:v libx264 -preset slow -crf 26 -maxrate 1.5M -bufsize 3M -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart twzee-web.mp4
  ```
  These keep the native resolution (1918×896 and 1912×914), so nothing gets upscaled. Expect at most about 15 MB for Nellow (75 s) and 10 MB for Twzee (48 s). Check that the new files play, then replace the originals with them under the same names.
- [ ] **Trim the start of the Twzee video.** The first 2.5 seconds show Chrome's new-tab page, including your address-bar history and shortcut tiles. The `-ss 2.5` in the command above removes it. The poster already uses a frame from 4 seconds in.
- [ ] **Higher-resolution Grad-CAM pair.** `mri-slice.webp` and `gradcam.webp` are only 336×408 and look soft on phones. This is the one Lighthouse warning left. Export both at 672×816 or larger with the same framing.
- [ ] **Retake the Nellow workspace screenshot.** It comes from an earlier build whose mode picker included Fast mode, which was removed on 3 Nov. The caption only says "a mode selector", but a fresh screenshot would match the current code.

## Optional cleanup

- [ ] `assets/og.png`, the link-preview image, still uses the previous design. It's accurate, just off-style.
- [ ] These files are no longer used by `index.html`: `assets/fonts/instrument-*.woff2`, `assets/fonts/fragment-mono.woff2`, `assets/fonts/LICENSE.txt`. `services.html` still has the previous design and isn't linked from v2. `README.md` still describes the previous site.

## Notes

- **Local preview:** `python -m http.server` doesn't support range requests, so you can't seek inside a video during local preview. GitHub Pages supports them, so seeking works there.
