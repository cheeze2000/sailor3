export function encode(values: number[]): number {
	let coord = 0;

	for (let i = 0; i < 11; i++) {
		coord *= 2;
		coord += values[i];
	}

	return coord;
}

export function decode(coord: number): number[] {
	const eo: number[] = [];

	let sum = 0;

	for (let i = 10; i >= 0; i--) {
		eo[i] = coord % 2;
		sum += eo[i];
		coord = Math.floor(coord / 2);
	}

	eo[11] = (2 - sum % 2) % 2;

	return eo;
}

export const max = 2048;
