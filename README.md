TRONIC web

Prehľad
- Statická webová stránka pre TRONIC (Kubernetes & GitOps experti).
- Frontend: čisté HTML/CSS/JS v `src/`.
- Kontakty sa načítavajú cez JS z endpointu na `sw.tronic.sk`.
- Kontejner: Nginx (alpine), runtime konfig cez `CONTACT_API_URL`.

Struktúra
- `src/index.html` — hlavná stránka
- `src/assets/styles.css` — štýly
- `src/assets/app.js` — logika načítania kontaktov
- `src/assets/config.js.template` — runtime template pre `CONTACT_API_URL`
- `src/assets/config.js` — default pre lokálne spustenie mimo kontajnera
- `src/docker-entrypoint.sh` — generovanie `config.js` + spustenie Nginx
- `src/Dockerfile` — obraz pre CI/CD (pri build-e vygeneruje PNG exporty `logo-512/256/128.png` a `favicon.ico`)

Lokálne spustenie (Docker)
1) Build:
   docker build -f ./src/Dockerfile -t tronic-web ./src
2) Run (s voliteľným override endpointu kontaktov):
   docker run --rm -e CONTACT_API_URL="https://sw.tronic.sk/api/contact" -p 8080:80 tronic-web
   Otvorte http://localhost:8080

Poznámky k endpointu kontaktov
- Predvolený endpoint: `https://sw.tronic.sk/api/contact`.
- Ak máte iný presný URL (napr. `https://sw.tronic.sk/api/company/contact`), nastavte premennú `CONTACT_API_URL` pri spustení kontajnera alebo v deploy prostredí.
- Frontend očakáva JSON s poliami: `companyName|name`, `email`, `phone`, `address` (alebo `street/city/zip`), `ico`, `dic|vatId`, `website`. Nevyžaduje všetky — čo je k dispozícii, to sa zobrazí.

CI/CD
- Workflow `.github/workflows/build.yaml` už používa `./src/Dockerfile` a build context `./src`.
- Publikovanie prebieha do Docker Hub na základe nastavených `secrets`.

Branding
- Pozrite `BRAND.md` pre farby, logá a odporúčania použitia.
