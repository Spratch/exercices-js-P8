document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("myButton");
    const body = document.body;
    
    const paragraph = document.createElement("p");
    paragraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    
    button.addEventListener('click', () => {
        body.appendChild(paragraph);
    })
});
