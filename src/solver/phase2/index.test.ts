import { expect, test } from "vitest";

import { CubeState } from "~/cube";
import { Phase2State } from "~/solver/phase2";
import * as CornerPermCoord from "~/solver/phase2/coordinate/corner-perm";
import * as EdgePermCoord from "~/solver/phase2/coordinate/edge-perm";
import * as EquatorCoord from "~/solver/phase2/coordinate/equator";

test("phase 2 coordinate", () => {
	const state = new Phase2State(new CubeState());

	expect(state).toEqual({
		cp: 0,
		ep: 0,
		eq: 0,
	});
});

test("corner permutation coordinate", () => {
	for (let i = 0; i < CornerPermCoord.max; i++) {
		const co = CornerPermCoord.decode(i);

		expect(CornerPermCoord.encode(co)).toBe(i);
	}
});

test("edge permutation coordinate", () => {
	for (let i = 0; i < EdgePermCoord.max; i++) {
		const eo = EdgePermCoord.decode(i);

		expect(EdgePermCoord.encode(eo)).toBe(i);
	}
});

test("equator coordinate", () => {
	for (let i = 0; i < EquatorCoord.max; i++) {
		const ep = EquatorCoord.decode(i);

		expect(EquatorCoord.encode(ep)).toBe(i);
	}
});
