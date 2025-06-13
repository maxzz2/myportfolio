document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Видалити active клас з усіх кнопок та контенту
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Додати active клас до клікнутої кнопки
            button.classList.add('active');

            // Показати відповідний контент
            const targetTab = button.dataset.tab;
            document.getElementById(targetTab).classList.add('active');
        });
    });
});