//Feature: Header effect on scroll
let scrollpos = window.scrollY
const header = document.querySelector("nav#main-nav")
const headerHome = document.querySelector("div#wrapper.home")

//apply this effect only to homepage
if(header && headerHome){
      const header_height = header.offsetHeight
      const normal_logo=header.querySelector('img.logo').getAttribute('src')
      const dark_logo=header.querySelector('img.logo').getAttribute('data-dark')
      const add_class_on_scroll = () => { header.classList.add("white");header.querySelector('img.logo').src = dark_logo; }
      const remove_class_on_scroll = () => { header.classList.remove("white");header.querySelector('img.logo').src = normal_logo; }
      window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;

      const changeColorExceptionsScroll=document.querySelector(".navbar .dropdown.open");
      if (scrollpos >= header_height) { if(!changeColorExceptionsScroll) add_class_on_scroll() }
      else { if(!changeColorExceptionsScroll) remove_class_on_scroll() }
      })
}

//Feature: Homepage Big Banner Slider
const glideElements = document.querySelector(".glide")
if (typeof Glide != "undefined" && glideElements) {
new Glide('section.big-banner.glide', {
      type:'carousel',
      autoplay: 10000,
      animationDuration:1000,
      gap:0,
      startAt: 0,
      perView: 1,
      animationTimingFunc: 'ease',
      breakpoints: {
            300: {perView: 1},
            992: {perView: 1}
      }
    }).mount();
}

//Feature: List.js
const listElements = document.querySelectorAll(".listJS")
if (typeof List != "undefined" && listElements) {
      [].forEach.call(listElements, function(item) {
            var recordsPerPage=10;
            if(item.getAttribute('data-page'))
                  recordsPerPage=item.getAttribute('data-page');

            var options = { valueNames: [ 'title', 'description' ],page: recordsPerPage,pagination: true};
            new List(item.getAttribute('id'), options);
      });
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

//Components: dropdown,accordion
window.addEventListener('load', () => {
      //Initiate the dropdown, the component will auto initiate all the dropdowns
      //Custom for dezshira.com layout ONLY
      new dropdown();

      //Scan all the pages for accordion and initiate
      const accordions=document.querySelectorAll('.accordion-wrapper');
      if(accordions){
            [].forEach.call(accordions, function(item) {
                  new accordion(item);
            });
      }
    }, false)