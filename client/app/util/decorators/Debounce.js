System.register([], function (_export, _context) {
	"use strict";

	function debounce(milisegundos = 500) {
		return function (target, key, descriptor) {
			const metodoOriginal = descriptor.value;

			let timer = 0;

			descriptor.value = function (...args) {
				if (event) {
					event.preventDefault();
				}

				clearTimeout(timer);
				timer = setTimeout(() => metodoOriginal.apply(this, args), milisegundos);
			};
			return descriptor;
		};
	}

	_export("debounce", debounce);

	return {
		setters: [],
		execute: function () {}
	};
});
//# sourceMappingURL=Debounce.js.map