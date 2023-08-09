System.register([], function (_export, _context) {
	"use strict";

	function controller(...seletores) {
		const elements = seletores.map(seletor => document.querySelector(seletor));

		return function (constructor) {
			const constructorOriginal = constructor;

			const constructorNovo = function () {
				const instancia = new constructorOriginal(...elements);
				Object.getOwnPropertyNames(constructorOriginal.prototype).forEach(property => {
					if (Reflect.hasMetadata("bindEvent", instancia, property)) {}
				});

				return new constructorOriginal(...elements);
			};

			constructorNovo.prototype = constructorOriginal.prototype;
			return constructorNovo;
		};
	}

	_export("controller", controller);

	return {
		setters: [],
		execute: function () {}
	};
});
//# sourceMappingURL=Controller.js.map