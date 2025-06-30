const typeSuggestion = () => {
    const input = document.querySelector("input");
    const blanks = document.querySelectorAll(".searches > li > strong");
    const searches = document.querySelector(".searches");

    let debounce;

    input.addEventListener("input", (e) => {
        clearTimeout(debounce);

        debounce = setTimeout(() => {
            if (e.target.value.length > 0) {
                searches.classList.add("active");
            } else {
                searches.classList.remove("active");
            }

            Array.from(blanks).forEach((blank) => {
                blank.textContent = e.target.value;
            });
        }, 50);
    });
};

typeSuggestion();
