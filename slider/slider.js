
const sliders = [
    "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://i.guim.co.uk/img/media/344f3917f3e40dbb745e498dd31ab84e4b098981/0_901_3000_2400/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=ac0d4a27f8be74812ac9801331e6213c",
    "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
];

let index = 0;

const sliderImg = document.getElementById("sliderImg");

function showSlider() {
    sliderImg.src = sliders[index];
}

function next() {
    index = (index + 1) % sliders.length;
    showSlider();
}

function prev() {
    index = (index - 1 + sliders.length) % sliders.length;
    showSlider();
}

showSlider();
