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
const SPEED = 70;
const SIZE = 20;
const CANVAS_WIDTH = 620;
const CANVAS_HEIGHT = 520;
let gameInterval = null;
let direction = { x: 1, y: 0 };

// Posizione iniziale del serpente
let snake = [{ x: 100, y: 100 }];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mainMenu').style.display = 'block';
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

    // Initialize canvas and game settings here
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
    
    // Additional setup for game loop
    generateFood();
    startGameLoop(ctx);
}

// Genera cibo in una posizione casuale
function generateFood() {
    const maxX = Math.floor(620 / SIZE);
    const maxY = Math.floor(520 / SIZE);
    food = {
        x: Math.floor(Math.random() * maxX) * SIZE,
        y: Math.floor(Math.random() * maxY) * SIZE
    };
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

        // Disegna il bordo dell'area di gioco
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            
        ctx.fillStyle = "#96AE21";
        snake.forEach(part => ctx.fillRect(part.x, part.y, SIZE, SIZE));

        // Disegna il cibo
        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, SIZE, SIZE);
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
