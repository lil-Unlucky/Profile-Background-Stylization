let set_color = document.querySelectorAll('.set-color');
let body = document.querySelector('body');

if (set_color) {
    set_color.forEach(item => {
        item.addEventListener('click', () => {
            const color = item.getAttribute('data-color');
            body.style.backgroundColor = color;

            set_color.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
}