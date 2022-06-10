import {ProductCard} from "./ProductCard.js";
import {MainList} from "../main/MainList.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";

export class ProductList {
    constructor(parent) {
        this.parent = parent;
        this.data = undefined
    }

    get page() {
        return document.getElementById('products')
    }

    async getData() {
        return ajax.get(urls.products());
    }

    getHTML() {
        return `
            <button style="font-size: 25px; color: blue; background: #efea51; margin: 10px; padding: 10px; font-weight: bold;" id="return-back">Назад</button>
            <div id="products" class="d-flex flex-wrap">
                
            </div>
        `
    }

    async clickBut(e){
        const cardId = e.target.dataset.id;
        const data = await ajax.get(urls.productId(cardId));
        alert(`Цена = ${data.data.price}`);
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
            const product = new ProductCard(this.page);
            product.render(item, this.clickBut.bind(this));
        })
    }
}