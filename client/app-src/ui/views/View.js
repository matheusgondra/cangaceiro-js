export class View {
	constructor(seletor) {
		this._elemento = document.querySelector(seletor);
	}

	update(model) {
		return this._elemento.innerHTML = this.template(model);
	}

	template(model) {
		throw new Error("Você precisa implementar o método template");
	}
}