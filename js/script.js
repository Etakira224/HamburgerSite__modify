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
    // menu.classList.add('is-open')
    // console.log('OpenSidebar')
    openSidebar();
    body.style.overflowY = "hidden";

});

closeBtn.addEventListener('click', () =>{
    // menu.classList.remove('is-open')
    // console.log('CloseSidebar')
    closeSidebar();
    body.style.overflowY = "visible";
});

