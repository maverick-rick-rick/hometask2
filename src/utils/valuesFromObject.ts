export function valuesFromObject(arr: []): string[][] {
	return arr.map((obj) => Object.values(obj));
}
