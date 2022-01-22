$(window).scroll(function() {
    $('.nav').toggleClass('scroll', $(this).scrollTop() > 10);
});

$('.phone-header').on('click', function() {
        $('.modal__wrapper').fadeIn();
        $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

$('.overlay').on('click', function() {
    $('.modal__wrapper').fadeOut();
    $('body,html').animate({
    scrollTop: 0
}, 800);
return false;

});

 $('.btn-close').on('click', function() {
    $('.modal__wrapper').fadeOut();
    $('.mob-min').fadeOut();
   $('body,html').animate({
    scrollTop: 0
}, 800);
return false;

        });

$('.form').children().on('click', function(event) {
    event.stopPropagation();
});

$("#btn-arrow").click(function(){            
$('html, body').animate({
        scrollTop: $("#collection").offset().top
    }, 1000);
});

    
/*TABS*/
$('.tab').on('click', function(event) {
    event.preventDefault();
    var currTab = $(this).index();

    $('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');

    $('.fade-show').removeClass('colection-active');
    $('.fade-show').eq(currTab).addClass('colection-active');
});

$('.tab').on('click', function(event) {
    event.preventDefault();
    var currTab = $(this).index();

    $('.crumbs__item').removeClass('active-crum');
    $(this).addClass('active-crum');

    $('.crumbs__link').removeClass('active-crum');
    $('.crumbs__link').eq(currTab).addClass('active-crum');
});

/*RADIO*/
$.each($('.size__item'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
        $(this).addClass('active-size')
    }
});

$(document).on('click', '.size__item', function(event) {
    $(this).parents('.size').find('.size__item').removeClass('active-size');
    $(this).parents('.size').find('.size__item input').prop('checked', false);
    $(this).toggleClass('active-size');
    $(this).find('input').prop('checked', true);
    return false;
});

$.each($('.color__item'), function (index, val){
    if ($(this).find('input').prop('checked') == true) {
        $(this).addClass('active-color')
    }
});

$(document).on('click', '.color__item', function(event) {
    $(this).parents('.color').find('.color__item').removeClass('active-color');
    $(this).parents('.color').find('.color__item input').prop('checked', false);
    $(this).toggleClass('active-color');
    $(this).find('input').prop('checked', true);
    return false;
});

/*HAMBURGER*/
$('.burger').on('click', function() {
        $('.mob-min').toggle();
    });

    $('.blog').on('click', function() {
        $('.submenu').toggle();
    });

/* SLIDER */
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    allowTouchMove: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000
    }
});
 /* Валидация */

$.validator.addMethod('regex', function(value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
}, "Please check your input.");

/*отправка формы*/

$(document).ready(function() {
    $('[data-submit]').on('click', function(event) {
        event.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod("regex", function(value, element, regexp) {
        var regExsp = new RegExp(regexp);
        return this.optional(element) || regExsp.test(value);
        $('body').removeClass('stop-scrolling');
    }, "Please check your input.");

    /*функция валидации и вывода сообщения*/

    function valEl(el) {
        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                count: {
                    required: true
                },
                town: {
                    required: true
                },
                street: {
                    required: true
                },
                house: {
                    required: true
                },
                apartment: {
                    required: true
                }

            },
            messages: {
                tel: {
                    required: 'Обязательно для заполнения',
                    regex: 'Обязательные символы + - ()'
                },
                name: {
                    required: 'Обязательно для заполнения',
                },
                email: {
                    required: 'Обязательно для заполнения',
                    email: 'Неверный формат E-mail'
                },
                count: {
                    required: 'Обязательно для заполнения',
                },
                town: {
                    required: 'Обязательно для заполнения',
                },
                street: {
                    required: 'Обязательно для заполнения',

                },
                house: {
                    required: 'Обязательно для заполнения',
                },
                apartment: {
                    required: 'Обязательно для заполнения',
                }
            },
            /*начинаем проверку id="" формы */

            submitHandler: function(form) {
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    case 'form-m':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $form.trigger('reset');
                                }, 1100);
                                setTimeout(function() {
                                    $('.modal__wrapper').fadeOut();
                                    $('.modal__wrapper-ok').fadeIn();
                                    $('.box-ok__btn').on('click', function() {
                                        $('.modal__wrapper-ok').fadeOut();
                                    $('body').removeClass('stop-scrolling');});
                                    $('.overlay').on('click', function() {
                                        $('.modal__wrapper-ok').fadeOut();
                                        $('body').removeClass('stop-scrolling');
                                    });
                                }, 1300);
                            });
                        break;
                        case 'form-cont':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $form.trigger('reset');
                                }, 1100);
                                setTimeout(function() {
                                    $('.f-wrap-ok').fadeIn();            
                                    $('html, body').animate({
                                        scrollTop: $(".form-cont__btn").offset().top
                                    }, 2000);
                                }, 1300);
                            });
                            break;
                            case 'form-order':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $form.trigger('reset');
                                }, 1100);
                                setTimeout(function() {
                                    window.location = 'success.html';
                                }, 1300);
                            });
                        break;
                }
                return false;
            }

        });
    }
    $('.js-form').each(function() {
        valEl($(this));
    });
});

