$(document).ready(function() {


    // **************Мобильное всплывающее меню********

    var menuButton = document.querySelector(".menu-burger");
    menuButton.addEventListener("click", function() {
        document
            .querySelector(".header-nav-mobile")
            .classList.toggle("header-nav-mobile--toogle");
    });


    // ********Модальное всплывающее окно*********

    var modalButtton = $("[data-toggle=modal]"); // Ищем кнопку вызова окна
    var closeModalButtton = $(".purchase-modal__close"); // Ищем крестик close

    // Отслеживаем клик по кнопке вызова окна
    modalButtton.on('click', openModal);

    // Отслеживаем клик по крестику close
    closeModalButtton.on('click', closeModal);

    // Функция открытия окна
    function openModal() {
        var modalOverlay = $(".modal__overlay"); //Находим оверлей
        var purchaseModal = $(".purchase-modal"); // Находим модальное окно
        modalOverlay.addClass('modal__overlay--visible'); // Навешиваем класс-модификатор
        purchaseModal.addClass('purchase-modal--visible'); // Навешиваем класс-модификатор
    }

    // Функция закрытия окна
    function closeModal() {
        var modalOverlay = $(".modal__overlay"); //Находим оверлей
        var purchaseModal = $(".purchase-modal"); // Находим модальное окно
        modalOverlay.removeClass('modal__overlay--visible'); // Убираем класс-модификатор
        purchaseModal.removeClass('purchase-modal--visible'); // Убираем класс-модификатор
    }

    // Закрываем окно клавишей ESC
    $(document).on('keydown', function(event) {
        if (event.keyCode == 27) {
            closeModal();
        }
    });


    // *************Валидация форм*************

    // Валидация модального окна-формы
    $('.validate-form').each(function() {
        $(this).validate({

            errorClass: "invalid",

            messages: {
                name: {
                    required: "Пожалуйста, введите Ваше имя",
                    minlength: "Ваше имя содержит менее 2 символов"
                },
                phone: {
                    required: "Введите Ваш номер телефона",
                    minlength: "Должно быть не менее 10 цифр"
                },
                email: {
                    required: "Введите Ваш email для связи с Вами",
                    email: "Ваш email должен быть в формате: name@domain.com"
                }
            }
        })

    });


    // *************Валидация телефона*************
    $(".mask-phone").inputmask("+7(999)999-9999");

    // добавляем правило для валидации телефона
    $.validator.addMethod("checkMaskPhone", function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
    }, "Должно быть не менее 10 цифр");


    // Вешаем валидацию на поле с телефоном по классу
    $.validator.addClassRules({
        'mask-phone': {
            checkMaskPhone: true,
        }
    });


    // ****************Подключаем 1-й слайдер*************

    const categoriesSwiper = new Swiper(".categories__slider", {
        // Optional parameters

        loop: false,
        // autoHeight: true,
        // Navigation arrows
        navigation: {
            nextEl: ".categories__swiper-button--next",
            prevEl: ".categories__swiper-button--prev",
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },




        slidesPerView: 4, // Количество слайдов

        spaceBetween: 26, // Отступы между слайдами

        // Адаптив
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 10,
                grid: {
                    rows: 2,
                },
            },

            400: {
                slidesPerView: 2,
                spaceBetween: 10,
                grid: {
                    rows: 2,
                }
            },

            640: {
                slidesPerView: 3,
            },

            992: {
                slidesPerView: 3,
            },

            1300: {
                slidesPerView: 3,
            },

            1440: {
                slidesPerView: 4,
            },

        },

    });


    // **************Подключаем 2-й слайдер*************

    const reviewsSwiper = new Swiper(".unreleased__slider", {
        // Optional parameters

        loop: false,

        // Navigation arrows
        navigation: {
            nextEl: ".unreleased__swiper-button--next",
            prevEl: ".unreleased__swiper-button--prev",
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        slidesPerView: 5, // Количество слайдов
        spaceBetween: 30, // Отступы между слайдами

        // Адаптив
        breakpoints: {
            200: {
                slidesPerView: 1,

            },


            300: {
                slidesPerView: 1,
                centeredSlides: true,
                slidesPerGroup: 1,
            },

            500: {
                slidesPerView: 2,
                spaceBetween: 20
            },

            700: {
                slidesPerView: 3,
            },

            992: {
                slidesPerView: 3,
            },

            1200: {
                slidesPerView: 4,
            },

            1300: {
                slidesPerView: 4,
            },

            1440: {
                slidesPerView: 5,
            },

        },


    });


    // Меняем цвет SVG

    $('.product-card__like').click(function() {
        $(this).toggleClass('product-card__like--active');
    });


});