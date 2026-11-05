# V20 — comparație cu macheta furnizată

V19 compilat este păstrat pentru comparație. Sursele curente și `build-v20.ps1` generează V20 offline și Google Sites.

Actualizare după feedback: butonul „Calculează planul” a fost eliminat; rezultatele se actualizează automat la modificarea datelor. Panoul obiectivului se încheie cu ritmul estimat.

| Element | Diferența observată în V19 | Intervenția în V20 |
|---|---|---|
| Antet | Navigare mai greoaie, iconițe pline, controale separate | Iconițe cu contur, selecție RO/EN, comutatoare de temă grupate; antetul rămâne fix |
| Profil | Spațiu în exces și explicații pe rânduri suplimentare | Panou de aproximativ 385 px, apropiat de cei aproximativ 380 px din machetă; explicațiile activității se deschid de la pictograma informativă |
| Câmpuri | Aspect tehnic și etichete lungi | Etichete simple, valori cu greutate normală, unități în dreapta și selecție de sex compactă |
| Activitate | Descriere mai puțin integrată în control | Pictogramă cu contur, denumire și descriere pe două rânduri; toate cele cinci niveluri explicate în ghid |
| Obiectiv | Selectoare tehnice înaintea opțiunilor principale | Trei opțiuni verticale, selecție verde salvie; modurile suplimentare și coeficienții rămân în controlul de setări |
| Ajustare calorică | Slider și zone colorate foarte dominante | Bară fină și mâner rotund; procente clare, intervale și precauții extensibile, avertismentele existente păstrate |
| Ritm estimat | Lipsea din rezumatul obiectivului | Indicator calculat din proiecția reală, exprimat ca medie pe perioada afișată |
| Rezumat caloric | Insignă în primul rând, unitate prea mică, ilustrație schematică | Valoare dominantă, unitate mai mare, insignă alături de valoare și ilustrație SVG cu frunze, nervuri și nuanțe naturale |
| Macronutrienți | Culori roz/galben/turcoaz, informații secundare dominante | Verde/argilă/lavandă, pictograme cu contur, valoare în grame, procent și bare proporționale |
| Diagramă circulară | Legendă cu procente și calorii separate | Aceleași trei culori ca barele; gramele și procentele grupate în legendă |
| BMR și TDEE | Carduri tehnice separate | Două suprafețe discrete într-un singur grup, pictograme cu contur, numere și unități mai bine ierarhizate |
| Evoluție | Grafic prea înalt și multe controale înaintea curbei | Grafic compact, variația totală într-un indicator, greutatea finală într-o etichetă verde; modelul comparativ poate fi activat din setări |
| Mese | Carduri verticale mari și multe detalii afișate imediat | Rânduri compacte cu pictogramă, nume, procent și calorii; fiecare masă își păstrează detaliile de macronutrienți |
| Explicații | Text întins și secțiuni lungi în rezumat | Explicație concisă plus trei legături; formulele, referințele și datele suplimentare rămân extensibile |
| Telefon | Cardurile de macronutrienți ocupau prea multă înălțime | Diagramă circulară urmată de trei rânduri compacte; BMR/TDEE alăturate și meniu mobil pentru limbă și temă |

## Verificări

- Rezultatele inițiale V18 și V20 sunt identice. Formulele și distribuțiile pe mese nu au fost schimbate pentru a reproduce cifrele demonstrative din machetă.
- Verificate: obiectivele de menținere, deficit și surplus; 1–5 mese; ținta cu termen; validarea; RO/EN; teme; meniul mobil; explicațiile nivelurilor de activitate; accesul la detalii și comparația modelelor.
- La 1440, 1140, 768, 390 și 360 px: fără depășire orizontală și fără suprapunere între titlul și valoarea macronutrienților.
- Antetul și coloana din stânga rămân ancorate la derulare; un panou mai înalt decât fereastra are derulare proprie.
- Documentul pentru tipărire deschide secțiunile de detalii; randarea cu stilurile pentru imprimare a fost inspectată. Nu s-a făcut o imprimare fizică.
- Ilustrația și pictogramele sunt SVG desenate local, incluse în fișierul offline. Nu sunt folosite fotografii externe.

## Limite și decizii vizuale

Macheta este o imagine de concept; implementarea este o aplicație funcțională, cu valori și înălțimi dependente de date, limbă și ecran. Frunzele sunt o reinterpretare vectorială, nu o reproducere fotografică identică.

Degradeurile discrete, umbrele, titlul mic cu majuscule și cifra calorică mare urmează explicit referința utilizatorului. Sunt excepții intenționate de la stilul generic al skillului, nu schimbări de direcție.

Evaluare vizuală finală: ierarhie 9/10, apropiere structurală de machetă 9/10, finisaj 8/10, adaptare pe telefon 9/10. Acestea sunt aprecieri vizuale; cea mai mare diferență rămasă este textura ilustrației față de imaginea generată inițial.

Nu a fost făcută publicare online. Fișierele de livrat sunt `../calculator_nutritional_v20.html` și `../calculator_nutritional_v20_google_sites.html`.
