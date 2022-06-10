import {ProductList} from "../../components/products/ProductList.js";

export class Products {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const products = new ProductList(this.parent);
        products.render();
    }
}