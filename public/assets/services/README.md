# Service photography

This folder provides **eight service photographs** (plus 640 px variants) cropped from the *approved AI-generated composite design*. Titles, arrows, gradients and cards **must be rendered in HTML/CSS**, never baked into the images.

`interior-painting-mobile.webp` is a dedicated taller crop from the approved mobile visual. The other images are extracted from the desktop composite and have limited original detail; resizing them to 1050 × 600 does not increase native photographic resolution. **Do not claim these are standalone 4K originals.** Use for faithful visual implementation, verify on real retina devices, and replace with professionally licensed/source-quality equivalents if photographic softness is objectionable prior to public launch.

Serve `*.webp` through Next.js `<Image>`; keep filenames stable if swapping in higher resolution assets. See `services.json` and `ASSET_MANIFEST.md`.
