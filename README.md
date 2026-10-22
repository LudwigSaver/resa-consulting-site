# RESA Consulting AB – webbplats

Statisk webbplats byggd för GitHub Pages. Ingen PHP, databas eller egen server behövs.

## Publicera

1. Skapa ett **publikt** repository hos GitHub med namnet `resa-consulting-site`.
2. Ladda upp **innehållet** i denna mapp till repositoryts rot via `Add file → Upload files`.
   Viktigt: `index.html`, `styles.css` och `CNAME` ska ligga direkt i roten – inte inuti en undermapp.
3. I `Settings → Pages`: välj **Deploy from a branch**, `main`, `/ (root)` och spara.
4. Under Pages, kontrollera att **Custom domain** är `resaconsulting.se`.
5. När publiceringen fungerar, ändra endast domänens **webb-DNS** i Loopia:
   - A @ → `185.199.108.153`
   - A @ → `185.199.109.153`
   - A @ → `185.199.110.153`
   - A @ → `185.199.111.153`
   - CNAME www → `ludwigsaver.github.io` (GitHub-användaren är `LudwigSaver`).
   Ta bort den gamla A-posten `37.27.179.211` för rot/www när du gör ändringen.
6. Rör **inte** MX, TXT, SPF, DKIM, DMARC eller e-postrelaterade DNS-poster.
7. Vänta på HTTPS-certifikat i GitHub Pages och aktivera `Enforce HTTPS`.
8. Testa `https://resaconsulting.se` och `https://www.resaconsulting.se`.

## Före publicering
- Bekräfta att priserna från 2025 fortfarande gäller.
- Fastställ eventuella villkor och kostnader efter Kontelios första fria år.
- Kontrollera att telefonnummer `072-875 49 89` och e-post `info@resaconsulting.se` är aktuella.
- Kontaktknapparna använder e-postlänkar. Ingen formulärserver krävs.
- Inga externa skript eller analyscookies har installerats.
