var nav = document.getElementById('nav');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset > 0) {
        nav.style.transition = "background-color 300ms";
        nav.style.backgroundColor = "white";

    } else {
        nav.style.transition = "background-color 900ms";
        nav.style.backgroundColor = "#d7d4e04b";
    }
});

// var nav = document.getElementById("nav");
// window.addEventListener("scroll", function() {
//     if (window.scrollY > 0) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled')
//     }
// })
// ------------------------------------------------------- //
// const nav = document.getElementById('nav');
// const navBtn = document.querySelector('.nav-btn');
// navBtn.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');
// });