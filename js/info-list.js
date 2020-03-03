const openInfoMenuList = document.querySelector( '.js-menu-btn-informatica' );
const infoMenuList = document.querySelector( '.js-list-class-informatica' );
const closeInfoMenuList = document.querySelector( '.list-informatica-close' );

openInfoMenuList.addEventListener( 'click', openList );

closeInfoMenuList.addEventListener( 'click', closeList );

function closeList() {
    infoMenuList.style.display = "none";
};

function openList() {
    infoMenuList.style.display = 'block';
};

