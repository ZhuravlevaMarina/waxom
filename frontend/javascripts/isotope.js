requirejs.config({
    baseUrl: './public/js'
});

define(["jquery", "isotope.pkgd.min", "index"], function($, Isotope) {
    "use strict";
    var Portfolio = {

        init: function() {
            this.tabsBox();
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

    Portfolio.init();

});