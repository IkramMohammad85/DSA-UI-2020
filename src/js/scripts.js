//Feature: Header effect on scroll
let scrollpos = window.scrollY
const header = document.querySelector("nav#main-nav")
if(header){
      const header_height = header.offsetHeight
      const add_class_on_scroll = () => header.classList.add("white")
      const remove_class_on_scroll = () => header.classList.remove("white")
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
            function(){
                  clearDropdownOpens();
                  dropdown.querySelector('.dropdown-content').classList.toggle("d-block");
                  event.stopPropagation();
             });
});

      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event){
            if (!document.getElementsByClassName('dropdown-content')[0].contains(event.target)){
                  clearDropdownOpens();
                  }
            }

     function clearDropdownOpens(){
      var dropdowns = document.getElementsByClassName("dropdown-content");
                  var i;
                  for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('d-block')) {
                        openDropdown.classList.remove('d-block');
                  }
      }}