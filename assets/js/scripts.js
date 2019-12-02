class dropdown {

    constructor() {
      this.trigger = document.querySelectorAll('.dropdown [data-trigger]');
      this.target = document.querySelectorAll('.dropdown [data-dropdown]'); 
      this.init();
    }
  
    init() {
      for (let i = 0; i < this.trigger.length; i++) {
        this.handleClick(this.trigger[i]);
      }
    }
  
    handleClick(el) {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        el.parentNode.classList.toggle('open');
        el.nextElementSibling.classList.toggle('d-block');

        if(el.hasAttribute('data-turn-header-white'))
            header.classList.add("white");header.querySelector('img.logo').src = 'assets/img/logo-black.png';

        for (let i = 0; i < this.target.length; i++) {
          this.handleClose(this.target[i]);
        }
        
      });
    }
  
    handleClose(el) {
      window.addEventListener('mouseup', (event) => {
        if (event.target != el && event.target.parentNode != el) {
          if (el.classList.contains('d-block')) {
            header.classList.remove("white");header.querySelector('img.logo').src = 'assets/img/logo.png';
            el.parentNode.classList.remove('open');
            el.classList.remove('d-block');
          }
        }
      });
    }
  
  }
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