// Trova il bottone e il body
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Aggiungi un listener per il click sul bottone
themeToggleButton.addEventListener('click', () => {
    // Aggiungi o rimuovi la classe 'dark-mode' per attivare/disattivare il tema scuro
    body.classList.toggle('dark-mode');

    // Modifica il testo del bottone a seconda del tema attivo
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Cambia Tema (Chiaro)';
    } else {
        themeToggleButton.textContent = 'Cambia Tema (Scuro)';
    }
});
