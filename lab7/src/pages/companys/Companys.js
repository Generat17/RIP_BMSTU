import {CompanyList} from "../../components/companys/CompanyList.js";

export class Companys {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const companys = new CompanyList(this.parent);
        companys.render();
    }
}