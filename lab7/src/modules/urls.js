class Urls {
    constructor() {
        this.url = 'http://127.0.0.1:8000/';
    }

    companys() {
        return `${this.url}Company/`;
    }

    companyId(id) {
        return `${this.url}Company/${id}`;
    }

    products() {
        return `${this.url}Product/`;
    }

    productId(id) {
        return `${this.url}Product/${id}`;
    }
}

export const urls = new Urls();
