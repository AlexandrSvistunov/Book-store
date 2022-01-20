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
                    required: "Введитн Ваш номер телефона",
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

});