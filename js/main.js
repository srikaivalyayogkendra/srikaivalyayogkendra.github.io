// Mobile Menu Future Support

console.log("Shri Kaivalya Yoga Kendra Website Loaded");

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href'))
.scrollIntoView({
behavior: 'smooth'
});

});

});

// Current Year Auto Update

const yearElement =
document.getElementById("year");

if(yearElement){

yearElement.textContent =
new Date().getFullYear();

}
