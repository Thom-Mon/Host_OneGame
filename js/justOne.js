var allWords = ["Baum",
    "Geländer",
    "Giraffe",
    "Esel",
    "Bildschirm",
    "Rahmen",
    "Plastik",
    "Lampe",
    "LED",
    "Tisch",
    "Rohr",
    "Penis",
    "Hefter",
    "Batterie",
    "Holz",
    "Granate",
    "Zapfen",
    "Pullover",
    "Perücke",
    "Glatze",
    "Knieschützer",
    "Zwerg",
    "Brille",
    "Fahrrad",
    "Autobahn",
    "Standstreifen",
    "Blinker",
    "Silizium",
    "Trixie",
    "Magnet",
    "Schindel",
    "Schimmel",
    "Mathematik",
    "Schraube",
    "Kräuter",
    "Lama",
    "Igel",
    "Spiegel",
    "Salz",
    "Pfeffer",
    "Paprika",
    "Norwegen",
    "Funk",
    "Laterne",
    "Rochen",
    "Schild",
    "Heilung",
    "Frage",
    "Schiff",
    "Segel",
    "Ufer",
    "Rand",
    "Zufall",
    "Oberfläche",
    "Höhle",
    "Schalter",
    "Messer",
    "Haut",
    "Gitter",
    "Laktose",
    "Milch",
    "Kakao",
    "Platin",
    "Brett",
    "Dünger",
    "Roulette",
    "Drache",
    "Krieg",
    "Honig",
    "Bombe",
    "Kasino",
    "Wolkenkratzer",
    "Saturn",
    "Alien",
    "Peitsche",
    "Antarktis",
    "Schneemann",
    "Konzert",
    "Schokolade",
    "Jet",
    "Millionär",
    "Dinosaurier",
    "Pirat",
    "Hupe",
    "Pinguin",
    "Spinne",
    "Geschoss",
    "Botschaft",
    "Pistole",
    "Krankheit",
    "Spion",
    "Prinzessin",
    "Genie",
    "Dieb",
    "Oper",
    "Ritter",
    "Stadion",
    "Limousine",
    "Geist",
    "Laster",
    "Lakritze",
    "Laser",
    "Tod",
    "Krankenhaus",
    "Skelett",
    "Oktopus",
    "Hubschrauber",
    "Känguru",
    "Mikroskop",
    "Zentaur",
    "Superheld",
    "Teleskop",
    "Fallschirm",
    "Schnabeltier",
    "Olymp",
    "Satellit",
    "Engel",
    "Roboter",
    "Einhorn",
    "Hexe",
    "Bergsteiger",
    "Taucher",
    "Gift",
    "Brücke",
    "Feuer",
    "Tisch",
    "Wal",
    "Mond",
    "Fisch",
    "Doktor",
    "Kirche",
    "Gürtel",
    "Zitrone",
    "Wind",
    "Löwe",
    "Auge",
    "Luft",
    "Hase",
    "Bank",
    "Gras",
    "Auflauf",
    "Zwerg",
    "Wald",
    "Auto",
    "Burg",
    "Apfel",
    "Öl",
    "Koch",
    "Bär",
    "Katze",
    "Leben",
    "Glück",
    "Riese",
    "Gesicht",
    "Strand",
    "Hotel",
    "Wasser",
    "Papier",
    "Wurm",
    "Anwalt",
    "Forscher",
    "Tanz",
    "Karotte",
    "Ketchup",
    "Nacht",
    "Meer",
    "Fuss",
    "Maus",
    "Messer",
    "Theater",
    "Polizei",
    "Schiff",
    "Pilot",
    "Daumen",
    "Lehrer",
    "Flasche",
    "Tag",
    "König",
    "Glas",
    "Königin",
    "Zahn",
    "Hund",
    "Pferd",
    "Schuh",
    "Stuhl",
    "Krone",
    "Eis",
    "Gold",
    "Gabel",
    "Zeit",
    "Flöte",
    "Fackel",
    "Schnee",
    "Elfenbein",
    "Soldat",
    "Pyramide",
    "Schnur",
    "Stern",
    "Ring",
    "Horn",
    "Herz",
    "Ball",
    "Kanal",
    "Nadel",
    "Linie",
    "Korb",
    "Blau",
    "Taste",
    "Schirm",
    "Spiel",
    "Fleck",
    "Knopf",
    "Mund",
    "Akt",
    "Himalaja",
    "Bett",
    "Wand",
    "Turm",
    "Karte",
    "Tor",
    "Raute",
    "Kreuz",
    "Netz",
    "Punkt",
    "Pass",
    "Fläche",
    "Loch",
    "Glocke",
    "Kraft",
    "Schloss",
    "Maschine",
    "Welle",
    "Sturm",
    "Haupt",
    "Pol",
    "Mittel",
    "Jahr",
    "Leim",
    "Seite",
    "Bau",
    "Kreis",
    "Bindung",
    "Uhr",
    "New York",
    "Australien",
    "Bayern",
    "Tokio",
    "Ägypten",
    "London",
    "Morgenstern",
    "Moskau",
    "China",
    "Shakespeare",
    "Hollywood",
    "Griechenland",
    "Rom",
    "Hand",
    "Ninja",
    "Brötchen",
    "Kiwi",
    "Deutschland",
    "Staat",
    "Amerikaner",
    "Atlantis",
    "England",
    "Osten",
    "Afrika",
    "Alpen",
    "Frankreich",
    "Winnetou",
    "Mexiko",
    "Verein",
    "Feder",
    "Hamburger",
    "Berlin",
    "Adler",
    "Europa",
    "Loch Ness",
    "Peking",
    "Inka",
    "Becken",
    "Optik",
    "Strasse",
    "Essen",
    "Siegel",
    "Bart",
    "Blüte",
    "Moos",
    "Abgabe",
    "Bahn",
    "Tafel",
    "Babel",
    "Quartett",
    "Torte",
    "Tau",
    "Chemie",
    "Arm",
    "Linse",
    "Kippe",
    "Melone",
    "Fuchs",
    "Boot",
    "Korn",
    "Bande",
    "Mal",
    "Batterie",
    "Dame",
    "Pflaster",
    "Erde",
    "Messe",
    "Ton",
    "Römer",
    "Stamm",
    "Brand",
    "Schild",
    "Lippe",
    "Miene",
    "Kokos",
    "Läufer",
    "Bund",
    "Elf",
    "Iris",
    "Gang",
    "Pfeife",
    "Kiel",
    "Star",
    "Leiter",
    "Ladung",
    "Bauer",
    "Strudel",
    "Bremse",
    "Hahn",
    "Kapelle",
    "Strauss",
    "Satz",
    "Grund",
    "Kater",
    "Matte",
    "Kerze",
    "Wirtschaft",
    "Dichtung",
    "Gehalt",
    "Chor",
    "Feige",
    "Erika",
    "Mangel",
    "Rolle",
    "Stock",
    "Dietrich",
    "Schule",
    "Ente",
    "Schotten",
    "Mark",
    "Lager",
    "Fall",
    "Jura",
    "Niete",
    "Geschirr",
    "Knie",
    "Drossel",
    "Hering",
    "Sekretär",
    "Drucker",
    "Blinker",
    "Stift",
    "Flügel",
    "Schein",
    "Funken",
    "Bock",
    "Po",
    "Atlas",
    "Stempel",
    "Schelle",
    "Leuchte",
    "Umzug",
    "Finger",
    "Riegel",
    "Mast",
    "Käfer",
    "Bogen",
    "Wanze",
    "Scheibe",
    "Schalter",
    "Schimmel",
    "Demo",
    "Bein",
    "Börse",
    "Takt",
    "Fliege",
    "Jäger",
    "Kunde",
    "Nuss",
    "Schlange",
    "Tempo",
    "Bach",
    "Vorsatz",
    "Gericht",
    "Kamm",
    "Busch",
    "Platte",
    "Decke",
    "Rücken",
    "Maler",
    "Heide",
    "Boxer",
    "Reif",
    "Ausdruck",
    "Zug",
    "Kiefer",
    "Washington",
    "Mini",
    "Gut",
    "Kohle",
    "Grad",
    "Brause",
    "Viertel",
    "Rute",
    "Bulle",
    "Figur",
    "Fest",
    "Zoll",
    "Loge",
    "Mutter",
    "Riemen",
    "Verband",
    "Hut",
    "Watt",
    "Horst",
    "Luxemburg",
    "Birne",
    "Note",
    "Film",
    "Absatz",
    "Blatt",
    "Mandel",
    "Indien",
    "Fessel",
    "Schale",
    "Aufzug",
    "Quelle",
    "Harz",
    "Wurf",
    "Golf",
    "Rollo",
    "Rost",
    "Nagel",
    "Toast",
    "Zylinder",
    "Muschel",
    "Würfel",
    "Weide",
    "Kapitän",
    "Lösung",
    "Rasen",
    "Rock",
    "Krebs",
    "Flur",
    "Steuer",
    "Zelle",
    "Barren",
    "Löffel",
    "Futter",
    "Schuppen",
    "Orange",
    "Pension",
    "Abendessen",
    "Couch",
    "Gurke",
    "Kopf",
    "Ohr",
    "Socken",
    "Wald",
    "Abfall",
    "Dach",
    "Gürtel",
    "Krokodil",
    "Oma",
    "Sofa",
    "Waschmaschine",
    "Affe",
    "Decke",
    "Haare",
    "Küche",
    "Opa",
    "Sonne",
    "Wasser",
    "Ameise",
    "Deckel",
    "Hahn",
    "Kuchen",
    "Papa",
    "Soße",
    "Weintraube",
    "Apfel",
    "Dose",
    "Hammer",
    "Kuh",
    "Papier",
    "Spaghetti",
    "Wind",
    "Arbeit",
    "Durst",
    "Hand",
    "Kühlschrank",
    "Park",
    "Spiel",
    "Windel",
    "Arm",
    "Dusche",
    "Handtuch",
    "Küken",
    "Pferd",
    "Spielplatz",
    "Wohnzimmer",
    "Auge",
    "Eier",
    "Hase",
    "Lampe",
    "Platz",
    "Spielzeug",
    "Wolf",
    "Auto",
    "Eimer",
    "Haus",
    "Lätzchen",
    "Polizei",
    "Spinne",
    "Wolke",
    "Badezimmer",
    "Eis",
    "Hausschuhe",
    "Leiter",
    "Popo",
    "Steine",
    "Wurst",
    "Bagger",
    "Eisenbahn",
    "Hemd",
    "Leute",
    "Pudding",
    "Sterne",
    "Zahnbürste",
    "Ball",
    "Elefant",
    "Herd",
    "Licht",
    "Pullover",
    "Stiefel",
    "Zähne",
    "Banane",
    "Ente",
    "Himmel",
    "Löffel",
    "Puppe",
    "Stifte",
    "Zebra",
    "Bank",
    "Erbsen",
    "Honig",
    "Löwe",
    "Regen",
    "Stock",
    "Zeh",
    "Bär",
    "Erdbeere",
    "Hose",
    "Lutscher",
    "Reh",
    "Straße",
    "Zeitung",
    "Bauch",
    "Esel",
    "Hubschrauber",
    "Mädchen",
    "Rutsche",
    "Stuhl",
    "Zimmer",
    "Baum",
    "Eule",
    "Huhn",
    "Mama",
    "Saft",
    "Suppe",
    "Zug",
    "Becher",
    "Fahrrad",
    "Hund",
    "Mann",
    "Salz",
    "Tag",
    "Zuhause",
    "Bein",
    "Fenster",
    "Hut",
    "Mantel",
    "Sand",
    "Tankstelle",
    "Zunge",
    "Besen",
    "Fernseher",
    "Jacke",
    "Marmelade",
    "Sandkasten",
    "Tasse",
    "Bett",
    "Finger",
    "Jeans",
    "Maus",
    "Schaf",
    "Teddy",
    "Biene",
    "Fisch",
    "Junge",
    "Melone",
    "Schall",
    "Tee",
    "Bild",
    "Flasche",
    "Käfer",
    "Messer",
    "Schaufel",
    "Telefon",
    "Bilderbuch",
    "Fleisch",
    "Kamm",
    "Milch",
    "Schaukel",
    "Teller",
    "Birne",
    "Fliege",
    "Kartoffeln",
    "Mittag",
    "Schere",
    "Tier",
    "Blatt",
    "Flugzeug",
    "Käse",
    "Mittagessen",
    "Schiff",
    "Tiger",
    "Blume",
    "Frosch",
    "Katze",
    "Mond",
    "Schlafzimmer",
    "Tisch",
    "Bohnen",
    "Frühstück",
    "Keks",
    "Motorrad",
    "Schlüssel",
    "Tomate",
    "Bonbon",
    "Fuß",
    "Keller",
    "Mund",
    "Schmetterling",
    "Top",
    "Boot",
    "Gabel",
    "Kette",
    "Musik",
    "Schnecke",
    "Trakto",
    "Brille",
    "Gans",
    "Kinder",
    "Mütze",
    "Schnuller",
    "Treppe",
    "Brot",
    "Garten",
    "Kinderwagen",
    "Nacht",
    "Schokolade",
    "Tuch",
    "Buch",
    "Geschichte",
    "Kinn",
    "Nagel",
    "Schrank",
    "Tür",
    "Bürste",
    "Gesicht",
    "Kissen",
    "Nase",
    "Schuhe",
    "Turm",
    "Bus",
    "Giraffe",
    "Kleid",
    "Nudel",
    "Schüssel",
    "Uhu",
    "Butter",
    "Glas",
    "Knie",
    "Nuss",
    "Schwein",
    "Unterhose",
    "Butterbrot",
    "Gras",
    "Knopf",
    "Ofen",
    "Seife",
    "Vogel",
    "Ärger",
    "Ärztin",
    "Abend",
    "Abfahrt",
    "Abflug",
    "Absender",
    "Adresse",
    "Alkohol",
    "Alter",
    "Ampel",
    "Anfang",
    "Angebot",
    "Angestellte",
    "Angst",
    "Ankunft",
    "Anmeldung",
    "Anrede",
    "Anruf",
    "Anrufbeantworter",
    "Ansage",
    "Anschluss",
    "Antwort",
    "Anzeige",
    "Anzug",
    "Apfel",
    "Apotheke",
    "Appartement",
    "Appetit",
    "April",
    "Arbeit",
    "Arbeitsplatz",
    "Arm",
    "Arzt",
    "Aufenthalt",
    "Aufgabe",
    "Aufzug",
    "Auge",
    "August",
    "Ausbildung",
    "Ausflug",
    "Ausgang",
    "Auskunft",
    "Ausländer",
    "Ausländerin",
    "Ausland",
    "Aussage",
    "Ausstellung",
    "Ausweis",
    "Auto",
    "Autobahn",
    "Automat",
    "Bäckerei",
    "Büro",
    "Baby",
    "Bad",
    "Bahn",
    "Bahnhof",
    "Bahnsteig",
    "Balkon",
    "Bank",
    "Batterie",
    "Baum",
    "Beamte",
    "Beamtin",
    "Bein",
    "Beispiel",
    "Bekannte",
    "Benzin",
    "Beratung",
    "Berg",
    "Beruf",
    "Besuch",
    "Betrag",
    "Bett",
    "Bewerbung",
    "Bier",
    "Bild",
    "Birne",
    "Bitte",
    "Blatt",
    "Bleistift",
    "Blick",
    "Blume",
    "Bluse",
    "Blut",
    "Bogen",
    "Bohne",
    "Brötchen",
    "Brücke",
    "Brief",
    "Briefkasten",
    "Briefmarke",
    "Umschlag",
    "Brille",
    "Brot",
    "Bruder",
    "Buch",
    "Buchstabe",
    "Bus",
    "Butter",
    "Café",
    "CD",
    "Chef",
    "Computer",
    "Creme",
    "Dach",
    "Dame",
    "Waschbär",
    "Datum",
    "Dauer",
    "Deutsche",
    "Dezember",
    "Ding",
    "Disco",
    "Doktor",
    "Dom",
    "Zimmer",
    "Dorf",
    "Drucker",
    "Durst",
    "Dusche",
    "E-Mail",
    "Ecke",
    "Ehefrau",
    "Ehemann",
    "Ei",
    "Eingang",
    "Einladung",
    "Einwohner",
    "Eis",
    "Eltern",
    "Empfänger",
    "Empfang",
    "Ende",
    "Enkel",
    "Entschuldigung",
    "Erdgeschoss",
    "Erfahrung",
    "Ergebnis",
    "Erlaubnis",
    "Ermäßigung",
    "Erwachsene",
    "Essen",
    "Export",
    "Fähre",
    "Führerschein",
    "Führung",
    "Fabrik",
    "Fahrer",
    "Fahrkarte",
    "Fahrplan",
    "Fahrrad",
    "Familie",
    "Familienname",
    "Familienstand",
    "Farbe",
    "Fax",
    "Februar",
    "Fehler",
    "Fenster",
    "Ferien",
    "Fernsehgerät",
    "Fest",
    "Feuer",
    "Feuerwehr",
    "Feuerzeug",
    "Fieber",
    "Film",
    "Firma",
    "Fisch",
    "Flasche",
    "Fleisch",
    "Flughafen",
    "Flugzeug",
    "Flur",
    "Fluss",
    "Formular",
    "Foto",
    "Fotoapparat",
    "Frühjahr",
    "Frühling",
    "Frühstück",
    "Frage",
    "Frau",
    "Freitag",
    "Freizeit",
    "Freund",
    "Freundin",
    "Friseur",
    "Frist",
    "Fuß",
    "Fußball",
    "Fundbüro",
    "Gabel",
    "Garage",
    "Garten",
    "Gas",
    "Gast",
    "Gebühr",
    "Geburtstag",
    "Gegenteil",
    "Geld",
    "Gemüse",
    "Gepäck",
    "Gericht",
    "Gesamtschule",
    "Geschäft",
    "Geschenk",
    "Geschirr",
    "Geschwister",
    "Gesicht",
    "Gespräch",
    "Gesundheit",
    "Getränk",
    "Gewicht",
    "Gewitter",
    "Glück",
    "Glückwunsch",
    "Glas",
    "Gleis",
    "Größe",
    "Grenze",
    "Grippe",
    "Großeltern",
    "Großmutter",
    "Großvater",
    "Gruß",
    "Grundschule",
    "Gruppe",
    "Guthaben",
    "Gymnasium",
    "Hähnchen",
    "Haar",
    "Halbpension",
    "Halle",
    "Hals",
    "Haltestelle",
    "Hand",
    "Handtuch",
    "Handy",
    "Haus",
    "Hausaufgabe",
    "Hausfrau",
    "Haushalt",
    "Hausmann",
    "Heimat",
    "Heizung",
    "Hemd",
    "Herbst",
    "Herd",
    "Herr",
    "Herz",
    "Hilfe",
    "Hobby",
    "Holz",
    "Hose",
    "Hund",
    "Hunger",
    "Idee",
    "Import",
    "Industrie",
    "Information",
    "Inhalt",
    "Internet",
    "Jacke",
    "Jahr",
    "Januar",
    "Job",
    "Jugendherberge",
    "Jugendliche",
    "Juli",
    "Junge",
    "Juni",
    "Käse",
    "Körper",
    "Küche",
    "Kühlschrank",
    "Kündigung",
    "Kaffee",
    "Kalender",
    "Kamera",
    "Kanne",
    "Karte",
    "Kartoffel",
    "Kasse",
    "Kassette",
    "Kassettenrecorder",
    "Katze",
    "Keller",
    "Kellner",
    "Kenntnisse",
    "Kennzeichen",
    "Kette",
    "Kfz",
    "Kind",
    "Kindergarten",
    "Kinderwagen",
    "Kino",
    "Kiosk",
    "Kirche",
    "Klasse",
    "Kleid",
    "Kleidung",
    "Kneipe",
    "Koffer",
    "Kollege",
    "Kollegin",
    "Konsulat",
    "Kontakt",
    "Konto",
    "Kontrolle",
    "Konzert",
    "Kopf",
    "Kosmetik",
    "Krankenkasse",
    "Krankheit",
    "Kredit",
    "Kreditkarte",
    "Kreis",
    "Kreuzung",
    "Kuchen",
    "Kugelschreiber",
    "Kunde",
    "Kundin",
    "Kurs",
    "Löffel",
    "Lösung",
    "Laden",
    "Lager",
    "Lampe",
    "Land",
    "Landschaft",
    "Leben",
    "Lebensmittel",
    "Leid",
    "Lehre",
    "Lehrer",
    "Lehrerin",
    "Leute",
    "Licht",
    "Lied",
    "Lkw",
    "Loch",
    "Lohn",
    "Lokal",
    "Luft",
    "Lust",
    "Mädchen",
    "März",
    "Möbel",
    "Müll",
    "Mülltonne",
    "Magen",
    "Mai",
    "Mal",
    "Mann",
    "Mantel",
    "Markt",
    "Maschine",
    "Material",
    "Mechaniker",
    "Medikament",
    "Meer",
    "Mehrwertsteuer",
    "Meinung",
    "Menge",
    "Mensch",
    "Messer",
    "Metall",
    "Miete",
    "Milch",
    "Minute",
    "Mittag",
    "Mitte",
    "Mitteilung",
    "Mittel",
    "Mode",
    "Moment",
    "Monat",
    "Montag",
    "Morgen",
    "Motor",
    "Mund",
    "Museum",
    "Musik",
    "Mutter",
    "Nähe",
    "Nachbar",
    "Nachbarin",
    "Nachmittag",
    "Nachrichten",
    "Nacht",
    "Name",
    "Natur",
    "Nebel",
    "Norden",
    "Notarzt",
    "Note",
    "Notfall",
    "Notiz",
    "November",
    "Nudel",
    "Nummer",
    "Ober",
    "Obst",
    "Oktober",
    "Oma",
    "Opa",
    "Operation",
    "Orange",
    "Ordnung",
    "Ort",
    "Osten",
    "Öl",
    "Päckchen",
    "Paket",
    "Panne",
    "Papier",
    "Papiere",
    "Parfüm",
    "Park",
    "Partei",
    "Partner",
    "Partnerin",
    "Party",
    "Pass",
    "Pause",
    "Pension",
    "Plan",
    "Plastik",
    "Platz",
    "Polizei",
    "Pommes",
    "Portion",
    "Post",
    "Postleitzahl",
    "Prüfung",
    "Praktikum",
    "Praxis",
    "Preis",
    "Problem",
    "Programm",
    "Prospekt",
    "Pullover",
    "Qualität",
    "Quittung",
    "Rücken",
    "Rabatt",
    "Radio",
    "Rathaus",
    "Raucher",
    "Raum",
    "Realschule",
    "Rechnung",
    "Regen",
    "Reifen",
    "Reinigung",
    "Reis",
    "Reise",
    "Reisebüro",
    "Reparatur",
    "Restaurant",
    "Rezept",
    "Rezeption",
    "Rind",
    "Rock",
    "Rose",
    "Rundgang",
    "Süden",
    "Saft",
    "Salat",
    "Salz",
    "Samstag",
    "Satz",
    "Schüler",
    "Schalter",
    "Scheckkarte",
    "Schiff",
    "Schild",
    "Schinken",
    "Schirm",
    "Schlüssel",
    "Schloss",
    "Schluss",
    "Schmerzen",
    "Schnee",
    "Schnupfen",
    "Schokolade",
    "Schrank",
    "Schuh",
    "Schule",
    "Schwein",
    "Schwester",
    "Schwimmbad",
    "See",
    "Sehenswürdigkeit",
    "Seife",
    "Sekretärin",
    "Sekunde",
    "Sendung",
    "Senioren",
    "September",
    "Service",
    "Sessel",
    "Sofa",
    "Sohn",
    "Sommer",
    "Sonderangebot",
    "Sonne",
    "Sonntag",
    "Sorge",
    "Spülmaschine",
    "Spaß",
    "Spaziergang",
    "Speisekarte",
    "Spielplatz",
    "Sprache",
    "Sprachschule",
    "Sprechstunde",
    "Stück",
    "Stadt",
    "Standesamt",
    "Stempel",
    "Steuer",
    "Stock",
    "Stoff",
    "Straße",
    "Straßenbahn",
    "Strand",
    "Streichholz",
    "Strom",
    "Student",
    "Studium",
    "Stuhl",
    "Stunde",
    "Supermarkt",
    "Suppe",
    "Tür",
    "Tüte",
    "Tag",
    "Tankstelle",
    "Tasche",
    "Tasse",
    "Taxi",
    "Teil",
    "Telefon",
    "Telefonbuch",
    "Teller",
    "Teppich",
    "Termin",
    "Test",
    "Text",
    "Theater",
    "Thema",
    "Ticket",
    "Tier",
    "Tipp",
    "Tisch",
    "Tochter",
    "Toilette",
    "Tomate",
    "Topf",
    "Tourist",
    "Treppe",
    "Trinkgeld",
    "Turm",
    "U-Bahn",
    "Uhr",
    "Unfall",
    "Universität",
    "Unterhaltung",
    "Unterkunft",
    "Unterricht",
    "Unterschied",
    "Unterschrift",
    "Untersuchung",
    "Urlaub",
    "Übernachtung",
    "Vater",
    "Verbindung",
    "Verein",
    "Verkäufer",
    "Verkäuferin",
    "Verkehr",
    "Vermieter",
    "Versicherung",
    "Verspätung",
    "Vertrag",
    "Video",
    "Vogel",
    "Volksschule",
    "Vormittag",
    "Vorname",
    "Vorsicht",
    "Vorwahl",
    "Wäsche",
    "Wagen",
    "Wald",
    "Wasser",
    "Weg",
    "Wein",
    "Welt",
    "Werkstatt",
    "Werkzeug",
    "Westen",
    "Wetter",
    "Wiederhören",
    "Wiedersehen",
    "Wind",
    "Winter",
    "Wirtschaft",
    "Woche",
    "Wochenende",
    "Wochentag",
    "Wohnung",
    "Wolke",
    "Wort",
    "Wunsch",
    "Wurst",
    "Zahl",
    "Zahn",
    "Zeit",
    "Zeitschrift",
    "Zeitung",
    "Zentrum",
    "Zettel",
    "Zeugnis",
    "Zigarette",
    "Zimmer",
    "Zitrone",
    "Zoll",
    "Zucker",
    "Zug",
    "Viereck",
    "Klinke",
    "Trapez",
    "Zirkus",
    "Träne",
    "Melone",









];
var greeting = ["Willkommen", "in der", "SG", "Just-One", "Webanwendung"]

var cardAmount = 5;
var currentCard = 0;
var firstLoad = false;
var isGameRunning = false;
var correctAnswers = 0;

function shuffleWordList() {
    allWords.sort(function(a, b) { return 0.9 - Math.random() });
    //Fisher-Yades-Shuffle
    for (i = allWords.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = allWords[i]
        allWords[i] = allWords[j]
        allWords[j] = k
    }
}


function onFirstLoad() {
    if (!firstLoad) {
        Startfunktion();
        //repeater();
        shuffleWordList();
        addOnClickFeature()
        firstLoad = true;
    } else {
        if(confirm("Achtung! \nSoll das aktuelle Spiel wirklich zurückgesetzt werden?"))
        {
            location.reload();
        }
    }
}

function Startfunktion() {
    for (y = 0; y < cardAmount; y++) {
        var Card = document.createElement("DIV");
        Card.setAttribute("id", y);
        //Card.setAttribute('onClick', "highlightSelected(y)"); //added*****
        Card.innerHTML = greeting[y];
        document.getElementsByClassName("flex-container")[0].appendChild(Card);
    }
    //var app = document.querySelector('.flex-container');
    //app.appendChild(Card);

}



function showNextCard() {
    // on Startup make everything visible and change innerhtml.
    if(!isGameRunning)
    {
        document.getElementById("back").style.display = "block";
        document.getElementById("reset").style.display = "block";
        var startButton = document.getElementById("next");
        startButton.innerHTML = "WEITER";
        startButton.style.backgroundColor = "#f1da36";

        isGameRunning = true;
    }

    if (currentCard < 13) {
        currentCard++;
    }
    showCardOnDisplay();

}

function showPreviousCard() {
    if (currentCard == 0) { return false; }

    if (currentCard > 1) {
        currentCard--;
    }
    showCardOnDisplay();


}

function showCardOnDisplay() {
    var count = 0;
    i = (currentCard - 1) * 5;
    //console.log(i);
    //console.log(currentCard);
    for (i; i < cardAmount * currentCard; i++) {
        var word = document.getElementById(count);
        word.innerHTML = allWords[i];
        count++;
    }
    unmarkClicked()
    counterCard();
    if (currentCard >= 12) {
        changeOrResetNextButton();
    }
}

function counterCard() {

    var current = document.getElementById("counter");
    current.innerHTML = "Karte: " + currentCard + " / 13";
}

function counterCorrectAnswers() {
    if (correctAnswers < 13) {
        correctAnswers++;
        var correct = document.getElementById("correctGuessed");
        correct.innerHTML = "Korrekt:" + correctAnswers;
        //showNextCard();
    }

}

function deleteCorrectAnswers() {
    if (correctAnswers > 0) {
        correctAnswers--;
    }
    var correct = document.getElementById("correctGuessed");
    correct.innerHTML = "Korrekt:" + correctAnswers;
}

function addOnClickFeature() {
    for (y = 0; y < cardAmount; y++) {
        var selected = document.getElementById(y);
        selected.setAttribute("onclick", "markClicked(id)");
    }
}

function markClicked(id) {
    var selected = document.getElementById(id);

    if(selected.style.backgroundColor == "darkred")
    {
        selected.style.backgroundColor = "white";
        selected.style.color = "black";
    }
    else
    {
        unmarkClicked();
        selected.style.backgroundColor = "Darkred";
        selected.style.color = "white";
    }
}

function unmarkClicked() {
    for (y = 0; y < cardAmount; y++) {
        var selected = document.getElementById(y);
        selected.style.backgroundColor = "white";
        selected.style.color = "black";
    }
}

//document.onkeydown = checkKey; //auskommentierung aufheben um Pfeiltastensteuerung zu aktivieren

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    } else if (e.keyCode == '40') {
        // down arrow
    } else if (e.keyCode == '37') {
        showPreviousCard();
        // left arrow
    } else if (e.keyCode == '39') {
        // right arrow
        showNextCard();
    }

}

function changeOrResetNextButton() {
    if (currentCard == 13) {
        var nextButton = document.getElementById("next");
        nextButton.setAttribute("onclick", "generateResultScreen()");
        nextButton.innerHTML = "Auswertung";
        nextButton.style.backgroundColor = "green";
        nextButton.style.color = "white";
    } else {
        var nextButton = document.getElementById("next");
        var backButton = document.getElementById("back");
        var backgroundColorSource = window.getComputedStyle(backButton, null).getPropertyValue("background-color");
        var FontColorSource = window.getComputedStyle(backButton, null).getPropertyValue("color");
        nextButton.setAttribute("onclick", "showNextCard()");
        nextButton.innerHTML = "NÄCHSTE";
        nextButton.style.backgroundColor = backgroundColorSource;
        nextButton.style.color = FontColorSource;
    }


}




function generateResultScreen() {

    var evaluateText = "";
    if (correctAnswers <= 4) {
        evaluateText = "Das war ja mal garnichts!";
    } else if (4 < correctAnswers && correctAnswers <= 8) {
        evaluateText = "Ein fast gutes Ergebnis, genau im Mittelfeld!";
    } else if (8 < correctAnswers && correctAnswers <= 10) {
        evaluateText = "Obere Mittelklasse, nicht schlecht!";
    } else if (10 < correctAnswers && correctAnswers <= 12) {
        evaluateText = "Wahnsinn, das ist ein extrem gutes Ergebnis!";
    } else if (correctAnswers == 13) {
        evaluateText = "Unglaublich, alles richtig! Herzlichen Glückwunsch!";
    }

    var allResultsText = ["Endergebnis", correctAnswers + " von 13", evaluateText, "-", "-"];

    for (y = 0; y < cardAmount; y++) {
        var Words = document.getElementById(y);
        Words.style.fontSize = "25px";
        //Words.parentNode.removeChild(Words); Entfernt Knoten
        Words.innerHTML = allResultsText[y];
    }

}




//#endregion