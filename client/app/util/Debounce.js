System.register([], function (_export, _context) {
	"use strict";

	function debounce(fn, milisegundos) {
		let timer = 0;

		return () => {
			clearTimeout(timer);
			setTimeout(() => fn(), milisegundos);
		};
	}

	_export("debounce", debounce);

	return {
		setters: [],
		execute: function () {}
	};
});
//# sourceMappingURL=Debounce.js.map