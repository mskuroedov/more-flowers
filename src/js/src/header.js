function closeMobileMenu() {
    $('.mobile__menu').addClass('--closing');
    $('.header__menu-btn').removeClass('--active')
    setTimeout(() => {
        $('.mobile__menu').removeClass('--open');
        $('.mobile__menu').removeClass('--closing');
        $('body').removeClass('mobile-menu-opened')
        $('#main-menu').show();
        $('#catalog-menu').hide();
    }, 250)
}

$('.header__menu-btn').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('--active')) {
        closeMobileMenu()
    } else {
        $(this).addClass('--active')
        $('.mobile__menu').addClass('--open');
        $('body').addClass('mobile-menu-opened')
    }
})
$('.mobile__menu .close-btn').on('click', closeMobileMenu)
$('.mobile__menu__bg').on('click', closeMobileMenu);
$('.mobile__menu nav a').on('click', closeMobileMenu)

$(window).on('scroll', function (e) {
    if (window.pageYOffset > 50) {
        $('.header').addClass('--highlighten')
    } else {
        $('.header').removeClass('--highlighten')
    }
});