/* https://www.webcreatorbox.com/tech/slide-menu */

const body = document.querySelector('body')
const btn = document.querySelector('.js-btn');
const menu = document.querySelector('.js-menu');
const closeBtn = document.querySelector('.js-closeBtn');

const openSidebar = () => {
    menu.classList.add('is-open')
    console.log('OpenSidebar')
};
const closeSidebar = () => {
    menu.classList.remove('is-open')
    console.log('CloseSidebar')
};

console.log(btn);
console.log(menu);
console.log(closeBtn);

btn.addEventListener('click', () => {
    menu.classList.add('is-open')
    // document.getElementById("Menu").style.transition('.5')
    console.log('OpenSidebar')
    openSidebar();
    body.style.overflowY = "hidden";
});

closeBtn.addEventListener('click', () =>{
    menu.classList.remove('is-open')
    menu.style.transition('none')
    console.log('CloseSidebar')
    closeSidebar();
    body.style.overflowY = "visible";
});

/* お試し */
// const mql = window.matchMedia('(min-width: 1026px)');

// const handleMediaQuery = function(mql) {
//     if (mql.matches) {
//         $('js-menu').css('width', '100%');
//     } else {
//         $('js-menu').css('transition', '0');
//     }
// };

// handleMediaQuery(mql);


