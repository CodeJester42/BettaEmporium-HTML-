function searchProducts() {
    var userInput = document.getElementById("searchInput").value;

    if (userInput.trim() === "") {
        alert("Please enter a search term.");
        return;
    }

    var searchUrl = "/search?query=" + encodeURIComponent(userInput);

    fetch(searchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            window.location.href = `/search-results.html?query=${encodeURIComponent(userInput)}`;
        })
        .catch(error => {
            displayErrorMessage('Error fetching search results.');
        });

};

function displaySearchResults(data) {
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";

    if (data.results && data.results.length > 0) {
        var resultList = document.createElement("ul");
        data.results.forEach(results => {
            var listItem = document.createElement("li");
            listItem.textContent = result;
            resultList.appendChild(listItem);
        });
        resultsContainer.appendChild(resultList);
    } else {
        displayErrorMessage("No results found.");
    }
};

function displayErrorMessage(message) {
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = `<p>${message}</p>`;
};

document.getElementById("navsearch").querySelector("button").addEventListener("click", function () {
    searchProducts();
});