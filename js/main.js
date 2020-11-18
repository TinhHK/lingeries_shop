$(document).ready(function(){
    $('#slide-1 .container').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000
    });
    $('#product-1 .container .row').slick({
        arrows: true,
        slidesToShow: 4,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }

            }]
    });
    $('#product-2 .container .row').slick({
        arrows: true,
        slidesToShow: 4,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }

            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }

            }]
    });
    $('#blog .container .row').slick({
        arrows: true,
        slidesToShow: 3,
//        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }

            }]
    });
    $('.line').slick({
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
            breakpoint: 768,
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
        $('.menumobile .container-fluid .row:nth-child(2)').removeClass('d-none');
    });
    $('#close-search-mobile').on('click', function (e) {
        $('.menumobile .container-fluid .row:nth-child(2)').addClass('d-none');
        $('.menumobile .container-fluid .row:first-child').removeClass('d-none');
    });
    // button search desktop
    $('#show-btn-desktop').on('click', function() {
        $('#desktop-search').addClass('active');
        $('.full-desktop-blur').addClass('active');
    });
    $('.full-desktop-blur, .search-close-desktop i').on('click', function() {
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
    
});

