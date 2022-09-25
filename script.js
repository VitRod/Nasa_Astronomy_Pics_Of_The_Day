const resultsNav = document.getElementById('resultsNav');
const favoritesNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

// NASA DEMO API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];
let favorites = {};

function showContent(page) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    loader.classList.add('hidden');
    if (page === 'results') {
      resultsNav.classList.remove('hidden');
      favoritesNav.classList.add('hidden');
    } else {
      resultsNav.classList.add('hidden');
      favoritesNav.classList.remove('hidden');
    }
  }