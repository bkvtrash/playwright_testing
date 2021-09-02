const config = {
    use: {
        browserName: 'chromium',
        channel: 'chrome-beta',
    },
    params: {
        url: 'https://www.onliner.by/',
        expectedTitles: {
            catalogPage: /Каталог/,
            mobilePage: /Мобильный телефон/,
            registerPage: /Профиль/,
            consolePage: /Игровую приставку/,
        },
        mobileManufacturer: 'HONOR',
        invalidEmail: 'dkhfbvkdn',
        expectedErrorForEmailInput: 'Некорректный e-mail',
        invalidPassword: '1234',
        expectedErrorForPswdInput: 'Минимум 8 символов',
        newPassword: '12345678',
        incorrectNewPassword: '12345677',
        expectedErrorForDifferentPasswords: 'Пароли не совпадают',
        emailFormDescriptionErrorSelector: '.auth-form__field:has([type=email]) .auth-form__description_error',
        shortPswdFormNotificationSelector: '.auth-form__securebox_condensed .auth-form__description_primary:below(.auth-form__row:has([type=password]))',
        incorrectPasswordsErrorSelector: '.auth-form__field:has([type=password]) .auth-form__description_error',
        expectedButtonText: 'В корзине',
        expectedProductData: 'Игровые приставки',
    }
};

module.exports = config;
