console.log("JED.js è stato caricato correttamente");

// Define the elements
const elements = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md"
];

const elementNames = [
    "Idrogeno", "Elio", "Litio", "Berillio", "Boro", "Carbonio", "Azoto", "Ossigeno", "Fluoro", "Neon", "Sodio", "Magnesio", "Alluminio", "Silicio", "Fosforo", "Zolfo", "Cloro", "Argon", "Potassio", "Calcio", "Scandio", "Titanio", "Vanadio", "Cromo", "Manganese", "Ferro", "Cobalto", "Nichel", "Rame", "Zinco", "Gallio", "Germanio", "Arsenico", "Selenio", "Bromo", "Kripton", "Rubidio", "Stronzio", "Ittrio", "Zirconio", "Niobio", "Molibdeno", "Tecnezio", "Rutenio", "Rodio", "Palladio", "Argento", "Cadmio", "Indio", "Stagno", "Antimonio", "Tellurio", "Iodio", "Xeno", "Cesio", "Bario", "Lantanio", "Cerio", "Praseodimio", "Neodimio", "Promezio", "Samario", "Europio", "Gadolinio", "Terbio", "Disprosio", "Olmio", "Erbio", "Tulio", "Itterbio", "Lutezio", "Afnio", "Tantalio", "Tungsteno", "Renio", "Osmio", "Iridio", "Platino", "Oro", "Mercurio", "Tallio", "Piombo", "Bismuto", "Polonio", "Astato", "Radon", "Francio", "Radio", "Attinio", "Torio", "Protoattinio", "Uranio", "Nettunio", "Plutonio", "Americio", "Curio", "Berkelio", "Californio", "Einsteinio", "Fermio", "Mendelevio"
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

const dietToElements = {
    "elementi della vita": ["O", "C", "H", "N", "P", "Ca", "S", "K", "Na", "Cl", "Mg", "Fe", "Zn", "Cr", "Co", "Cu", "Mn", "Mo", "Ni", "V", "Si", "B", "Se", "F", "I", "Br"],
    "elemeni dell'aria": ["N", "O", "Ar", "C", "Ne", "He", "Kr", "Xe", "Rn"],
    "elementi critici": ["Sb", "Ba", "Al", "Be", "Bi", "B", "Co", "F", "Ga", "Ge", "Hf", "In", "Li", "Mg","Nb","P", "Sc","Si","Sr","Ta","Ti","W","V"],
    "elementi degli smartphone": ["Cu", "Al", "Ba", "Ni", "Ca", "Sn", "Fe", "Zn", "Ti", "Pb", "Ag", "Sr", "Au", "Mn", "Zr", "B", "Mg", "U", "Na", "W", "Cr", "Te", "Ge", "Ta", "Pd", "Nb", "Bi", "Ir", "Pt", "Li", "Y", "V", "Hf", "Be", "As", "In", "K", "Ga", "Co", "Sb", "Mo", "Sc", "Cd", "Re"],
    "elementi del DNA": ["C", "H", "O", "N", "P"],
    "elementi radioattivi (serie di decadimento U-Th)": ["U", "Th", "Pa", "Ra", "Rn", "Po", "Pb", "Bi", "Pu", "Ac", "Tl", "Am", "Np"],
    "elementi considerati sicuri (grado A-E)\n in un reattore nucleare a fusione": ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Mg", "Al", "Si", "P", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Fe", "Co", "Ni", "Cu", "Ge", "Se", "Kr", "Sr", "Y", "Ru", "Sn", "Te", "I", "Xe", "Cs", "Ba", "Ce", "Nd", "Sm", "Dy", "Yb", "Lu", "Tl"],
    "elementi dedicati a scienziati": ["Ge", "Sm", "Gd", "Bi", "Cm", "Es", "Fm", "Md"],
    "elementi con nome di derivazione latina": ["B", "C", "F", "Na", "Al", "Si", "S", "K", "Ca", "Sc", "Mn", "Fe", "Cu", "Ga", "Ge", "Rb", "Ru", "Pd", "In", "Sn", "Sb", "Te", "Cs", "La", "Ce", "Pm", "Eu", "Ho", "Tm", "Lu", "Hf", "Ta", "Ir", "Au", "Hg", "Pb", "Bi", "Po", "Rn", "Ra", "Np", "Cm",],
    "elementi con nome di derivazione greca": ["H", "He", "Li", "Be", "N", "O", "Ne", "P", "Cl", "Ar", "Ti", "Cr", "Co", "As", "Se", "Br", "Kr", "Nb", "Mo", "Tc", "Rh", "Ag", "Cd", "Sb", "I", "Xe", "Ba", "La", "Pr", "Nd", "Dy", "Os", "Tl", "Bi", "At", "Ac", "Pa", "U", "Pu"],
    "elementi con nomi di città,\nstati, o di chissà dove": ["Mg", "Sc", "Mn", "Ga", "Ge", "Se", "Sr", "Y", "Nb", "Tc", "Ru", "Pd", "Cd", "Te", "Eu", "Tb", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Re", "Bi", "Po", "Fr", "U", "Np", "Am", "Bk", "Cf"],
    "elementi con nomi che non derivano nè dal latino, nè dal greco,\ne nemmeno da città o stati": ["V", "Ni", "Zn", "Zr", "Sb", "W", "Pt", "Th"],
    "elementi allo stato solido alle condizioni standard di temperatura e pressione": ["Li", "Be", "B", "C", "Na", "Mg", "Al", "Si", "P", "S",  "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Tl", "Pb", "Bi", "Po", "At", "Fr", "Ra", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md"],
    "elementi allo stato liquido alle condizioni standard di temperatura e pressione": ["Hg", "Br"],
    "elementi allo stato gassoso alle condizioni standard di temperatura e pressione": ["H", "He", "N", "O", "F", "Ne","Cl", "Ar", "Kr", "Xe", "Rn"],
    "metalli": ["Li", "Be", "Na", "Mg", "Al", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md"],
    "non metalli": ["H", "He", "B", "C", "N", "O", "F", "Ne", "Si", "P", "S", "Cl", "Ar", "Ge", "As", "Se", "Br", "Kr", "Sb", "Te", "I", "Xe", "At", "Rn"],
    "elementi del primo gruppo (idrogeno & metalli alcalini)": ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"],
    "elementi del secondo gruppo (metalli alcalino terrosi)": ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
    "elementi del 15esimo gruppo (pnicogeni)": ["N", "P", "As", "Sb", "Bi"],
    "elementi del gruppo XVI (calcogeni)": ["O", "S", "Se", "Te", "Po"],
    "elementi del gruppo XVII (alogeni)": ["F", "Cl", "Br", "I", "At"],
    "elementi del 18esimo gruppo (gas nobili)": ["He", "Ne","Ar", "Kr", "Xe", "Rn"],
    "lantanoidi": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"],
    "attinoidi": ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md"],
    "metalli di transizione": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg"],
    "metalli post-transizione": ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Po"],
    "semimetalli": ["B", "Si", "Ge", "As", "Sb", "Te", "At"],
    "non metalli reattivi": ["H", "C", "N", "O", "F", "P", "S", "Cl", "Se", "Br", "I"],
    "elementi del blocco s": ["H", "He", "Li", "Be", "Na", "Mg", "K", "Ca", "Rb", "Sr", "Cs", "Ba", "Fr", "Ra"],
    "elementi del blocco p": ["B", "C", "N", "O", "F", "Ne", "Al", "Si", "P", "S", "Cl", "Ar", "Ga", "Ge", "As", "Se", "Br", "Kr", "In", "Sn", "Sb", "Te", "I", "Xe", "Tl", "Pb", "Bi", "Po", "At", "Rn"],
    "elementi del blocco d": ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg"],
    "elementi del blocco f": ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md"],
    "elementi noti fin dai tempi antichi": ["C", "Al", "S", "Ca", "Fe", "Cu", "As", "Ag", "Sn", "Sb", "Au", "Hg", "Pb"]
};


// Initialize game state
const SPEED = 90;
const SIZE = 20;
const CANVAS_WIDTH = 620;
const CANVAS_HEIGHT = 520;
let gameInterval = null;
let direction = { x: 1, y: 0 };
let score = 0;
let food = {};
let selectedDiet = "";
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

function showDietSelection() {
    const dietDropdown = document.getElementById("dietDropdown");
    dietDropdown.innerHTML = "";

    DietsList.forEach(diet => {
        let option = document.createElement("option");
        option.value = diet;
        option.textContent = diet;
        dietDropdown.appendChild(option);
    });

    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('dietSelection').style.display = 'block';
}

function startNewGame() {
    selectedDiet = document.getElementById("dietDropdown").value;
    alert(`Starting game with diet: ${selectedDiet}`);

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    document.getElementById('dietSelection').style.display = 'none';
    canvas.style.display = 'block';

    snake = [{ x: 100, y: 100 }];
    direction = { x: 1, y: 0 };
    score = 0;
    updateScore(score);

    
    generateFood();
    startGameLoop(ctx);
}

function generateFood() {
    const maxX = Math.floor(620 / SIZE);
    const maxY = Math.floor(520 / SIZE);
    food = {
        x: Math.floor(Math.random() * maxX) * SIZE,
        y: Math.floor(Math.random() * maxY) * SIZE
    };
    
    const elementIndex = Math.floor(Math.random() * elements.length);
    foodElement = elements[elementIndex];
    foodElementName = elementNames[elementIndex];
    foodElementNumber = elementNumbers[elementIndex];

    updateScore(score); 
}

function startGameLoop(ctx) {
    gameInterval = setInterval(() => {
        updateGame(ctx);
    }, SPEED);
}

function updateScore(newScore) {
    document.getElementById('scoreBoard').innerText = `${selectedDiet}\nScore: ${newScore} | ${foodElementName}, ${foodElement} (Z = ${foodElementNumber})`;

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

    // Draw the snake
    ctx.fillStyle = "#96AE21";
    snake.forEach(part => ctx.fillRect(part.x, part.y, SIZE, SIZE));

    // Draw the food element symbol
    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(foodElement, food.x + SIZE / 2, food.y + SIZE / 2);

    // Draw game area border
    ctx.strokeStyle = "#83B7DE";
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
