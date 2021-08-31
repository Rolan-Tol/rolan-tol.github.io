function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }

var albumLink = document.querySelector('.album__link');
var aboutLink = document.querySelector('.about__link');

var album = document.querySelector('#album');
var about = document.querySelector('#about');

albumLink.addEventListener('click', () => {
    scrollTo(album);
})

aboutLink.addEventListener('click', () => {
    scrollTo(about);
})

