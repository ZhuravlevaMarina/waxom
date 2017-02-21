requirejs.config({
    baseUrl: './public/js'
});

define(["jquery", "domReady", "swiper.min", "isotope.pkgd.min"], function($) {
    "use strict";

    var Homepage = {
        init: function () {
            this.carousel();
            this.carouselBottom();
            this.tabsBox();
        },
        carousel: function () {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                spaceBetween: 30
            });
        },
        carouselBottom: function () {
            var swiperBottom = new Swiper('.swiper-container-second', {
                pagination: '.swiper-pagination',
                slidesPerView: 3,
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                spaceBetween: 30
            });
        },
        tabsBox: function() {
            // init Isotope
            var grid =  new Isotope('.isotope');

            // bind filter button click
            $('.button-group').on( 'click', 'button', function() {
                var filterValue = $( this ).attr('data-filter');
                grid.arrange({ filter: filterValue });
            });
            // change is-checked class on buttons
            $('.js-radio-button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function() {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $( this ).addClass('is-checked');
                });
            });
        }
    };
    Homepage.init();

});