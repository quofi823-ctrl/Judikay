const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();

const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!email || !newsletterForm.checkValidity()) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.textContent =
        "Thanks for your interest! Newsletter subscriptions are not connected yet.";

    newsletterForm.reset();
});