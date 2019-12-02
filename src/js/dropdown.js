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