import { DonateForm } from '../modules/donate-form';
import { DonateList } from '../modules/donate-list';

export class App {
    #donate
    #donateList

    constructor() {
        this.#donate = new DonateForm();
        this.#donateList = new DonateList(mockDonates);
    }

    run() {
        const donatBlock = this.#donate.render();
        const donatListBlock = this.#donateList.render();

        document.body.append(donatBlock, donatListBlock);
    }
}

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
];
