import { Settings as Set } from "../core/constants/settings";

export class DonateForm {
    #donateForm
    #totalAmount

    constructor(totalAmount, createNewDonate) {
        this.#donateForm = document.createElement('form');
        this.#donateForm.className = 'donate-form';
        this.#totalAmount = totalAmount;
        this.createNewDonate = createNewDonate;
    }

    updateTotalAmount(newAmount) {
        const totalAmount = document.querySelector('#total-amount');
        totalAmount.textContent = `${newAmount}${Set.currency}`;

        return totalAmount;
    }

    render() {
        const donateFormTitle = document.createElement('h1');
        donateFormTitle.id = 'total-amount';
        donateFormTitle.textContent = `${this.#totalAmount}${Set.currency}`;

        const donateFormLabel = document.createElement('label');
        donateFormLabel.className = 'donate-form__input-label';
        donateFormLabel.textContent = `Введите сумму в ${Set.currency}`;

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

        this.#donateForm.addEventListener('submit', event => {
            event.preventDefault();
            const {target} = event;
            const donateInput = target.amount;
            const donateValue = donateInput.value;


            if (donateValue) {
                const newDonate = {
                    amount: donateValue,
                    date: new Date()
                };

                this.createNewDonate(newDonate);
                donateFormInput.value = '';
            }
        })

        this.#donateForm.append(donateFormTitle, donateFormLabel, donateFormInput, donateFormButton)

        return this.#donateForm;
    }
}
