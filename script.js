document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        showMessage("Veuillez remplir tous les champs du formulaire.", "error");
    } else if (!emailPattern.test(email)) {
        showMessage("Veuillez entrer une adresse e-mail valide.", "error");
    } else {
        showMessage(`Merci ${name}, votre message a été envoyé avec succès !`, "success");
        document.getElementById("contactForm").reset(); 
    }
});

function showMessage(message, type) {
    const messageDiv = document.getElementById("confirmationMessage");
    messageDiv.textContent = message;
    messageDiv.style.display = "block";

    if (type === "success") {
        messageDiv.classList.remove("text-danger");
        messageDiv.classList.add("text-success");
    } else if (type === "error") {
        messageDiv.classList.remove("text-success");
        messageDiv.classList.add("text-danger");
    }

    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 5000);
}

document.getElementById("contactForm").reset();
