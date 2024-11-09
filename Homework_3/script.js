const words = ["apple", "bread", "chair", "dance", "eagle", "flame", "grape", "house", "igloo", "jelly"];
let selectedWord = "";
let attempts = 0;
const maxAttempts = 5;
let guessedLetters = [];

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    attempts = 0;
    guessedLetters = selectedWord.slice(0, 2).split("");
    updateWordDisplay();
    document.getElementById("message").textContent = "";
    document.getElementById("new-game-button").style.display = "none";
    document.getElementById("guess-button").style.display = "inline-block";
    document.getElementById("guess-input").style.display = "inline-block";
}

function updateWordDisplay() {
    let displayWord = "";
    for (let i = 0; i < selectedWord.length; i++) {
        if (guessedLetters.includes(selectedWord[i])) {
            displayWord += selectedWord[i];
        } else {
            displayWord += "_";
        }
    }
    document.getElementById("word-container").innerHTML = displayWord;
}

function checkGuess() {
    const guess = document.getElementById("guess-input").value.toLowerCase();
    if (guess.length !== 1) {
        alert("Please enter a single letter.");
        return;
    }

    if (!guessedLetters.includes(guess)) {
        guessedLetters.push(guess);
    }

    updateWordDisplay();
    attempts++;

    if (document.getElementById("word-container").innerHTML === selectedWord) {
        const message = "Congratulations! You guessed the word!";
        document.getElementById("message").textContent = message;
        alert(message);
        document.getElementById("new-game-button").style.display = "block";
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("guess-input").style.display = "none";
    } else if (attempts >= maxAttempts) {
        const message = `Game over! The word was "${selectedWord}".`;
        document.getElementById("message").textContent = message;
        alert(message);
        document.getElementById("new-game-button").style.display = "block";
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("guess-input").style.display = "none";
    } else {
        document.getElementById("message").textContent = `Attempts left: ${maxAttempts - attempts}`;
    }

    document.getElementById("guess-input").value = "";
}

document.getElementById("guess-button").addEventListener("click", checkGuess);
document.getElementById("new-game-button").addEventListener("click", startGame);

startGame();
