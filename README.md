# Calculator Nutrițional

Calculator web pentru necesarul caloric zilnic, macronutrienți, repartiția pe mese și evoluția estimată a greutății în timp. Totul rulează local în browser: fără server, fără conturi, fără trimiterea datelor nicăieri.

**Aplicația online:** https://rolandjo.github.io/calculator-nutritional/

## Funcționalități

- **Metabolism bazal (BMR)** – ecuația Mifflin-St Jeor
- **Consum total (TDEE)** – 5 niveluri de activitate fizică
- **Două moduri de calcul**
  - *După procent* – deficit 10–40% / surplus 5–15% față de menținere (zona prudentă marcată, avertisment peste prag)
  - *După țintă și termen* – calcul invers: greutatea dorită + termen (săptămâni sau dată) → aportul zilnic necesar, cu plafonare la limite sigure și termen minim recomandat
- **Macronutrienți** – proteine (g/kg, opțional pe greutate de referință), grăsimi (% din calorii), carbohidrați din restul bugetului; grafic donut; notă Keto sub 50 g carbohidrați/zi
- **Fibre și lichide** – ținte orientative
- **Repartiție pe mese** – 3, 4 sau 5 mese, distribuție ponderată
- **Evoluția greutății** – model dinamic zi cu zi (Hall et al., Lancet 2011, simplificat): adaptare metabolică selectabilă, faza inițială apă + glicogen, greutate de echilibru, grafic și tabel
- **Formule și referințe științifice** – secțiuni restrânse, cu trimiteri [n] la 21 de surse
- Mod întunecat, tipărire / PDF, copiere rezumat, funcționare offline

## Structura proiectului

```
index.html                        Aplicația completă (un singur fișier, merge offline)
google-sites/
  calculator_nutritional_google_sites.html   Variantă mai mică pentru Google Sites (font din Google Fonts)
sursa/
  src.html                        Sursa (HTML + JS, clase Tailwind, marcaje de iconițe)
  build.mjs                       Script de build: compilează Tailwind, include fonturi și iconițe SVG
  package.json
```

## Build (PowerShell)

Necesită Node.js 18+.

```powershell
cd sursa
npm install
npm run build:all     # generează ../index.html și varianta Google Sites
```

Modificările se fac în `sursa/src.html`; fișierele HTML finale se regenerează cu comanda de mai sus (CSS-ul conține doar clasele Tailwind folosite efectiv).

## Publicare în Google Sites

- **Varianta 1 (recomandată):** *Insert → Embed → By URL* cu linkul GitHub Pages de mai sus.
- **Varianta 2:** *Embed → Embed code* cu conținutul fișierului din `google-sites/`. În acest caz setările nu se păstrează între vizite, iar tipărirea se face printr-un tab nou.

## Notă

Rezultatele sunt estimări teoretice, orientative, și nu înlocuiesc recomandarea unui medic sau nutriționist. Calculatorul este destinat adulților (18+).

## Licență

Cod: [MIT](LICENSE).
Componente terțe incluse în fișierele generate:
- Iconițe [Font Awesome Free](https://fontawesome.com/license/free) – CC BY 4.0
- Font [Inter](https://rsms.me/inter/) – SIL Open Font License 1.1
- [Tailwind CSS](https://tailwindcss.com) – MIT
