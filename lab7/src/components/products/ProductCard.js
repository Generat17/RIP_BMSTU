export class ProductCard {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="card" style="width: 200px;border: solid 2px blue; margin: 10px; padding: 10px; border-radius: 20px">
                <div>
                    <h5 style="font-size: 20px">
                        Id = ${data.id} <br>
                        Название:  ${data.name}
                    </h5>
                    <button id="click-card-${data.id}" data-id="${data.id}" style="font-size: 20px; margin-left: 20px; background: green; color: yellow">Показать цену</button> 
                </div>
            </div>
        `;
    }

    addListeners(data, listener) {
        document.getElementById(`click-card-${data.id}`).addEventListener("click", listener);
    }

    render(data, listener) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listener)
    }
}