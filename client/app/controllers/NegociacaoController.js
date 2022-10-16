class NegociacaoController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
	}

	adiciona(event) {
		event.preventDefault();

		let data = new Date(
			...this._inputData.value
				.split("-")
				.map((item, indice) => item - indice % 2)
		);

		let negociacao = new Negociacao(
			data,
			parseInt(this._inputQuantidade.value),
			parseFloat(this._inputValor.value)
		);
		
		let diaMesAno = DateConverter.paraTexto(negociacao.data);
		console.log(diaMesAno)
	}
}