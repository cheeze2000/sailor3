import * as CornerPerm from "~/cube/cubie/corner-perm";
import { PrimaryMove } from "~/cube/move";

export function transform(move: PrimaryMove, values: number[]): number[] {
	const t1 = transformations[move];
	const t2 = CornerPerm.transformations[move];

	return values.map((_, i) => (values[t2[i]] + t1[i]) % 3);
}

export const defaultState = [0, 0, 0, 0, 0, 0, 0, 0];

export const transformations: Record<PrimaryMove, number[]> = {
	[PrimaryMove.U]: [0, 0, 0, 0, 0, 0, 0, 0],
	[PrimaryMove.U2]: [0, 0, 0, 0, 0, 0, 0, 0],
	[PrimaryMove.U_]: [0, 0, 0, 0, 0, 0, 0, 0],
	[PrimaryMove.L]: [2, 0, 0, 1, 2, 0, 0, 1],
	[PrimaryMove.L2]: [0, 0, 0, 0, 0, 0, 0, 0],
	[PrimaryMove.L_]: [2, 0, 0, 1, 2, 0, 0, 1],
	[PrimaryMove.F]: [0, 0, 1, 2, 1, 2, 0, 0],
	[PrimaryMove.F2]: [0, 0, 0, 0, 0, 0, 0, 0],
	[PrimaryMove.F_]: [0, 0, 1, 2, 1, 2, 0, 0],
	[PrimaryMove.R]: [0, 1, 2, 0, 0, 1, 2, 0],
	[PrimaryMove.R2]: [0, 0, 0, 0, 0, 0, 0, 0],
	[PrimaryMove.R_]: [0, 1, 2, 0, 0, 1, 2, 0],
	[PrimaryMove.B]: [1, 2, 0, 0, 0, 0, 1, 2],
	[PrimaryMove.B2]: [0, 0, 0, 0, 0, 0, 0, 0],
	[PrimaryMove.B_]: [1, 2, 0, 0, 0, 0, 1, 2],
	[PrimaryMove.D]: [0, 0, 0, 0, 0, 0, 0, 0],
	[PrimaryMove.D2]: [0, 0, 0, 0, 0, 0, 0, 0],
	[PrimaryMove.D_]: [0, 0, 0, 0, 0, 0, 0, 0],
};
