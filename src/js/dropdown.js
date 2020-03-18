class dropdown {

  constructor() {
    this.trigger = document.querySelectorAll('.dropdown');
    this.target = document.querySelectorAll('.dropdown [data-dropdown]');
    this.mainNav=document.querySelector('nav#main-nav');

    this.normal_logo=header.querySelector('img.logo').getAttribute('src')
    this.dark_logo=header.querySelector('img.logo').getAttribute('data-dark')
    this.headerHome = document.querySelector("div#wrapper.home")
    this.init();
  }

  init() {
    for (let i = 0; i < this.trigger.length; i++) {
      this.handleClick(this.trigger[i]);

      if(this.trigger[i].querySelector('[data-closebtn]')){
        this.trigger[i].querySelector('[data-closebtn]').addEventListener('click', (event) => {
          event.stopPropagation();
          const openDropdowns=document.querySelectorAll('.dropdown.open');

          for (let i = 0; i < openDropdowns.length; i++) {
              openDropdowns[i].classList.remove('open');
              openDropdowns[i].querySelector('[data-dropdown]').classList.remove('d-block');
          }
        });
      }
    }

    window.addEventListener('click', (event) => {
      event.stopPropagation();
      this.closeAllDropdowns();
    });
  }

  closeAllDropdowns(){
    const openDropdowns=document.querySelectorAll('.dropdown.open');

    for (let i = 0; i < openDropdowns.length; i++) {
      if (!openDropdowns[i].contains(event.target)) {

        if(window.scrollY<50)
          this.mainNav.classList.remove("white");this.mainNav.querySelector('img.logo').src = this.normal_logo;

        openDropdowns[i].classList.remove('open');
        openDropdowns[i].querySelector('[data-dropdown]').classList.remove('d-block');
      }
    }
  }

  handleClick(el) {
    if(el.querySelector('[data-trigger]')){
      el.querySelector('[data-trigger]').addEventListener('click', (event) => {
        this.closeAllDropdowns();
        event.preventDefault();
        event.stopPropagation();
        this.doDropdownAction(el,event);
      });
    }

    //apply mouse hover event for navbar
    /*
    if(el.parentNode.classList.contains("navbar"))
    {
      el.addEventListener('mouseover', (event) => {
        el.querySelector('[data-trigger]').click();
      });
    }
    */
  }

  doDropdownAction(el,event){
    if ((event.target != el && event.target.parentNode != el) || event.target.hasAttribute('data-trigger')) {
      el.classList.toggle('open');
      el.querySelector('[data-dropdown]').classList.toggle('d-block');

      /*
       if(event.target.hasAttribute('data-turn-header-white') && window.innerWidth>991 && this.headerHome){
        if(document.querySelector('nav#main-nav.white')===null){
          this.mainNav.classList.add("white");this.mainNav.querySelector('img.logo').src = this.dark_logo;
        }
        } else {
          this.mainNav.classList.remove("white");this.mainNav.querySelector('img.logo').src = this.normal_logo;
        }
      */
    }
  }
}