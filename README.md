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

## Priser, erbjudande och varumärke
- RESA:s redovisningstjänster och konsultarvoden har **inte ändrats** i denna uppdatering: timpriser 772/880 kr, årsprislistan 5 400–108 000 kr och månadsarvode från 1 000 kr. Nya servicepriser kräver separat affärsbeslut.
- Det tidigare programnamnet har bytts ut till **Savrento**. Alla kundvända namn och länkar på webbplatsen använder nu www.savrento.se.
- Nya redovisningskunder får bokföringsprogrammets licensavgift första 12 månaderna enligt överenskommelse. RESA:s konsultarbete ingår inte gratis.
- För RESA-kunder ingår bokföringsdelen i redovisningssamarbetet. Fakturering som tillval är 99 kr/mån exkl. moms efter introduktionsperiod och separat godkännande.
- Savrentos prenumerationspriser är **preliminära riktpriser**, inte köpbara abonnemang innan de lanserats. Lön och bokslut är under utveckling/verifiering. Programlicens för Bokslut är inte en utförd bokslutstjänst.
- Källa för Savrentos planerade prisnivåer: `LudwigSaver/kontelio`, `backend/public/savrento/priser.html`. Kontrollera inför kommande prisändringar.
- Kontrollera att telefonnummer `076-755 51 25` och e-post `info@resaconsulting.se` är aktuella.
- Kontaktknapparna använder e-postlänkar. Ingen formulärserver krävs.
- Inga externa skript eller analyscookies har installerats.
