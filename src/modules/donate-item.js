import * as Function from '../core/utils/index';
import { Settings as Set } from '../core/constants/settings';

export class DonateItem {
    #donate

    constructor(donate) {
        this.#donate = donate;
    }

    render() {
        const donateItem = document.createElement('div');
        donateItem.className = 'donate-item';
        donateItem.textContent = `${Function.getFormattedTime(this.#donate.date)} – `;

        const donateAmount = document.createElement('b');
        donateAmount.textContent = `${this.#donate.amount}${Set.currency}`;
        donateItem.append(donateAmount);

        return donateItem;
    }
}
