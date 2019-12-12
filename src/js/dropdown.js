class dropdown {

  constructor() {
    this.trigger = document.querySelectorAll('.dropdown');
    this.target = document.querySelectorAll('.dropdown [data-dropdown]');
    this.mainNav=document.querySelector('nav#main-nav');
    this.init();
  }

  init() {
    for (let i = 0; i < this.trigger.length; i++) {
      this.handleClick(this.trigger[i]);
    }

    window.addEventListener('mouseup', (event) => {
      event.stopPropagation();
      const openDropdowns=document.querySelectorAll('.dropdown.open');

      //close if white nav is selected
      if(document.querySelector('nav#main-nav.white') && !openDropdowns.length){
        this.mainNav.classList.remove("white");this.mainNav.querySelector('img.logo').src = 'assets/img/logo.png';
      }

      for (let i = 0; i < openDropdowns.length; i++) {
        if (!openDropdowns[i].contains(event.target)) {
          openDropdowns[i].classList.remove('open');
          openDropdowns[i].querySelector('[data-dropdown]').classList.remove('d-block');
        }
      }

    });
  }

  handleClick(el) {
    el.querySelector('[data-trigger]').addEventListener('click', (event) => {

      event.preventDefault();
      event.stopPropagation();

      //only toogle nav if the click is NOT on main navigation
      if(event.target.hasAttribute('data-turn-header-white')){
        if(document.querySelector('nav#main-nav.white')===null){
          this.mainNav.classList.add("white");this.mainNav.querySelector('img.logo').src = 'assets/img/logo-black.png';
        }
      } else {
        this.mainNav.classList.remove("white");this.mainNav.querySelector('img.logo').src = 'assets/img/logo.png';
      }

      if ((event.target != el && event.target.parentNode != el) || event.target.hasAttribute('data-trigger')) {
        el.classList.toggle('open');
        el.querySelector('[data-dropdown]').classList.toggle('d-block');

          //do another check if toggle opened or closed the dropdown
          if(!el.classList.contains('open') && document.querySelector('nav#main-nav.white')){
            this.mainNav.classList.remove("white");this.mainNav.querySelector('img.logo').src = 'assets/img/logo.png';
          }
      }
    });
  }
}