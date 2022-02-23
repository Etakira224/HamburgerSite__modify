/* https://www.webcreatorbox.com/tech/slide-menu */

const body = document.querySelector('body')
const btn = document.querySelector('.js-btn');
const sidebar = document.querySelector('.js-sidebar');
const sideContent = document.querySelector('.js-sidebarContent');
const sideMask = document.querySelector('.js-sidebarMask');
const closeBtn = document.querySelector('.js-closeBtn');

$(function() {
    $(".js-btn").on("click", function(){
        $.when(
            /* whenの中のコードはカンマでつなげないとエラーになる */
            $(".js-sidebar").addClass("is-open"),
            ).done(function() {
            $(".js-sidebarContent").addClass("is-open");
            $(".js-sidebarMask").fadeIn();
            $("body").css('overflowY', 'hidden');
            return false;
        });
    });
});

$(function() {
    $(".js-closeBtn").on("click", function(){
        $.when(
            $(".js-sidebarContent").removeClass("is-open"),
            $(".js-sidebarMask").fadeOut(),
        ).done(function() {
            $(".js-sidebar").removeClass("is-open");
            $("body").css('overflowY', 'visible');
            return false;
        });
    });
});



// const openSidebar = () => {
//     sidebar.classList.add('is-open')
//     sideContent.classList.add('is-open')
//     sideMask.classList.add('is-open')
//     body.style.overflowY = "hidden";
//     console.log('OpenSidebar')
// };
// const closeSidebar = () => {
//     sidebar.classList.remove('is-open')
//     sideContent.classList.remove('is-open')
//     sideMask.classList.remove('is-open')
//     body.style.overflowY = "visible";
//     console.log('CloseSidebar')
// };

// btn.addEventListener('click', () => {
//     // document.getElementById("Menu").style.transition('.5')
//     console.log('OpenSidebar')
//     openSidebar();
// });

// closeBtn.addEventListener('click', () =>{
//     // sidebar.style.transition('none')
//     console.log('CloseSidebar')
//     closeSidebar();
// });

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


