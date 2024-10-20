import { expect, test } from "vitest";

import { CubeState } from "~/cube";
import { Corner, Edge } from "~/cube/cubie";
import { PrimaryMove } from "~/cube/move";

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

	expect(state.co).toEqual([1, 1, 1, 2, 0, 0, 1, 0]);

	expect(state.cp).toEqual([
		Corner.DBR, Corner.UBR, Corner.UFR, Corner.DFR,
		Corner.DFL, Corner.UBL, Corner.UFL, Corner.DBL,
	]);

	expect(state.eo).toEqual([0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]);

	expect(state.ep).toEqual([
		Edge.UR, Edge.FR, Edge.UL, Edge.FL,
		Edge.BR, Edge.DB, Edge.DF, Edge.UF,
		Edge.DL, Edge.UB, Edge.BL, Edge.DR,
	]);
});

test("Feliks Zemdegs' 4.16", () => {
	const scramble = [
		PrimaryMove.U2,
		PrimaryMove.L2,
		PrimaryMove.D,
		PrimaryMove.R2,
		PrimaryMove.U,
		PrimaryMove.B2,
		PrimaryMove.R2,
		PrimaryMove.D_,
		PrimaryMove.L2,
		PrimaryMove.R_,
		PrimaryMove.F,
		PrimaryMove.L2,
		PrimaryMove.B2,
		PrimaryMove.R,
		PrimaryMove.B,
		PrimaryMove.R2,
		PrimaryMove.D_,
		PrimaryMove.B_,
		PrimaryMove.U_,
		PrimaryMove.L_,
	];

	let state = new CubeState();
	for (const move of scramble) state = state.transform(move);

	expect(state.co).toEqual([0, 2, 0, 1, 2, 0, 1, 0]);

	expect(state.cp).toEqual([
		Corner.DBR, Corner.DFL, Corner.DFR, Corner.UBL,
		Corner.UFR, Corner.UFL, Corner.DBL, Corner.UBR,
	]);

	expect(state.eo).toEqual([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1]);

	expect(state.ep).toEqual([
		Edge.UF, Edge.FR, Edge.UB, Edge.BL,
		Edge.DR, Edge.UL, Edge.DB, Edge.BR,
		Edge.DF, Edge.DL, Edge.FL, Edge.UR,
	]);
});

test("Unscrambled state", () => {
	let state = new CubeState();

	expect(state.co).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);

	expect(state.cp).toEqual([
		Corner.UBL, Corner.UBR, Corner.UFR, Corner.UFL,
		Corner.DFL, Corner.DFR, Corner.DBR, Corner.DBL,
	]);

	expect(state.eo).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	expect(state.ep).toEqual([
		Edge.UB, Edge.UR, Edge.UF, Edge.UL,
		Edge.FR, Edge.FL, Edge.BL, Edge.BR,
		Edge.DF, Edge.DR, Edge.DB, Edge.DL,
	]);

	expect(state.isSolved()).toBe(true);

	state = state.transform(PrimaryMove.U);
	expect(state.isSolved()).toBe(false);

	state = state.transform(PrimaryMove.U_);
	expect(state.isSolved()).toBe(true);
});
