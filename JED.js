console.log("JED.js è stato caricato correttamente");

// List of diet options and elements associated with each diet
const DietsList = [
    "Life Elements", "Air Elements", "Critical Elements", 
    "Smartphone Elements", "DNA Elements", "Radioactive Elements",
    "Safe Fusion Reactor Elements", "Elements Dedicated to Scientists", 
    "Latin Derived Elements", "Greek Derived Elements", 
    "City or Place Named Elements", "Non-latin/Greek/City Derived Names", 
    "Solid State Elements", "Liquid State Elements", 
    "Gaseous State Elements", "Metals", "Non-Metals", 
    "Group I Elements", "Group II Elements", 
    "Group XV Elements", "Group XVI Elements", 
    "Group XVII Elements", "Group XVIII Elements", 
    "Lanthanoids", "Actinoids", "Transition Metals", 
    "Post-Transition Metals", "Metalloids", "Reactive Non-Metals", 
    "s-Block Elements", "p-Block Elements", "d-Block Elements", 
    "f-Block Elements", "Ancient Known Elements"
];

// Initialize game state
const SPEED = 100;
const SIZE = 20;
let gameInterval = null;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mainMenu').style.display = 'block';
    console.log("Menu principale mostrato"); 
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

    // Initialize canvas and game settings here
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    document.getElementById('dietSelection').style.display = 'none';
    canvas.style.display = 'block';

    // Additional setup for game loop
    startGameLoop(ctx);
}

let snake = [{ x: 100, y: 100 }]; // Definisci il serpente come un array di coordinate
let dx = SIZE; // Imposta la direzione iniziale (movimento verso destra)
let dy = 0;

// Example function to start game loop
function startGameLoop(ctx) {
       gameInterval = setInterval(() => {
        // Aggiorna la posizione del serpente
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(head); // Aggiungi una nuova testa
        snake.pop(); // Rimuovi l'ultimo blocco della coda
           
        // Game update logic here (e.g., snake movement, collision checks)
        ctx.clearRect(0, 0, 620, 520);
        ctx.fillStyle = "#96AE21";
        snake.forEach(part => ctx.fillRect(part.x, part.y, SIZE, SIZE));
    }, SPEED);
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
