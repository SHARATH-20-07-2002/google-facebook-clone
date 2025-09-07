// Get elements
const searchInput = document.querySelector("#search-input");
const googleSearchBtn = document.querySelector(".google-search-btn");
const luckySearchBtn = document.querySelector(".lucky-search-btn");

// Press Enter → search
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        search();
    }
});

// Click "Google Search" → search
googleSearchBtn.addEventListener("click", search);

// Click "I'm Feeling Lucky" → search
luckySearchBtn.addEventListener("click", search);

// Search function
function search() {
    const input = searchInput.value.trim().toLowerCase();

    if (input === "facebook") {
        // Redirect from googgle → facebook folder
        window.location.href = "../facebook/index2.html";
    } else {
        alert("No results found for: " + input);
    }
}
