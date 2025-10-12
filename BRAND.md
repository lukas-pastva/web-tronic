TRONIC — Brand Guidelines (základ)

Farby
- Primárna `--primary`: #1AA3FF (Tronic Blue)
- Akcent `--accent`: #00E5FF (Aqua)
- Pozadie `--bg`: #0B1020 (tmavé)
- Text `--text`: #E5E7EB (svetlý)
- Muted `--muted`: #9CA3AF

Logo súbory
- Značka (mark): `src/assets/logo-mark.svg`
- Wordmark (gradient): `src/assets/logo-wordmark.svg`
- Wordmark (monochrom tmavý): `src/assets/logo-wordmark-mono.svg`
- Wordmark (light/biely): `src/assets/logo-wordmark-light.svg`
- PNG exporty značky: `src/assets/logo-512.png`, `logo-256.png`, `logo-128.png` (generované v obraze)
- Favicon: `src/assets/favicon.svg` + `src/assets/favicon.ico` (generované v obraze)

Použitie
- Tmavé pozadie: preferujte gradient wordmark (`logo-wordmark.svg`) a značku `logo-mark.svg`.
- Svetlé pozadie: použite monochrom tmavý wordmark (`logo-wordmark-mono.svg`). Na veľmi tmavom pozadí použite light/biely wordmark (`logo-wordmark-light.svg`).
- Ikony a avatary: používajte štvorcové PNG (`logo-512/256/128.png`).

Clear space
- Minimálny voľný priestor okolo loga: aspoň šírka ramena písmena „T“ (približne 1/4 výšky wordmarku). Neumiestňujte iné prvky do tohto priestoru.

Minimálne veľkosti
- Wordmark na obrazovke: min. výška 18 px (menšie použite len značku/mark).
- Favicon/ikona: 16, 32, 48 px (ICO) a 180 px (Apple Touch odporúčané, voliteľné).

Zakázané úpravy
- Nemeňte pomer strán ani geometriu.
- Nemeňte farby mimo definovanej palety.
- Neaplikujte efekty (outline, shadow) priamo na SVG; radšej upravte pozadie.

Technické poznámky
- PNG a ICO sa generujú pri build-e Docker obrazu (librsvg + ImageMagick). Ak potrebujete súbory aj v repo, môžem ich pridať priamo.
- Pre tlač odporúčam použiť SVG alebo PNG 512.

