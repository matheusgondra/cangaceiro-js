export function debounce(fn, milisegundos) {
	let timer = 0;

	return () => {
		clearTimeout(timer);
		setTimeout(() => fn(), milisegundos);
	}
}