const elements = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const elementNames = [
    "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Caesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"
];

const elementNumbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118"
];

const DietsList = [
    "Critical elements", "Elements of a smartphone", "Elements of life",
    "Elements of DNA", "Elements essential for man", "Elements used in therapy", 
    "Elements used in diagnosis", "Medical radioisotopes",
    "Radioactive elements (U-Th decay series)",
    "Elements considered safety (grades A-E) in the first wall of fusion power plan",
    "Potentially toxic trace elements (PTEs)", "Toxic trace elements in dried mushrooms",
    "Elements dedicated to scientists", "Elements with names of latin derivation",
    "Elements with names of greek derivation",
    "Elements named after geographical locations and celestial bodies",
    "Elements with names not derived from latin or greek, nor from cities or countries",
    "Elements known since antiquity",
    "Elementary substances in solid state at standard temperature and pressure",
    "Elementary substances in liquid state at standard temperature and pressure",
    "Elementary substances in gas state at standard temperature and pressure", "Metals", "Nonmetals",
    "Ferromagnetic elements", "Ultra-high temperature metals",
    "Elements of group I (Hydrogen & alkali metals)",
    "Elements of group II (Alkaline earth metals)", "Elements of group XV (Pnictogens)",
    "Elements of group XVI (Chalcogens)", "Elements of group XVII (Halogens)",
    "Elements of group XVIII (Noblegases)", "Lanthanides", "Actinides",
    "Transition metals", "Post-transition metals", "Metalloids", "Reactive nonmetals",
    "s-block elements", "p-block elements", "d-block elements", "f-block elements"
];

const diets = {
    "Critical elements": ["Sb", "Ba", "Al", "Be", "Bi", "B", "Co", "F", "Ga", "Ge", "Hf", "In", "Li", "Mg","Nb","P", "Sc","Si","Sr","Ta","Ti","W","V"],
    "Elements of a smartphone": ["H", "Li", "Be", "B", "C", "O", "F", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "K", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Br", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "Ba", "La", "Ce", "Pr", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Os", "Ir", "Pt", "Au", "Hg", "Pb", "Bi"],
    "Elements of life": ["O", "C", "H", "N", "P", "Ca", "S", "K", "Na", "Cl", "Mg", "Fe", "Zn", "Cr", "Co", "Cu", "Mn", "Mo", "Ni", "V", "Si", "B", "Se", "F", "I", "Br"],
    "Elements of DNA": ["C", "H", "O", "N", "P"],
    "Elements essential for man": ["H", "C", "N", "O", "F", "Na", "Mg", "Si", "P", "S", "Cl", "K", "Ca", "V", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Se", "Mo", "Sn", "I"],
    "Elements used in therapy": ["H", "He", "Li", "B", "C", "N", "O", "F", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Cu", "Zn", "Ga", "As", "Se", "Sr", "Mo", "Ru", "Pd", "Ag", "Sb", "Xe", "La", "Ce", "Ta", "Os", "Pt", "Au", "Bi"],
    "Elements used in diagnosis": ["He", "F", "Cu", "Ga", "Ge", "Rb", "Y", "Zr", "Tc", "In", "I", "Xe", "Ba", "Gd", "Tl"],
    "Medical radioisotopes": ["Sr", "Y", "Rh", "Pd", "I", "Cs", "Sm", "Ho", "Lu", "Re", "Ir", "Bi", "At", "Ra", "Ac"],
    "Radioactive elements (U-Th decay series)": ["U", "Th", "Pa", "Ra", "Rn", "Po", "Pb", "Bi", "Pu", "Ac", "Tl", "Am", "Np"],
    "Elements considered safety (grades A-E) in the first wall of fusion power plan": ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Mg", "Al", "Si", "P", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Fe", "Co", "Ni", "Cu", "Ge", "Se", "Kr", "Sr", "Y", "Ru", "Sn", "Te", "I", "Xe", "Cs", "Ba", "Ce", "Nd", "Sm", "Dy", "Yb", "Lu", "Tl"],
    "Potentially toxic trace elements (PTEs)": ["Pb", "Hg", "Cr", "Cd", "As", "Co", "Cu", "Ni", "Zn", "Ag", "Sb", "Fe", "Mn", "Zr", "Se", "Sr", "Al", "F", "U", "La", "Pr", "Au"],
    "Toxic trace elements in dried mushrooms": ["As", "Cd", "Hg", "Pb"],
    "Elements dedicated to scientists": ["Ga", "Ge", "Sm", "Gd", "Bi", "Cm", "Es", "Fm", "No", "Lr", "Rf", "Sg", "Bh", "Mt", "Rg", "Og"],
    "Elements with names of latin derivation": ["B", "C", "F", "Na", "Al", "Si", "S", "K", "Ca", "Sc", "Mn", "Fe", "Cu", "Ga", "Ge", "Rb", "Ru", "Pd", "In", "Sn", "Sb", "Te", "Cs", "La", "Ce", "Pm", "Eu", "Ho", "Tm", "Lu", "Hf", "Ta", "Ir", "Au", "Hg", "Pb", "Bi", "Po", "Rn", "Ra", "Np", "Cm", "Hs"],
    "Elements with names of greek derivation": ["H", "He", "Li", "Be", "N", "O", "Ne", "P", "Cl", "Ar", "Ti", "Cr", "Co", "As", "Se", "Br", "Kr", "Nb", "Mo", "Tc", "Rh", "Ag", "Cd", "Sb", "I", "Xe", "Ba", "La", "Pr", "Nd", "Dy", "Os", "Tl", "Bi", "At", "Ac", "Pa", "U", "Pu"],
    "Elements named after geographical locations and celestial bodies": ["Mg", "Sc", "Mn", "Ga", "Ge", "Se", "Sr", "Y", "Nb", "Tc", "Ru", "Pd", "Cd", "Te", "Eu", "Tb", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Re", "Bi", "Po", "Fr", "U", "Np", "Am", "Bk", "Cf", "Db", "Hs", "Ds"],
    "Elements with names not derived from latin or greek, nor from cities or countries": ["V", "Co", "Ni", "Zn", "Zr", "Sb", "W", "Pt", "Bi", "Th"],
    "Elements known since antiquity": ["C", "S", "Fe", "Cu", "As", "Ag", "Sn", "Sb", "Au", "Hg", "Pb"],
    "Elementary substances in solid state at standard temperature and pressure": ["Li", "Be", "B", "C", "Na", "Mg", "Al", "Si", "P", "S",  "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Tl", "Pb", "Bi", "Po", "At", "Fr", "Ra", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    "Elementary substances in liquid state at standard temperature and pressure": ["Hg", "Br"],
    "Elementary substances in gas state at standard temperature and pressure": ["H", "He", "N", "O", "F", "Ne","Cl", "Ar", "Kr", "Xe", "Rn"],
    "Ferromagnetic elements": ["Fe", "Co", "Ni", "Gd", "Tb", "Dy", "Ho", "Er", "Tm"],
    "Ultra-high temperature metals": ["W", "Re", "Ta", "Os"],
    "Metals": ["Li", "Be", "Na", "Mg", "Al", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    "Nonmetals": ["H", "He", "B", "C", "N", "O", "F", "Ne", "Si", "P", "S", "Cl", "Ar", "Ge", "As", "Se", "Br", "Kr", "Sb", "Te", "I", "Xe", "At", "Rn"],
    "Elements of group I (Hydrogen & alkali metals)": ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"],
    "Elements of group II (Alkaline earth metals)": ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
    "Elements of group XV (Pnictogens)": ["N", "P", "As", "Sb", "Bi", "Mc"],
    "Elements of group XVI (Chalcogens)": ["O", "S", "Se", "Te", "Po", "Lv"],
    "Elements of group XVII (Halogens)": ["F", "Cl", "Br", "I", "At", "Ts"],
    "Elements of group XVIII (Noblegases)": ["He", "Ne","Ar", "Kr", "Xe", "Rn", "Og"],
    "Lanthanides": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"],
    "Actinides": ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    "Transition metals": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn"],
    "Post-transition metals": ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Po"],
    "Metalloids": ["B", "Si", "Ge", "As", "Sb", "Te", "At"],
    "Reactive nonmetals": ["H", "C", "N", "O", "F", "P", "S", "Cl", "Se", "Br", "I"],
    "s-block elements": ["H", "He", "Li", "Be", "Na", "Mg", "K", "Ca", "Rb", "Sr", "Cs", "Ba", "Fr", "Ra"],
    "p-block elements": ["B", "C", "N", "O", "F", "Ne", "Al", "Si", "P", "S", "Cl", "Ar", "Ga", "Ge", "As", "Se", "Br", "Kr", "In", "Sn", "Sb", "Te", "I", "Xe", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"],
    "d-block elements": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn"],
    "f-block elements": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No"],
};

const dietMessages = {
    "Critical elements": [
        "Raw materials are crucial to the economy.<br><a href='https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials_en' target='_blank' style='color: rgb(143, 125, 207);'>European Commission - Critical Raw Materials</a>",
        "Raw materials form the industrial base for producing a wide range of goods and applications used in everyday life and modern technologies.<br><a href='https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials_en' target='_blank' style='color: rgb(143, 125, 207);'>European Commission - Critical Raw Materials</a>",
        "Reliable and unhindered access to certain raw materials is a growing concern across the globe.<br><a href='https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials_en' target='_blank' style='color: rgb(143, 125, 207);'>European Commission - Critical Raw Materials</a>",
        "The European Commission has created a list of critical raw materials (CRMs) for the EU, which is regularly reviewed and updated.<br><a href='https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials_en' target='_blank' style='color: rgb(143, 125, 207);'>European Commission - Critical Raw Materials</a>",
        "Critical raw materials are defined as those of high importance to the economy and high risk associated with their supply.<br><a href='https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials_en' target='_blank' style='color: rgb(143, 125, 207);'>European Commission - Critical Raw Materials</a>"
    ],
    "Elements of a smartphone": [
        "Mobile phones have a high embedded value, which is of significant interest within a circular economy. <br><a href='https://doi.org/10.1016/j.jclepro.2023.138099' target='_blank' style='color: rgb(143, 125, 207);'>M. Gómez et al. J Clean Prod 419 (2023) 138099</a>",
        "The number of mobile devices operating worldwide is expected to reach 18 billion by 2025. However, their low recycling rate results in large volumes of End-of-Life Mobile Phones (EoL-MPs). <br><a href='https://doi.org/10.1016/j.jclepro.2023.138099' target='_blank' style='color: rgb(143, 125, 207);'>M. Gómez et al. J Clean Prod 419 (2023) 138099</a>",
        "Increased demand for raw materials, energy, and water consumption, as well as uncontrolled and poor disposal practices at end-of-life, can lead to significant health and environmental impacts. <br><a href='https://doi.org/10.1016/j.jclepro.2023.138099' target='_blank' style='color: rgb(143, 125, 207);'>M. Gómez et al. J Clean Prod 419 (2023) 138099</a>",
        "End-of-Life Mobile Phones contain strategically and economically important high-technology metals, many of which are classified as critical. <br><a href='https://doi.org/10.1016/j.jclepro.2023.138099' target='_blank' style='color: rgb(143, 125, 207);'>M. Gómez et al. J Clean Prod 419 (2023) 138099</a>",
        "On average, the mass distribution of a mobile phone is as follows: plastics (40%), metals (35%), and ceramics (25%). <br><a href='https://doi.org/10.1016/j.jclepro.2023.138099' target='_blank' style='color: rgb(143, 125, 207);'>M. Gómez et al. J Clean Prod 419 (2023) 138099</a>",
        "One tonne of End-of-Life Mobile Phones can contain up to 53 kg of copper, 141 g of gold, 270 g of silver, 10 g of platinum, 18 g of palladium, and 3.3 kg of rare earth elements, among other valuable metals. <br><a href='https://doi.org/10.1016/j.jclepro.2023.138099' target='_blank' style='color: rgb(143, 125, 207);'>M. Gómez et al. J Clean Prod 419 (2023) 138099</a>",
        "The calculated economic value of End-of-Life Mobile Phone components is as follows: cameras (86,860 USD/ton), printed circuit boards (55,459 USD/ton), speakers (21,853 USD/ton), and screens (3,779 USD/ton). <br><a href='https://doi.org/10.1016/j.jclepro.2023.138099' target='_blank' style='color: rgb(143, 125, 207);'>M. Gómez et al. J Clean Prod 419 (2023) 138099</a>",
        "Based on the predicted 5 billion End-of-Life Mobile Phones discarded by the end of 2022, this waste stream has a potential economic value of 9.25 billion USD. <br><a href='https://doi.org/10.1016/j.jclepro.2023.138099' target='_blank' style='color: rgb(143, 125, 207);'>M. Gómez et al. J Clean Prod 419 (2023) 138099</a>",
        "The use of End-of-Life Mobile Phones as a secondary resource-rich stream offers a route to close the materials loop. This helps mitigate threats to natural resources, reduce environmental and human health impacts from mining operations, relieve supply demands, and contribute to the economy. <br><a href='https://doi.org/10.1016/j.jclepro.2023.138099' target='_blank' style='color: rgb(143, 125, 207);'>M. Gómez et al. J Clean Prod 419 (2023) 138099</a>"
    ],
    "Elements of life": [
        "Oxygen, carbon, hydrogen, and nitrogen are the main building blocks of every living creature, including human beings.<br>(Isaac Asimov, 'The Building Blocks of the Universe', Milan: A. Mondadori, 1971)",
        "Specifically, our body is primarily composed of just 11 elements, along with trace amounts of boron, chromium, cobalt, copper, fluorine, iodine, iron, manganese, molybdenum, selenium, silicon, nickel, bromine, vanadium, and zinc.<br>(Isaac Asimov, 'The Building Blocks of the Universe', Milan: A. Mondadori, 1971)",
        "It seems incredible that a complex creature like a human is made up of only 26 types of building blocks. However, let's remember that these elements are not randomly assembled.<br>(Isaac Asimov, 'The Building Blocks of the Universe', Milan: A. Mondadori, 1971)",
        "Nitrogen is nitrogen, it passes miraculously from the air into plants, from these into animals, and from animals into us; when its function in our body is exhausted, we eliminate it, but it still remains nitrogen, aseptic, innocent.<br>Primo Levi, The Periodic Table (1975)",
        "Inside our body, just 11 atoms combine in thousands of ways to form simple compounds, which, in turn, are the building blocks of larger and more complex molecules.<br>(Isaac Asimov, 'The Building Blocks of the Universe', Milan: A. Mondadori, 1971)",
        
        `<div style="margin-bottom: 15px; text-align: justify;">
            Every living organism is composed of 50-95% water and small ions such as sodium (Na⁺), potassium (K⁺), and calcium (Ca²⁺), which account for no more than 1% of the total mass.
            The remaining part consists mainly of biomolecules, which are composed of a limited number of elements: carbon (C), hydrogen (H), nitrogen (N), oxygen (O), phosphorus (P), and sulfur (S).
        </div>

        <table style="border-collapse: collapse; width: 100%; text-align: center; margin-bottom: 15px;"> 
            <tr style="background-color: #78b3e0; color: white;">
                <th style="border: 1px solid #ccc; padding: 5px;">Element</th>
                <th style="border: 1px solid #ccc; padding: 5px;">Human</th>
                <th style="border: 1px solid #ccc; padding: 5px;">Alfalfa</th>
                <th style="border: 1px solid #ccc; padding: 5px;">Bacterium</th>
            </tr>
            <tr><td style="border: 1px solid #ccc; padding: 5px;">Carbon (C)</td><td>19.37%</td><td>11.34%</td><td>12.14%</td></tr>
            <tr><td style="border: 1px solid #ccc; padding: 5px;">Hydrogen (H)</td><td>9.31%</td><td>8.72%</td><td>9.94%</td></tr>
            <tr><td style="border: 1px solid #ccc; padding: 5px;">Nitrogen (N)</td><td>5.14%</td><td>0.83%</td><td>3.04%</td></tr>
            <tr><td style="border: 1px solid #ccc; padding: 5px;">Oxygen (O)</td><td>62.81%</td><td>77.90%</td><td>73.68%</td></tr>
            <tr><td style="border: 1px solid #ccc; padding: 5px;">Phosphorus (P)</td><td>0.63%</td><td>0.71%</td><td>0.60%</td></tr>
            <tr><td style="border: 1px solid #ccc; padding: 5px;">Sulfur (S)</td><td>0.64%</td><td>0.10%</td><td>0.32%</td></tr>
            <tr style="background-color: #f0f0f0;">
                <td><b>Total</b></td><td><b>97.90%</b></td><td><b>99.60%</b></td><td><b>99.72%</b></td>
            </tr>
        </table>

        <div style="margin-bottom: 10px; font-size: 14px; color: #fff; text-align: center;">
            Average atomic composition percentage of three representative organisms.
        </div>`,

        `<div style="font-size: 12px; color: #bbb; text-align: center;">
            Reference: Helena Curtis, N. Sue Barnes, Adriana Schnek, Graciela Flores. <i>Invitation to Biology</i>, Fifth Edition, 1994 by Worth Publisher, Inc.
        </div>`
    ],
    "Elements of DNA": [
        "Nitrogen is nitrogen, it passes miraculously from the air into plants, from these into animals, and from animals into us; when its function in our body is exhausted, we eliminate it, but it still remains nitrogen, aseptic, innocent.<br>Primo Levi, The Periodic Table (1975)",
       "DNA is made up of carbon (C), hydrogen (H), oxygen (O), nitrogen (N) and phosphorus (P).<br><a href='https://edu.rsc.org/feature/elements-of-life/3007327.article' target='_blank' style='color: rgb(143, 125, 207);'>Rathi, Elements of life. Education in Chemistry 2011</a>"
    ],
    "Elements essential for man": [""],
    "Elements used in therapy": [""],
    "Elements used in diagnosis": [""],
    "Medical radioisotopes": [""],
    "Radioactive elements (U-Th decay series)": [
        "Radioactive elements are both naturally occurring and anthropogenic in origin, and can be found throughout the geosphere.https://doi.org/10.1016/B978-0-08-095975-7.00906-2' target='_blank' style='color: rgb(143, 125, 207);'>M.D. Siegel and C.R. Bryan, Radioactivity, Geochemistry, and Health. Treatise on Geochemistry (2nd ed.) 2014, 191-256</a>",
        "Naturally occurring radioactive materials are dominated by members of the uranium and thorium decay chains, including radium and radon.<br><a href='https://doi.org/10.1016/B978-0-08-095975-7.00906-2' target='_blank' style='color: rgb(143, 125, 207);'>M.D. Siegel and C.R. Bryan, Radioactivity, Geochemistry, and Health. Treatise on Geochemistry (2nd ed.) 2014, 191-256</a>",
        "Wastes containing elevated levels of radioactive materials are frequently generated by human activities, such as mining and milling of uranium ore, coal burning, and water treatment.<br><a href='https://doi.org/10.1016/B978-0-08-095975-7.00906-2' target='_blank' style='color: rgb(143, 125, 207);'>M.D. Siegel and C.R. Bryan, Radioactivity, Geochemistry, and Health. Treatise on Geochemistry (2nd ed.) 2014, 191-256</a>", 
        "Anthropogenic radionuclides include transuranic elements (e.g., Pu, Np, Am) and fission products (e.g., 99Tc, 137Cs), which are produced by nuclear reactions.<br><a href='https://doi.org/10.1016/B978-0-08-095975-7.00906-2' target='_blank' style='color: rgb(143, 125, 207);'>M.D. Siegel and C.R. Bryan, Radioactivity, Geochemistry, and Health. Treatise on Geochemistry (2nd ed.) 2014, 191-256</a>",
        "Anthropogenic radionuclides are released to the environment during nuclear weapons production and testing and when power plant accidents occur.<br><a href='https://doi.org/10.1016/B978-0-08-095975-7.00906-2' target='_blank' style='color: rgb(143, 125, 207);'>M.D. Siegel and C.R. Bryan, Radioactivity, Geochemistry, and Health. Treatise on Geochemistry (2nd ed.) 2014, 191-256</a>",
        "Spent nuclear fuel, currently stockpiled for eventual disposal, represents a huge reservoir of anthropogenic radionuclides.<br><a href='https://doi.org/10.1016/B978-0-08-095975-7.00906-2' target='_blank' style='color: rgb(143, 125, 207);'>M.D. Siegel and C.R. Bryan, Radioactivity, Geochemistry, and Health. Treatise on Geochemistry (2nd ed.) 2014, 191-256</a>",
        "Once anthropogenic radionuclides are released to the environment, the behavior of these radionuclides is largely controlled by their geochemistry and by characteristics of the local environment.<br><a href='https://doi.org/10.1016/B978-0-08-095975-7.00906-2' target='_blank' style='color: rgb(143, 125, 207);'>M.D. Siegel and C.R. Bryan, Radioactivity, Geochemistry, and Health. Treatise on Geochemistry (2nd ed.) 2014, 191-256</a>", 
        "Aqueous concentrations are commonly determined by radionuclide solubility and sorption, which in turn are controlled by redox state, availability of mineral substrates for sorption, and concentrations of aqueous complexing agents.<br><a href='https://doi.org/10.1016/B978-0-08-095975-7.00906-2' target='_blank' style='color: rgb(143, 125, 207);'>M.D. Siegel and C.R. Bryan, Radioactivity, Geochemistry, and Health. Treatise on Geochemistry (2nd ed.) 2014, 191-256</a>",
        "Take a look on the the sources and environmental behavior of radionuclides, and the exposure pathways and health risks that they pose to human populations.<br><a href='https://doi.org/10.1016/B978-0-08-095975-7.00906-2' target='_blank' style='color: rgb(143, 125, 207);'>M.D. Siegel and C.R. Bryan, Radioactivity, Geochemistry, and Health. Treatise on Geochemistry (2nd ed.) 2014, 191-256</a>"
    ],
    "Elements considered safety (grades A-E) in the first wall of fusion power plan": [
        "A true 'low-activation' material should ideally achieve the possible prompt dose at the site boundary from 100% release of the inventory should be <2 Sv (200 rem); hence, the design would be 'inherently safe'.<br><a href='https://doi.org/10.13182/FST19-1-146' target='_blank' style='color: rgb(143, 125, 207);'>S. J. Piet et al. Fusion Technology, 19(1991)46–161</a>",
        "A true 'low-activation' material should ideally achieve the possible cancers from realistic releases should be limited such that the accident risk is <0.1%/yr of the existing background cancer risk to local residents.<br><a href='https://doi.org/10.13182/FST19-1-146' target='_blank' style='color: rgb(143, 125, 207);'>S. J. Piet et al. Fusion Technology, 19(1991)46–161</a>",
        "A true 'low-activation' material should ideally achieve the decay heat should be limited so that active mitigative measures are not needed to protect the investment from cooling transients; hence, the design would be passively safe with respect to decay heat.<br><a href='https://doi.org/10.13182/FST19-1-146' target='_blank' style='color: rgb(143, 125, 207);'>S. J. Piet et al. Fusion Technology, 19(1991)46–161</a>",
        "With a true 'low-activation' used materials could be either recycled or disposed of as near-surface waste.<br><a href='https://doi.org/10.13182/FST19-1-146' target='_blank' style='color: rgb(143, 125, 207);'>S. J. Piet et al. Fusion Technology, 19(1991)46–161</a>",
        "With a true 'low-activation' hands-on maintenance should be possible around coolant system piping and components such as the heat exchanger.<br><a href='https://doi.org/10.13182/FST19-1-146' target='_blank' style='color: rgb(143, 125, 207);'>S. J. Piet et al. Fusion Technology, 19(1991)46–161</a>",
        "With a true 'low-activation' effluents of activation products should be minor compared to the major challenge of limiting tritium effluents.<br><a href='https://doi.org/10.13182/FST19-1-146' target='_blank' style='color: rgb(143, 125, 207);'>S. J. Piet et al. Fusion Technology, 19(1991)46–161</a>",
        "Grades from A (best) to G (worst) are given to each element in the areas of accident safety, recycling, and waste management.<br><a href='https://doi.org/10.13182/FST19-1-146' target='_blank' style='color: rgb(143, 125, 207);'>S. J. Piet et al. Fusion Technology, 19(1991)46–161</a>",
        "Designs focusing on truly low-activation materials will help achieve the excellent safety and environmental potential of fusion energy.<br><a href='https://doi.org/10.13182/FST19-1-146' target='_blank' style='color: rgb(143, 125, 207);'>S. J. Piet et al. Fusion Technology, 19(1991)46–161</a>"    
    ],
    "Potentially toxic trace elements (PTEs)": [
        "Explore the <a href='https://www.issmc.cnr.it/en/research/projects/ministerial-projects/selwa/' target='_blank' style='color: rgb(143, 125, 207);'>SELWA project</a> for more details."
    ],
    "Toxic trace elements in dried mushrooms": [""],
    "Elements dedicated to scientists": [
        "Ge (Germanium): Named after Latin Germania ('Germany'). Dmitri Mendeleev proposed the name to honor Clemens Winkler, who discovered the element. Mendeleev had predicted its existence as 'ekasilicon,' meaning 'one silicon' in Sanskrit, filling a gap in his periodic table between silicon and tin.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Sm (Samarium): Named after Vasilij Samarskij–Bychovec, a Russian geologist who discovered the mineral samarskite. Paul Emile Lecoq de Boisbaudran isolated samarium from this mineral in 1880.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Gd (Gadolinium): Honors Johan Gadolin, a Finnish chemist and geologist. Gadolin identified a mineral containing rare earths, from which the element was later isolated.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Bi (Bismuth): Derives from Latin bisemutum, possibly linked to German Wissmut ('white material') or Arabic itmid ('antimony'). Historically, bismuth was mistaken for antimony due to their similar appearance.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Cm (Curium): Named after Marie and Pierre Curie for their pioneering work on radioactive elements.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Es (Einsteinium): Discovered in hydrogen bomb test residues in 1952. Named in 1955 to honor Albert Einstein.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Fm (Fermium): Also discovered in 1952 bomb test residues. Named in 1955 after physicist Enrico Fermi.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Md (Mendelevium): Synthesized in 1955 and named after Dmitri Mendeleev.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "No (Nobelium): Discovered in 1958 by an international team and named after Alfred Nobel.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Lr (Lawrencium): Named in 1961 for Ernest Lawrence, inventor of the cyclotron.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Rf (Rutherfordium): Named for physicist Ernest Rutherford. Synthesized in 1964 (Russia) and 1969 (USA). Naming disputes were resolved in 1997.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Sg (Seaborgium): Named after Glenn Seaborg, who discovered numerous elements. First synthesized in 1974, naming disputes were settled in 1997.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Bh (Bohrium): Named for Niels Bohr. Discovered in 1976 and confirmed in 1981. Renamed in 1997 to avoid confusion with boron.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Mt (Meitnerium): Honors Lise Meitner, who elucidated nuclear fission.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Rg (Roentgenium): Named for Wilhelm Roentgen, discoverer of X-rays. First synthesized in 1994.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Og (Oganesson): First observed in 1996, with the proposed name Copernicium to honor Nicolaus Copernicus.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>"
    ],
    "Elements with names of latin derivation": [
        "B from French 'bore,' derived from Latin *borax* ('borax'), a compound abundant in boron. 'Borax' originates from Persian *burak* ('saltpeter'), resembling borax.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M., Righetti A., Allegrezza - Chimica per noi A., Mondadori Scuola © 2010</a>",
        "C from Latin *carbo* ('coal'), primarily composed of carbon. It is one of nine elements known since antiquity, along with gold, silver, copper, sulfur, tin, lead, mercury, and iron.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M., Righetti A., Allegrezza - Chimica per noi A., Mondadori Scuola © 2010</a>",
        "F from Latin *fluere* ('to flow'); minerals like fluorite aid in mineral fusion.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M., Righetti A., Allegrezza - Chimica per noi A., Mondadori Scuola © 2010</a>",
        "Na from Latin *salsola soda*, a plant whose ashes yield 'soda.' The symbol comes from Latin *natrium* ('soda'), derived from Arabic *natrun*, a lake rich in soda (e.g., Tanzania's Natron).<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M., Righetti A., Allegrezza - Chimica per noi A., Mondadori Scuola © 2010</a>",
        "Al from Latin *alumen* ('alum'), a source of aluminum.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M., Righetti A., Allegrezza - Chimica per noi A., Mondadori Scuola © 2010</a>",
        "Si from Latin *silex* ('flint'), a mineral containing silicon.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M., Righetti A., Allegrezza - Chimica per noi A., Mondadori Scuola © 2010</a>",
        "S from Latin *sulphur* ('sulfur'), a pre-Latin word. It is one of nine elements known since antiquity.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M., Righetti A., Allegrezza - Chimica per noi A., Mondadori Scuola © 2010</a>",
        "K from English 'pot' and 'ash,' named by Humphry Davy in 1807. The symbol 'K' derives from Latin *kalium*, based on Arabic *al qali*.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M., Righetti A., Allegrezza - Chimica per noi A., Mondadori Scuola © 2010</a>",
        "Ca from Latin *calx* ('lime'), a compound containing calcium.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M., Righetti A., Allegrezza - Chimica per noi A., Mondadori Scuola © 2010</a>",
        "Sc from Latin *Scandia* ('Scandinavia'), as it was first isolated (1879) from a Swedish mineral. Its existence had been predicted by Dmitri Mendeleev (1834–1907), who named it ekaboron (eka- means 'one' in Sanskrit), as it was supposed to occupy a slot near boron in the periodic table.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Mn from Latin *Magnésion* ('Magnesia'), a city in Thessaly with deposits of magnetic ore resembling pyrolusite, a black manganese compound. Others suggest the name comes from a corruption of the Latin *magalaea*, an ancient term for pyrolusite.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Fe from Latin *ferrum* ('iron'), one of nine elements known since antiquity, along with carbon, gold, silver, copper, sulfur, tin, lead, and mercury.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Cu from Late Latin *aeramen* ('copper, bronze'), a term later replaced by Pliny (77 AD) with *cuprum* ('Cyprian bronze'), referencing Cyprus, where copper is abundant. It is one of the nine elements known since antiquity.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Ga from Latin *Gallium*, based on the surname of its discoverer, French chemist Paul Lecoq de Boisbaudran (1838–1912). In French, *coq* means 'rooster'; in Latin, *gallus*. Additionally, Gaul (modern-day France) was known as *Gallia*.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Ge from Latin *Germania* ('Germany'), named by Mendeleev in honor of its discoverer, German chemist Clemens Winkler (1838–1904). Mendeleev had predicted its existence and called it ekasilicon, as it was positioned between silicon and tin in his periodic table.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Rb from Latin *rubidum* ('dark red'), referring to the color of its emission spectrum lines.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Ru from Latin *Ruthenia* ('Russia'), named by Karl Klaus (1796–1864) in 1844 in honor of his homeland.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "Pd from Latin *Pallas*, named after the asteroid discovered in 1802, a year before the element.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Source</a>",
        "In: Derived from the Latin 'indium', meaning 'indigo', due to the color of its spectral lines that led to its identification.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Sn: From the Latin 'stannum', meaning 'tin'. Pliny the Elder used the term for a silver-lead alloy rather than pure tin, which was known as 'white lead'. Tin is one of nine elements known since antiquity.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Sb: Derived from Arabic 'al-ithmid', meaning 'antimony'. Some sources suggest the name 'antimony' comes from Greek roots meaning 'against solitude', as it is always found with other minerals. The symbol, however, comes from the Latin 'stibium', a cosmetic used to darken eyebrows.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Te: From the Latin 'tellus', meaning 'Earth'. Discovered in 1782, its current name was given in 1798, possibly in opposition to 'uranium', another element discovered around the same time.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Cs: Derived from Latin 'caesius', meaning 'bluish-gray', for the color of its spectral lines.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "La: From Greek 'lantháno', meaning 'to lie hidden', referring to the difficulty in isolating it.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Ce: Named after Ceres, the Roman goddess of agriculture, and an asteroid discovered in 1801, two years before the element.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Pm: From Prometheus, the Titan who stole fire for humanity. The name recalls its production through nuclear fission, often called 'fire'.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Eu: From 'Europa', as it was discovered in Europe.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Ho: Named after Holmia, the Latinized name for Stockholm, near where many rare earth-rich minerals were found.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Tm: Derived from 'Thule', an ancient name for Scandinavia and the northernmost known land.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Lu: Named after Lutetia, the Latin name for Paris. Discovered in 1907 by French scientist Georges Urbain.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Ta: Derived from the Greek mythological figure Tantalus. Its properties, like resistance to acids, are compared to Tantalus' punishment in Greek mythology.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Os: From the Greek 'osmé', meaning 'smell', due to the strong odor of its compounds.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Ir: Derived from the Latin 'iris', meaning 'rainbow', because of the colorful appearance of its compounds.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Au: From the Latin 'aurum', meaning 'gold'. One of the first metals used by humans due to its malleability and resistance to tarnish.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza, Chimica per noi A. Mondadori Scuola, 2010</a>",
        "Hg from the Latin Mercurius, 'Mercury', ancient Roman deity, son of Jupiter and the first planet of the solar system, associated with the element according to alchemists. The symbol is from the Greek hýdor, 'water', and árgyros, 'silver': 'liquid silver', because, at ambient temperature and pressure, it is liquid and similar in color to silver; it is one of the nine elements known since antiquity, along with carbon, gold, silver, copper, sulfur, tin, lead, and iron.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Bi from the Latin bisemutum, 'bismuth'; the etymology of this term, attributed to Paracelsus, the Latinized name of the Swiss physician Theophrastus Bombastus von Hohenheim (1493-1541), is debated. He traced it back to the German word Wissmut, because it was extracted (gemutet) in Saxony in the location of St. George in the meadows (in den Wiesen); according to others, it would instead derive from the ancient German Weissmuth, 'white material', because in its elemental state, bismuth is a shiny white metal; still, others claim its derivation from the Greek psimúthion, 'white pigment, white substance'. Currently, the most accredited origin seems to be the Arabic itmid, 'antimony', because in the past, bismuth was mistaken for antimony, which belongs to the same group as bismuth and has a very similar appearance.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Po from the Latin Polonia, 'Poland', native country of Marie Sklodowska Curie (1867-1934), who discovered it in 1898.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Rn from the Latin radius, 'ray'; discovered in 1898 by Marie Sklodowska Curie (1867-1934), the name, proposed by the German chemist Curt Schmidt in 1918, was chosen to recall its radioactivity and because it shared the etymological origin with radium, from which it is obtained as a decay product.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ra from the Latin radius, 'ray'; originally, the name referred to its most important isotope, 226, first discovered; it was later extended to the element to evoke its property of emitting rays capable of impressing a photographic plate, then called 'radioactivity'. Discovered in 1898 by Marie Sklodowska Curie (1867-1934), it is the most famous among the naturally occurring radioactive elements (and the heaviest of the alkaline earth metals group).<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Np from the Latin Neptunus, 'Neptune'; the Roman god of the sea, it gives its name to the planet of the solar system that immediately follows Uranus: hence it was assigned to the element that follows it in the periodic table.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Cm from the Latin curium, in honor of the spouses Marie Sklodowska Curie (1867-1934) and Pierre Curie (1859-1906), for their pioneering work in the field of radioactive elements.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Hs from the Latin Hassia, the Latinized name of Hesse, the German region where Darmstadt is located and where it was first produced (1984).<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>"
    ],
    "Elements with names of greek derivation": [
        "H from Greek hýdor, 'water', and ghennáo, 'to generate': 'water generator'; it was proposed by Antoine Laurent Lavoisier (1743-1794) following the model of 'oxygen'.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "He from the Greek hélios, meaning 'Sun'; before being isolated by William Ramsay (1852–1916) in 1895, the element had been detected in the spectrum of solar light during the total solar eclipse of 1868 and is the only element discovered in an extraterrestrial object before being found on Earth.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Li from the Greek lítheios, meaning 'of stone'; its related minerals indeed have a stony appearance.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Be from the Greek béryllos, 'beryl', the name, of Indian origin, of a precious stone of bluish-green color: aquamarine (bluish-green) and emerald (green) are beryl minerals with specific impurities.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "N from the Greek a- (privative alpha) and zotikós, 'life-giving': 'non-life producer'; the name was coined by Antoine Laurent Lavoisier (1743-1794); the symbol is instead derived from 'nitrogen', from the Greek nítron, 'saltpeter', and ghennáo, 'to generate': 'saltpeter generator', a name proposed by Jean-Antoine Chaptal (1756-1832) used in the English language but no longer in use in Italy.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "O from the Greek oxýs, 'acid', and ghennáo, 'to generate': 'acid generator'; name proposed by Antoine Laurent Lavoisier (1743-1794) mistakenly convinced that oxygen was part of the composition of all acids.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ne from Greek néos, 'new'; so named by William Ramsay's son (1852-1916), who discovered it along with Morris Travers (1872-1961) in 1898, because it was 'another new gas' present in the air.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "P from Greek phôs, 'light', and -phoro, 'carrier': 'light-bringer', with reference to its extreme reactivity, by virtue of which, when combined with oxygen, it emits a faint luminescence.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Cl from Greek khlorós, 'green', for its color.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ar from Greek from a- (negative alpha privative) and érgon, 'work': 'inactive', so named because it does not react with other elements.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ti from Greek titán, 'Titan', a generic name for the six mythological giants sons of Uranus (Heaven) and Gaia (Earth); so named for its high mechanical resistance.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Cr from Greek khrôma, 'color'; named for the colors of its compounds.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Co from Greek kóbalos, 'goblin': because it was believed that a goblin had substituted cobalt for the desired silver for the miners.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "As from Greek arsenikón, 'male, masculine', in the sense of 'bold', for its action on metals.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Se from Greek seléne, 'Moon', for its brightness; since the element is similar to tellurium, with which it was initially confused, Jöns Jacob Berzelius (1779-1848) argued that its name should also reflect this similarity, and therefore the Greek word for Moon, the Earth's only satellite, was chosen.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Br from Greek brômos, 'bad smell'; so named because, at ambient temperature and pressure, it is a reddish-brown liquid with an unpleasant and suffocating odor.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Kr from Greek kryptón, 'hidden'; named by William Ramsay (1852-1916), who discovered it along with Morris Travers (1872-1961) in 1898, because of its difficult detection (it is found in very small quantities in the gases that form atmospheric air).<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Nb from Greek Niobe, 'Niobe', mythical daughter of the King of Lydia Tantalus; because it is similar to tantalum. Charles Hatchett (1765-1847), its discoverer, had named it columbium (Cb); the name 'niobium', proposed by H. Rose (1759-1864), was definitively adopted only in 1949.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Mo from Greek mólybdos, 'lead'; was named by J. J. Berzelius (1779-1848) for its resemblance to lead.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Tc from Greek tekhnetós, 'artificial'; does not exist in nature: it is the first element to be produced artificially and the only artificial one among the transition elements; it was obtained in 1937 by the Italians Carlo Perrier (1886-1948) and Emilio Segrè (1905-1989). Previously (1925), the discovery of element 43 had been announced by Walter Noddack (1893-1960), who had named it 'masurium' (from Masuria, the region of origin of his family, now in Poland), but the discovery had not been confirmed.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>", 
        "Rh from Greek rhódon, 'rose'; from the color of the aqueous solutions of its salts.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ag from Greek árgyros, 'silver', in turn from argós, 'white, shining'; is one of the nine elements known since antiquity, along with carbon, gold, copper, sulfur, tin, lead, mercury, and iron.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Cd from Greek kadmeía (gê), '(earth) of Cadmus', namely Thebes, the Greek city founded by the mythical hero Cadmus; cadmium was indeed discovered in various zinc mines and especially in the mineral calamine, extracted near the fortress of Thebes.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Sb from Arabic al ithmid, 'antimony'; according to others, 'antimony' would derive from Greek antí-, 'against' and mónos, 'alone': against solitude (in a broad sense), as it is always associated with other minerals. The symbol instead derives from Latin stibium, 'antimony' (actually a cosmetic based on antimony used to blacken eyebrows).<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "I from Greek iódes, 'violet'; for the color of its vapors.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Xe from Greek ksénos, 'stranger, guest'; so named by discoverers William Ramsay (1852-1916) and Morris Travers (1872-1961), as it was found in the fractionation of the rare gases krypton and neon.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ba from Greek barýs, 'heavy'; the name is derived from that of barite, the most important mineral from which it is extracted, formerly known as 'heavy earth' referring to its high density, about twice that of other compounds with a similar appearance.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "La from Greek lantháno, 'to lie hidden'; so named for its difficulty in isolation.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Pr from Greek prasêos, a misreading of prásinos, 'green, leek color', and dídymos, 'twin'. In 1839, the Swedish chemist Carl Gustaf Mosander (1797–1858) believed he had discovered a new element which he called 'didymium', suspecting it to be actually a mixture. In 1885, Carl Auer Freiherr von Welsbach (1858–1929) identified two elements in didymium, named neodymium and praseodymium, the latter for the color of some of its compounds.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Nd from Greek néos, 'new', and dídymos, 'twin'; is the second element isolated from 'didymium', alongside praseodymium.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Dy from Greek dysprósitos, 'hard to reach'; owes its name to the enormous difficulty encountered by Paul Emile Lecoq de Boisbaudran (1838-1912), who discovered it in 1886, in separating it from other elements belonging to the so-called rare earths.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Os from Greek osmé, 'smell'; for the strong odor of the tetroxide, volatile.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Tl from the Greek thallós, 'green shoot'; because, as Sir William Crookes (1832–1919) stated when he discovered it in 1861 through spectroscopic investigations, the characteristic green line present in its spectrum 'vividly recalls the fresh color of vegetation in this season'.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Bi from the Latin bisemutum, 'bismuth'; the etymology of this term, attributed to Paracelsus, the Latinized name of the Swiss physician Theophrastus Bombastus von Hohenheim (1493-1541), is debated. He traced it back to the German word Wissmut, because it was extracted (gemutet) in Saxony in the location of St. George in the meadows (in den Wiesen); according to others, it would instead derive from the ancient German Weissmuth, 'white material', because in its elemental state, bismuth is a shiny white metal; still, others claim its derivation from the Greek psimúthion, 'white pigment, white substance'. Currently, the most accredited origin seems to be the Arabic itmid, 'antimony', because in the past, bismuth was mistaken for antimony, which belongs to the same group as bismuth and has a very similar appearance.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "At from the Greek a- (negative prefix) and statós, 'stable'; the only element among the so-called halogens to decay radioactively, it was discovered in 1940 by the Italian physicist Emilio Segrè (1905-1989).<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ac from the Greek aktís, 'ray'; the name was proposed in 1881 with reference to the luminescent effect produced by light on its salts.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Pa from the Greek prôtos, 'first', and aktínion, 'actinium'; initially, protactinium was called 'brevium', from Latin brevium, for its short half-life, while protactinium designated the isotope 231 which, with a half-life of 32,480 years, 'precedes' the isotope 227 of actinium in the radioactive decay of uranium.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "U from the Greek Ouranós, 'Uranus'; identified in 1789 by Martin Heinrich Klaproth (1743-1817), it was named after the planet Uranus, discovered eight years earlier.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Pu from the Greek Plúton, 'Pluto', the Greek god of the underworld and celestial body, initially considered the ninth planet of the solar system, after Neptune: for this reason, the name of the element that follows neptunium in the periodic table was derived from it, also discovered in 1940, a few months earlier.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>"    
    ],
    "Elements named after geographical locations and celestial bodies": [
        "Mg from Magnesia, a city in Thessaly, from which the stone of the same name used as a purgative originated; according to the ancients, it had to be brought near a magnet, which is named after the Greek city of Magnesia: just as the magnet attracted iron, so magnesium had the property of attracting bodily humors.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Sc from Latin Scandia, 'Scandinavia'; because it was first isolated (1879) from a Swedish mineral; its existence had been predicted by Dmitri Ivanovich Mendeleev (1834-1907), who had named it ekaboron (eka- in Sanskrit means 'one'), because it was supposed to occupy an empty slot in his periodic table next to boron.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Mn from Latin Magnésion, 'Magnesia', a city in Thessaly near which there were deposits of magnetic ore strongly resembling pyrolusite, a black manganese compound. According to others, the name may derive directly from the corruption of the Latin magalaea, an ancient name for pyrolusite.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ga from Latin Gallium, Latinized surname of the discoverer, French chemist Paul Emile Lecoq de Boisbaudran (1838-1912). In French, coq means 'the rooster', in Latin gallus; moreover, Gaul, in Latin, is the name of modern-day France.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ge from Latin Germania, 'Germany'; the name was proposed by Dmitri Ivanovich Mendeleev (1834-1907), in honor of the discoverer, German chemist Clemens Winkler (1838-1904). Mendeleev had predicted its existence, naming it ekasilicon (eka- in Sanskrit means 'one'), because it was supposed to occupy an empty slot in his periodic table between silicon and tin.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Se from Greek seléne, 'Moon', for its brightness; since the element is similar to tellurium, with which it was initially confused, Jöns Jacob Berzelius (1779-1848) argued that its name should also reflect this similarity, and therefore the Greek word for Moon, the Earth's only satellite, was chosen.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Sr from Strontian, the name of the Scottish village (Western Highlands) where strontianite was extracted from mines, the mineral from which it was isolated.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Y from Ytterby, the name of the Swedish city from which a mineral, 'ytterbite', rich in new rare earth elements (such as erbium, terbium, and ytterbium), was extracted; initially, the name 'yttrium' was indeed attributed to a substance that later turned out to be a mixture of new elements (including yttrium, ytterbium, and holmium): that's why yttrium has a chemical symbol of a single letter and ytterbium of two.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Nb from Greek Niobe, 'Niobe', mythical daughter of the King of Lydia Tantalus; because it is similar to tantalum. Charles Hatchett (1765-1847), its discoverer, had named it columbium (Cb); the name 'niobium', proposed by H. Rose (1759-1864), was definitively adopted only in 1949.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Tc from Greek tekhnetós, 'artificial'; does not exist in nature: it is the first element to be produced artificially and the only artificial one among the transition elements; it was obtained in 1937 by the Italians Carlo Perrier (1886-1948) and Emilio Segrè (1905-1989). Previously (1925), the discovery of element 43 had been announced by Walter Noddack (1893-1960), who had named it 'masurium' (from Masuria, the region of origin of his family, now in Poland), but the discovery had not been confirmed.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ru from Latin Ruthenia, 'Russia'; proposed by Karl K. Klaus (1796-1864), who discovered it in 1844, in honor of his own country.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Pd from Latin Pallas, 'Pallas'; of the asteroid discovered in 1802, just one year before the element.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Cd from Greek kadmeía (gê), '(earth) of Cadmus', namely Thebes, the Greek city founded by the mythical hero Cadmus; cadmium was indeed discovered in various zinc mines and especially in the mineral calamine, extracted near the fortress of Thebes.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Te from Latin tellus, 'Earth'; discovered in 1782 by Franz-Joseph Müller von Reichenstein (1742-1825), it was named with the current name in 1798 by Martin Heinrich Klaproth (1743-1817), who first succeeded in isolating it, perhaps in opposition to the name 'uranium' assigned to the element he himself discovered in 1789.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Eu from Latin Europa, because it was discovered in Europe.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Tb from Ytterby, the name of the Swedish city from which a mineral, ytterbite, rich in new elements belonging to the rare earths (such as yttrium, ytterbium, and erbium), was extracted.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ho from Latin Holmia, meaning 'Stockholm'; near the Swedish city, many minerals (gadolinite, euxenite, and others) rich in a rare earth, originally thought to be an element (yttrium), were found, from which this element was later separated.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Er from Ytterby, the name of the Swedish city where a mineral called ytterbite, rich in new elements belonging to the rare earths (such as yttrium, erbium, and erbium), was extracted.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Tm from Latin thulium, from Thule, 'Tule', a location on the North Sea considered in ancient times to be the northernmost limit of the known world and an archaic name for Scandinavia.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Yb from Ytterby, the name of the Swedish city where a mineral called ytterbite, rich in new elements belonging to the rare earths (such as yttrium, ytterbium, and erbium), was extracted.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Lu from Latin Lutetia, 'Paris'; the name was chosen by Georges Urbain (1872-1938), who discovered it in 1907, in honor of his own city; in the same year, independently, it was also isolated by the Austrian Carl Auer Freiherr von Welsbach (1858–1929), who proposed the name 'cassiopium' (still used by some German scientists) to remember the famous constellation Cassiopeia, easily recognizable because its five stars form an almost perfect W, the initial of Welsbach's surname.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Hf from Latin Hafnia, 'Copenhagen', because it was discovered in this city in 1923 by Dirk Coster (1889-1950) and George Charles de Hevesy (1885-1966). A decade before its official discovery, based on some weak experimental evidence of its existence, some French researchers had assigned the name 'celtium' to the missing element with atomic number 72, from Latin Celtae, 'Celts', ancient inhabitants of France: but this name was not retained.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Re from German Rheinland, 'Rhineland', the region of birth of the daughter of Walter Noddack (1893-1960) and Ida (1896-1978) who, together with Otto Berg (1873-1939), discovered it in 1925.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Bi from the Latin bisemutum, 'bismuth'; the etymology of this term, attributed to Paracelsus, the Latinized name of the Swiss physician Theophrastus Bombastus von Hohenheim (1493-1541), is debated. He traced it back to the German word Wissmut, because it was extracted (gemutet) in Saxony in the location of St. George in the meadows (in den Wiesen); according to others, it would instead derive from the ancient German Weissmuth, 'white material', because in its elemental state, bismuth is a shiny white metal; still, others claim its derivation from the Greek psimúthion, 'white pigment, white substance'. Currently, the most accredited origin seems to be the Arabic itmid, 'antimony', because in the past, bismuth was mistaken for antimony, which belongs to the same group as bismuth and has a very similar appearance.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Po from the Latin Polonia, 'Poland', native country of Marie Sklodowska Curie (1867-1934), who discovered it in 1898.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Fr from French France, 'France', homeland of Marguerite Catherine Perey (1909-1975), the scientist who discovered it in 1939.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "U from the Greek Ouranós, 'Uranus'; identified in 1789 by Martin Heinrich Klaproth (1743-1817), it was named after the planet Uranus, discovered eight years earlier.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Np from the Latin Neptunus, 'Neptune'; the Roman god of the sea, it gives its name to the planet of the solar system that immediately follows Uranus: hence it was assigned to the element that follows it in the periodic table.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Pu from the Greek Plúton, 'Pluto', the Greek god of the underworld and celestial body, initially considered the ninth planet of the solar system, after Neptune: for this reason, the name of the element that follows neptunium in the periodic table was derived from it, also discovered in 1940, a few months earlier.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Am  from English America, in honor of the continent where it was obtained, in 1944, and for symmetry, because it is found below europium in the periodic table.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Bk from Berkeley, the name of the Californian city where it was obtained in 1949.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Cf from California, the name of the state in which it was first synthesized in 1949.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Db from Dubna, the Russian town where it was first produced in 1970; subsequently, American scientists who had unsuccessfully attempted to confirm the discovery using other methods proposed the name 'hahnium', in honor of Otto Hahn (1879-1968), leading to a dispute over the name, which was only resolved in 1997 through a compromise involving the names of elements from 104 to 108.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Hs from the Latin Hassia, the Latinized name of Hesse, the German region where Darmstadt is located and where it was first produced (1984).<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ds from Darmstadt, the city where the Nuclear Research Center is located and where the element was synthesized in 1994; it seems that the name 'policium' was also proposed, as 110 is also the emergency number of the German police.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>"
    ],
    "Elements with names not derived from latin or greek, nor from cities or countries": [
        "V from Vanadis, goddess of beauty in Norse mythology: for the beauty and variety of colors of its compounds.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Ni from German Kupfernickel, 'copper goblin': what miners claimed prevented them from finding copper.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Zn from German Zink, 'zinc', term of uncertain etymology.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Zr from Arabic zerqun, 'golden color', in turn from Persian azargun, composed of azar, 'fire', and gun, 'color'.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Sb from Arabic al ithmid, 'antimony'; according to others, 'antimony' would derive from Greek antí-, 'against' and mónos, 'alone': against solitude (in a broad sense), as it is always associated with other minerals. The symbol instead derives from Latin stibium, 'antimony' (actually a cosmetic based on antimony used to blacken eyebrows).<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "W from Swedish tung, 'heavy', and sten, 'stone': 'heavy stone', alluding to its high specific weight; the symbol is instead derived from 'wolfram', another name by which it is known, derived from 'wolframite', the mineral from which it is extracted; of uncertain etymology, this name seems to be linked to the German Wolf, 'wolf', with which the alchemists indicated substances capable of 'stealing' tin from the fusion bath.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Pt from Spanish platina, from plata, 'silver'; for its color very similar to that of silver.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>",
        "Th from Swedish Thor, the god of thunder in Norse mythology; the name was proposed by Jöns Jacob Berzelius (1779-1848), who discovered it in 1828.<br><a href='http://www.liceorodolico.it/appunti/lim/IVF/SCIENZE/I%20nomi%20degli%20elementi%20e%20la%20loro%20origine-tottola%20biennio.pdf' target='_blank' style='color: rgb(143, 125, 207);'>Tottola M. Righetti A. Allegrezza Chimica per noi A. Mondadori Scuola © by Mondadori Education, 2010</a>"
    ],
    "Elements known since antiquity": [""],
    "Elementary substances in solid state at standard temperature and pressure": ["Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"],
    "Elementary substances in liquid state at standard temperature and pressure": ["Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"],
    "Elementary substances in gas state at standard temperature and pressure": ["Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"],
    "Ferromagnetic elements": [""],
    "Ultra-high temperature metals": [""],
    "Metals": ["Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"],
    "Nonmetals": ["Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"],
    "Elements of group I (Hydrogen & alkali metals)": ["Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"],
    "Elements of group II (Alkaline earth metals)": ["Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"],
    "Elements of group XV (Pnictogens)": [
        "Nitrogen is nitrogen, it passes miraculously from the air into plants, from these into animals, and from animals into us; when its function in our body is exhausted, we eliminate it, but it still remains nitrogen, aseptic, innocent.<br>Primo Levi, The Periodic Table (1975)",
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", 
        "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"
    ],
    "Elements of group XVI (Chalcogens)": ["Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"],
    "Elements of group XVII (Halogens)": ["Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"],
    "Elements of group XVIII (Noblegases)": [
        "Periodicity is driven by the noble-gas-like closed-shell structures<br><a href='https://onlinelibrary.wiley.com/doi/full/10.1002/anie.200800827' target='_blank' style='color: rgb(143, 125, 207);'>Wang, S.-G.; Schwarz, W. H. E. Angew. Chem., Int. Ed. 2009, 48, 3404</a>",
        "Take a look on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>", "Take a look on <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>"
    ],
    "Lanthanides": [
        "Discover more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Explore the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>."
    ],
    "Actinides": [
        "Discover more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Explore the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>."
    ],
    "Transition metals": [
        "My favourite dream is of going to the opera (I am Hafnium), sharing a box at the Met with the other heavy transition metals – my old and valued friends – Tantalum, Rhenium, Osmium, Iridium, Platinum, Gold, and Tungsten.<br>Oliver Sacks, Uncle Tungsten",
        "Learn more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Check out the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>."
    ],
    "Post-transition metals": [
        "Learn more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Check out the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>."
    ],
    "Metalloids": [
        "Discover more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Explore the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>."
    ],
    "Reactive nonmetals": [
        "Learn more on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Check out the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table</a>."
    ],
    "s-block elements": [
        "Explore more about s-block elements on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Check out the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a> for detailed insights."
    ],
    "p-block elements": [
        "Dive deeper into p-block elements on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Learn more from the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>."
    ],
    "d-block elements": [
        "Discover the properties of d-block elements on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Visit the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a> for further details."
    ],
    "f-block elements": [
        "Find out more about f-block elements on <a href='https://ptable.com/?lang=it#Propriet%C3%A0' target='_blank' style='color: rgb(143, 125, 207);'>Ptable</a>.",
        "Get comprehensive information on the <a href='https://pubchem.ncbi.nlm.nih.gov/periodic-table/' target='_blank' style='color: rgb(143, 125, 207);'>Periodic Table of Elements</a>."
    ]
};

function getRandomDietMessage(diet) {
    const messages = dietMessages[diet];
    if (!messages || messages.length === 0) {
         return "– Forza Signor Simpson, non supererà mai questo corso se non sa la tavola periodica!<br>– Me la scriverò sulla mano..<br>– Ahah! Inclusi tutti i lantanidi e gli attidici? Buona fortuna! (I Simpson)";
    }
    return messages[Math.floor(Math.random() * messages.length)];
}

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
let totalFoodEaten = -1;
let touchStartX = 0;
let touchStartY = 0;
let lastTouchTime = 0;
let isPaused = false;

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
        event.preventDefault();
        if (!isPaused) changeFoodElement();
    } 
    else if (event.key.toLowerCase() === 'p') { // Controlla se si preme "p"
        togglePause();
    } 
    else {
        if (!isPaused) { // Solo se il gioco non è in pausa
            const newDirection = { x: direction.x, y: direction.y };
            switch (event.key) {
                case 'ArrowUp': case 'w': case 'W':
                    if (direction.y === 0) newDirection.x = 0, newDirection.y = -1;
                    break;
                case 'ArrowDown': case 's': case 'S':
                    if (direction.y === 0) newDirection.x = 0, newDirection.y = 1;
                    break;
                case 'ArrowLeft': case 'a': case 'A':
                    if (direction.x === 0) newDirection.x = -1, newDirection.y = 0;
                    break;
                case 'ArrowRight': case 'd': case 'D':
                    if (direction.x === 0) newDirection.x = 1, newDirection.y = 0;
                    break;
            }

            const nextHead = {
                x: snake[0].x + newDirection.x * SIZE,
                y: snake[0].y + newDirection.y * SIZE
            };

            if (!snake.some(part => part.x === nextHead.x && part.y === nextHead.y)) {
                direction = newDirection;
            }
        }
    }
});

function togglePause() {
    isPaused = !isPaused;

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    if (isPaused) {
        clearInterval(gameInterval); // Ferma il loop del gioco

        ctx.fillStyle = "rgba(0, 47, 95, 0.75)";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        
        ctx.fillStyle = "#F79D27";  // Colore del testo (arancione)
        ctx.font = "bold 40px Arial";
        ctx.textAlign = "center";
        ctx.fillText("PAUSE", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20);

        ctx.font = "20px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("Press 'P' to resume", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 20);
    } else {
        startGameLoop(ctx); // Riprendi il gioco
    }
}

function changeFoodElement() {
    // Scambia solo le coordinate dei due cibi
    let tempX = food.x;
    let tempY = food.y;
    food.x = foodII.x;
    food.y = foodII.y;
    foodII.x = tempX;
    foodII.y = tempY;

    // Ridisegna solo i due cibi senza cancellare l'intero canvas
    drawFood();
    drawFoodII();
}

function drawFood() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const foodSize = SIZE * 1.5; // Aumenta la dimensione del cibo del 50%
    const x = food.x + SIZE / 2;
    const y = food.y + SIZE / 2;

    ctx.clearRect(food.x, food.y, SIZE, SIZE);

    ctx.fillStyle = "rgb(120, 179, 224)";
    ctx.beginPath();
    ctx.arc(x, y, foodSize / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#E51A4B"; // Rosso brillante per il testo
    ctx.font = "bold 22px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Effetto glow
    ctx.shadowColor = "#F79D27"; // Glow arancione
    ctx.shadowBlur = 10;
    ctx.fillText(foodElement, x, y);
    ctx.shadowBlur = 0; // Reset glow
}

function drawFoodII() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const foodSize = SIZE * 1.5; // Aumenta la dimensione del cibo del 50%
    const x = foodII.x + SIZE / 2;
    const y = foodII.y + SIZE / 2;
    
    ctx.clearRect(foodII.x, foodII.y, SIZE, SIZE);

    ctx.fillStyle = "rgb(120, 179, 224)";
    ctx.beginPath();
    ctx.arc(x, y, foodSize / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#E51A4B"; // Rosso brillante per il testo
    ctx.font = "bold 22px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Effetto glow
    ctx.shadowColor = "#F79D27"; // Glow arancione
    ctx.shadowBlur = 10;
    ctx.fillText(foodIIElement, x, y);
    ctx.shadowBlur = 0; // Reset glow
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
    document.getElementById('startScreen').style.display = 'block';
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

    document.getElementById('startScreen').style.display = 'none';
    canvas.style.display = 'block';

    snake = [{ x: 100, y: 100 }];
    snakeColors = ["green"]; // Resetta i colori del serpente, partendo con la testa verde
    direction = { x: 1, y: 0 };
    score = 0;
    updateScore(score);
    generateFood();
    generateFoodII();
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
    scoreIncrement = 1;
    scoreDecrement = 0;
    //scoreIncrement = Math.round(100 * (rangeValue - validDietElementsCount) / rangeValue);
    //scoreDecrement = Math.round(100 * validDietElementsCount / rangeValue);
}

function calculateValidDietElements() {
    // Calcola il numero di elementi nella dieta effettivamente validi
    const selectedDietElements = diets[selectedDiet] || [];
    const validDietElements = selectedDietElements.filter(el => !erasedElements.includes(el));
    return validDietElements.length;
}

function generateFood() { 
    const margin = SIZE;
    const maxX = Math.floor((CANVAS_WIDTH - margin * 2) / SIZE);
    const maxY = Math.floor((CANVAS_HEIGHT - margin * 2) / SIZE);

    let foodPositionValid = false;

    // Ottieni gli elementi validi della dieta selezionata
    const validDietElements = (diets[selectedDiet] || []).filter(el => !erasedElements.includes(el));

    // Se non ci sono elementi validi, interrompi la funzione
    if (validDietElements.length === 0) {
        console.error("Nessun elemento valido per la dieta selezionata.");
        return;
    }

    // Genera una posizione valida per il cibo
    while (!foodPositionValid) {
        food = {
            x: Math.floor(Math.random() * maxX) * SIZE + margin,
            y: Math.floor(Math.random() * maxY) * SIZE + margin
        };

        foodPositionValid = !snake.some(part => part.x === food.x && part.y === food.y);
    }
    
    let elementIndex;
    // Seleziona un elemento che appartiene alla dieta selezionata e non è stato cancellato
    do {
        elementIndex = Math.floor(Math.random() * validDietElements.length);
        foodElement = validDietElements[elementIndex];
    } while (erasedElements.includes(foodElement)); 

    // Assegna nome e numero dell’elemento selezionato
    elementIndex = elements.indexOf(foodElement); 
    foodElementName = elementNames[elementIndex];
    foodElementNumber = elementNumbers[elementIndex];

    totalFoodEaten++;

    drawFood();
    drawFoodII();
    updateScore(score);
}

function generateFoodII() {
    const margin = SIZE;
    const maxX = Math.floor((CANVAS_WIDTH - margin * 2) / SIZE);
    const maxY = Math.floor((CANVAS_HEIGHT - margin * 2) / SIZE);

    let foodPositionValid = false;

    // Ottieni gli elementi validi della dieta selezionata
    const validDietElements = (diets[selectedDiet] || []).filter(el => !erasedElements.includes(el));

    // Ottieni gli elementi che NON appartengono alla dieta e non sono stati cancellati
    const nonDietElements = elements.filter(el => !validDietElements.includes(el) && !erasedElements.includes(el));

    // Se non ci sono elementi non appartenenti alla dieta, interrompi la funzione
    if (nonDietElements.length === 0) {
        console.error("Nessun elemento valido al di fuori della dieta selezionata.");
        return;
    }

    // Genera una posizione valida per il cibo
    while (!foodPositionValid) {
        foodII = {
            x: Math.floor(Math.random() * maxX) * SIZE + margin,
            y: Math.floor(Math.random() * maxY) * SIZE + margin
        };

        foodPositionValid = !snake.some(part => part.x === foodII.x && part.y === foodII.y) &&
                            !(foodII.x === food.x && foodII.y === food.y);
    }
    
    let elementIndex;
    // Seleziona un elemento che NON appartiene alla dieta selezionata e non è stato cancellato
    do {
        elementIndex = Math.floor(Math.random() * nonDietElements.length);
        foodIIElement = nonDietElements[elementIndex];
    } while (erasedElements.includes(foodIIElement));

    // Assegna nome e numero dell’elemento selezionato
    elementIndex = elements.indexOf(foodIIElement);
    foodIIElementName = elementNames[elementIndex];
    foodIIElementNumber = elementNumbers[elementIndex];

    drawFood();
    drawFoodII();
    updateScore(score);
}

function startGameLoop(ctx) {
    if (isPaused) return; // Se il gioco è in pausa, esci subito
    
    gameInterval = setInterval(() => {
        if (!isPaused) { // Controlla sempre se il gioco è in pausa
            updateGame(ctx);
        }
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
    scoreBoard.style.fontSize = "1.1em";
    //scoreBoard.style.color = "#fff";
    scoreBoard.style.padding = "4px";
    scoreBoard.style.border = "2px solid #83B7DE";  // Stesso colore del bordo del canvas
    scoreBoard.style.borderRadius = "8px";
    scoreBoard.style.fontFamily = "Arial, sans-serif";
    scoreBoard.style.backgroundColor = "rgba(0, 47, 95, 0.9)";  
    scoreBoard.style.textAlign = "center";
    scoreBoard.style.margin = "5px auto";
    scoreBoard.style.width = CANVAS_WIDTH;

    const selectedDietDiv = document.getElementById('selectedDietText');
    selectedDietDiv.style.display = 'block';
    selectedDietDiv.style.fontSize = '1.1em';  
    selectedDietDiv.style.fontWeight = 'bold';
    selectedDietDiv.style.marginBottom = '8px';
    selectedDietDiv.style.color = '#78B3E0';  
    selectedDietDiv.textContent = selectedDiet.toUpperCase();  

    // Calcola la percentuale degli elementi validi mangiati
    let percentage = totalFoodEaten > 0 ? ((newScore / totalFoodEaten) * 100).toFixed(1) : 0;

    // Interpolazione dal rosso (229, 26, 75) al verde (150, 174, 33)
    let r = Math.round(229 + (150 - 229) * (percentage / 100));
    let g = Math.round(26 + (174 - 26) * (percentage / 100));
    let b = Math.round(75 + (33 - 75) * (percentage / 100));
    let color = `rgb(${r}, ${g}, ${b})`;

    // Layout con riquadri per score e percentuale
    scoreBoard.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; gap: 15px;">
            <div style="border: 2px solid #78b3e0; padding: 5px 10px; border-radius: 5px; background-color: rgb(0, 47, 95); font-size: 1.2em;">
                <b>${newScore} / ${totalFoodEaten}</b>
            </div>
            <div style="border: 2px solid #78b3e0; padding: 5px 10px; border-radius: 5px; background-color: rgb(0, 47, 95);">
                <b style="color: ${color}; font-size: 1.2em; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); transition: color 0.5s ease-in-out;">
                    ${percentage}%
                </b>
            </div>
        </div>
    `;
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
        generateFoodII();
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
        generateFoodII();
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
   // if (scoreTextNo) {
        //ctx.fillStyle = `rgba(247, 157, 39, ${scoreTextNo.opacity})`; // Imposta trasparenza
        //ctx.font = "16px Arial";
        //ctx.textAlign = "center";
        //ctx.fillText(scoreTextNo.value, scoreTextNo.x, scoreTextNo.y);

        // Aggiorna la posizione e la trasparenza
        //scoreTextNo.y += 1; // Si sposta verso il basso
        //scoreTextNo.opacity -= 0.06; // Si dissolve

        // Rimuovi la scritta quando diventa completamente trasparente
        //if (scoreTextNo.opacity <= 0) {
            //scoreTextNo = null;
        //}
    //}

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
            ctx.fillStyle = "rgb(150, 174, 33)";
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
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(foodElement, food.x + SIZE / 2, food.y + SIZE / 2);
    ctx.fillStyle = "rgb(229, 26, 75)"; // Colore del simbolo
    ctx.font = "16px Arial";
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
        <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60%;
            max-width: 500px;
            padding: 20px;
            background: rgba(0, 47, 95, 0.95);
            color: white;
            text-align: center;
            border-radius: 12px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
            font-family: Arial, sans-serif;
        ">
            <h2 style="color: #F79D27; font-size: 28px; margin-bottom: 10px;">
                Stay Hungry! Stay Periodic!
            </h2>
            <p style="font-size: 18px; color: #96AE21; margin-bottom: 15px;">
                ${randomMessage}
            </p>
            <button style="
                background-color: #E51A4B;
                border: none;
                padding: 12px 20px;
                font-size: 18px;
                color: white;
                font-weight: bold;
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.3s, transform 0.2s;
            " 
            onmouseover="this.style.backgroundColor='#A81E47'; this.style.transform='scale(1.1)';"
            onmouseout="this.style.backgroundColor='#E51A4B'; this.style.transform='scale(1)';"
            onclick="resetGameState()">Restart</button>
        </div>
    `;
    gameOverElement.style.display = "block";
}
