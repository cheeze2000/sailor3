import * as CornerPerm from "~/cube/cubie/corner-perm";
import * as EdgePerm from "~/cube/cubie/edge-perm";
import { PrimaryMove } from "~/cube/move";
import { Phase2State } from "~/solver/phase2";
import * as CornerPermCoord from "~/solver/phase2/coordinate/corner-perm";
import * as EdgePermCoord from "~/solver/phase2/coordinate/edge-perm";
import * as EquatorCoord from "~/solver/phase2/coordinate/equator";
import { phase2Moves } from "~/solver/util/move";

export class Phase2MoveTable {
	readonly cp: Record<PrimaryMove, number[]>;
	readonly ep: Record<PrimaryMove, number[]>;
	readonly eq: Record<PrimaryMove, number[]>;

	constructor() {
		this.cp = {} as Record<PrimaryMove, number[]>;
		this.ep = {} as Record<PrimaryMove, number[]>;
		this.eq = {} as Record<PrimaryMove, number[]>;

		for (const move of phase2Moves) {
			this.cp[move] = new Array(CornerPermCoord.max).fill(0).map((_, i) => {
				const cp = CornerPermCoord.decode(i);

				return CornerPermCoord.encode(CornerPerm.transform(move, cp));
			});

			this.ep[move] = new Array(EdgePermCoord.max).fill(0).map((_, i) => {
				const ep = EdgePermCoord.decode(i);

				return EdgePermCoord.encode(EdgePerm.transform(move, ep));
			});

			this.eq[move] = new Array(EquatorCoord.max).fill(0).map((_, i) => {
				const ep = EquatorCoord.decode(i);

				return EquatorCoord.encode(EdgePerm.transform(move, ep));
			});
		}
	}

	lookup(move: PrimaryMove, state: Phase2State): Phase2State {
		const { cp, ep, eq } = state;

		return {
			cp: this.cp[move][cp],
			ep: this.ep[move][ep],
			eq: this.eq[move][eq],
		};
	}
}
