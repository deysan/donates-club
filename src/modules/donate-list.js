import { DonateItem } from './donate-item';

export class DonateList {
    #donatesContainer
    #donateItem
    #donates

    constructor(donates) {
        this.#donatesContainer = document.createElement('div');
        this.#donatesContainer.className = 'donates-container';
        this.#donates = donates;
    }

    render() {
        const donatesContainerTitle = document.createElement('h2');
        donatesContainerTitle.className = 'donates-container__title';
        donatesContainerTitle.textContent = 'Список донатов';

        const donatesList = document.createElement('div');
        donatesList.className = 'donates-container__donates';

        this.#donates.forEach((donate) => {
            this.#donateItem = new DonateItem(donate);
            const donateItems = this.#donateItem.render();
            return donatesList.append(donateItems);
        })

        this.#donatesContainer.append(donatesContainerTitle, donatesList)

        return this.#donatesContainer;
    }
}
