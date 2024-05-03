function searchProducts() {
    var userInput = document.getElementById("searchInput").value;

    if (userInput.trim() === "") {
        alert("Please enter a search term.");
        return;
    }

    var searchUrl = "/search?query=" + encodeURIComponent(userInput);

    console.log("Search URL: " + searchUrl);

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Search Results:", data.results);
        })
        .catch(error => {
            console.error('Error:', error);
        })
}