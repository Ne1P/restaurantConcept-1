
// $('.wrapper').addClass('loaded');

// $('.icon_menu').click(function (event) {
//     $(this).toggleClass('active');
//     $('.menu_body').toggleClass('active');
//     $('body').toggleClass('lock');
// });
// function ibg() {
//     $.each($('.ibg'), function (index, val) {
//         if ($(this).find('img').length > 0) {
//             $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
//         }
//     });
// }
// ibg();

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('body').toggleClass('lock');

    });
});

// Header scroll hide / show
const header = document.querySelector('.header');
const defaultOffset = 200;
let lastScroll = 0;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containeHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containeHide()) {
        // scroll down
        header.classList.add('hide');
    } else if (scrollPosition() < lastScroll && containeHide()) {
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
});