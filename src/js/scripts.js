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
// new Glide('section.big-banner.glide', {
//       type:'carousel',
//       autoplay: 10000,
//       animationDuration:1000,
//       gap:0,
//       startAt: 0,
//       perView: 1,
//       animationTimingFunc: 'ease',
//     }).mount();
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