document.addEventListener("DOMContentLoaded", function () {
    const DICTIONARY = new Set(JSON.parse(localStorage.getItem("dictionary")) || []);
    function saveDictionary() {
        localStorage.setItem("dictionary", JSON.stringify([...DICTIONARY]));
    }
    const ADD_WORD_BUTTON = document.getElementById("add-word");
    const SEARCH_WORD_BUTTON = document.getElementById("search-word-btn");
    const MESSAGE = document.getElementById("message");
    ADD_WORD_BUTTON.addEventListener("click", function () {
        const WORD_INPUT = document.getElementById("new-word");
        const WORD = WORD_INPUT.value.trim().toLowerCase();
        if (WORD === "") {
            MESSAGE.textContent = "⚠️ Enter a word!";
            MESSAGE.style.color = "red";
            return;
        }
        if (DICTIONARY.has(WORD)) {
            MESSAGE.textContent = `⚠️ The word "${WORD}" is already in the dictionary.`;
            MESSAGE.style.color = "orange";
        } else {
            DICTIONARY.add(WORD);
            saveDictionary();
            MESSAGE.textContent = `✅ The word "${WORD}" has been added to the dictionary!`;
            MESSAGE.style.color = "green";
            WORD_INPUT.value = "";
        }
    });

    SEARCH_WORD_BUTTON.addEventListener("click", function () {
        const SEARCH_INPUT = document.getElementById("search-word");
        const WORD = SEARCH_INPUT.value.trim().toLowerCase();
        if (WORD === "") {
            MESSAGE.textContent = "⚠️ Enter a word to search!";
            MESSAGE.style.color = "red";
            return;
        }
        if (DICTIONARY.has(WORD)) {
            MESSAGE.textContent = `✅ The word "${WORD}" is in the dictionary!`;
            MESSAGE.style.color = "green";
        } else {
            MESSAGE.textContent = `❌ The word "${WORD}" is NOT in the dictionary.`;
            MESSAGE.style.color = "red";
        }
    });
});
