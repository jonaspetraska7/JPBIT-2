export interface ProduktoModelis{
    id: number,
    title:string;
    price:number;
    description:string;
    image:string;
    category:string;
    categories:number[]
    rating:{
        rate: number,
        count: number
    }
  }
  
  export const produktai = [{
    "id": 1,
    "title": "Kuprinė",
    // "title": "Fjallraven -nr. 1 kuprinė,  15 nešiojamųjų kompiuterių",
    "price": 109.95,
    "description": "Puiki kuprinė kasdieniam naudojimui ir pasivaikščiojimams miške trumpoms,mažoms iškyloms. Telpa 15 colių nešiojamas kompiuteris ",
    "category": "men's clothing",
    "categories": [1, 8],
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
},
{
    "id": 2,
    "title": "Marškinėliai ",
    // "title": "Vyriški laisvalaikio PREMIUM SLIM marškinėliai ",
    "price": 22.3,
    "description": "Slim-fit stilius, kontrastingos raglaninės rankovės, trijų sagų „Henley“ plokštelė, lengvas ir minkštas audinys, leidžiantis kvėpuoti ir patogiai dėvėti. Tvirti susiūti marškiniai su apvaliu kaklu, skirti ilgaamžiškumui.Puikiai tinka kasdieniam dėvėjimui ir kietiems beisbolo gerbėjams. Į „Henley“ stiliaus apvalią iškirptę įeina trijų sagų segtukas.",
    "category": "men's clothing",
    "categories": [1, 2],
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
},
{
    "id": 3,
    "title": "Striukė",
    // "title": "Vyriška medvilninė striukė",
    "price": 55.99,
    "description": "Puiki striukė pavasariui/rudeniui/žiemai.Tinkančios įvairioms progoms, pavyzdžiui: darbui, žygiams pėsčiomis, stovyklavimui, laipiojimui kalnuose/uoloms, važinėjimui dviračiu, kelionėms ar kitoms lauko sąlygoms. Geras dovanų pasirinkimas jums ar jūsų šeimos nariui. Širdinga meilė tėčiui, vyrui ar sūnui per padėkos ar Kalėdų dieną.",
    "category": "men's clothing",
    "categories": [1, 2],
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
},
{
    "id": 4,
    // "title": "Vyrų laisvalaikio slim-fit ",
    "title": "Slim-fit ",
    "price": 15.99,
    "description": "Spalva ekrane ir realybeje praktiškai gali šiek tiek skirtis. / Atkreipkite dėmesį, kad kūno formos skiriasi kiekvieno asmenio, todėl išsami informacija apie dydį turėtų būti pateikta žemiau esančiame produkto aprašyme.",
    "category": "men's clothing",
    "categories": [1, 2],
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
        "rate": 2.1,
        "count": 430
    }
},
{
    "id": 5,
    // "title": "John Hardy moterų legenda Naga Gold & Silver Dragon Station apyrankė",
    "title": "Apyrankė",
    "price": 695,
    "description": "Iš mūsų legendos kolekcijos Naga įkvėpė mitinis vandens slibinas, saugantis vandenyno perlą. Dėvėkite viduje, kad būtumėte apdovanotas meile arba į išorę - apsaugai.",
    "category": "jewelery",
    "categories": [4, 6],
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 6,
    // "title": "Solidus,smulkus auksinis mikropavas ",
    "title": "Mikropavas ",
    "price": 168,
    "description": "Kokybė garantuota. Grąžinkite arba keiskite bet kokį kita užsakymą per 30 dienų. Sukūrė Hafeez Center JAV.",
    "category": "jewelery",
    "categories": [4, 6],
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 7,
    "title": "žiedas 'princesė'",
    "price": 9.99,
    "description": "Klasikinis vestuvių, sužadėtuvių deimantinis pažadų žiedas jai. Dovanos pradžiuginti jūsų meilę sužadėtuvėms, vestuvėms, jubiliejui, Valentino dienai ...",
    "category": "jewelery",
    "categories": [4, 5],
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 3,
        "count": 400
    }
},
{
    "id": 8,
    "title": "Auskarai",
    "price": 10.99,
    "description": "Rožiniu auksu padengti auskarai. Pagaminta iš 316L nerūdijančio plieno",
    "category": "jewelery",
    "categories": [4, 5],
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 1.9,
        "count": 100
    }
},
{
    "id": 9,
    "title": "USB flesas",
    "price": 64,
    "description": "USB 3.0 ir USB 2.0 suderinamumas Greitas duomenų perdavimas.Pagerinkite didelio našumo kompiuterį; Suderinamumo formatuotas NTFS, skirtas „Windows 10“, „Windows 8.1“, „Windows 7“; Gali reikėti iš naujo suformatuoti kitas operacines sistemas; Suderinamumas gali skirtis priklausomai nuo vartotojo aparatūros konfigūracijos ir operacinės sistemos",
    "category": "electronics",
    "categories": [7],
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
        "rate": 3.3,
        "count": 203
    }
},
{
    "id": 10,
    "title": "SSD Sandisk",
    "price": 109,
    "description": "Lengvas atnaujinimas, skirtas greitesniam įkrovimui, išjungimui, programų apkrovai ir atsakui (palyginti su 5400 aps / min SATA 2,5 colio kietuoju disku; remiantis paskelbtomis specifikacijomis ir vidiniais lyginamosios analizės bandymais, naudojant „PCMark“ pranašumus) Puikus našumo ir patikimumo balansas iki 535 MB/s/450 MB/s skaitymo/rašymo greičio (remiantis vidiniais bandymais; našumas gali skirtis priklausomai nuo disko talpos, pagrindinio įrenginio, OS ir programos).",
    "category": "electronics",
    "categories": [7],
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 470
    }
},
{
    "id": 11,
    "title": "Silicon Power 256 GB ",
    "price": 109,
    "description": " Išplėstinė SLC talpyklos technologija leidžia padidinti našumą ir ilgesnį 7 mm plono dizaino modelį, tinkantį „Ultrabooks“ ir „Ultra-Slim“ nešiojamiesiems kompiuteriams. Palaiko TRIM komandą, šiukšlių surinkimo technologiją, RAID ir ECC (klaidų tikrinimas ir taisymas), kad būtų užtikrintas optimalus našumas ir padidintas patikimumas.",
    "category": "electronics",
    "categories": [7],
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
        "rate": 4.8,
        "count": 319
    }
},
{
    "id": 12,
    "title": "žaidimų diskas",
    "price": 114,
    "description": "Išplėskite savo PS4 žaidimų patirtį, žaiskite bet kur. Greitas ir paprastas nustatymas. Elegantiškas dizainas su didele talpa, 3 metų gamintojo ribota garantija",
    "category": "electronics",
    "categories": [7],
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
        "rate": 4.8,
        "count": 400
    }
},
{
    "id": 13,
    "title": "Televizorius",
    "price": 599,
    "description": "21. 5 colių „Full HD“ (1920 x 1080) plačiaekranis IPS ekranas ir „Radeon free Sync“ technologija. Nėra VESA laikiklio atnaujinimo dažnio suderinamumo: 75 Hz - naudojant HDMI prievadą Nulinio rėmo dizainas | itin plonas | 4ms atsako laikas | IPS skydelis Vaizdo santykis - 16: 9. Palaikomos spalvos - 16. 7 milijonai spalvų. Ryškumas - 250 nit Pakreipimo kampas nuo -5 iki 15 laipsnių. Horizontalus žiūrėjimo kampas-178 laipsniai. Vertikalus žiūrėjimo kampas-178 laipsniai, 75 hercai",
    "category": "electronics",
    "categories": [7],
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 250
    }
},
{
    "id": 14,
    "title": "Monitorius",
    "price": 999.99,
    "description": "49 colių SUPER ULTRAWIDE 32: 9 SUKRŪTAS ŽAIDIMŲ MONITORIUS su dvigubu 27 colių ekranu greta QUANTUM DOT (QLED) TECHNOLOGIJA, HDR palaikymas ir gamyklinis kalibravimas suteikia stulbinančiai tikrovišką ir tikslią spalvą ir kontrastą. pašalinkite judesio suliejimą, šešėlį ir sumažinkite įvesties delsą",
    "category": "electronics",
    "categories": [7],
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
        "rate": 2.2,
        "count": 140
    }
},
{
    "id": 15,
    "title": "snieglenčių striukės",
    "price": 56.99,
    "description": "Pastaba: Striukės yra JAV standartinio dydžio, pasirinkite dydį kaip įprastą drabužį Medžiaga: 100% poliesteris; Nuimamas pamušalo audinys: šiltas vilnos audinys. Nuimamas funkcinis pamušalas: draugiškas odai, lengvas ir šiltas. Striukės apykaklės linijinė striukė, sušildys šaltu oru. Kišenės su užtrauktukais: 2 kišenės su užtrauktukais rankose, 2 kišenės su užtrauktukais ant krūtinės (pakanka kortelėms ar raktams laikyti) ir 1 paslėpta kišenė viduje. Užtraukiamos rankinės kišenės ir paslėpta kišenė saugo jūsų daiktus. Humanizuotas dizainas: reguliuojamas ir nuimamas gaubtas ir reguliuojamas rankogaliai, apsaugantys nuo vėjo ir vandens, patogiai priglunda. Nuimamas dizainas 3 viename suteikia daugiau patogumo, kai reikia, galite atskirti paltą ir vidų arba dėvėti kartu. Jis tinka skirtingam sezonui ir padeda prisitaikyti prie skirtingo klimato",
    "category": "women's clothing",
    "categories": [1, 3],
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
        "rate": 2.6,
        "count": 235
    }
},
{
    "id": 16,
    "title": "striukė su gobtuvu",
    "price": 29.95,
    "description": "100% POLIURETANAS (apvalkalas) 100% POLIESTERIS (pamušalas) 75% POLIESTERIS 25% MEDVILNĖ (Džemperis), dirbtinės odos medžiaga stiliui ir patogumui / 2 kišenės priekyje, 2 vienai džinsinio stiliaus dirbtinės odos striukė, sagos detalė ant juosmens / detalių susiuvimas šonuose, TIK PLAUKIMAS rankomis / NEPALAISYKITE / LINIJOS DŽIOVINKITE / NEGALIUOKITE" ,
    "category": "women's clothing",
    "categories": [1, 3],
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 340
    }
},
{
    "id": 17,
    "title": "Lietpaltis",
    "price": 39.99,
    "description": "Lengvas parfumelis kelionei ar kasdieniam dėvėjimui --- Ilgos rankovės su gobtuvu, reguliuojamas raištelio juosmens dizainas. Priekinis užsegamas lietpaltis su sagomis ir užtrauktuku, visiškai dryžuotas su pamušalu ir lietpaltis turi 2 šonines kišenes, kurių dydis yra tinkamas įvairiems daiktams laikyti, jis dengia klubus, o gaubtas yra dosnus, bet nepersistengia. Reguliuojami raišteliai suteikia jai tikro stiliaus išvaizdą.",
    "category": "women's clothing",
    "categories": [1, 3],
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
        "rate": 3.8,
        "count": 679
    }
},
{
    "id": 18,
    "title": "Palaidinė",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, pagaminta JAV arba importuota, nebalinkite, lengvas audinys, puikiai tampantis patogumui, briaunotas ant rankovių ir iškirptės / dvigubas susiuvimas apačioje",
    "category": "women's clothing",
    "categories": [1, 3],
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
},
{
    "id": 19,
    "title": "Laisvalaikio maikė",
    "price": 7.95,
    "description": "100% poliesteris, skalbimas skalbimo mašinoje, 100% katijoninis poliesterio blokavimas, skalbimas mašinoje ir iš anksto sutrauktas, puikiai tinka, lengvas, erdvus ir labai kvėpuojantis su drėgmę sugeriančiu audiniu, padedančiu išlaikyti drėgmę, minkštas lengvas audinys su patogia apykakle V formos. plonesnis, suteikia aptakų, moteriškesnį siluetą ir suteikia papildomo komforto",
    "category": "women's clothing",
    "categories": [1, 3],
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.5,
        "count": 146
    }
},
{
    "id": 20,
    "title": "moteriški marškinėliai",
    "price": 12.99,
    "description": "95%medvilnės, 5%elastano, savybės: kasdienis, trumpomis rankovėmis, raidžių atspaudas, V formos iškirptė, madingi marškinėliai, audinys yra minkštas ir šiek tiek ištemptas., Proga: kasdienis/biuras/paplūdimys/mokykla/namai/gatvė Sezonas: pavasaris, vasara, ruduo, žiema.",
    "category": "women's clothing",
    "categories": [1, 3],
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
        "rate": 3.6,
        "count": 145
    }
}
]