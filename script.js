// Welcome Message

function showMessage() {
    alert("Welcome to Soujana's Portfolio! 🌸");
}

// Console Message

console.log("Welcome to Soujana's Personal Portfolio!");

// Current Year

document.addEventListener("DOMContentLoaded", function() {

    const year = new Date().getFullYear();

    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML =
        "© " + year + " Soujana | My Personal Portfolio";
    }

});