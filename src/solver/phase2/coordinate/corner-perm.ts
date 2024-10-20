import * as CornerPerm from "~/cube/cubie/corner-perm";
import { factorials } from "~/solver/util/math";

export function encode(values: number[]): number {
	let coord = 0;

	for (let i = 1; i < 8; i++) {
		for (let j = 0; j < i; j++) {
			if (values[i] < values[j]) coord += factorials[i];
		}
	}

	return coord;
}

export function decode(coord: number): number[] {
	const cp = [...CornerPerm.defaultState];

	let corners = [...cp];

	for (let i = 7; i >= 1; i--) {
		const q = Math.floor(coord / factorials[i]);
		cp[i] = corners[corners.length - 1 - q];

		coord %= factorials[i];
		corners = corners.filter(corner => corner != cp[i]);
	}

	cp[0] = corners[0];

	return cp;
}

export const max = 40320;
