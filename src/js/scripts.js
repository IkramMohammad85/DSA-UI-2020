//Feature: Header effect on scroll
let scrollpos = window.scrollY
const header = document.querySelector("nav#main-nav")
if(header){
      const header_height = header.offsetHeight
      const add_class_on_scroll = () => { header.classList.add("white");header.querySelector('img.logo').src = 'assets/img/logo-black.png'; }
      const remove_class_on_scroll = () => { header.classList.remove("white");header.querySelector('img.logo').src = 'assets/img/logo.png'; }
      window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;
      if (scrollpos >= header_height) { if(!document.querySelector(".navbar .dropdown.open")) add_class_on_scroll() }
      else { if(!document.querySelector(".navbar .dropdown.open")) remove_class_on_scroll() }
      })
}

//Feature: Homepage Big Banner Slider
new Glide('section.big-banner.glide', {
      type:'carousel',
      autoplay: 10000,
      animationDuration:1000,
      gap:0,
      startAt: 0,
      perView: 1,
      animationTimingFunc: 'ease',
    }).mount();

//Component: dropdown
window.addEventListener('load', () => {
      new dropdown();
    }, false)