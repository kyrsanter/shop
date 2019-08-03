let cart = {
    cartShown: false,
    shownClass: 'cart-shown',
    blurShownClass: 'blur-active',
    cartPop: document.querySelector('.cart-popup'),
    mainBlock: document.querySelector('.main-content'),
    blurBlock: document.querySelector('.blur'),
    showCartBtn: document.querySelector('.cart'),
    cartBtn: document.querySelector('.cart-btn'),
    closeCartBtn: document.querySelector('.close-cart'),


    init: function() {
        let that = this;
        that.showCartBtn.addEventListener('click', function() {
            that.showCart();
        });
        that.closeCartBtn.addEventListener('click', function() {
            that.hideCart();
        });
        that.cartBtn.addEventListener('click', function() {
            that.hideCart();
        });
        window.addEventListener('scroll', function() {
            let scroled = window.pageYOffset || document.documentElement.scrollTop;
            if (that.cartShown && scroled > that.cartPop.offsetHeight * 0.5 ) {
                that.hideCart();
            }
        });
    },

    showCart: function() {
        this.cartShown = true;
        this.cartPop.classList.add(this.shownClass);
        this.mainBlock.style.transform = `translateX(-${this.cartPop.offsetWidth}px)`;
        this.blurBlock.classList.add(this.blurShownClass);
    },

    hideCart: function() {
        this.cartShown = false;
        this.cartPop.classList.remove(this.shownClass);
        this.mainBlock.style.transform = `translateX(-${0}px)`;
        this.blurBlock.classList.remove(this.blurShownClass);
    },
}

cart.init();


