import { obrigatorio } from "../Obrigatorio";

export function bindEvent(
	event = obrigatorio("event"),
	selector = obrigatorio("selector"),
	prevent = true
) {
	return function(target, propertyKey, descriptor) {
		Reflect.metadata(
			"bindEvent",
			{ event, selector, prevent, propertyKey },
			Object.getPrototypeOf(target),
			propertyKey
		);

		return descriptor;
	}
}