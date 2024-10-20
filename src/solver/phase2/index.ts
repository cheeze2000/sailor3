import { CubeState } from "~/cube";
import * as CornerPermCoord from "~/solver/phase2/coordinate/corner-perm";
import * as EdgePermCoord from "~/solver/phase2/coordinate/edge-perm";
import * as EquatorCoord from "~/solver/phase2/coordinate/equator";

export class Phase2State {
	readonly cp: number;
	readonly ep: number;
	readonly eq: number;

	constructor(state: CubeState) {
		const { cp, ep } = state;

		this.cp = CornerPermCoord.encode(cp);
		this.ep = EdgePermCoord.encode(ep);
		this.eq = EquatorCoord.encode(ep);
	}
}
