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

        const changeColorExceptionsClick=document.querySelector(".header-menu.open");

        if(el.hasAttribute('data-turn-header-white') && !changeColorExceptionsClick)
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
            const changeColorExceptionsClick=document.querySelector(".header-menu.open");
            if(!changeColorExceptionsClick)
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

      const changeColorExceptionsScroll=document.querySelector(".navbar .dropdown.open");
      if (scrollpos >= header_height) { if(!changeColorExceptionsScroll) add_class_on_scroll() }
      else { if(!changeColorExceptionsScroll) remove_class_on_scroll() }
      })
}

//Feature: Homepage Big Banner Slider
if (typeof Glide != "undefined") {
new Glide('section.big-banner.glide', {
      type:'carousel',
      autoplay: 10000,
      animationDuration:1000,
      gap:0,
      startAt: 0,
      perView: 1,
      animationTimingFunc: 'ease',
    }).mount();
}

//Hamburger Menu Click Event Listener
document.querySelector(".hamburger-menu").addEventListener('click',function(){
      this.classList.toggle('open');
      openContainer=this.getAttribute("data-open");
      if(openContainer){
            openContainerNode=document.querySelector('.'+openContainer);
            if(openContainerNode)
                  openContainerNode.classList.toggle('open');
      }
})

//Component: dropdown
window.addEventListener('load', () => {
      new dropdown();
    }, false)