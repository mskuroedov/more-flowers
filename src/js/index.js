/*
 * PROMO SLIDERS
 */
let promoTextSlider = $('#promo-text-slider'),
    promoImagesSlider = $('#promo-images-slider');
promoTextSlider.owlCarousel({
    dots: true,
    animateOut: 'fadeOut',
    loop: false,
    items: 1,
    margin: 0,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    responsiveRefreshRate: 200,
    autoplay: true,
    autoplayTimeout: 5000,
    onChanged: function (event) {
        promoImagesSlider.trigger('to.owl.carousel', [event.item.index])
    }
})
promoImagesSlider.owlCarousel({
    dots: false,
    animateOut: 'fadeOut',
    loop: false,
    items: 1,
    margin: 0,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    responsiveRefreshRate: 200,
})
/*
 * PROMO SLIDERS END
 */

/*
 * CATALOG APPEARANCE
 */
let mobileDisplayedItems = 4,
    maxItems = $('.catalog .catalog__item').length

function itemsAppearance() {
    if (window.innerWidth < 1000 && mobileDisplayedItems !== maxItems) {
        $('.catalog .catalog__item').hide()
        for (let i = 0; i < mobileDisplayedItems; i++) {
            $('.catalog .catalog__item').eq(i).show()
        }
        $('.catalog .catalog__show-more-btn').show()
    } else {
        $('.catalog .catalog__item').show()
    }
}

itemsAppearance()
$(window).on('resize', itemsAppearance);

$('.catalog .catalog__show-more-btn').on('click', function () {
    mobileDisplayedItems += 4;
    for (let i = 0; i < mobileDisplayedItems; i++) {
        if (i === maxItems - 1) {
            $(this).hide()
        }
        $('.catalog .catalog__item').eq(i).show()
    }
})
/*
 * CATALOG APPEARANCE END
 */
/*
 * CATALOG MODAL
 */
let catalogModal = new bootstrap.Modal(document.getElementById('product-modal'))
let orderModal = new bootstrap.Modal(document.getElementById('order-modal'))
$('.catalog__item').on('click', function () {
    catalogModal.show();
})
$('.order-btn').on('click', function () {
    catalogModal.hide();
    orderModal.show();
})
$('.js-counter').each((i, item) => {
    $(item).initCounter();
})
$(document).ready(function () {

    let sync1 = $("#sync1");
    let sync2 = $("#sync2");
    let slidesPerPage = 3;
    let syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        autoplay: false,
        dots: false,
        nav: false,
        loop: false,
        responsiveRefreshRate: 200,

    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            loop: false,
            smartSpeed: 200,
            slideSpeed: 500,
            margin: 15,
            autoWidth: true,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 200
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        let current = el.item.index;

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        let onscreen = sync2.find('.owl-item.active').length - 1;
        let start = sync2.find('.owl-item.active').first().index();
        let end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start && window.innerWidth < 1200) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            let number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {

        e.preventDefault();
        let number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});
/*
 * INTERESTING SLIDER
 */

$('#interesting-slider').owlCarousel({
    dots: false,
    nav: true,
    loop: false,
    responsiveRefreshRate: 200,
    responsive: {
        0: {
            items: 2,
            margin: 16,
        },
        1000: {
            items: 4,
            margin: 30
        }
    },
    navText: [
        '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M0.245162 6.66891L5.60166 11.723C5.92847 12.0923 6.4585 12.0923 6.78531 11.723C7.11219 11.3535 7.11219 10.7546 6.78531 10.3852L2.85759 6.94596L17.163 6.94596C17.6252 6.94596 18 6.5224 18 6.00001C18 5.47769 17.6252 5.05406 17.163 5.05406L2.85759 5.05406L6.78517 1.61485C7.11205 1.2454 7.11205 0.646498 6.78517 0.277048C6.6218 0.092475 6.40754 -8.93904e-07 6.19335 -8.75178e-07C5.97915 -8.56453e-07 5.76496 0.0924751 5.60152 0.277048L0.245162 5.33111C-0.0817171 5.70056 -0.081717 6.29946 0.245162 6.66891Z" fill="currentColor"/>\n' +
        '</svg>\n',
        '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M17.7548 5.33109L12.3983 0.277028C12.0715 -0.0923455 11.5415 -0.0923454 11.2147 0.277028C10.8878 0.646477 10.8878 1.24538 11.2147 1.61482L15.1424 5.05404L0.836953 5.05404C0.374755 5.05404 9.57734e-07 5.4776 1.04907e-06 5.99999C1.1404e-06 6.52231 0.374755 6.94594 0.836954 6.94594L15.1424 6.94594L11.2148 10.3852C10.8879 10.7546 10.8879 11.3535 11.2148 11.723C11.3782 11.9075 11.5925 12 11.8067 12C12.0208 12 12.235 11.9075 12.3985 11.723L17.7548 6.66889C18.0817 6.29944 18.0817 5.70054 17.7548 5.33109Z" fill="currentColor"/>\n' +
        '</svg>\n'
    ]
})
/*
 * INTERESTING SLIDER END
 */