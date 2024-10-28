function showText() {
    const textElement = document.getElementById('txt');
    if (textElement.style.display === "none") {
        textElement.style.display = "block";  // Show text
    } else {
        textElement.style.display = "none";  // Hide text on second click (toggle)
    }
}