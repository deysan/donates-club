export class DonateForm {
    #donateForm

    constructor() {
        this.#donateForm = document.createElement('form');
        this.#donateForm.className = 'donate-form';
    }

    render() {
        const donateFormTitle = document.createElement('h1');
        donateFormTitle.id = 'total-amount';
        donateFormTitle.textContent = '28$';

        const donateFormLabel = document.createElement('label');
        donateFormLabel.className = 'donate-form__input-label';
        donateFormLabel.textContent = 'Введите сумму в $';

        const donateFormInput = document.createElement('input');
        donateFormInput.className = 'donate-form__donate-input';
        donateFormInput.name = 'amount';
        donateFormInput.type = 'number';
        donateFormInput.max = '100';
        donateFormInput.min = '0';
        donateFormInput.setAttribute('required', '');

        const donateFormButton = document.createElement('button');
        donateFormButton.className = 'donate-form__submit-button';
        donateFormButton.type = 'submit';
        donateFormButton.textContent = 'Задонатить';

        this.#donateForm.append(donateFormTitle, donateFormLabel, donateFormInput, donateFormButton)

        return this.#donateForm;
    }
}
