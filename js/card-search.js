document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    document.querySelector('input').addEventListener('input', () => {
        const search_words = document.querySelector('input').value.trim().toLowerCase().split(/\s+/);
        cards.forEach(card => {
            const spanText = card.querySelector('span').textContent.toLowerCase();
            if (search_words.every(word => spanText.includes(word))) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});