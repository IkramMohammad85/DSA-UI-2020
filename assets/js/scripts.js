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
      console.log(scrollpos)
      })
}

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
                  console.log('cleared');
                        document.querySelectorAll('.dropdown.open').forEach(function(dropdown) {
                              if (dropdown.querySelector('.dropdown-content').classList.contains('d-block')) {
                                    dropdown.classList.remove('open');
                                    dropdown.querySelector('.dropdown-content').classList.remove('d-block');
                              }
                        });
                  }