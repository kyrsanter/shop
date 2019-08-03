(function () {
    let popup = document.querySelector('.popup-menu');
    
    let nav = document.querySelector('.navigation');
    let menuBtn = document.querySelector('.toggle-btn').addEventListener('click', function () {
        popup.classList.toggle('active-menu');
        this.classList.toggle('toggle-btn-upped');
        if (popup.children.length == 0) {
            cloneMenu(popup);
        }
        
    });

    function cloneMenu(popup) {
        let clonedMenu = nav.cloneNode(true);
        clonedMenu.classList.add('visible');
        popup.appendChild(clonedMenu);
    }

    
})();