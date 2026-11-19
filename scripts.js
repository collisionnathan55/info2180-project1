/* Add your JavaScript to this file */

function onEnterEmail(event) {
    event.preventDefault();

    var input = document.querySelector(".form-group > input");
    var email = input.value;
    var message = document.querySelector(".message");

    var previousParagraphs = document.querySelectorAll(".message > p");
    if (previousParagraphs.length > 0) {
        previousParagraphs[0].remove(); 
    }

    var paragraph = document.createElement("p");
    if (email == "") {
        paragraph.innerText = "Please enter a valid email address.";
    }
    else {
        paragraph.innerText = "Thank you! Your email address \"" + email + "\" has been added to our mailing list!"
        input.value = "";
    }

    message.append(paragraph);
}

// start on load

function onPageLoad(event) {
    document.querySelector(".newsletter * form").addEventListener("submit", (event) => onEnterEmail(event));
}
document.addEventListener("DOMContentLoaded", (event) => onPageLoad(event));