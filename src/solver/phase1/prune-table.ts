import { Queue } from "~/collections/queue";
import { Phase1State } from "~/solver/phase1";
import * as CornerOriCoord from "~/solver/phase1/coordinate/corner-ori";
import * as EdgeOriCoord from "~/solver/phase1/coordinate/edge-ori";
import * as EquatorCoord from "~/solver/phase1/coordinate/equator";
import { Phase1MoveTable } from "~/solver/phase1/move-table";
import { phase1Moves } from "~/solver/util/move";

export class Phase1PruneTable {
	readonly coeq: number[];
	readonly eoeq: number[];

	constructor(phase1MoveTable: Phase1MoveTable) {
		this.coeq = new Array(CornerOriCoord.max * EquatorCoord.max).fill(Infinity);
		this.eoeq = new Array(EdgeOriCoord.max * EquatorCoord.max).fill(Infinity);

		const coeqQueue = new Queue<[number, number]>();
		const coeqVisited = new Set<number>();
		coeqQueue.enqueue([0, 0]);
		coeqVisited.add(0);

		while (coeqQueue.size > 0) {
			const [coord, depth] = coeqQueue.dequeue()!;
			this.coeq[coord] = depth;

			const co = Math.floor(coord / EquatorCoord.max);
			const eq = coord % EquatorCoord.max;

			for (const move of phase1Moves) {
				const next = (
					phase1MoveTable.co[move][co] * EquatorCoord.max +
					phase1MoveTable.eq[move][eq]
				);

				if (coeqVisited.has(next)) continue;
				coeqVisited.add(next);

				coeqQueue.enqueue([next, depth + 1]);
			}
		}

		const eoeqQueue = new Queue<[number, number]>();
		const eoeqVisited = new Set<number>();
		eoeqQueue.enqueue([0, 0]);
		eoeqVisited.add(0);

		while (eoeqQueue.size > 0) {
			const [coord, depth] = eoeqQueue.dequeue()!;
			this.eoeq[coord] = depth;

			const eo = Math.floor(coord / EquatorCoord.max);
			const eq = coord % EquatorCoord.max;

			for (const move of phase1Moves) {
				const next = (
					phase1MoveTable.eo[move][eo] * EquatorCoord.max +
					phase1MoveTable.eq[move][eq]
				);

				if (eoeqVisited.has(next)) continue;
				eoeqVisited.add(next);

				eoeqQueue.enqueue([next, depth + 1]);
			}
		}
	}

	lowerBound(state: Phase1State): number {
		const { co, eo, eq } = state;

		return Math.max(
			this.coeq[co * EquatorCoord.max + eq],
			this.eoeq[eo * EquatorCoord.max + eq],
		);
	}
}
