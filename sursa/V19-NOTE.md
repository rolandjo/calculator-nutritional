# V19 — restructurare vizuală

Implementare după referința vizuală furnizată: profil și obiectiv în coloana stângă, plan caloric proeminent, carduri de macronutrienți cu bare proporționale și diagramă circulară, BMR/TDEE compacte, evoluție și mese alăturate. Pe telefon, rezultatele apar primele, iar navigarea „Profil” duce la formular.

Paleta V18, formulele nutriționale și setările inițiale sunt păstrate. Ilustrația botanică este SVG desenat local; nu sunt folosite fotografii sau date demonstrative externe. Direcția vine din imaginea utilizatorului, fără extragerea unei direcții aleatoare.

## Fișiere generate

- `../calculator_nutritional_v19.html` — variantă autonomă, fonturi incluse.
- `../calculator_nutritional_v19_google_sites.html` — variantă Google Sites.
- Regenerare: `./build-v19.ps1` din PowerShell, cu dependențele Node existente instalate.
- `build.mjs` include acum `wellness-layout.css` și `wellness-layout.js` în toate variantele.

## Verificare

- Rezultatele inițiale V18 și V19 sunt identice, inclusiv structura rezultatelor calculului.
- Verificate activitatea, cele trei obiective, distribuțiile pentru 1–5 mese, modul țintă/termen, validarea datelor, RO/EN și pregătirea documentului pentru tipărire.
- Fără erori JavaScript în scenariile verificate și fără ID-uri duplicate.
- Fără derulare orizontală la 1440, 768 și 390 px, în temele luminoasă și întunecată.
- Inspector vizual final: 0 erori și 6 observații de stil. Paleta, cifra calorică mare și colțurile rotunjite urmează referința și identitatea V18. Densitatea textelor explicative și înălțimile diferite ale unor panouri rămân compromisuri pentru păstrarea funcționalităților.
- Capturile desktop/tabletă/telefon au fost inspectate vizual. Ierarhie 8/10, apropiere structurală de referință 8/10, adaptare pe telefon 8/10; sublinierile și explicațiile originale au încă o densitate mai mare decât în machetă. Aceste scoruri sunt evaluări vizuale, nu rezultate automate.
- Verificarea documentului pentru tipărire confirmă extinderea detaliilor; dialogul imprimantei și o imprimare fizică nu au fost testate.
- Nicio publicare în GitHub sau Google Sites nu a fost făcută.

Rapoarte și capturi: `../.taste-skill/verification/` și `../.taste-skill/final/`.

## Ajustare după feedback

- Antet compact cu logo redus; rămâne vizibil în timpul derulării.
- Coloana stângă este sticky pe desktop/tabletă și are derulare proprie când conținutul depășește spațiul disponibil. Pe telefon, antetul și navigarea rămân vizibile, iar profilul este în fluxul normal al paginii.
- Spațiul necesar sub antet se măsoară automat, inclusiv la schimbarea limbii sau mărirea textului.
- Etichete scurte pentru profil și unități în partea dreaptă a câmpurilor, după noua referință.
- Fiecare nivel de activitate are o descriere vizibilă și explicații extensibile pentru toate cele cinci niveluri, cu RO/EN. Multiplicatorii de calcul sunt păstrați.
- Verificat în browser: antetul și coloana stângă își păstrează poziția la derulări de 400 și 700 px; butonul de calcul rămâne accesibil; navigarea mobilă nu se suprapune peste antet.
