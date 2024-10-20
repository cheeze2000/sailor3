export function encode(values: number[]): number {
	let coord = 0;

	for (let i = 0; i < 7; i++) {
		coord *= 3;
		coord += values[i];
	}

	return coord;
}

export function decode(coord: number): number[] {
	const co: number[] = [];

	let sum = 0;

	for (let i = 6; i >= 0; i--) {
		co[i] = coord % 3;
		sum += co[i];
		coord = Math.floor(coord / 3);
	}

	co[7] = (3 - sum % 3) % 3;

	return co;
}

export const max = 2187;
