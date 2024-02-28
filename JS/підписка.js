header = document.getElementById("header");
closeHeaderButton = document.getElementById("close-button");

function showHeader() {
    header.style.display = "block";
}

closeHeaderButton.addEventListener("click", function() {
    header.style.display = "none";
})

setTimeout(showHeader, 5000);