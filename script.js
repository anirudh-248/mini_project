document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.images .item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach(item => observer.observe(item));
});

// Get modal elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Add click event listeners to images
document.querySelectorAll(".item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src; // Set modal image source to clicked image
    });
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal on outside click
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
