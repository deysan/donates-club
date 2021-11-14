import * as Function from '../core/utils/index';
import { DonateForm } from '../modules/donate-form';
import { DonateList } from '../modules/donate-list';

export class App {
    #state
    #donate
    #donateList

    constructor() {
        this.#state = {
            donates: mockDonates,
            totalAmount: totalAmount
        };
        this.#donate = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this));
        this.#donateList = new DonateList(this.#state.donates);
    }

    createNewDonate(newDonate) {
        this.#state.donates.push(newDonate);
        this.#state.totalAmount += Number(newDonate.amount);
        this.#donateList.updateDonates(this.#state.donates);
        this.#donate.updateTotalAmount(this.#state.totalAmount);
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

const mockDonatesAmount = [];

mockDonates.forEach((donate) => {
    return mockDonatesAmount.push(donate.amount);
})

const totalAmount = Function.calculateSumOfNumbers(mockDonatesAmount);
