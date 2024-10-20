import { PrimaryMove } from "~/cube/move";

export const phase1Moves = [
	PrimaryMove.U, PrimaryMove.U2, PrimaryMove.U_,
	PrimaryMove.L, PrimaryMove.L2, PrimaryMove.L_,
	PrimaryMove.F, PrimaryMove.F2, PrimaryMove.F_,
	PrimaryMove.R, PrimaryMove.R2, PrimaryMove.R_,
	PrimaryMove.B, PrimaryMove.B2, PrimaryMove.B_,
	PrimaryMove.D, PrimaryMove.D2, PrimaryMove.D_,
];

export const phase2Moves = [
	PrimaryMove.U, PrimaryMove.U2, PrimaryMove.U_,
	PrimaryMove.L2,
	PrimaryMove.F2,
	PrimaryMove.R2,
	PrimaryMove.B2,
	PrimaryMove.D, PrimaryMove.D2, PrimaryMove.D_,
];
