import { Corner } from "~/cube/cubie";
import { PrimaryMove } from "~/cube/move";

export function transform(move: PrimaryMove, values: number[]): number[] {
	const t1 = transformations[move];

	return values.map((_, i) => values[t1[i]]);
}

export const defaultState = [
	Corner.UBL, Corner.UBR, Corner.UFR, Corner.UFL,
	Corner.DFL, Corner.DFR, Corner.DBR, Corner.DBL,
];

export const transformations: Record<PrimaryMove, number[]> = {
	[PrimaryMove.U]: [
		Corner.UFL, Corner.UBL, Corner.UBR, Corner.UFR,
		Corner.DFL, Corner.DFR, Corner.DBR, Corner.DBL,
	],
	[PrimaryMove.U2]: [
		Corner.UFR, Corner.UFL, Corner.UBL, Corner.UBR,
		Corner.DFL, Corner.DFR, Corner.DBR, Corner.DBL,
	],
	[PrimaryMove.U_]: [
		Corner.UBR, Corner.UFR, Corner.UFL, Corner.UBL,
		Corner.DFL, Corner.DFR, Corner.DBR, Corner.DBL,
	],
	[PrimaryMove.L]: [
		Corner.DBL, Corner.UBR, Corner.UFR, Corner.UBL,
		Corner.UFL, Corner.DFR, Corner.DBR, Corner.DFL,
	],
	[PrimaryMove.L2]: [
		Corner.DFL, Corner.UBR, Corner.UFR, Corner.DBL,
		Corner.UBL, Corner.DFR, Corner.DBR, Corner.UFL,
	],
	[PrimaryMove.L_]: [
		Corner.UFL, Corner.UBR, Corner.UFR, Corner.DFL,
		Corner.DBL, Corner.DFR, Corner.DBR, Corner.UBL,
	],
	[PrimaryMove.F]: [
		Corner.UBL, Corner.UBR, Corner.UFL, Corner.DFL,
		Corner.DFR, Corner.UFR, Corner.DBR, Corner.DBL,
	],
	[PrimaryMove.F2]: [
		Corner.UBL, Corner.UBR, Corner.DFL, Corner.DFR,
		Corner.UFR, Corner.UFL, Corner.DBR, Corner.DBL,
	],
	[PrimaryMove.F_]: [
		Corner.UBL, Corner.UBR, Corner.DFR, Corner.UFR,
		Corner.UFL, Corner.DFL, Corner.DBR, Corner.DBL,
	],
	[PrimaryMove.R]: [
		Corner.UBL, Corner.UFR, Corner.DFR, Corner.UFL,
		Corner.DFL, Corner.DBR, Corner.UBR, Corner.DBL,
	],
	[PrimaryMove.R2]: [
		Corner.UBL, Corner.DFR, Corner.DBR, Corner.UFL,
		Corner.DFL, Corner.UBR, Corner.UFR, Corner.DBL,
	],
	[PrimaryMove.R_]: [
		Corner.UBL, Corner.DBR, Corner.UBR, Corner.UFL,
		Corner.DFL, Corner.UFR, Corner.DFR, Corner.DBL,
	],
	[PrimaryMove.B]: [
		Corner.UBR, Corner.DBR, Corner.UFR, Corner.UFL,
		Corner.DFL, Corner.DFR, Corner.DBL, Corner.UBL,
	],
	[PrimaryMove.B2]: [
		Corner.DBR, Corner.DBL, Corner.UFR, Corner.UFL,
		Corner.DFL, Corner.DFR, Corner.UBL, Corner.UBR,
	],
	[PrimaryMove.B_]: [
		Corner.DBL, Corner.UBL, Corner.UFR, Corner.UFL,
		Corner.DFL, Corner.DFR, Corner.UBR, Corner.DBR,
	],
	[PrimaryMove.D]: [
		Corner.UBL, Corner.UBR, Corner.UFR, Corner.UFL,
		Corner.DBL, Corner.DFL, Corner.DFR, Corner.DBR,
	],
	[PrimaryMove.D2]: [
		Corner.UBL, Corner.UBR, Corner.UFR, Corner.UFL,
		Corner.DBR, Corner.DBL, Corner.DFL, Corner.DFR,
	],
	[PrimaryMove.D_]: [
		Corner.UBL, Corner.UBR, Corner.UFR, Corner.UFL,
		Corner.DFR, Corner.DBR, Corner.DBL, Corner.DFL,
	],
};
