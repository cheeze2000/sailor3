import { Edge } from "~/cube/cubie";

export function reorderEdgePerm(values: number[]): number[] {
	return [
		...values.slice(0, 4),
		...values.slice(8, 12),
		...values.slice(4, 8),
	];
}

export const equatorEdges = [Edge.FR, Edge.FL, Edge.BL, Edge.BR];
export const nonEquatorEdges = [Edge.UB, Edge.UR, Edge.UF, Edge.UL, Edge.DF, Edge.DR, Edge.DB, Edge.DL];
