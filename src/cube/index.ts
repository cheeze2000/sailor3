import { equals } from "~/collections/array";
import * as CornerOri from "~/cube/cubie/corner-ori";
import * as CornerPerm from "~/cube/cubie/corner-perm";
import * as EdgeOri from "~/cube/cubie/edge-ori";
import * as EdgePerm from "~/cube/cubie/edge-perm";
import { PrimaryMove } from "~/cube/move";

export class CubeState {
	constructor(
		readonly co: number[] = CornerOri.defaultState,
		readonly cp: number[] = CornerPerm.defaultState,
		readonly eo: number[] = EdgeOri.defaultState,
		readonly ep: number[] = EdgePerm.defaultState,
	) {}

	transform(move: PrimaryMove): CubeState {
		return new CubeState(
			CornerOri.transform(move, this.co),
			CornerPerm.transform(move, this.cp),
			EdgeOri.transform(move, this.eo),
			EdgePerm.transform(move, this.ep),
		);
	}

	isSolved(): boolean {
		return equals(this.co, CornerOri.defaultState)
			&& equals(this.cp, CornerPerm.defaultState)
			&& equals(this.eo, EdgeOri.defaultState)
			&& equals(this.ep, EdgePerm.defaultState);
	}
}
