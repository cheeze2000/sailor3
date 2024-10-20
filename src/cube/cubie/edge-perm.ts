import { Edge } from "~/cube/cubie";
import { PrimaryMove } from "~/cube/move";

export function transform(move: PrimaryMove, values: number[]): number[] {
	const t1 = transformations[move];

	return values.map((_, i) => values[t1[i]]);
}

export const defaultState = [
	Edge.UB, Edge.UR, Edge.UF, Edge.UL,
	Edge.FR, Edge.FL, Edge.BL, Edge.BR,
	Edge.DF, Edge.DR, Edge.DB, Edge.DL,
];

export const transformations: Record<PrimaryMove, number[]> = {
	[PrimaryMove.U]: [
		Edge.UL, Edge.UB, Edge.UR, Edge.UF,
		Edge.FR, Edge.FL, Edge.BL, Edge.BR,
		Edge.DF, Edge.DR, Edge.DB, Edge.DL,
	],
	[PrimaryMove.U2]: [
		Edge.UF, Edge.UL, Edge.UB, Edge.UR,
		Edge.FR, Edge.FL, Edge.BL, Edge.BR,
		Edge.DF, Edge.DR, Edge.DB, Edge.DL,
	],
	[PrimaryMove.U_]: [
		Edge.UR, Edge.UF, Edge.UL, Edge.UB,
		Edge.FR, Edge.FL, Edge.BL, Edge.BR,
		Edge.DF, Edge.DR, Edge.DB, Edge.DL,
	],
	[PrimaryMove.L]: [
		Edge.UB, Edge.UR, Edge.UF, Edge.BL,
		Edge.FR, Edge.UL, Edge.DL, Edge.BR,
		Edge.DF, Edge.DR, Edge.DB, Edge.FL,
	],
	[PrimaryMove.L2]: [
		Edge.UB, Edge.UR, Edge.UF, Edge.DL,
		Edge.FR, Edge.BL, Edge.FL, Edge.BR,
		Edge.DF, Edge.DR, Edge.DB, Edge.UL,
	],
	[PrimaryMove.L_]: [
		Edge.UB, Edge.UR, Edge.UF, Edge.FL,
		Edge.FR, Edge.DL, Edge.UL, Edge.BR,
		Edge.DF, Edge.DR, Edge.DB, Edge.BL,
	],
	[PrimaryMove.F]: [
		Edge.UB, Edge.UR, Edge.FL, Edge.UL,
		Edge.UF, Edge.DF, Edge.BL, Edge.BR,
		Edge.FR, Edge.DR, Edge.DB, Edge.DL,
	],
	[PrimaryMove.F2]: [
		Edge.UB, Edge.UR, Edge.DF, Edge.UL,
		Edge.FL, Edge.FR, Edge.BL, Edge.BR,
		Edge.UF, Edge.DR, Edge.DB, Edge.DL,
	],
	[PrimaryMove.F_]: [
		Edge.UB, Edge.UR, Edge.FR, Edge.UL,
		Edge.DF, Edge.UF, Edge.BL, Edge.BR,
		Edge.FL, Edge.DR, Edge.DB, Edge.DL,
	],
	[PrimaryMove.R]: [
		Edge.UB, Edge.FR, Edge.UF, Edge.UL,
		Edge.DR, Edge.FL, Edge.BL, Edge.UR,
		Edge.DF, Edge.BR, Edge.DB, Edge.DL,
	],
	[PrimaryMove.R2]: [
		Edge.UB, Edge.DR, Edge.UF, Edge.UL,
		Edge.BR, Edge.FL, Edge.BL, Edge.FR,
		Edge.DF, Edge.UR, Edge.DB, Edge.DL,
	],
	[PrimaryMove.R_]: [
		Edge.UB, Edge.BR, Edge.UF, Edge.UL,
		Edge.UR, Edge.FL, Edge.BL, Edge.DR,
		Edge.DF, Edge.FR, Edge.DB, Edge.DL,
	],
	[PrimaryMove.B]: [
		Edge.BR, Edge.UR, Edge.UF, Edge.UL,
		Edge.FR, Edge.FL, Edge.UB, Edge.DB,
		Edge.DF, Edge.DR, Edge.BL, Edge.DL,
	],
	[PrimaryMove.B2]: [
		Edge.DB, Edge.UR, Edge.UF, Edge.UL,
		Edge.FR, Edge.FL, Edge.BR, Edge.BL,
		Edge.DF, Edge.DR, Edge.UB, Edge.DL,
	],
	[PrimaryMove.B_]: [
		Edge.BL, Edge.UR, Edge.UF, Edge.UL,
		Edge.FR, Edge.FL, Edge.DB, Edge.UB,
		Edge.DF, Edge.DR, Edge.BR, Edge.DL,
	],
	[PrimaryMove.D]: [
		Edge.UB, Edge.UR, Edge.UF, Edge.UL,
		Edge.FR, Edge.FL, Edge.BL, Edge.BR,
		Edge.DL, Edge.DF, Edge.DR, Edge.DB,
	],
	[PrimaryMove.D2]: [
		Edge.UB, Edge.UR, Edge.UF, Edge.UL,
		Edge.FR, Edge.FL, Edge.BL, Edge.BR,
		Edge.DB, Edge.DL, Edge.DF, Edge.DR,
	],
	[PrimaryMove.D_]: [
		Edge.UB, Edge.UR, Edge.UF, Edge.UL,
		Edge.FR, Edge.FL, Edge.BL, Edge.BR,
		Edge.DR, Edge.DB, Edge.DL, Edge.DF,
	],
};
