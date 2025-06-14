let plusBtns = document.querySelectorAll(".plus");
let details = document.querySelector(".details");
let closeBtn = document.querySelector(".close-btn");
let topSection = document.querySelector(".top");
let headerTop = document.querySelector(".header-top");
let bottomSection = document.querySelector(".bottom");

plusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        details.classList.add("active"); // Show modal using class
        toggleSlideIn();
    });
});

const toggleSlideIn = () => {
    topSection.classList.add("active");
    headerTop.classList.add("active");
    bottomSection.classList.add("active");
    closeBtn.classList.add("active");
};

closeBtn.addEventListener("click", () => {
    details.classList.remove("active"); // Hide modal using class
    topSection.classList.remove("active");
    headerTop.classList.remove("active");
    bottomSection.classList.remove("active");
    closeBtn.classList.remove("active");
});
