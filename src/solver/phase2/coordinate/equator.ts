import { equatorEdges, nonEquatorEdges, reorderEdgePerm } from "~/solver/util/edge";
import { factorials } from "~/solver/util/math";

export function encode(values: number[]): number {
	const ep = reorderEdgePerm(values);

	let coord = 0;

	for (let i = 1; i < 4; i++) {
		for (let j = 0; j < i; j++) {
			if (ep[i + 8] < ep[j + 8]) coord += factorials[i];
		};
	};

	return coord;
}

export function decode(coord: number): number[] {
	const ep: number[] = [];

	let edges = [...equatorEdges];

	for (let i = 3; i >= 1; i--) {
		const q = Math.floor(coord / factorials[i]);
		ep[i] = edges[edges.length - 1 - q];

		coord %= factorials[i];
		edges = edges.filter(edge => edge != ep[i]);
	}

	ep[0] = edges[0];

	return reorderEdgePerm([
		...nonEquatorEdges,
		...ep,
	]);
}

export const max = 24;
