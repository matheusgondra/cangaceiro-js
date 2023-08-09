System.register(["../converters/DateConverter.js", "./View.js"], function (_export, _context) {
	"use strict";

	var DateConverter, View;
	return {
		setters: [function (_convertersDateConverterJs) {
			DateConverter = _convertersDateConverterJs.DateConverter;
		}, function (_ViewJs) {
			View = _ViewJs.View;
		}],
		execute: function () {
			let NegociacoesView = class NegociacoesView extends View {
				template(model) {
					return `
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th>DATA</th>
						<th>QUANTIDADE</th>
						<th>VALOR</th>
						<th>VOLUME</th>
					</tr>
				</thead>

				<tbody>
					${model.paraArray().map(negociacao => `
						<tr>
							<td>${DateConverter.paraTexto(negociacao.data)}</td>
							<td>${negociacao.quantidade}</td>
							<td>${negociacao.valor}</td>
							<td>${negociacao.volume}</td>
						</tr>
					`).join("")}
				</tbody>

				<tfoot>
					<tr>
						<td colspan="3"></td>
						<td>${model.volumeTotal}</td>
					</tr>
				</tfoot>
			</table>	
		`;
				}

			};

			_export("NegociacoesView", NegociacoesView);
		}
	};
});
//# sourceMappingURL=NegociacoesView.js.map