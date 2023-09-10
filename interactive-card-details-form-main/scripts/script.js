let submit = document.getElementById('submit');
let rightContainer = document.getElementById('rightContainer');
let form = document.getElementById('form');
let appreciate = document.getElementById('appreciate');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.opacity = "0"
    setTimeout(() => {
        form.style.display ="none"
        appreciate.style.display="flex"
        appreciate.style.opacity="1"
    },200);

});