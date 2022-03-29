$(document).ready(function(){

    // Начало выпадающего окна города

    cityDropdown = $('.header__up-city__dropdown');

    cityDropdown.hide();

    $('.header__up-city__btn').click(function () {

        $(this).toggleClass('header__up-city__btn-active');
        cityDropdown.slideToggle(250);
        return false;

    });

    $(document).mouseup(function (e) {
        var container = $(".header__up-city");
        if (container.has(e.target).length === 0){
            cityDropdown.hide(250);
            $('.header__up-city__btn').removeClass('header__up-city__btn-active');
        }
    });


    // Конец выпадающего окна города

    // Начало выпадающего фильтра

    filterDropdown = $('.header__down-search__filter-dropdown');

    filterDropdown.hide();

    $('.header__down-search__filter').click(function () {

        $(this).toggleClass('header__down-search__filter-active');
        filterDropdown.slideToggle(250);
        return false;

    });

    $(document).mouseup(function (e) {
        var container = $(".header__down-search__filter-position");
        if (container.has(e.target).length === 0){
            filterDropdown.hide(250);
            $('.header__down-search__filter').removeClass('header__down-search__filter-active');
        }
    });


    // Конец выпадающего фильтра


    // НАЧАЛО Раскрытие товара в рейтинге

    $('.rating__list-item:nth-child(n+9)').hide();

    $('.rating__btn').on('click', function () {
        $('.rating__list-item:nth-child(n+9)').show(300);
        $(this).hide();
    })

    // КОНЕЦ Раскрытие товара в рейтинге

    // НАЧАЛО Большой баннер на главной

    $('.banner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: false,
        infinite: true,
        dots:true,
        autoplay:true,
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 5,
        //             asNavFor: '.single-main-slider_basic',
        //             swipe: true,
        //             focusOnSelect: true,
        //             initialSlide: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 1023,
        //         settings: {
        //             variableWidth: true,
        //             vertical: false,
        //             asNavFor: '.single-main-slider_basic',
        //             swipe: false,
        //             focusOnSelect: true,
        //             swipeToSlide: true,
        //             initialSlide: 2,
        //             infinite: false,
        //             centerMode: true,
        //             speed: 100,
        //             touchThreshold: 50,
        //             waitForAnimate: false,
        //         }
        //     },
        // ]
    });

    // КОНЕЦ Большого баннера на главной

});

