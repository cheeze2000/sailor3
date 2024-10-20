import { expect, test } from "vitest";

import { CubeState } from "~/cube";
import { PrimaryMove } from "~/cube/move";
import { KociembaSolver } from "~/solver";

const solver = new KociembaSolver();

test("Max Park's 3.13", () => {
	const scramble = [
		PrimaryMove.D,
		PrimaryMove.R_,
		PrimaryMove.U2,
		PrimaryMove.F2,
		PrimaryMove.D,
		PrimaryMove.U_,
		PrimaryMove.B2,
		PrimaryMove.R2,
		PrimaryMove.L_,
		PrimaryMove.F,
		PrimaryMove.U_,
		PrimaryMove.B2,
		PrimaryMove.U2,
		PrimaryMove.F,
		PrimaryMove.L,
		PrimaryMove.F_,
		PrimaryMove.D_,
	];

	let state = new CubeState();
	for (const move of scramble) state = state.transform(move);

	const solution = solver.solve(state)!;
	for (const move of solution) state = state.transform(move);

	expect(state.isSolved()).toBe(true);
});
