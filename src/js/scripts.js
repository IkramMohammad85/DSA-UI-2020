//Feature: Header effect on scroll
let scrollpos = window.scrollY
const header = document.querySelector("nav#main-nav")
if(header){
      const header_height = header.offsetHeight
      const add_class_on_scroll = () => { header.classList.add("white");header.querySelector('img.logo').src = 'assets/img/logo-black.png'; }
      const remove_class_on_scroll = () => { header.classList.remove("white");header.querySelector('img.logo').src = 'assets/img/logo.png'; }
      window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;
      if (scrollpos >= header_height) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
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
document.querySelectorAll('.dropdown').forEach(function(dropdown) {
      dropdown.querySelector('.dropdown-label').addEventListener("click", 
            function(e){
                  if(document.querySelector('.dropdown.open')!= null)
                        clearDropdownOpens();
                  else
                        e.stopPropagation();

                  dropdown.classList.toggle("open");
                  dropdown.querySelector('.dropdown-content').classList.toggle("d-block");
             });
});

      // Close the dropdown menu if the user clicks outside of it
            document.body.addEventListener('click', function (event) {
                  var dropdownClickCheck = document.querySelector('.dropdown.open .dropdown-content');
                  // console.log(dropdownClickCheck);
                  // console.log(event.target);
                  if (dropdownClickCheck && !dropdownClickCheck.contains(event.target)) {
                        clearDropdownOpens();
                  } 
            });

            function clearDropdownOpens(){
                        document.querySelectorAll('.dropdown.open').forEach(function(dropdown) {
                              if (dropdown.querySelector('.dropdown-content').classList.contains('d-block')) {
                                    dropdown.classList.remove('open');
                                    dropdown.querySelector('.dropdown-content').classList.remove('d-block');
                              }
                        });
                  }