// Mobile Navigation

const navLinks =
document.querySelectorAll('.navbar a');

navLinks.forEach(link => {

link.addEventListener('click', () => {

navLinks.forEach(item => {
item.classList.remove('active');
});

link.classList.add('active');

});

});

// Smooth Scroll

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener('click',
function(e){

e.preventDefault();

document
.querySelector(
this.getAttribute('href'))
.scrollIntoView({

behavior:'smooth'

});

});

});

// Scroll Animation

window.addEventListener('scroll', () => {

const cards =
document.querySelectorAll(
'.service-card,.course-card,.research-card,.achievement-card'
);

cards.forEach(card => {

const cardTop =
card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){

card.classList.add('show');

}

});

});
