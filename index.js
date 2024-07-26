
const app=require('express');

let burger = document.querySelector("#burger");
let Links = document.querySelector("#nav-li");
burger.addEventListener('click',()=> {
    Links.classList.toggle("nav-show");
});

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:1300,
    delay: 10

 });

 ScrollReveal().reveal('#role', { delay: 500 , origin:'left' });
 ScrollReveal().reveal('h1', { delay: 100 , origin:'left' });
 ScrollReveal().reveal('p', { delay: 0 , origin:'bottom' });
 ScrollReveal().reveal('#main', { delay: 0 , origin:'right' });
 ScrollReveal().reveal('.bt', { delay: 700 , origin:'bottom' });

 app.listen(3000);
 