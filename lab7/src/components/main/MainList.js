import {Companys} from "../../pages/companys/Companys.js";
import {Products} from "../../pages/products/Products.js";

export class MainList {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <ul style="list-style: none;">
            <li><a href="javascript:void(0);" id="company-link" style="font-size: 40px; text-decoration: none; color: black;">Компании</a></li>
            <li><a href="javascript:void(0);" id="product-link" style="font-size: 40px; text-decoration: none; color: black;">Продукты</a></li>
            </ul>
        `;
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());

        document.getElementById('company-link').addEventListener("click", () => {
            const companys = new Companys(this.parent);
            companys.render();
        })

        document.getElementById('product-link').addEventListener("click", () => {
            const products = new Products(this.parent);
            products.render();
        });

    }


}
