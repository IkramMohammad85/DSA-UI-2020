class accordion {

    constructor(el) {
        this.accordionElement=el;
        this.items=el.querySelectorAll('.accordion-item');
        this.init();
    }

    init() {
        const accordionElement=this.accordionElement;
        [].forEach.call(this.items, function(item) {
            item.querySelector('.accordion-heading').addEventListener('click', (event) => {
                if(accordionElement.hasAttribute("data-autoclose")) {
                    const itemsOpen=accordionElement.querySelectorAll('.accordion-item.open');
                    [].forEach.call(itemsOpen, function(item) {
                        item.classList.toggle('open');
                    });
                }

                item.classList.toggle('open');
            }, false);
        });
    }
}