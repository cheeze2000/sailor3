import { CubeState } from "~/cube";
import * as CornerOriCoord from "~/solver/phase1/coordinate/corner-ori";
import * as EdgeOriCoord from "~/solver/phase1/coordinate/edge-ori";
import * as EquatorCoord from "~/solver/phase1/coordinate/equator";

export class Phase1State {
	readonly co: number;
	readonly eo: number;
	readonly eq: number;

	constructor(state: CubeState) {
		const { co, eo, ep } = state;

		this.co = CornerOriCoord.encode(co);
		this.eo = EdgeOriCoord.encode(eo);
		this.eq = EquatorCoord.encode(ep);
	}
}
