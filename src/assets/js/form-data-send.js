'use strict'

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form-feedback');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let errors = formValidate(form);
        let formData = new FormData(form);

        if (errors === 0) {
            form.classList.add('_sending');

            let response = await fetch('php/sendmail.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Спасибо! Скоро мы с Вами свяжемся.');
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка! Не удалось отправить запрос.');
                form.classList.remove('_sending');
            }
        } else {
            alert('Заполните поле формы!');
        }
    }

    function formValidate(form) {
        let formReq = document.querySelectorAll('._req');
        let errors = 0;

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('f_phone')) {
                if (!checkPhone(input)) {
                    formAddError(input);
                    errors++;
                }

            } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                errors++;
            }
        }
        return errors;
    }

    function formAddError(input) {
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.classList.remove('_error');
    }

    function checkPhone(input) {
        return /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/.test(input.value);
    }

})