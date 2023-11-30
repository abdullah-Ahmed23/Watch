const navbar = document.getElementById('navbar');
const links = navbar.getElementsByTagName('a');
const home = document.getElementById('home')
const drop = document.getElementById('drop')
const brand = document.getElementById('brand')
const bar = document.getElementById('bar')
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 600) {
    navbar.style.width = '100%'
    navbar.style.backgroundColor = '#000'; 
    home.style.color = '#fff'
    drop.style.color = '#fff'
    brand.style.display = 'none'
    bar.style.color = 'white'
    
    for (let i = 0; i < links.length; i++) {
      if (links[i].className === 'nav-link') {
        links[i].style.color = '#fff'; 
      }
    }
  } else {
    navbar.style.backgroundColor = 'white'; 
    for (let i = 0; i < links.length; i++) {
      if (links[i].className === 'nav-link') {
        links[i].style.color = '#000';
        home.style.color = '#000'
        drop.style.color = '#000' 
        bar.style.color = '#000'
        brand.style.display = 'block'
      }
    }
  }
});