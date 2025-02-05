const dictionary = new Set(JSON.parse(localStorage.getItem("dictionary")) || []);

function saveDictionary() {
    localStorage.setItem("dictionary", JSON.stringify([...dictionary]));
}

function addWord() {
    const inputField = document.getElementById("word-input");
    const message = document.getElementById("message");
    const word = inputField.value.trim().toLowerCase();

    if (word === "") {
        message.textContent = "⚠️ Enter a word!";
        message.style.color = "red";
        return;
    }
    if (dictionary.has(word)) {
        message.textContent = `⚠️ The word "${word}" is already in the dictionary.`;
        message.style.color = "orange";
    } else {
        dictionary.add(word);
        saveDictionary();
        message.textContent = `✅ The word "${word}" has been added to the dictionary!`;
        message.style.color = "green";
        inputField.value = "";
    }
}

function searchWord() {
    const inputField = document.getElementById("word-input");
    const message = document.getElementById("message");
    const word = inputField.value.trim().toLowerCase();

    if (word === "") {
        message.textContent = "⚠️ Enter a word to search!";
        message.style.color = "red";
        return;
    }
    if (dictionary.has(word)) {
        message.textContent = `✅ The word "${word}" is in the dictionary!`;
        message.style.color = "green";
    } else {
        message.textContent = `❌ The word "${word}" is NOT in the dictionary.`;
        message.style.color = "red";
    }
}

document.addEventListener("DOMContentLoaded", function () {
// Asigurăm că input-ul este gol la
