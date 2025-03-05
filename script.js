function changeLanguage(lang) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.opacity = "0");

    setTimeout(() => {
        if (lang === 'fr') {
            document.getElementById("introduction").innerHTML = `
                <h1>Bienvenue dans le Wiki</h1>
                <p>Ce guide vous aidera à configurer correctement le projet.</p>
                <img src="images/wiki-example.png" alt="Exemple du Wiki" class="image">
            `;

            document.getElementById("setup").innerHTML = `
                <h1>Installation & Configuration</h1>
                <p>Suivez ces étapes :</p>
                <ol>
                    <li>Téléchargez le projet depuis GitHub</li>
                    <li>Ajoutez vos informations de configuration</li>
                    <li>Lancez le serveur</li>
                </ol>
                <img src="images/setup-guide.png" alt="Guide de configuration" class="image">
            `;
        } else {
            document.getElementById("introduction").innerHTML = `
                <h1>Welcome to the Wiki</h1>
                <p>This guide will help you set up the project correctly.</p>
                <img src="images/wiki-example.png" alt="Wiki Example" class="image">
            `;

            document.getElementById("setup").innerHTML = `
                <h1>Installation & Configuration</h1>
                <p>Follow these steps:</p>
                <ol>
                    <li>Download the project from GitHub</li>
                    <li>Add your configuration details</li>
                    <li>Start the server</li>
                </ol>
                <img src="images/setup-guide.png" alt="Setup Guide" class="image">
            `;
        }

        sections.forEach(sec => sec.style.opacity = "1");
    }, 300);
}
