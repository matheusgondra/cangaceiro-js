System.register(["../../util/ApplicationException.js", "../../util/HttpService.js", "./Negociacao.js"], function (_export, _context) {
	"use strict";

	var ApplicationException, HttpService, Negociacao;

	function _asyncToGenerator(fn) {
		return function () {
			var gen = fn.apply(this, arguments);
			return new Promise(function (resolve, reject) {
				function step(key, arg) {
					try {
						var info = gen[key](arg);
						var value = info.value;
					} catch (error) {
						reject(error);
						return;
					}

					if (info.done) {
						resolve(value);
					} else {
						return Promise.resolve(value).then(function (value) {
							step("next", value);
						}, function (err) {
							step("throw", err);
						});
					}
				}

				return step("next");
			});
		};
	}

	return {
		setters: [function (_utilApplicationExceptionJs) {
			ApplicationException = _utilApplicationExceptionJs.ApplicationException;
		}, function (_utilHttpServiceJs) {
			HttpService = _utilHttpServiceJs.HttpService;
		}, function (_NegociacaoJs) {
			Negociacao = _NegociacaoJs.Negociacao;
		}],
		execute: function () {
			class NegociacaoService {
				constructor() {
					this._http = new HttpService();
				}

				obtemNegociacoesDaSemana() {
					return this._http.get("negociacoes/semana").then(dados => {
						const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
						return negociacoes;
					}, err => {
						throw new Error("Não foi possível obter as negociações");
					});
				}

				obtemNegociacoesDaSemanaAnterior() {
					return this._http.get("negociacoes/anterior").then(dados => {
						const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
						return negociacoes;
					}, err => {
						throw new Error("Não foi possível obter as negociações da semana anterior");
					});
				}

				obtemNegociacoesDaSemanaRetrasada() {
					return this._http.get("negociacoes/retrasada").then(dados => {
						const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
						return negociacoes;
					}, err => {
						throw new Error("Não foi possível obter as negociações da semana retrasada");
					});
				}

				obtemNegociacoesDoPeriodo() {
					var _this = this;

					return _asyncToGenerator(function* () {
						try {
							let periodo = yield Promise.all([_this.obtemNegociacoesDaSemana(), _this.obtemNegociacoesDaSemanaAnterior(), _this.obtemNegociacoesDaSemanaRetrasada()]);
							periodo.reduce(function (novoArray, item) {
								return novoArray.concat(item);
							}, []).sort(function (a, b) {
								return b.data.getTime() - a.data.getTime();
							});
						} catch (err) {
							console.log(err);
							throw new ApplicationException("Não foi possível obter as negociações do período");
						}
					})();
				}
			}

			_export("NegociacaoService", NegociacaoService);
		}
	};
});
//# sourceMappingURL=NegociacaoService.js.map