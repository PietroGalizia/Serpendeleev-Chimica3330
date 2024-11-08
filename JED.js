console.log("JED.js è stato caricato correttamente");

// Define the elements
const elements = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No"
];

const elementNames = [
    "Idrogeno", "Elio", "Litio", "Berillio", "Boro", "Carbonio", "Azoto", "Ossigeno", "Fluoro", "Neon", "Sodio", "Magnesio", "Alluminio", "Silicio", "Fosforo", "Zolfo", "Cloro", "Argon", "Potassio", "Calcio", "Scandio", "Titanio", "Vanadio", "Cromo", "Manganese", "Ferro", "Cobalto", "Nichel", "Rame", "Zinco", "Gallio", "Germanio", "Arsenico", "Selenio", "Bromo", "Kripton", "Rubidio", "Stronzio", "Ittrio", "Zirconio", "Niobio", "Molibdeno", "Tecnezio", "Rutenio", "Rodio", "Palladio", "Argento", "Cadmio", "Indio", "Stagno", "Antimonio", "Tellurio", "Iodio", "Xeno", "Cesio", "Bario", "Lantanio", "Cerio", "Praseodimio", "Neodimio", "Promezio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Olmio", "Erbio", "Tulio", "Itterbio", "Lutezio", "Afnio", "Tantalio", "Tungsteno", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Tallio", "Piombo", "Bismuto", "Polonio", "Astato", "Radon", "Francio", "Radio", "Attinio", "Torio", "Protoattinio", "Uranio", "Nettunio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einsteinio", "Fermio", "Mendelevio", "Nobelio"
];

const elementNumbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102"
];

// List of diet options and elements associated with each diet
const DietsList = [
    "elementi della vita", "elemeni dell'aria", "elementi critici", "elementi degli smartphone", "elementi del DNA", "elementi radioattivi (serie di decadimento U-Th)",
    "elementi considerati sicuri (grado A-E)\n in un reattore nucleare a fusione", "elementi dedicati a scienziati", "elementi con nome di derivazione latina",
    "elementi con nome di derivazione greca", "elementi con nomi di città,\nstati, o di chissà dove", "elementi con nomi che non derivano nè dal latino, nè dal greco,\ne nemmeno da città o stati",
    "elementi allo stato solido alle condizioni standard di temperatura e pressione", "elementi allo stato liquido alle condizioni standard di temperatura e pressione",
    "elementi allo stato gassoso alle condizioni standard di temperatura e pressione", "metalli", "non metalli", "elementi del primo gruppo (idrogeno & metalli alcalini)",
    "elementi del secondo gruppo (metalli alcalino terrosi)", "elementi del 15esimo gruppo (pnicogeni)", "elementi del gruppo XVI (calcogeni)", "elementi del gruppo XVII (alogeni)",
    "elementi del 18esimo gruppo (gas nobili)", "lantanoidi", "attinoidi", "metalli di transizione", "metalli post-transizione", "semimetalli", "non metalli reattivi", "elementi del blocco s",
    "elementi del blocco p", "elementi del blocco d", "elementi del blocco f", "elementi noti fin dai tempi antichi"
];

const Elements_of_Diet = [
    ["O", "C", "H", "N", "P", "Ca", "S", "K", "Na", "Cl", "Mg", "Fe", "Zn", "Cr", "Co", "Cu", "Mn", "Mo", "Ni", "V", "Si", "B", "Se", "F", "I", "Br"],
    ["N", "O", "Ar", "C", "Ne", "He", "Kr", "Xe", "Rn"],
    ["Sb", "Ba", "Al", "Be", "Bi", "B", "Co", "F", "Ga", "Ge", "Hf", "In", "Li", "Mg","Nb","P", "Sc","Si","Sr","Ta","Ti","W","V"],
    ["Cu", "Al", "Ba", "Ni", "Ca", "Sn", "Fe", "Zn", "Ti", "Pb", "Ag", "Sr", "Au", "Mn", "Zr", "B", "Mg", "U", "Na", "W", "Cr", "Te", "Ge", "Ta", "Pd", "Nb", "Bi", "Ir", "Pt", "Li", "Y", "V", "Hf", "Be", "As", "In", "K", "Ga", "Co", "Sb", "Mo", "Sc", "Cd", "Re"],
    ["C", "H", "O", "N", "P"],
    ["U", "Th", "Pa", "Ra", "Rn", "Po", "Pb", "Bi", "Pu", "Ac", "Tl", "Am", "Np"],
    ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Mg", "Al", "Si", "P", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Fe", "Co", "Ni", "Cu", "Ge", "Se", "Kr", "Sr", "Y", "Ru", "Sn", "Te", "I", "Xe", "Cs", "Ba", "Ce", "Nd", "Sm", "Dy", "Yb", "Lu", "Tl"],
    ["Ge", "Sm", "Gd", "Bi", "Cm", "Es", "Fm", "Md", "No", "Lr", "Rf", "Sg", "Bh", "Mt", "Rg", "Og"],
    ["B", "C", "F", "Na", "Al", "Si", "S", "K", "Ca", "Sc", "Mn", "Fe", "Cu", "Ga", "Ge", "Rb", "Ru", "Pd", "In", "Sn", "Sb", "Te", "Cs", "La", "Ce", "Pm", "Eu", "Ho", "Tm", "Lu", "Hf", "Ta", "Ir", "Au", "Hg", "Pb", "Bi", "Po", "Rn", "Ra", "Np", "Cm", "Hs"],
    ["H", "He", "Li", "Be", "N", "O", "Ne", "P", "Cl", "Ar", "Ti", "Cr", "Co", "As", "Se", "Br", "Kr", "Nb", "Mo", "Tc", "Rh", "Ag", "Cd", "Sb", "I", "Xe", "Ba", "La", "Pr", "Nd", "Dy", "Os", "Tl", "Bi", "At", "Ac", "Pa", "U", "Pu"],
    ["Mg", "Sc", "Mn", "Ga", "Ge", "Se", "Sr", "Y", "Nb", "Tc", "Ru", "Pd", "Cd", "Te", "Eu", "Tb", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Re", "Bi", "Po", "Fr", "U", "Np", "Am", "Bk", "Cf", "Db", "Hs", "Ds"],
    ["V", "Ni", "Zn", "Zr", "Sb", "W", "Pt", "Th"],
    ["Li", "Be", "B", "C", "Na", "Mg", "Al", "Si", "P", "S",  "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Tl", "Pb", "Bi", "Po", "At", "Fr", "Ra", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    ["Hg", "Br"],
    ["H", "He", "N", "O", "F", "Ne","Cl", "Ar", "Kr", "Xe", "Rn"],
    ["Li", "Be", "Na", "Mg", "Al", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    ["H", "He", "B", "C", "N", "O", "F", "Ne", "Si", "P", "S", "Cl", "Ar", "Ge", "As", "Se", "Br", "Kr", "Sb", "Te", "I", "Xe", "At", "Rn"],
    ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"],
    ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
    ["N", "P", "As", "Sb", "Bi", "Mc"],
    ["O", "S", "Se", "Te", "Po", "Lv"],
    ["F", "Cl", "Br", "I", "At", "Ts"],
    ["He", "Ne","Ar", "Kr", "Xe", "Rn", "Og"],
    ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"],
    ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn"],
    ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Po"],
    ["B", "Si", "Ge", "As", "Sb", "Te", "At"],
    ["H", "C", "N", "O", "F", "P", "S", "Cl", "Se", "Br", "I"],
    ["H", "He", "Li", "Be", "Na", "Mg", "K", "Ca", "Rb", "Sr", "Cs", "Ba", "Fr", "Ra"],
    ["B", "C", "N", "O", "F", "Ne", "Al", "Si", "P", "S", "Cl", "Ar", "Ga", "Ge", "As", "Se", "Br", "Kr", "In", "Sn", "Sb", "Te", "I", "Xe", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"],
    ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn"],
    ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No"],
    ["C", "Al", "S", "Ca", "Fe", "Cu", "As", "Ag", "Sn", "Sb", "Au", "Hg", "Pb"]#https://pubchem.ncbi.nlm.nih.gov/periodic-table/#property=YearDiscovered
]


// Initialize game state
const SPEED = 70;
const SIZE = 20;
const CANVAS_WIDTH = 620;
const CANVAS_HEIGHT = 520;
let gameInterval = null;
let direction = { x: 1, y: 0 };
let score = 0;
let foodElement = "";
let foodElementName = "";
let foodElementNumber = "";
// Posizione iniziale del serpente
let snake = [{ x: 100, y: 100 }];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mainMenu').style.display = 'block';
    updateScore(score); // Inizializza il punteggio
});

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});

// Show diet selection dropdown
function showDietSelection() {
    const dietDropdown = document.getElementById("dietDropdown");
    dietDropdown.innerHTML = ""; // Clear existing options

    DietsList.forEach(diet => {
        let option = document.createElement("option");
        option.value = diet;
        option.textContent = diet;
        dietDropdown.appendChild(option);
    });

    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('dietSelection').style.display = 'block';
}

// Start a new game with the selected diet
function startNewGame() {
    
    const selectedDiet = document.getElementById("dietDropdown").value;
    alert(`Starting game with diet: ${selectedDiet}`);

        // Get the elements for the selected diet
    let selectedElements = [];
    DietsList.forEach((diet, index) => {
        if (diet === selectedDiet) {
            selectedElements = Elements_of_Diet[index];
        }
    });
    
    // Initialize canvas and game settings here
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    snake = [{ x: 100, y: 100 }];
    direction = { x: 1, y: 0 };
    score = 0;
    foodElement = getRandomElement(selectedElements);
    foodElementName = elementNames[elements.indexOf(foodElement)];
    foodElementNumber = elementNumbers[elements.indexOf(foodElement)];

    gameInterval = setInterval(gameLoop, SPEED);
    updateScore(score);
}
    
// Randomly select an element from the selected diet
function getRandomElement(elements) {
    return elements[Math.floor(Math.random() * elements.length)];
}

// Update the score display
function updateScore(newScore) {
    document.getElementById('scoreDisplay').textContent = `Score: ${newScore}`;
}

// Genera cibo in una posizione casuale
function generateFood() {
    const maxX = Math.floor(620 / SIZE);
    const maxY = Math.floor(520 / SIZE);
    food = {
        x: Math.floor(Math.random() * maxX) * SIZE,
        y: Math.floor(Math.random() * maxY) * SIZE
    };
    
    // Select a random element and its full name
    const elementIndex = Math.floor(Math.random() * elements.length);
    foodElement = elements[elementIndex];
    foodElementName = elementNames[elementIndex];
    foodElementNumber = elementNumbers[elementIndex];

    // Display the current element name next to the score
    document.getElementById('scoreBoard').textContent = `Score: ${score} |  ${foodElementName} (Z ${foodElementNumber})`;
}

// Function to update score
function updateScore(newScore) {
    // Ottieni l'indice della dieta selezionata
    const dietIndex = DietsList.indexOf(selected_diet);

    // Verifica se l'elemento mangiato appartiene alla dieta selezionata
    if (Elements_of_Diet[dietIndex].includes(element_eaten)) {
        // Aggiungi punteggio positivo se l'elemento fa parte della dieta selezionata
        score += ((elements.length - Elements_of_Diet[dietIndex].length) / elements.length) * 100;
    } else {
        // Sottrai punteggio se l'elemento non appartiene alla dieta selezionata
        score -= (Elements_of_Diet[dietIndex].length / elements.length) * 100;
    }

    // Aggiorna il punteggio visualizzato
    updateScoreDisplay();
}

// Funzione per aggiornare la visualizzazione del punteggio
function updateScoreDisplay() {
    document.getElementById('scoreBoard').textContent = `Score: ${score.toFixed(2)} |  ${foodElementName} (Z ${foodElementNumber});
}

// Example function to start game loop
function startGameLoop(ctx) {
       if (gameInterval) clearInterval(gameInterval);
       gameInterval = setInterval(() => {
           updateGame(ctx);
       }, SPEED);
   }

function updateGame(ctx) {
    // Aggiorna la posizione del serpente
    const head = { x: snake[0].x + direction.x * SIZE, y: snake[0].y + direction.y * SIZE };
    
    // Controlla se il serpente esce dai bordi del canvas
    if (head.x < 0 || head.x >= CANVAS_WIDTH || head.y < 0 || head.y >= CANVAS_HEIGHT) {
        alert("Game Over! You hit the wall.");
        exitGame();
        return;
    }
 
    // Controlla se il serpente si scontra con se stesso
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            alert("Game Over! You ran into yourself.");
            exitGame();
            return;
        }
    }
            
    // Aggiungi la nuova testa
    snake.unshift(head);
            
    // Controlla se il serpente mangia il cibo
    if (head.x === food.x && head.y === food.y) {
        score += 10;  // Incrementa il punteggio
        updateScore(score);
        generateFood(); // Genera un nuovo cibo
    } else {
        snake.pop(); // Rimuovi l'ultimo segmento della coda
    }

    // Cancella il canvas e disegna il serpente e il cibo
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Disegna il serpente
    ctx.fillStyle = "#96AE21";
    snake.forEach(part => ctx.fillRect(part.x, part.y, SIZE, SIZE));

    // Disegna il cibo
    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(foodElement, food.x + SIZE / 2, food.y + SIZE / 2);

    // Disegna il bordo dell'area di gioco
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            
}

// Function to exit the game
function exitGame() {
    alert("Exiting the game");
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('dietSelection').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'none';

    if (gameInterval) {
        clearInterval(gameInterval);
    }
}
