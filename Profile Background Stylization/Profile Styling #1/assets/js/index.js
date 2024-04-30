const backgrounds = document.querySelectorAll('.background');
const root = document.querySelector('.container');

if (backgrounds.length) {
    backgrounds.forEach((item) => {
        item.addEventListener("click", () => {
            let image = item.dataset.back;
            root.style.backgroundImage = `url(${image})`;
        });
    });
}