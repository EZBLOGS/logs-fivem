function switchLanguage(lang) {
    document.querySelectorAll("[data-fr]").forEach(element => {
        element.innerHTML = element.getAttribute(`data-${lang}`);
    });
}

function showSection(section) {
    document.querySelectorAll(".content").forEach(content => {
        content.classList.add("hidden");
    });
    document.getElementById(section).classList.remove("hidden");
}
