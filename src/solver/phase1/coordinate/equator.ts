import { Edge } from "~/cube/cubie";
import { equatorEdges, nonEquatorEdges, reorderEdgePerm } from "~/solver/util/edge";
import { binomials } from "~/solver/util/math";

export function encode(values: number[]): number {
	const ep = reorderEdgePerm(values);

	let coord = 0;
	let equatorEdgesFound = 0;

	for (let i = 0; i < 12; i++) {
		if (equatorEdges.includes(ep[i])) {
			equatorEdgesFound++;
		} else if (equatorEdgesFound > 0) {
			coord += binomials[i][equatorEdgesFound - 1];
		}
	};

	return coord;
}

export function decode(coord: number): number[] {
	const ep: Edge[] = [];

	let equatorEdgesRemaining = 4;

	for (let i = 11; i >= 0; i--) {
		if (equatorEdgesRemaining == 0) {
			ep[i] = nonEquatorEdges[i];
			continue;
		}

		const binom = binomials[i][equatorEdgesRemaining - 1];

		if (coord >= binom) {
			coord -= binom;
			ep[i] = nonEquatorEdges[i - equatorEdgesRemaining];
		} else {
			equatorEdgesRemaining--;
			ep[i] = equatorEdges[equatorEdgesRemaining];
		}
	}

	return reorderEdgePerm(ep);
}

export const max = 495;
