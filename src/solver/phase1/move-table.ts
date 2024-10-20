import * as CornerOri from "~/cube/cubie/corner-ori";
import * as EdgeOri from "~/cube/cubie/edge-ori";
import * as EdgePerm from "~/cube/cubie/edge-perm";
import { PrimaryMove } from "~/cube/move";
import { Phase1State } from "~/solver/phase1";
import * as CornerOriCoord from "~/solver/phase1/coordinate/corner-ori";
import * as EdgeOriCoord from "~/solver/phase1/coordinate/edge-ori";
import * as EquatorCoord from "~/solver/phase1/coordinate/equator";
import { phase1Moves } from "~/solver/util/move";

export class Phase1MoveTable {
	readonly co: Record<PrimaryMove, number[]>;
	readonly eo: Record<PrimaryMove, number[]>;
	readonly eq: Record<PrimaryMove, number[]>;

	constructor() {
		this.co = {} as Record<PrimaryMove, number[]>;
		this.eo = {} as Record<PrimaryMove, number[]>;
		this.eq = {} as Record<PrimaryMove, number[]>;

		for (const move of phase1Moves) {
			this.co[move] = new Array(CornerOriCoord.max).fill(0).map((_, i) => {
				const co = CornerOriCoord.decode(i);

				return CornerOriCoord.encode(CornerOri.transform(move, co));
			});

			this.eo[move] = new Array(EdgeOriCoord.max).fill(0).map((_, i) => {
				const eo = EdgeOriCoord.decode(i);

				return EdgeOriCoord.encode(EdgeOri.transform(move, eo));
			});

			this.eq[move] = new Array(EquatorCoord.max).fill(0).map((_, i) => {
				const ep = EquatorCoord.decode(i);

				return EquatorCoord.encode(EdgePerm.transform(move, ep));
			});
		}
	}

	lookup(move: PrimaryMove, state: Phase1State): Phase1State {
		const { co, eo, eq } = state;

		return {
			co: this.co[move][co],
			eo: this.eo[move][eo],
			eq: this.eq[move][eq],
		};
	}
}
