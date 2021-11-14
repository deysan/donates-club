import { DonateForm } from '../modules/donate-form';

export class App {
    #donat

    constructor() {
        this.#donat = new DonateForm();
    }
    run() {
        const donatBlock = this.#donat.render();

        document.body.append(donatBlock);
    }
}
