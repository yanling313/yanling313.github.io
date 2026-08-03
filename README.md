# Yanling Sun — Portfolio Website

A single-page, artistic portfolio site built with vanilla HTML, CSS, and JavaScript.

## Structure

```
website/
├── index.html         # Main page
├── style.css          # Styling
├── script.js          # Animations & interactions
└── assets/
    ├── images/        # Photo gallery (already populated)
    └── videos/        # Drop your video files here
```

## How to Open

Just open `website/index.html` in your browser. No build step needed.

Or run a local server for the smoothest experience:

```bash
cd website
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Videos (Already Inserted)

All videos have been inserted into the site. The three screen recordings are now grouped under the new **Musical Theatre** project in the Creative Practice section, alongside the *Growl* and *Billy the Kids* productions.

### Current video mapping

| Location | Video file | Behaviour |
|----------|-----------|-----------|
| Hero section | `assets/videos/personal-choreography.mp4` | Autoplay, muted, loop |
| *Sketches* project | `assets/videos/sketches-performance.mp4` | Controls + poster |
| Musical Theatre project — video 1 | `assets/videos/screen-recording-1.mp4` | Controls + poster |
| Musical Theatre project — video 2 | `assets/videos/screen-recording-2.mp4` | Controls + poster |
| Musical Theatre project — video 3 | `assets/videos/screen-recording-3.mp4` | Controls + poster |
| Performance Reel #1 | `assets/videos/contemporary-dance.mp4` | Controls + poster |
| Performance Reel #2 | `assets/videos/folk-dance.mp4` | Controls + poster |

### Want to change a video?

Replace the `<source src="...">` path in `index.html` with the new filename. Keep the file in `assets/videos/`. To swap a poster image, change the `poster="..."` attribute to any image in `assets/images/`.

### Switch to Vimeo / YouTube

Replace any `<video>` block with:

```html
<div class="video-slot video-iframe">
    <iframe src="https://player.vimeo.com/video/123456789?title=0&byline=0&portrait=0"
            frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen></iframe>
</div>
```

## Images (Already Inserted)

The following new images were added and linked into `index.html`:

| New file | Used in place of | Section |
|----------|-----------------|---------|
| `assets/images/sketches-audience.jpg` | `sketches-1.jpg` | *Sketches* main image + video poster |
| `assets/images/sketches-solo.jpg` | `sketches-2.jpg` | *Sketches* image grid + video poster |
| `assets/images/workshop-bottles.jpg` | `workshop-1.png` | Doctoral Workshop |
| `assets/images/workshop-strings.jpg` | `workshop-2.png` | Doctoral Workshop + video poster |
| `assets/images/red-threads-installation.jpg` | `practice-3.png` | Material Practice + video poster |

Original files are still kept in `assets/images/` if you want to revert.

## Where the Online Content Is Linked

| Item                                | Source                                                  |
|-------------------------------------|---------------------------------------------------------|
| Edinburgh alumni interview          | `https://education-sport.ed.ac.uk/alumni-stories-yanling-sun` |
| Edinburgh LinkedIn version          | `https://www.linkedin.com/pulse/alumni-stories-my-journey-from-moray-0anke` |
| Otago Newsroom — first PhD          | `https://www.otago.ac.nz/news/newsroom/landmark-graduation-for-dance` |
| Otago Daily Times article           | `https://www.odt.co.nz/news/dunedin/show-traces-musical-heritage-lcxacwk0` |
| Research in Dance Education (2025)  | `https://doi.org/10.1080/14647893.2025.2570915` |
| Theatre, Dance & Performance Tr.    | `https://doi.org/10.1080/19443927.2026.2620088` |
| ORCID profile                       | `https://orcid.org/0009-0006-1914-9632` |
| Saltlines for Sealion Women event   | `https://www.eventfinda.co.nz/2025/saltlines-for-sealion-women/dunedin` |
| Edinburgh MSc Dance page            | `https://www.ed.ac.uk/schools-departments/education/graduate-school/taught-degrees/dance` |
| ICELA 2021 paper                    | `https://docker.atlantis-press.com/proceedings/icela-21/125969811` |
| Sketches event listing                | `https://www.otago.ac.nz/news/events/lunchtime-theatre-sketches-15-may` |
| *Billy the Kids* announcement (Sohu)  | `https://www.sohu.com/a/609319194_121124716` |
| *Growl* national tour (NetEase)       | `https://www.163.com/dy/article/GS8B616F0518HDUS.html` |

All of these URLs are already integrated into the appropriate sections of `index.html`.

## Design Notes

- Editorial color palette: **ink** (deep black), **bone** (warm off-white), **silk** (muted gold), **ember** (warm red accent).
- Typography: Cormorant Garamond for headings, Inter for body, Cinzel for labels & dates.
- Scroll-triggered reveal animations on every section.
- Cursor follower (desktop only).
- Fully responsive, mobile-friendly.
- No external dependencies — works offline except for Google Fonts.

## Deployment

When you're ready to deploy:

1. Buy a domain name (e.g. `yanlingsun.com`).
2. Upload the `website/` folder to any static hosting (Netlify, Vercel, GitHub Pages, CloudStudio, Cloudflare Pages).
3. Optionally replace `yanlingsun313@163.com` and phone/contact details in `index.html` with a contact form.

Need help with deployment? Just let me know.
