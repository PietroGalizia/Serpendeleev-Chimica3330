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
    "elements of life", "critical raw elements", "elements of a smartphone",
    "elements of DNA", "radioactive elements (U-Th decay series)",
    "elements considered safety (grades A-E) in the first wall of fusion power plan",
    "elements dedicated to scientists", "elements with names of latin derivation",
    "elements with names of greek derivation",
    "elements with names derived from cities, countries, or elsewhere",
    "elements with names not derived from latin or greek, nor from cities or countries",
    "elements in solid state at standard temperature and pressure",
    "elements in liquid state at standard temperature and pressure",
    "elements in gas state at standard temperature and pressure", "metals", "nonmetals",
    "elements of group I (Hydrogen & alkali metals)",
    "elements of group II (Alkaline earth metals)", "elements of group XV (Pnictogens)",
    "elements of group XVI (Chalcogens)", "elements of group XVII (Halogens)",
    "elements of group XVIII (Noblegases)", "lanthanides", "actinides",
    "transition metals", "post-transition metals", "metalloids", "reactive nonmetals",
    "s-block elements", "p-block elements", "d-block elements", "f-block elemnts"
];

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
    updateScore(score);
});

document.addEventListener('keydown', (event) => {
    console.log(event.key); 
    
    if (event.key === ' ') {
        event.preventDefault(); // Previene il comportamento predefinito della barra spaziatrice
        changeFoodElement();    // Cambia l'elemento del cibo senza cambiarne la posizione
    } else {
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
    }
});

function changeFoodElement() {
    console.log("Changing food element...");
    
    const randomIndex = Math.floor(Math.random() * elements.length);
    foodElement = elements[randomIndex];
    foodElementName = elementNames[randomIndex];
    foodElementNumber = elementNumbers[randomIndex];

    console.log("New food element:", foodElement, foodElementName, foodElementNumber);

    drawFood();
    updateScore(score); 
}

function drawFood() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    console.log(`Clearing old food at (${food.x}, ${food.y})`);
    ctx.clearRect(food.x, food.y, SIZE, SIZE);

    ctx.fillStyle = "red"; // Colore per il simbolo dell'elemento
    ctx.font = "20px Arial"; // Imposta la dimensione del font
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Disegna il simbolo dell'elemento nel punto (x, y) del cibo
    ctx.fillText(foodElement, food.x + SIZE / 2, food.y + SIZE / 2);
    console.log(`Drawing new food: ${foodElement} at (${food.x}, ${food.y})`);
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

    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('dietSelection').style.display = 'block';
}

function startNewGame() {
    selectedDiet = document.getElementById("dietDropdown").value;
    alert(`1) Eat the ${selectedDiet},\n\n2) Skip the elements that don’t belong to this diet by pressing the spacebar.\n\n3) Stay Hungry! Stay Periodic!`);

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

    console.log(`Initial food position: (${food.x}, ${food.y})`);
    
    const elementIndex = Math.floor(Math.random() * elements.length);
    foodElement = elements[elementIndex];
    foodElementName = elementNames[elementIndex];
    foodElementNumber = elementNumbers[elementIndex];

    drawFood();
    updateScore(score);
}

function startGameLoop(ctx) {
    gameInterval = setInterval(() => {
        updateGame(ctx);
    }, SPEED);
}

function updateScore(newScore) {
    document.getElementById('scoreBoard').innerText = 
        `${selectedDiet}\nScore: ${newScore} | [${foodElement}] ${foodElementName}, Z = ${foodElementNumber}`;
}

function updateGame(ctx) {
    // Aggiorna la posizione del serpente
    const head = { x: snake[0].x + direction.x * SIZE, y: snake[0].y + direction.y * SIZE };
    
    // Controlla se il serpente esce dai bordi del canvas
    if (head.x < 0 || head.x >= CANVAS_WIDTH || head.y < 0 || head.y >= CANVAS_HEIGHT) {
        alert("Stay Hungry! Stay Periodic!");
        exitGame();
        return;
    }
 
    // Controlla se il serpente si scontra con se stesso
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            alert("Stay Hungry! Stay Periodic!");
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
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('dietSelection').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'none';

    if (gameInterval) {
        clearInterval(gameInterval);
    }
}
