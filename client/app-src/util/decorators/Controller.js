export function controller(...seletores) {
	const elements = seletores.map(seletor => document.querySelector(seletor));

	return function(constructor) {
		const constructorOriginal = constructor;

		const constructorNovo = function() {
			const instance = new constructorOriginal(...elements);
			Object
				.getOwnPropertyNames(constructorOriginal.prototype)
				.forEach(property => {
					if(Reflect.hasMetadata("bindEvent", instance, property)) {
						associaEvento(instance, Reflect.getMetadata("bindEvent", instance, property));
					}
				});
		}

		constructorNovo.prototype = constructorOriginal.prototype;
		return constructorNovo;
	}
}

function associaEvento(instance, metadado) {
	document
		.querySelector(metadado.selector)
		.addEventListener(metadado.event, event => {
<<<<<<< HEAD
			if(metadado.prevent) event.preventDefault();
=======
			if(metadado.prevent) {
				event.preventDefault();
			}
>>>>>>> b3fd83d650cb66f4e940e22807553db5eebdb536
			instance[metadado.propertyKey](event);
		});
}