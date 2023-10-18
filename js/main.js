const arrCheckbox = document.querySelectorAll('.origin-checkbox');
const mainCheckbox = document.querySelector('.origin-checkbox:first-child');

mainCheckbox.addEventListener('change', () => {
    markCheckbox(mainCheckbox.checked);
});

const markCheckbox = value => {
    for (let i = 1; i < arrCheckbox.length; i++) {
        arrCheckbox[i].checked = value;
    }
};
