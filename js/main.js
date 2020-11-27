var prod_slide_setting = {
    arrows: true,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<i class="far fa-arrow-alt-circle-left prev-icon-outside"></i>',
    nextArrow: '<i class="far fa-arrow-alt-circle-right next-icon-outside"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 426,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        }]
};
function slideActiveTabPro() {
    $('.container .tab-content.cate-item-slide .row.active').slick(prod_slide_setting);
}

$(document).ready(function(){
    $('#slide-1 .container').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
    slideActiveTabPro();
    
    $('.cate-item .nav-item').on('click', function() {
        let  ele = this;
        let time = 300;
        if($(window).width() < 426) {
            time = 150;
        }
        setTimeout(function() {
            let id_pro_cate = '#'+$(ele).parent().data('proCate');
            let data_slick = $(ele).find('a:first-child').data('slick');
            $(id_pro_cate + ' .container .tab-content.cate-item-slide .row.sliding').slick('unslick');
            $(id_pro_cate + ' .container .tab-content.cate-item-slide .row.sliding').removeClass('sliding');
            $(id_pro_cate + ' .container .tab-content.cate-item-slide .row#'+ data_slick).slick(prod_slide_setting);
            $(id_pro_cate + ' .container .tab-content.cate-item-slide .row#'+ data_slick).addClass('sliding');
        }, time);
    });
    
    
    $('#blog .container .row').slick({
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<i class="far fa-arrow-alt-circle-left prev-icon-outside"></i>',
        nextArrow: '<i class="far fa-arrow-alt-circle-right next-icon-outside"></i>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }

            }, {
                breakpoint: 426,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }]
    });
    $('#link .container .line').slick({
        arrows: false,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }

        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
            }

        },
                     
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }

        }]
    });
    // buton search mobile
    $('#search-mobile').on('click', function (e) {
        $('.menumobile .container-fluid .row:first-child').addClass('d-none');
        $('.menumobile .container-fluid .row:nth-child(2)').addClass('search-mobile-display');
    });
    $('#close-search-mobile').on('click', function (e) {
        $('.menumobile .container-fluid .row:nth-child(2)').removeClass('search-mobile-display');
        $('.menumobile .container-fluid .row:first-child').removeClass('d-none');
    });
    // button search desktop
    $('#show-btn-desktop').on('click', function() {
        $('#desktop-search').addClass('active');
        $('.full-desktop-blur').addClass('active');
    });
    $('.full-desktop-blur, .search-close-desktop').on('click', function() {
        $('#desktop-search').removeClass('active');
        $('.full-desktop-blur').removeClass('active');
    });
    
    // Menu mobile 
    
    (function($) {
        'use strict';

        // call our plugin
        var Nav = new hcOffcanvasNav('#main-nav', {
            disableAt: false,
            customToggle: '.toggle',
            levelSpacing: 40,
            navTitle: 'Lingeries Shop',
            levelTitles: true,
            levelTitleAsBack: true,
            pushContent: '#container',
            labelClose: false
        });

        // add new items to original nav
        $('#main-nav').find('li.add').children('a').on('click', function() {
            var $this = $(this);
            var $li = $this.parent();
            var items = eval('(' + $this.attr('data-add') + ')');

            $li.before('<li class="new"><a href="#">'+items[0]+'</a></li>');

            items.shift();

            if (!items.length) {
                $li.remove();
            }
            else {
                $this.attr('data-add', JSON.stringify(items));
            }

            Nav.update(true); // update DOM
        });

        // demo settings update

        const update = function(settings) {
            if (Nav.isOpen()) {
                Nav.on('close.once', function() {
                    Nav.update(settings);
                    Nav.open();
                });

                Nav.close();
            }
            else {
                Nav.update(settings);
            }
        };

        $('.actions').find('a').on('click', function(e) {
            e.preventDefault();

            var $this = $(this).addClass('active');
            var $siblings = $this.parent().siblings().children('a').removeClass('active');
            var settings = eval('(' + $this.data('demo') + ')');

            if ('theme' in settings) {
                $('body').removeClass().addClass('theme-' + settings['theme']);
            }
            else {
                update(settings);
            }
        });

        $('.actions').find('input').on('change', function() {
            var $this = $(this);
            var settings = eval('(' + $this.data('demo') + ')');

            if ($this.is(':checked')) {
                update(settings);
            }
            else {
                var removeData = {};
                $.each(settings, function(index, value) {
                    removeData[index] = false;
                });

                update(removeData);
            }
        });
    })(jQuery);
    
// store page
    $('#store-slide .container').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000
    });
    (function($) {
        // price slide range
        $( "#price-range-slider" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 0, 500 ],
            slide: function( event, ui ) {
                $( "#price-range-show" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                $( "#min-price" ).val(ui.values[ 0 ]);
                $( "#max-price" ).val(ui.values[ 1 ]);
            }
        });
        $( "#price-range-show" ).html( "$" + $( "#price-range-slider" ).slider( "values", 0 ) +
                                      " - $" + $( "#price-range-slider" ).slider( "values", 1 ) );
        // size slide range
        let sizes = ['A', 'B', 'C', 'D'];
        $( "#size-range-slider" ).slider({
            range: true,
            min: 0,
            max: 3,
            values: [ 0, 3 ],
            slide: function( event, ui ) {
                $( "#size-range-show" ).html( sizes[ui.values[ 0 ]] + " - " + sizes[ui.values[ 1 ]] );
                $( "#min-size" ).val(sizes[ui.values[ 0 ]]);
                $( "#max-size" ).val(sizes[ui.values[ 1 ]]);
            }
        });
        $( "#size-range-show" ).html( sizes[$( "#size-range-slider" ).slider( "values", 0 )] +
                                      " - "+ sizes[$( "#size-range-slider" ).slider( "values", 1 )] );
    })(jQuery);
    // load more
    $('.store-content-list').btnLoadmore({
        showItem : 3,
        whenClickBtn : 3,
        textBtn : 'Load more...',
        classBtn : 'btn btn-info',
    });
    $('.store-content-list-single').btnLoadmore({
        showItem : 2,
        whenClickBtn : 2,
        textBtn : 'Load more',
        classBtn : 'btn btn-info',
    });
//    product detail 
    $('#related-pros').slick({
        arrows: true,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<i class="far fa-arrow-alt-circle-left prev-icon-outside"></i>',
        nextArrow: '<i class="far fa-arrow-alt-circle-right next-icon-outside"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }]
    });
    


    
});

