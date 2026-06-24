const translations = {

hi: {

home:"होम",

about:"हमारे बारे में",

courses:"पाठ्यक्रम",

services:"सेवाएँ",

contact:"संपर्क करें",

admission:"प्रवेश"

},

en: {

home:"Home",

about:"About",

courses:"Courses",

services:"Services",

contact:"Contact",

admission:"Admission"

}

};

function switchLanguage(lang){

const elements =
document.querySelectorAll('[data-key]');

elements.forEach(el => {

const key =
el.getAttribute('data-key');

el.textContent =
translations[lang][key];

});

localStorage.setItem(
'language',
lang
);

}

window.onload = () => {

const savedLang =
localStorage.getItem('language');

if(savedLang){

switchLanguage(savedLang);

}

};
