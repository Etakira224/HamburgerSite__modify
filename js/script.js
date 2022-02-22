/* https://www.webcreatorbox.com/tech/slide-menu */

const body = document.querySelector('body')
const btn = document.querySelector('.js-btn');
const sidebar = document.querySelector('.js-sidebar');
const sideContent = document.querySelector('.js-sidebarContent');
const sideMask = document.querySelector('.js-sidebarMask');
const closeBtn = document.querySelector('.js-closeBtn');

const openSidebar = () => {
    sidebar.classList.add('is-open')
    sideContent.classList.add('is-open')
    sideMask.classList.add('is-open')
    body.style.overflowY = "hidden";
    console.log('OpenSidebar')
};
const closeSidebar = () => {
    sidebar.classList.remove('is-open')
    sideContent.classList.remove('is-open')
    sideMask.classList.remove('is-open')
    body.style.overflowY = "visible";
    console.log('CloseSidebar')
};

btn.addEventListener('click', () => {
    // document.getElementById("Menu").style.transition('.5')
    console.log('OpenSidebar')
    openSidebar();
});

closeBtn.addEventListener('click', () =>{
    // sidebar.style.transition('none')
    console.log('CloseSidebar')
    closeSidebar();
});

/* お試し */
// const mql = window.matchMedia('(min-width: 1026px)');

// const handleMediaQuery = function(mql) {
//     if (mql.matches) {
//         $('js-sidebar').css('width', '100%');
//     } else {
//         $('js-sidebar').css('transition', '0');
//     }
// };

// handleMediaQuery(mql);


