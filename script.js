/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});


/* =========================
   PROJECT FILTER
========================= */

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Remove active class
        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        const selectedCategory =
            filter.getAttribute("data-filter");

        projects.forEach(project => {

            const category =
                project.classList.contains(selectedCategory);

            if (
                selectedCategory === "all" ||
                category
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const projectType =
        document.getElementById("projectType").value;

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        projectType === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all the fields.";

        return;

    }


    formMessage.textContent =
        `Thank you, ${name}! Your enquiry has been received.`;

    contactForm.reset();

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".about, .service-card, .project-card, .process-item, .contact"
    );


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 80) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
