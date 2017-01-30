requirejs.config({
    baseUrl: './public/js'
});

define(["jquery", "domReady", "swiper.min"], function($) {
    "use strict";

    var Homepage = {
        init: function () {
            this.carousel();
            this.carouselBottom();
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
                spaceBetween: 30
            });
        }
    };
    Homepage.init();

});