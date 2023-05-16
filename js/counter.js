// Variabili per la visualizzazione e interazione con il contatore
const counterDisplay = document.querySelector("#counter");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const totalClicks = document.querySelector("#total_clicks");
const resetButton = document.querySelector("#reset");
const setGoalInput = document.querySelector("#goal");
const congratulation = document.querySelector("#congratulation");

// Variabili per mantenere lo stato del contatore
let counter = 0;
let clicks = 0;

// Funzione per incrementare il contatore dei clic
function clicks_counter() {
    ++clicks;
   totalClicks.innerHTML = `Total clicks: ${clicks}`;
}

// Funzione per incrementare il valore del contatore
function increment() {
    counter ++;
    counterDisplay.innerHTML = `Counter: ${counter}`;
    clicks_counter();
}

// Funzione per decrementare il valore del contatore
function decrement() {
    counter --;
    counterDisplay.innerHTML = `Counter: ${counter}`
    clicks_counter();
}

// Funzione per resettare il valore del contatore e del contatore dei clic
function reset_counter() {
    counter = 0;
    clicks = 0;
    counterDisplay.innerHTML = `Counter: ${counter}`;
    totalClicks.innerHTML = `Total clicks: ${clicks}`;
    congratulation.innerHTML = "Congratulations! Goal reached!";
    congratulation.style.visibility = "hidden"
    setGoalInput.value = "";
}

// Funzione per controllare se il valore del contatore ha raggiunto il valore obiettivo impostato
function check_goal_reached() {
    let setGoal = Number(setGoalInput.value);
    if(setGoal != "" && setGoal <= counter){
        congratulation.style.visibility = "visible";
    }
    else{
        congratulation.style.visibility = "hidden";
    }
}

// Eventi per i pulsanti +, - e reset
resetButton.addEventListener('click', () => {
    reset_counter();
});

incrementButton.addEventListener('click', () => {
    increment();
    check_goal_reached();
});

decrementButton.addEventListener('click', () => {
    decrement();
    check_goal_reached();
});

setGoalInput.addEventListener("input", () => {
    check_goal_reached();
});