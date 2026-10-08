// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// CLOSE MOBILE MENU

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ENQUIRY FORM

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;


    if (service === "") {

        alert("Please select a service.");

        return;

    }


    // MANISH ENTERPRISES WHATSAPP NUMBER

    const businessNumber = "919827041587";


    const whatsappMessage =
        `Hello Manish Enterprises,%0A%0A` +
        `Name: ${name}%0A` +
        `Mobile: ${phone}%0A` +
        `Service: ${service}%0A` +
        `Requirement: ${message}`;


    const whatsappURL =
        `https://wa.me/${businessNumber}?text=${whatsappMessage}`;


    window.open(whatsappURL, "_blank");

});