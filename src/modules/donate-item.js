export class DonateItem {
    #donate

    constructor(donate) {
        this.#donate = donate;
    }

    render() {
        const donateItem = document.createElement('div');
        donateItem.className = 'donate-item';
        donateItem.textContent = `${this.#donate.date} - `;

        const donateAmount = document.createElement('b');
        donateAmount.textContent = `${this.#donate.amount}$`;
        donateItem.append(donateAmount);

        return donateItem;
    }
}
