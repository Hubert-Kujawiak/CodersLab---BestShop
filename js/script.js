const hamMen = document.querySelector('.hambMenu');
console.log(hamMen);
const menHamburger = document.querySelector('.visible');

hamMen.addEventListener('click', function () {
    console.log('klik');
    menHamburger.classList.toggle('visible');
});