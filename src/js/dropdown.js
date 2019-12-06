class dropdown {

    constructor() {
      this.trigger = document.querySelectorAll('.dropdown');
      this.target = document.querySelectorAll('.dropdown [data-dropdown]');
      this.init();
    }
  
    init() {
      closeButtons = document.querySelectorAll('.dropdown [data-closeBtn]');
      for (let i = 0; i < this.trigger.length; i++) {
        this.handleClick(this.trigger[i]);

        let closeBtn=this.trigger[i].querySelector('[data-closeBtn]');
        if(closeBtn){
          closeBtn.addEventListener('click',(event)=>{
            this.handleClose(this.target[i]);
          })
        }
      }
    }
  
    handleClick(el) {
      el.addEventListener('click', (event) => {
        elHandler=el.querySelector('[data-trigger]');
        event.stopPropagation();
        event.preventDefault();
          elHandler.parentNode.classList.toggle('open');
          elHandler.nextElementSibling.classList.toggle('d-block');

          const changeColorExceptionsClick=document.querySelector(".header-menu.open");

          if(elHandler.hasAttribute('data-turn-header-white') && !changeColorExceptionsClick){
            header.classList.add("white");header.querySelector('img.logo').src = 'assets/img/logo-black.png';
          }

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
            if(!changeColorExceptionsClick){
              header.classList.remove("white");header.querySelector('img.logo').src = 'assets/img/logo.png';
            }
              
            el.parentNode.classList.remove('open');
            el.classList.remove('d-block');
          }
        }
      });
    }
  
  }