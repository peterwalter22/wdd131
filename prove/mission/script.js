let selectElem = document.querySelector('select');

selectElem.addEventListener('change', () => {
    if (selectElem.value === 'dark') {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
});

// optional: start in light mode by default
document.body.classList.add("light");
