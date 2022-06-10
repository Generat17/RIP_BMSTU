import {MainList} from "../../components/main/MainList.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const mainList = new MainList(this.parent);
        mainList.render();
    }
}
