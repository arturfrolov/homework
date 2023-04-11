function FormValidate(_form) {
    const errorWrapperClass = 'error';
    const errorItemClass = 'error_item';
    const parentItemClass = 'form-control';
    const _elements = _form.elements;
    _form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.checkFormElements();
    });
    this.checkFormElements = function () {
        for (let i = 0; i < _elements.length; i++) {
            const _element = _elements[i];
            const reqMessage = _element.dataset.req;
            const emailMessage = _element.dataset.email;
            const passwordMessage = _element.dataset.password;
            this.clearError(_element);
            if (reqMessage) {
                this.checkRequired(_element, reqMessage);
            }
            if (emailMessage) {
                this.checkEmail(_element, emailMessage);
            }
            if (passwordMessage) {
                this.checkPassword(passwordMessage);
            }
        }
    };
    this.checkPassword = function (passwordMessage) {
        const allPasswordElement = _form.querySelectorAll('input[type="password"]');
        const valueElement = Array.from(allPasswordElement).map(item => item.value);
        const patterns = [
            { regex: /.*[A-Z]/, message: 'Не менее одной большой буквы' },
            { regex: /.*\d/, message: 'Не менее одной цифры' },
            { regex: /.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, message: 'Один знак препинания' },
            { regex: /.{8,}/, message: 'Минимальная длинна 8 символов' },
        ];
        for (const pattern of patterns) {
            if (!pattern.regex.test(valueElement[0])) {
                allPasswordElement.forEach(fieldItem => {
                    this.errorTemplate(fieldItem, pattern.message);
                });
            }
        }
        if ((new Set(valueElement)).size > 1) {
            allPasswordElement.forEach(fieldItem => {
                this.errorTemplate(fieldItem, passwordMessage);
            });
        }
    };
    this.checkEmail = function (_element, emailMessage) {
        const emailString = _element.value;
        if (emailString.includes('@') === false) {
            this.errorTemplate(_element, emailMessage);
        }
    };
    this.checkRequired = function (_element, reqMessage) {
        const notValidString = _element.value.length === 0;
        const notValidChecked = _element.type === 'checkbox' && _element.checked === false;
        if (notValidString || notValidChecked) {
            this.errorTemplate(_element, reqMessage);
        }
    };
    this.errorTemplate = (_element, reqMessage) => {
        const parent = _element.closest(`.${parentItemClass}`);
        parent.classList.add(errorWrapperClass);
        parent.insertAdjacentHTML('beforeend', `<small class="${errorItemClass}">${reqMessage}</small>`)

    };
    this.clearError = function (_element) {
        const parent = _element.closest(`.${parentItemClass}`);
        if (parent !== null && parent.classList.contains(errorWrapperClass) === true) {
            parent.classList.remove(errorWrapperClass);
            parent.querySelectorAll(`.${errorItemClass}`).forEach(item => item.remove());
        }
    };
}

new FormValidate(document.querySelector('#form'));
