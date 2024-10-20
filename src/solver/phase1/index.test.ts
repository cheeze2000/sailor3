import { expect, test } from "vitest";

import { CubeState } from "~/cube";
import { Phase1State } from "~/solver/phase1";
import * as CornerOriCoord from "~/solver/phase1/coordinate/corner-ori";
import * as EdgeOriCoord from "~/solver/phase1/coordinate/edge-ori";
import * as EquatorCoord from "~/solver/phase1/coordinate/equator";

test("phase 1 coordinate", () => {
	const state = new Phase1State(new CubeState());

	expect(state).toEqual({
		co: 0,
		eo: 0,
		eq: 0,
	});
});

test("corner orientation coordinate", () => {
	for (let i = 0; i < CornerOriCoord.max; i++) {
		const co = CornerOriCoord.decode(i);

		expect(CornerOriCoord.encode(co)).toBe(i);
	}
});

test("edge orientation coordinate", () => {
	for (let i = 0; i < EdgeOriCoord.max; i++) {
		const eo = EdgeOriCoord.decode(i);

		expect(EdgeOriCoord.encode(eo)).toBe(i);
	}
});

test("equator coordinate", () => {
	for (let i = 0; i < EquatorCoord.max; i++) {
		const ep = EquatorCoord.decode(i);

		expect(EquatorCoord.encode(ep)).toBe(i);
	}
});
