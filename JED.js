const elements = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const elementNames = [
    "Idrogeno", "Elio", "Litio", "Berillio", "Boro", "Carbonio", "Azoto", "Ossigeno", "Fluoro", "Neon", "Sodio", "Magnesio", "Alluminio", "Silicio", "Fosforo", "Zolfo", "Cloro", "Argon", "Potassio", "Calcio", "Scandio", "Titanio", "Vanadio", "Cromo", "Manganese", "Ferro", "Cobalto", "Nichel", "Rame", "Zinco", "Gallio", "Germanio", "Arsenico", "Selenio", "Bromo", "Kripton", "Rubidio", "Stronzio", "Ittrio", "Zirconio", "Niobio", "Molibdeno", "Tecnezio", "Rutenio", "Rodio", "Palladio", "Argento", "Cadmio", "Indio", "Stagno", "Antimonio", "Tellurio", "Iodio", "Xeno", "Cesio", "Bario", "Lantanio", "Cerio", "Praseodimio", "Neodimio", "Promezio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Olmio", "Erbio", "Tulio", "Itterbio", "Lutezio", "Afnio", "Tantalio", "Tungsteno", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Tallio", "Piombo", "Bismuto", "Polonio", "Astato", "Radon", "Francio", "Radio", "Attinio", "Torio", "Protoattinio", "Uranio", "Nettunio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einsteinio", "Fermio", "Mendelevio", "Nobelio", "Laurenzio", "Rutherfordio", "Dubnio", "Seaborgio", "Bohrio", "Hassio", "Meitnerio", "Darmstadtio", "Roentgenio", "Copernicio", "Nihonio", "Flerovio", "Moscovio", "Livermorio", "Tennesso", "Oganesson"
];

const elementNumbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118"
];

const DietsList = [
    "Elementi degli smartphone", "Elementi della vita", "Elementi critici", "Elementi del DNA", "Elementi radioattivi (serie di decadimento U-Th)",
    "Elementi considerati sicuri (grado A-E) in un reattore nucleare a fusione",
    "Elementi in traccia potenzialmente tossici (PTE)",
    "Elementi dedicati a scienziati", "Elementi con nome di derivazione latina",
    "Elementi con nome di derivazione greca",
    "Elementi con nomi di città, stati, o di chissà dove",
    "Elementi con nomi che non derivano nè dal latino, nè dal greco, e nemmeno da città o stati",
    "Elementi allo stato solido alle condizioni standard di temperatura e pressione",
    "Elementi allo stato liquido alle condizioni standard di temperatura e pressione",
    "Elementi allo stato gassoso alle condizioni standard di temperatura e pressione", "Metalli", "Nonmetalli",
    "Elementi del primo gruppo (idrogeno & metalli alcalini)",
    "Elementi del secondo gruppo (metalli alcalino terrosi)", "Elementi del 15esimo gruppo (pnicogeni)",
    "Elementi del gruppo XVI (calcogeni)", "Elementi del gruppo XVII (alogeni)",
    "Elementi del 18esimo gruppo (gas nobili)", "Lantanidi", "Attinidi",
    "Metalli di transizione", "Metalli post-transizione", "Semimetalli", "Non metalli reattivi",
    "Elementi del blocco s", "Elementi del blocco p", "Elementi del blocco d", "Elementi del blocco f",
    "Elementi noti fin dai tempi antichi"
]; 

const diets = {
    "Elementi degli smartphone": ["H", "Li", "Be", "B", "C", "O", "F", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "K", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Br", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "Ba", "La", "Ce", "Pr", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Os", "Ir", "Pt", "Au", "Hg", "Pb", "Bi"],
    "Elementi della vita": ["O", "C", "H", "N", "P", "Ca", "S", "K", "Na", "Cl", "Mg", "Fe", "Zn", "Cr", "Co", "Cu", "Mn", "Mo", "Ni", "V", "Si", "B", "Se", "F", "I", "Br"],
    "Elementi critici": ["Sb", "Ba", "Al", "Be", "Bi", "B", "Co", "F", "Ga", "Ge", "Hf", "In", "Li", "Mg","Nb","P", "Sc","Si","Sr","Ta","Ti","W","V"],
    "Elementi del DNA": ["C", "H", "O", "N", "P"],
    "Elementi radioattivi (serie di decadimento U-Th)": ["U", "Th", "Pa", "Ra", "Rn", "Po", "Pb", "Bi", "Pu", "Ac", "Tl", "Am", "Np"],
    "Elementi considerati sicuri (grado A-E) in un reattore nucleare a fusione": ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Mg", "Al", "Si", "P", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Fe", "Co", "Ni", "Cu", "Ge", "Se", "Kr", "Sr", "Y", "Ru", "Sn", "Te", "I", "Xe", "Cs", "Ba", "Ce", "Nd", "Sm", "Dy", "Yb", "Lu", "Tl"],
    "Elementi in traccia potenzialmente tossici (PTE)": ["Pb", "Hg", "Cr", "Cd", "As", "Co", "Cu", "Ni", "Zn", "Ag", "Sb", "Fe", "Mn", "Zr", "Se", "Sr", "Al", "F", "U", "La", "Pr", "Au"],
    "Elementi dedicati a scienziati": ["Ge", "Sm", "Gd", "Bi", "Cm", "Es", "Fm", "No", "Lr", "Rf", "Sg", "Bh", "Mt", "Rg", "Og"],
    "Elementi con nome di derivazione latina": ["B", "C", "F", "Na", "Al", "Si", "S", "K", "Ca", "Sc", "Mn", "Fe", "Cu", "Ga", "Ge", "Rb", "Ru", "Pd", "In", "Sn", "Sb", "Te", "Cs", "La", "Ce", "Pm", "Eu", "Ho", "Tm", "Lu", "Hf", "Ta", "Ir", "Au", "Hg", "Pb", "Bi", "Po", "Rn", "Ra", "Np", "Cm", "Hs"],
    "Elementi con nome di derivazione greca": ["H", "He", "Li", "Be", "N", "O", "Ne", "P", "Cl", "Ar", "Ti", "Cr", "Co", "As", "Se", "Br", "Kr", "Nb", "Mo", "Tc", "Rh", "Ag", "Cd", "Sb", "I", "Xe", "Ba", "La", "Pr", "Nd", "Dy", "Os", "Tl", "Bi", "At", "Ac", "Pa", "U", "Pu"],
    "Elementi con nomi di città, stati, o di chissà dove": ["Mg", "Sc", "Mn", "Ga", "Ge", "Se", "Sr", "Y", "Nb", "Tc", "Ru", "Pd", "Cd", "Te", "Eu", "Tb", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Re", "Bi", "Po", "Fr", "U", "Np", "Am", "Bk", "Cf", "Db", "Hs", "Ds"],
    "Elementi con nomi che non derivano nè dal latino, nè dal greco, e nemmeno da città o stati": ["V", "Ni", "Zn", "Zr", "Sb", "W", "Pt", "Th"],
    "Elementi allo stato solido alle condizioni standard di temperatura e pressione": ["Li", "Be", "B", "C", "Na", "Mg", "Al", "Si", "P", "S",  "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Tl", "Pb", "Bi", "Po", "At", "Fr", "Ra", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    "Elementi allo stato liquido alle condizioni standard di temperatura e pressione": ["Hg", "Br"],
    "Elementi allo stato gassoso alle condizioni standard di temperatura e pressione": ["H", "He", "N", "O", "F", "Ne","Cl", "Ar", "Kr", "Xe", "Rn"],
    "Metalli": ["Li", "Be", "Na", "Mg", "Al", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    "Nonmetalli": ["H", "He", "B", "C", "N", "O", "F", "Ne", "Si", "P", "S", "Cl", "Ar", "Ge", "As", "Se", "Br", "Kr", "Sb", "Te", "I", "Xe", "At", "Rn"],
    "Elementi del primo gruppo (idrogeno & metalli alcalini)": ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"],
    "Elementi del secondo gruppo (metalli alcalino terrosi)": ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
    "Elementi del 15esimo gruppo (pnicogeni)": ["N", "P", "As", "Sb", "Bi", "Mc"],
    "Elementi del gruppo XVI (calcogeni)": ["O", "S", "Se", "Te", "Po", "Lv"],
    "Elementi del gruppo XVII (alogeni)": ["F", "Cl", "Br", "I", "At", "Ts"],
    "Elementi del 18esimo gruppo (gas nobili)": ["He", "Ne","Ar", "Kr", "Xe", "Rn", "Og"],
    "Lantanidi": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"],
    "Attinidi": ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    "Metalli di transizione": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn"],
    "Metalli post-transizione": ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Po"],
    "Semimetalli": ["B", "Si", "Ge", "As", "Sb", "Te", "At"],
    "Non metalli reattivi": ["H", "C", "N", "O", "F", "P", "S", "Cl", "Se", "Br", "I"],
    "Elementi del blocco s": ["H", "He", "Li", "Be", "Na", "Mg", "K", "Ca", "Rb", "Sr", "Cs", "Ba", "Fr", "Ra"],
    "Elementi del blocco p": ["B", "C", "N", "O", "F", "Ne", "Al", "Si", "P", "S", "Cl", "Ar", "Ga", "Ge", "As", "Se", "Br", "Kr", "In", "Sn", "Sb", "Te", "I", "Xe", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"],
    "Elementi del blocco d": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn"],
    "Elementi del blocco f": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No"],
    "Elementi noti fin dai tempi antichi": ["C", "Al", "S", "Ca", "Fe", "Cu", "As", "Ag", "Sn", "Sb", "Au", "Hg", "Pb"]
};

const dietMessages = {
    "Elementi degli smartphone": [
        "Gli smartphone sono preziose risorse nella circolarità economica, contenendo elementi come oro (Au), argento (Ag), platino (Pt) e palladio (Pd). Tuttavia, il loro scarso riciclo ha impatti negativi sull'ambiente e sulla salute umana"
    ],
    "Elementi della vita": [
        "Ogni essere vivente, compreso l'uomo, è principalmente costituito da soli 11 elementi dei 90 presenti naturalemnte sulla Terra.<br>Sorprendente, vero?"
    ],
    "Elementi critici": [
        "Le materie prime sono il cuore pulsante dell'economia europea, alimentando una vasta gamma di produzioni essenziali per la vita quotidiana e le tecnologie moderne. L'accesso affidabile a queste risorse vitali è una sfida crescente. Per affrontarla, l'UE ha identificato le materie prime critiche, fondamentali, ma a rischio."
    ],
    "Elementi del DNA": [
        "5 elementi compongono il linguaggio della vita."
    ],
    "Elementi radioattivi (serie di decadimento U-Th)": [
        "Elevate concentrazioni di elementi radioattivi spesso derivano da attività umane, come l'estrazione e la lavorazione dell'uranio (U), e la combustione del carbone. Il combustibile nucleare esaurito rappresenta una vasta riserva di tali materiali."
    ],
    "Elementi considerati sicuri (grado A-E) in un reattore nucleare a fusione": [
        "Questi materiali mirano a:<br>- Ridurre al minimo il potenziale di causare malattie come il cancro.<br>- Consentire il riciclo o lo smaltimento sicuro dei materiali esausti.<br>- Agevolare la manutenzione senza compromettere la sicurezza."
    ],
    "Elementi in traccia potenzialmente tossici (PTE)": [
        "Scopri il <a href='https://www.issmc.cnr.it/ricerca/progetti/progetti-ministeriali-2/selwa/' target='_blank' style='color: rgb(143, 125, 207);'>progetto SELWA</a>."
    ],
    "Elementi dedicati a scienziati": [
        "Storia degli elementi: da Mendeleev a Curie, una narrazione di scoperte e omaggi. La scienza rivela il suo tributo"
    ],
    "Elementi con nome di derivazione latina": [
        "Nomi come Carbonio (C), Ferro (Fe), e Oro (Au) sono testimoni dell'influenza del latino nella denominazione degli elementi chimici, rappresentando una connessione duratura tra la tradizione classica e la moderna scienza"
    ],
    "Elementi con nome di derivazione greca": [
        "Nomi come Idrogeno (H), Elio (He) e Litio (Li) sono testimonianza della ricca eredità della lingua greca nella denominazione degli elementi chimici, rappresentando una connessione antica tra la mitologia e la moderna scienza."
    ],
    "Elementi con nomi di città, stati, o di chissà dove": [
        "Magnesio (Mg) prende il nome dalla città di Magnesia in Tessaglia, rinomata per la sua pietra purgativa. Scandio (Sc) deriva dal latino 'Scandia', che indica la Scandinavia, dove è stato per la prima volta isolato. Il selenio (Se) prende il suo nome dalla Luna, mentre il palladio (Pd) è dedicato all'asteroide Pallade.<br>Questi elementi ci ricordano che la geografia degli elementi non ha confini!"
    ],
    "Elementi con nomi che non derivano nè dal latino, nè dal greco, e nemmeno da città o stati": [
        "Vanadio (V) prende il nome da Vanadis, dea della bellezza nella mitologia norrena, per la bellezza e la varietà di colori dei suoi composti.<br>Questi elementi ci ricordano che la geografia degli elementi non ha confini, ma si estende attraverso miti e culture, riflettendo la bellezza e la varietà del mondo che ci circonda.",
        "Il nichel (Ni) deriva dal tedesco Kupfernickel, 'folletto del rame', perché i minatori sostenevano che impedissero loro di trovare il rame.<br>Questi elementi ci ricordano che la geografia degli elementi non ha confini, ma si estende attraverso miti e culture, riflettendo la bellezza e la varietà del mondo che ci circonda.",
        "Lo zirconio (Zr) deriva dall'arabo zerqun, 'colore dorato', a sua volta dal persiano azargun, composto da azar, 'fuoco', e gun, 'colore'.<br>Questi elementi ci ricordano che la geografia degli elementi non ha confini, ma si estende attraverso miti e culture, riflettendo la bellezza e la varietà del mondo che ci circonda.",
        "Il torio (Th) prende il nome da Thor, il dio del tuono nella mitologia norrena.<br>Questi elementi ci ricordano che la geografia degli elementi non ha confini, ma si estende attraverso miti e culture, riflettendo la bellezza e la varietà del mondo che ci circonda."
    ],
    "Elementi allo stato solido alle condizioni standard di temperatura e pressione": [
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"
    ],
    "Elementi allo stato liquido alle condizioni standard di temperatura e pressione": [
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>",
        "Il bromo (Br) è un liquido<br>rosso, ossidante,<br>d'odor sgradevole<br>e penetrante. (Alberto Cavaliere, Chimica in versi)"
    ],
    "Elementi allo stato gassoso alle condizioni standard di temperatura e pressione": [
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"
    ],
    "Metalli": [
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>",
        "I metalli possiedono molte proprietà distintive, come la formazione di cloruri e ossidi, la facilità di riduzione e la sostituzione dell'idrogeno negli acidi diluiti. Anche se, tecnicamente, il francio (Fr) potrebbe avere il primato in base a questi criteri, la sua estrema instabilità e rarità lo escludono dalla classifica, pertanto, di solito, il primato viene assegnato al cesio (Cs)."
    ],
    "Nonmetalli": [
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>",
        "La maggior parte dei non metalli ha punti di fusione inferiori rispetto ai metalli, ma il carbonio (C) costituisce un'eccezione in quanto ha un punto di fusione più alto rispetto agli altri non metalli e agli elementi in generale."
    ],
    "Elementi del primo gruppo (idrogeno & metalli alcalini)": [
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>",
        "Che occorre diffidare del quasi uguale (il sodio [Na] è quasi uguale al potassio [K]: ma col sodio [Na] non sarebbe successo nulla), del paranoicamente identico, del pressapoco, dell'oppure, di tutti i surrogati e di tutti i rappezzi. Le differenze possono essere piccole, ma portare a conseguenze radicalmente diverse, come gli aghi degli scambi; il mestiere del chimico consiste in buona parte nel quadrassi da queste differenze, nel conoscerle da vicino, nel prevederne gli effetti. Non solo il mestiere del chimico. (Primo Levi, Il sistema periodico)"
    ],
    "Elementi del secondo gruppo (metalli alcalino terrosi)": [
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>",
        "Hanno una reattività chimica relativamente alta e la tendenza a perdere due elettroni per formare ioni con carica positiva di +2.",
        "Nessuno più del berillio (Be) può essere 'incolpato' della lentezza dell'Universo nella formazione di nuovi elementi dopo il Big Bang. Questa specie atomica infatti è la prima della tavola periodica ad aver bisogno nel proprio nucleo di più neutroni che protoni (per poter essere stabile), e ciò ha determinato una minor velocità di formazione"
    ],
    "Elementi del 15esimo gruppo (pnicogeni)": [
        "Lo si classifica<br>nel gruppo azoto [N],<br>ma qual metallico<br>corpo è più noto.<br><br>Bianco, ad un debole<br>rosso tendente,<br>l'aria non l'altera<br>menomamente. (Alberto Cavaliere, Chimica in versi)",
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"
    ],
    "Elementi del gruppo XVI (calcogeni)": [
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>",
        "Questi elementi condividono caratteristiche simili, come la capacità di formare due legami covalenti.",
        "Ai nostri occhi, e allo stato aeriforme, come sappiamo l'ossigeno molecolare (O<sub>2</sub>) dell'aria appare trasparente. Ma forse non tutti sanno che, sia in forma liquida sia in forma solida, l'ossigeno (O) è invece di colore blu."
    ],
    "Elementi del gruppo XVII (alogeni)": [
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>",
        "Posseggono sette elettroni nel guscio esterno e hanno una maggiore affinità elettronica rispetto agli altri elementi."
    ],
    "Elementi del 18esimo gruppo (gas nobili)": [
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>",
        "Ci sono, nell'aria che respiriamo, i cosiddetti gas inerti. Portano curiosi nomi greci di derivazione dotta, che significano «il Nuovo», «il Nascosto», «l'Inoperoso», «lo Straniero». Sono, appunto, talmente inerti, talmente paghi della loro condizione, che non interferiscono in alcuna reazione chimica, non si combinano con alcun altro elemento, e proprio per questo motivo sono passati inosservati per secoli: solo nel 1962 un chimico di buona volontà, dopo lunghi ed ingegnosi sforzi, è riuscito a costringere lo Straniero (lo xenon [Xe]) a combinarsi fugacemente con l'avidissimo, vivacissimo fluoro [F], e l'impresa è apparsa talmente straordinaria che gli è stato conferito il Premio Nobel. Si chiamano anche gas nobili, e qui ci sarebbe da discutere se veramente tutti i nobili siano inerti e tutti gli inerti siano nobili; si chiamano infine anche gas rari, benché uno di loro, l'argon [Ar], l'Inoperoso, sia presente nell'aria nella rispettabile proporzione dell'1 per cento: cioè venti o trenta volte più abbondante dell'anidride carbonica [CO<sub>2</sub>], senza la quale non ci sarebbe traccia di vita su questo pianeta. (Pirmo Levi, Il sistema periodico)"
    ],
    "Lantanidi": [
        "Discover more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Explore the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>.",
        "Alcuni lantanidi, come il gadolinio (Gd), hanno proprietà magnetiche notevoli.",
        "Il lantanio (La) è utilizzato in lampade agli alogenuri metallici.",
        "Il gadolinio (Gd) è impiegato nei reattori nucleari come moderatore neutronico.",
        "Alcuni lantanidi sono noti per i loro colori intensi e vengono utilizzati in pigmenti per vernici e ceramiche.",
        "– Forza Signor Simpson, non supererà mai questo corso se non sa la tavola periodica!<br>– Me la scriverò sulla mano..<br>– Ahah! Inclusi tutti i lantanidi e gli attidici? Buona fortuna! (I Simpson)",
        "Alcuni lantanidi, come l'europio (Eu) e il terbio (Tb), sono piuttosto rari"
    ],
    "Attinidi": [
        "Discover more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Explore the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>.",
        "– Forza Signor Simpson, non supererà mai questo corso se non sa la tavola periodica!<br>– Me la scriverò sulla mano..<br>– Ahah! Inclusi tutti i lantanidi e gli attidici? Buona fortuna! (I Simpson)",
        "L'uranio (U), con numero atomico 92, è seguito dal nettunio (Np) e poi dal plutonio (Pu). Hai notato il parallelismo tra l'ordine di questi tre attinoidi e l'ordine dei tre corpi celesti nel nostro Sistema Solare? Si riflette nell'organizzazione dei Pianeti Urano e Nettuno, seguiti da Plutone, che è un Pianeta nano. Il mercurio (Hg), invece, sta da tutt'altra parte."
    ],
    "Metalli di transizione": [
        "My favourite dream is of going to the opera (I am Hafnium), sharing a box at the Met with the other heavy transition metals – my old and valued friends – Tantalum, Rhenium, Osmium, Iridium, Platinum, Gold, and Tungsten.<br>Oliver Sacks, Uncle Tungsten",
        "Già tutte le miniere sono magiche, da sempre. Le viscere della terra brulicano di gnomi, coboldi (cobalto! [Co]), niccoli (nichel! [Ni]), che possono essere generosi e farti trovare il tesoro sotto la punta del piccone, o ingannarti, abbagliarti, facendo rilucere come l'oro la modesta pirite, o travestendo lo zinco [Zn] con i panni dello stagno [Sn]: e infatti, sono molti i minerali i cui nomi contengono radici che significano «inganno, frode, abbagliamento. (Primo Levi, Il sistema periodico).",
        "Learn more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Check out the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>."
    ],
    "Metalli post-transizione": [
        "Learn more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Check out the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>.",
        "Siccome ho visto che queste questioni gli interessavano molto, gli ho spiegato che, se si va oltre le apparenze, il piombo [Pb] è proprio il metallo della morte: perché fa morire, perché il suo peso è un desiderio di cadere, e cadere è dei cadaveri, perché il suo stesso colore è smorto-morto, perché è il metallo del pianeta Tuisto, che è il più lento dei pianeti, cioè il pianeta dei morti. (Primo Levi, Il sistema periodico)"
    ],
    "Semimetalli": [
        "Discover more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Explore the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>.",
        "Benché sia solido,<br>non è un metallo.<br>E c'è, un arsenico [As]<br>bruno, uno giallo:<br>questo è sensibile<br>molto alla luce<br>e l'altro arsenico [As]<br>tosto produce,<br>mentre pel fosfor [P]<br>già si notò<br>che il giallo è stabile,<br>ma l'altro no. (Alvberto Cavaliere, Chimica in versi)"
    ],
    "Non metalli reattivi": [
        "Learn more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Check out the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>.",
        "Sono elementi chimici non metallici che mostrano una notevole reattività chimica, spesso formando composti con altri elementi attraverso legami covalenti o ionici. Questi elementi tendono a guadagnare elettroni durante le reazioni chimiche per raggiungere la stabilità elettronica. Esempi di non metalli reattivi includono ossigeno (O), cloro (Cl) e fluoro (F)."
    ],
    "elementi del blocco s": [
        "Explore more about s-block elements on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Check out the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a> for detailed insights.",
        "Questi elementi sono noti come 'metalli alcalini' e 'metalli alcalino-terrosi'. Caratterizzati da una buona conducibilità elettrica e termica, hanno generalmente bassi punti di fusione e di ebollizione. Gli elementi del blocco s sono noti per formare facilmente cationi positivi perdendo uno o due elettroni dalla loro orbita esterna. Esempi di elementi del blocco s includono il litio (Li), il sodio (Na), il potassio (K), il calcio (Ca) e il magnesio (Mg)."
    ],
    "elementi del blocco p": [
        "Dive deeper into p-block elements on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Learn more from the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>.",
        "Questi elementi sono noti per la configurazione elettronica dei loro atomi che presenta elettroni negli orbitali p. Gli elementi del blocco p includono metalli, semimetalli e non metalli"
    ],
    "elementi del blocco d": [
        "Discover the properties of d-block elements on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Visit the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a> for further details.",
        "Sono caratterizzati dalla presenza di orbitali d parzialmente riempiti nei loro atomi. Gli elementi del blocco d sono generalmente solidi a temperatura ambiente, con punti di fusione ed ebollizione elevati."
    ],
    "elementi del blocco f": [
        "Find out more about f-block elements on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Get comprehensive information on the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>.",
        "Sono un gruppo di elementi chimici situati nella parte inferiore della tavola periodica, sotto il blocco d. Questi elementi sono noti come 'lantanidi' e 'attinidi' e sono caratterizzati dalla presenza di orbitali f parzialmente riempiti nei loro atomi. Molti elementi del blocco f sono radioattivi. Inoltre, alcuni lantanidi, come il neodimio (Nd) e il samario (Sm), sono utilizzati nella produzione di magneti permanenti ad alta potenza. Gli ioni di alcuni lantanidi, come l'europio (Eu) e il terbio (Tb), possono produrre intensi colori fluorescenti, rendendoli utili in applicazioni come le schermature televisive a colori e i tubi catodici."
    ],
    "Elementi noti fin dai tempi antichi": [
        "Le prime tracce di lavorazione dell'oro risalgono a circa 6000 anni fa in Mesopotamia e in Egitto."
    ]
};

function getRandomDietMessage(diet) {
    const messages = dietMessages[diet];
    if (!messages || messages.length === 0) {
         return "– Forza Signor Simpson, non supererà mai questo corso se non sa la tavola periodica!<br>– Me la scriverò sulla mano..<br>– Ahah! Inclusi tutti i lantanidi e gli attidici? Buona fortuna! (I Simpson)";
    }
    return messages[Math.floor(Math.random() * messages.length)];
}

// Initialize game state
const SIZE = 20;
const CANVAS_WIDTH = 620;
const CANVAS_HEIGHT = 520;
let gameInterval = null;
let direction = { x: 1, y: 0 };
let score = 0;
let food = {};
let foodII = {};
let selectedDiet = "";
let foodElement = "";
let foodIIElement = "";
let foodElementName = "";
let foodIIElementName = "";
let foodElementNumber = "";
let foodIIElementNumber = "";
// Posizione iniziale del serpente
let snake = [{ x: 100, y: 100 }];
let snakeColors = ["green"];
let scoreText = null;
let scoreTextNo = null;
//let SPEED = 150;
let infoRects = [];
let infoRectsNo = [];
let erasedElements = [];
let scoreIncrement = 0;
let scoreDecrement = 0;
let touchStartX = 0;
let touchStartY = 0;
let lastTouchTime = 0;

// Evitare il comportamento predefinito dei tasti freccia
document.addEventListener('keydown', (event) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
    }
});

// Funzione per aggiornare la selezione e la lista di elementi scartati
function updateElementCount() {
    const rangeValue = document.getElementById('elementRange').value; // Valore massimo di Z
    const maxZ = parseInt(rangeValue);

    // Aggiorna il contenuto della variabile erasedElements con elementi oltre il valore massimo di Z
    erasedElements = elements.slice(maxZ);

    // Aggiorna il testo mostrato all'utente
    document.getElementById('selectedElementCount').textContent = `1 ≤ Z ≤ ${maxZ}`;
}

function startGame() {
    initializeGameVariables(); // Reinizializza tutte le variabili per una nuova partita
    gameLoop();
}

function handleTouchStart(event) {
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
}

function handleDoubleTouch(event) {
    const currentTime = new Date().getTime(); // Timestamp attuale
    const timeDiff = currentTime - lastTouchTime;

    if (timeDiff < 300) { // Se due tocchi consecutivi avvengono entro 300ms
        changeFoodElement(); // Cambia l'elemento del cibo
    }
    lastTouchTime = currentTime; // Aggiorna il timestamp dell'ultimo tocco
}

// Aggiungi un listener per "touchstart" per rilevare il doppio tocco
document.getElementById('touchArea').addEventListener('touchstart', handleDoubleTouch);

function handleTouchMove(event) {
    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY

   // Determina la nuova direzione in base al movimento
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 20 && direction.x !== -1) {
            direction = { x: 1, y: 0 }; // Sposta verso destra
        } else if (deltaX < -20 && direction.x !== 1) {
            direction = { x: -1, y: 0 }; // Sposta verso sinistra
        }
    } else if (Math.abs(deltaY) > 20) {
        if (deltaY > 20 && direction.y !== -1) {
            direction = { x: 0, y: 1 }; // Sposta verso il basso
        } else if (deltaY < -20 && direction.y !== 1) {
            direction = { x: 0, y: -1 }; // Sposta verso l'alto
        }
    }
}

document.getElementById('touchArea').addEventListener('touchstart', handleTouchStart);
document.getElementById('touchArea').addEventListener('touchmove', handleTouchMove);

document.addEventListener('keydown', (event) => {

    if (event.key === ' ') {
        event.preventDefault(); // Previene il comportamento predefinito della barra spaziatrice
        changeFoodElement();    // Cambia l'elemento del cibo senza cambiarne la posizione
        
    } else {
        const newDirection = { x: direction.x, y: direction.y };

        // Determina la nuova direzione in base al tasto premuto
        switch (event.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                if (direction.y === 0) newDirection.x = 0, newDirection.y = -1;
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                if (direction.y === 0) newDirection.x = 0, newDirection.y = 1;
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                if (direction.x === 0) newDirection.x = -1, newDirection.y = 0;
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                if (direction.x === 0) newDirection.x = 1, newDirection.y = 0;
                break;
        }

        // Verifica che il cambio di direzione non causi una collisione immediata
        const nextHead = {
            x: snake[0].x + newDirection.x * SIZE,
            y: snake[0].y + newDirection.y * SIZE
        };

        // Se la nuova posizione della testa non collide con il corpo, aggiorna la direzione
        if (!snake.some(part => part.x === nextHead.x && part.y === nextHead.y)) {
            direction = newDirection;
        }
    }
});

function changeFoodElement() {
     
}

function drawFood() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(food.x, food.y, SIZE, SIZE);

    ctx.fillStyle = "red"; // Colore per il simbolo dell'elemento
    ctx.font = "20px Arial"; // Imposta la dimensione del font
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Disegna il simbolo dell'elemento nel punto (x, y) del cibo
    ctx.fillText(foodElement, food.x + SIZE / 2, food.y + SIZE / 2);
}

function drawFoodII() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(foodII.x, foodII.y, SIZE, SIZE);

    ctx.fillStyle = "red"; // Colore per il simbolo dell'elemento
    ctx.font = "20px Arial"; // Imposta la dimensione del font
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Disegna il simbolo dell'elemento nel punto (x, y) del cibo
    ctx.fillText(foodIIElement, foodII.x + SIZE / 2, foodII.y + SIZE / 2);
}

function showDietSelection() {
    const dietDropdown = document.getElementById("dietDropdown");
    dietDropdown.innerHTML = "";

    DietsList.forEach(diet => {
        let option = document.createElement("option");
        option.value = diet;
        option.textContent = diet;
        dietDropdown.appendChild(option);
    });
    document.getElementById('title').style.display = 'block';
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('dietSelection').style.display = 'block';
}

function startNewGame() {
    selectedDiet = document.getElementById("dietDropdown").value;

    // Aggiorna le istruzioni dinamicamente con la dieta selezionata
    updateInstructions(selectedDiet);

    // Calcola i valori di incremento e decremento del punteggio
    initializeScoreValues();

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    document.getElementById('dietSelection').style.display = 'none';
    canvas.style.display = 'block';

    snake = [{ x: 100, y: 100 }];
    snakeColors = ["green"]; // Resetta i colori del serpente, partendo con la testa verde
    direction = { x: 1, y: 0 };
    score = 0;
    updateScore(score);
    generateFood();
    startGameLoop(ctx);
}

function updateInstructions(selectedDiet) {
    const instruction = document.getElementById("eat-instruction");
    instruction.innerHTML = `Eat the elements that belong to the <b>${selectedDiet}</b>.`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mainMenu').style.display = 'block';
    updateScore(score);
});

function initializeScoreValues() {
    const rangeValue = parseInt(document.getElementById('elementRange').value);
    const validDietElementsCount = calculateValidDietElements();
    scoreIncrement = Math.round(100 * (rangeValue - validDietElementsCount) / rangeValue);
    scoreDecrement = Math.round(100 * validDietElementsCount / rangeValue);
}

function calculateValidDietElements() {
    // Calcola il numero di elementi nella dieta effettivamente validi
    const selectedDietElements = diets[selectedDiet] || [];
    const validDietElements = selectedDietElements.filter(el => !erasedElements.includes(el));
    return validDietElements.length;
}

function generateFood() {
    const availableElements = diets[selectedDiet] || [];
    const nonDietElements = elements.filter(el => !availableElements.includes(el));

    if (availableElements.length > 0) {
        foodElement = availableElements[Math.floor(Math.random() * availableElements.length)];
    } else {
        foodElement = elements[Math.floor(Math.random() * elements.length)];
    }

    if (nonDietElements.length > 0) {
        foodIIElement = nonDietElements[Math.floor(Math.random() * nonDietElements.length)];
    } else {
        foodIIElement = elements[Math.floor(Math.random() * elements.length)];
    }

    food = {
        x: Math.floor(Math.random() * (canvas.width / SIZE)) * SIZE,
        y: Math.floor(Math.random() * (canvas.height / SIZE)) * SIZE
    };

    foodII = {
        x: Math.floor(Math.random() * (canvas.width / SIZE)) * SIZE,
        y: Math.floor(Math.random() * (canvas.height / SIZE)) * SIZE
    };
}

function startGameLoop(ctx) {
    gameInterval = setInterval(() => {
        updateGame(ctx);
    }, window.SPEED);
}

function createInfoRect(element, x, y) {
    infoRects.push({
        x: x, // Posizione iniziale
        y: y,
        atomicNumber: element.atomicNumber,
        symbol: element.symbol,
        name: element.name,
        opacity: 1 // Opacità iniziale
    });
}

function createInfoRectNo(element, x, y) {
    infoRectsNo.push({
        x: x, // Posizione iniziale
        y: y,
        atomicNumber: element.atomicNumber,
        symbol: element.symbol,
        name: element.name,
        opacity: 1 // Opacità iniziale
    });
}

function updateScore(newScore) {
    const scoreBoard = document.getElementById('scoreBoard');
    scoreBoard.style.color = "fff";
    scoreBoard.style.padding = "5px";
    scoreBoard.style.border = "2px solid #78b3e0";
    scoreBoard.style.borderRadius = "0px";
    scoreBoard.style.fontFamily = "Arial, sans-serif";
    scoreBoard.style.backgroundColor = "rgb(0, 47, 95)";
    scoreBoard.style.textAlign = "center";
    scoreBoard.style.margin = "0px auto";
    scoreBoard.style.width = CANVAS_WIDTH;

    const selectedDietDiv = document.getElementById('selectedDietText');
    selectedDietDiv.style.display = 'block';
    selectedDietDiv.style.fontSize = '1.5em';
    selectedDietDiv.style.fontWeight = 'bold';
    selectedDietDiv.style.marginBottom = '5px';
    selectedDietDiv.style.color = 'white'; // Colore del testo
    selectedDietDiv.textContent = selectedDiet;

    scoreBoard.innerHTML = `
        <div style="font-size: 1.2em; margin-bottom: 5px;">
            <b>${newScore}</b>
        </div>`;
}

function updateGame(ctx) {
    // Aggiorna la posizione del serpente
    let head = {
        x: snake[0].x + direction.x * SIZE,
        y: snake[0].y + direction.y * SIZE
    };
    
    // Implementazione del wrap-around
    if (head.x < 0) {
        head.x = CANVAS_WIDTH - SIZE; // Passa dal bordo sinistro a quello destro
    } else if (head.x >= CANVAS_WIDTH) {
        head.x = 0; // Passa dal bordo destro a quello sinistro
    }

    if (head.y < 0) {
        head.y = CANVAS_HEIGHT - SIZE; // Passa dal bordo superiore a quello inferiore
    } else if (head.y >= CANVAS_HEIGHT) {
        head.y = 0; // Passa dal bordo inferiore a quello superiore
    }
 
    // Controlla se il serpente si scontra con se stesso
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            exitGame();
            return;
        }
    }
            
    // Aggiungi la nuova testa
    snake.unshift(head);

    // Controlla se il serpente mangia il cibo
    if (head.x === food.x && head.y === food.y) {
        if (diets[selectedDiet] && diets[selectedDiet].includes(foodElement)) {
            score += scoreIncrement;

            scoreText = {
                value: `+${scoreIncrement}`,
                x: food.x + SIZE/2 ,
                y: food.y - 10,
                opacity: 1.0 // Trasparenza iniziale
            };

            createInfoRect({
                atomicNumber: foodElementNumber,
                symbol: foodElement,
                name: foodElementName
            }, food.x, food.y);
            
            snakeColors.unshift("green");
            expandFoodEffect(food.x, food.y); // Espansione prima di sparire
            
        } else {
            score -= scoreDecrement;

             scoreTextNo = {
                value: `-${scoreDecrement}`,
                x: food.x + SIZE/2 ,
                y: food.y - 10,
                opacity: 1.0 // Trasparenza iniziale
            };

            createInfoRectNo({
                atomicNumber: foodElementNumber,
                symbol: foodElement,
                name: foodElementName
            }, food.x, food.y);
            
            snakeColors.unshift("red");
            flashEffect("rgba(229, 26, 75, 0.5)", food.x, food.y); // Lampeggio per errore
        }
         // Rimuove i colori extra se il serpente è più corto della lista colori
        if (snakeColors.length > snake.length) {
            snakeColors.pop();
        }
        updateScore(score);
        generateFood();
    } 
    // Controlla se il serpente mangia foodII
    else if (head.x === foodII.x && head.y === foodII.y) {
        if (diets[selectedDiet] && diets[selectedDiet].includes(foodIIElement)) {
            score += scoreIncrement;

            scoreText = {
                value: `+${scoreIncrement}`,
                x: foodII.x + SIZE / 2,
                y: foodII.y - 10,
                opacity: 1.0 // Trasparenza iniziale
            };

            createInfoRect({
                atomicNumber: foodIIElementNumber,
                symbol: foodIIElement,
                name: foodIIElementName
            }, foodII.x, foodII.y);

            snakeColors.unshift("green");
            expandFoodEffect(foodII.x, foodII.y); // Espansione prima di sparire

        } else {
            score -= scoreDecrement;

            scoreTextNo = {
                value: `-${scoreDecrement}`,
                x: foodII.x + SIZE / 2,
                y: foodII.y - 10,
                opacity: 1.0 // Trasparenza iniziale
            };

            createInfoRectNo({
                atomicNumber: foodIIElementNumber,
                symbol: foodIIElement,
                name: foodIIElementName
            }, foodII.x, foodII.y);

            snakeColors.unshift("red");
            flashEffect("rgba(229, 26, 75, 0.5)", foodII.x, foodII.y); // Lampeggio per errore
        }

        // Rimuove i colori extra se il serpente è più corto della lista colori
        if (snakeColors.length > snake.length) {
            snakeColors.pop();
        }
        updateScore(score);
        generateFood();
    } 
    else {
        snake.pop();
    }

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Gestione animazione della scritta del punteggio positivo
    if (scoreText) {
        ctx.fillStyle = `rgba(120, 179, 224, ${scoreText.opacity})`; // Imposta trasparenza
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(scoreText.value, scoreText.x, scoreText.y);

        // Aggiorna la posizione e la trasparenza
        scoreText.y -= 8; // Si sposta verso l'alto
        scoreText.opacity -= 0.04; // Si dissolve

        // Rimuovi la scritta quando diventa completamente trasparente
        if (scoreText.opacity <= 0) {
            scoreText = null;
        }
    }

    // Gestione animazione della scritta del punteggio negativo
    if (scoreTextNo) {
        ctx.fillStyle = `rgba(247, 157, 39, ${scoreTextNo.opacity})`; // Imposta trasparenza
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(scoreTextNo.value, scoreTextNo.x, scoreTextNo.y);

        // Aggiorna la posizione e la trasparenza
        scoreTextNo.y += 1; // Si sposta verso il basso
        scoreTextNo.opacity -= 0.06; // Si dissolve

        // Rimuovi la scritta quando diventa completamente trasparente
        if (scoreTextNo.opacity <= 0) {
            scoreTextNo = null;
        }
    }

    function flashEffect(color, x, y) {
        let flashCount = 0;
        const interval = setInterval(() => {
            ctx.fillStyle = color;
            ctx.fillRect(x - SIZE / 2, y - SIZE / 2, SIZE * 2, SIZE * 2);
            flashCount++;
            if (flashCount > 4) {
                clearInterval(interval);
                ctx.clearRect(x - SIZE / 2, y - SIZE / 2, SIZE * 2, SIZE * 2);
            }
        }, 100);
    }

    function expandFoodEffect(x, y) {
        let size = SIZE;
        const expandInterval = setInterval(() => {
            size += 2;
            ctx.clearRect(x - size / 2, y - size / 2, size, size);
            ctx.fillStyle = "rgb(120, 179, 224)";
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }, 30);
        setTimeout(() => {
            clearInterval(expandInterval);
            ctx.clearRect(x - size / 2, y - size / 2, size, size); // Rimuove il cibo
        }, 300);
    }

    // Gestione animazione dei rettangoli informativi
    for (let i = infoRects.length - 1; i >= 0; i--) {
        const rect = infoRects[i];
    
        // Disegna il rettangolo
        ctx.fillStyle = `rgba(173, 176, 184, ${rect.opacity})`; // Sfondo grigio con opacità
        ctx.strokeStyle = `rgba(150, 174, 33, ${rect.opacity})`; // Bordo verde con opacità
        ctx.lineWidth = 2;
        ctx.fillRect(rect.x, rect.y, 80, 80); // Rettangolo
        ctx.strokeRect(rect.x, rect.y, 80, 80); // Bordo

        // Disegna il testo
        ctx.fillStyle = `rgba(65, 127, 69, ${rect.opacity})`; // Testo verde con opacità
        ctx.font = "14px Arial";
        ctx.textAlign = "left";
        ctx.fillText(rect.atomicNumber, rect.x + 5, rect.y + 10); // Numero atomico
        ctx.font = "bold 24px Arial";
        ctx.textAlign = "center";
        ctx.fillText(rect.symbol, rect.x + 40, rect.y + 40); // Simbolo
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(rect.name, rect.x + 40, rect.y + 70); // Nome dell'elemento

        // Aggiorna la posizione e l'opacità
        rect.y -= 1; // Si sposta verso l'alto
        rect.opacity -= 0.01; // (Opzionale, rimuovi questa linea se non vuoi trasparenza)

        // Rimuovi il rettangolo se esce dall'area di gioco o è completamente trasparente
        if (rect.y + 70 < 0 || rect.opacity <= 0) {
            infoRects.splice(i, 1); // Rimuovi dall'array
        }
    }

    // Gestione animazione dei rettangoli informativi
    for (let i = infoRectsNo.length - 1; i >= 0; i--) {
        const rect = infoRectsNo[i];
    
        // Disegna il rettangolo
        ctx.fillStyle = `rgba(173, 176, 184, ${rect.opacity})`; // Sfondo grigio con opacità
        ctx.strokeStyle = `rgba(229, 26, 75, ${rect.opacity})`; // Bordo rosso con opacità
        ctx.lineWidth = 2;
        ctx.fillRect(rect.x, rect.y, 80, 80); // Rettangolo
        ctx.strokeRect(rect.x, rect.y, 80, 80); // Bordo

        // Disegna il testo
        ctx.fillStyle = `rgba(229, 26, 75, ${rect.opacity})`; // Testo rosso con opacità
        ctx.font = "14px Arial";
        ctx.textAlign = "left";
        ctx.fillText(rect.atomicNumber, rect.x + 5, rect.y + 10); // Numero atomico
        ctx.font = "bold 24px Arial";
        ctx.textAlign = "center";
        ctx.fillText(rect.symbol, rect.x + 40, rect.y + 40); // Simbolo
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.fillText(rect.name, rect.x + 40, rect.y + 70); // Nome dell'elemento

        // Aggiorna la posizione e l'opacità
        rect.y += 2; // Si sposta verso il basso
        rect.opacity -= 0.01; // (Opzionale, rimuovi questa linea se non vuoi trasparenza)

        // Rimuovi il rettangolo se esce dall'area di gioco o è completamente trasparente
        if (rect.y > 520 || rect.opacity <= 0) {
            infoRectsNo.splice(i, 1); // Rimuovi dall'array
        }
    }
    
    // Draw the snake
       snake.forEach((part, index) => {
        if (index === 0) { // La testa del serpente
            if (snakeColors[0] === "red") {
                ctx.fillStyle = "rgb(229, 26, 75)"; // Testa rossa per errore
            } else {
                ctx.fillStyle = "rgb(65, 127, 69)"; // Testa verde per successo
            }
        } else {
            ctx.fillStyle = snakeColors[index] || `rgb(150, 174, 33)`; // Segmenti successivi
        }
        ctx.fillRect(part.x, part.y, SIZE, SIZE);
        ctx.strokeStyle = "rgb(0, 47, 95)";
        ctx.lineWidth = 2;
        ctx.strokeRect(part.x, part.y, SIZE, SIZE);
    });

    // Effetto glow intorno al cibo
    //ctx.shadowColor = "rgb(247, 157, 39)"; // Colore del bagliore
    //ctx.shadowBlur = 10;

    // Disegna sfondo cibo
    ctx.fillStyle = "rgb(120, 179, 224)";
    ctx.fillRect(food.x, food.y, SIZE, SIZE);
    ctx.fillStyle = "rgb(120, 179, 224)";
    ctx.fillRect(foodII.x, foodII.y, SIZE, SIZE);

    // Reset shadowBlur per evitare che influenzi altri elementi
    //ctx.shadowBlur = 0;
    
    // Draw the food element symbol
    ctx.fillStyle = "rgb(229, 26, 75)"; // Colore del simbolo
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(foodElement, food.x + SIZE / 2, food.y + SIZE / 2);
    ctx.fillStyle = "rgb(229, 26, 75)"; // Colore del simbolo
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(foodIIElement, foodII.x + SIZE / 2, foodII.y + SIZE / 2);

    // Disegna il numero atomico sotto il simbolo
    //ctx.font = "12px Arial"; // Numero atomico più piccolo
    //ctx.fillText(foodElementNumber, food.x + SIZE / 2, food.y + (2 * SIZE) / 3);
    //ctx.font = "12px Arial"; // Numero atomico più piccolo
    //ctx.fillText(foodIIElementNumber, foodII.x + SIZE / 2, foodII.y + (2 * SIZE) / 3);

    // Draw game area border
    ctx.strokeStyle = "#83B7DE";
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            
}

// Function to exit the game
function exitGame() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'none';
    document.getElementById('scoreBoard').style.display = 'none';
    document.getElementById('elementSelection').style.display = 'none';
    document.getElementById('dietSelection').style.display = 'none';
    document.getElementById('selectedDietText').style.display = 'none';
    document.getElementById('gameover').style.display = 'block';
    document.getElementById('touchArea').style.zIndex = -1;
    showGameOverScreen();

    if (gameInterval) {
        clearInterval(gameInterval);
    }
}

function showGameOverScreen() {
    const gameOverElement = document.getElementById("gameover");
    const diet = window.selectedDiet || "default";
    const randomMessage = getRandomDietMessage(window.selectedDiet);

    gameOverElement.innerHTML = `
        <h2>Stay Hungry! Stay Periodic!</h2>
        <p>${randomMessage}</p>
        <button class="button" onclick="resetGameState()">Reset</button>
    `;
    gameOverElement.style.display = "block";
}
