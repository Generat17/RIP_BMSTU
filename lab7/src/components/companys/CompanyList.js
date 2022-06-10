import {CompanyCard} from "./CompanyCard.js";
import {MainList} from "../main/MainList.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";

export class CompanyList {
    constructor(parent) {
        this.parent = parent;
        this.data = undefined
    }

    get page() {
        return document.getElementById('companys')
    }

    async getData() {
        return ajax.get(urls.companys());
    }

    getHTML() {
        return `
            <button style="font-size: 25px; color: blue; background: #efea51; margin: 10px; padding: 10px; font-weight: bold;" id="return-back">Назад</button>
            <div id="companys" class="d-flex flex-wrap">
                
            </div>
        `
    }

    async clickBut(e){
        const cardId = e.target.dataset.id;
        const data = await ajax.get(urls.companyId(cardId));
        alert(`Адрес = ${data.data.address}`);
    }

    async render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        document.getElementById('return-back').addEventListener('click', () => {
            this.parent.innerHTML = '';
            const mainList = new MainList(this.parent);
            mainList.render();
        });

        const data = await this.getData();

        data.data.forEach((item) => {
            const company = new CompanyCard(this.page);
            company.render(item, this.clickBut.bind(this));
        })
    }
}