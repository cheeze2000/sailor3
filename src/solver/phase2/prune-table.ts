import { Queue } from "~/collections/queue";
import { Phase2State } from "~/solver/phase2";
import * as CornerPermCoord from "~/solver/phase2/coordinate/corner-perm";
import * as EdgePermCoord from "~/solver/phase2/coordinate/edge-perm";
import * as EquatorCoord from "~/solver/phase2/coordinate/equator";
import { Phase2MoveTable } from "~/solver/phase2/move-table";
import { phase2Moves } from "~/solver/util/move";

export class Phase2PruneTable {
	readonly cpeq: number[];
	readonly epeq: number[];

	constructor(phase2MoveTable: Phase2MoveTable) {
		this.cpeq = new Array(CornerPermCoord.max * EquatorCoord.max).fill(Infinity);
		this.epeq = new Array(EdgePermCoord.max * EquatorCoord.max).fill(Infinity);

		const cpeqQueue = new Queue<[number, number]>();
		const cpeqVisited = new Set<number>();
		cpeqQueue.enqueue([0, 0]);
		cpeqVisited.add(0);

		while (cpeqQueue.size > 0) {
			const [coord, depth] = cpeqQueue.dequeue()!;
			this.cpeq[coord] = depth;

			const cp = Math.floor(coord / EquatorCoord.max);
			const eq = coord % EquatorCoord.max;

			for (const move of phase2Moves) {
				const next = (
					phase2MoveTable.cp[move][cp] * EquatorCoord.max +
					phase2MoveTable.eq[move][eq]
				);

				if (cpeqVisited.has(next)) continue;
				cpeqVisited.add(next);

				cpeqQueue.enqueue([next, depth + 1]);
			}
		}

		const epeqQueue = new Queue<[number, number]>();
		const epeqVisited = new Set<number>();
		epeqQueue.enqueue([0, 0]);
		epeqVisited.add(0);

		while (epeqQueue.size > 0) {
			const [coord, depth] = epeqQueue.dequeue()!;
			this.epeq[coord] = depth;

			const ep = Math.floor(coord / EquatorCoord.max);
			const eq = coord % EquatorCoord.max;

			for (const move of phase2Moves) {
				const next = (
					phase2MoveTable.ep[move][ep] * EquatorCoord.max +
					phase2MoveTable.eq[move][eq]
				);

				if (epeqVisited.has(next)) continue;
				epeqVisited.add(next);

				epeqQueue.enqueue([next, depth + 1]);
			}
		}
	}

	lowerBound(state: Phase2State): number {
		const { cp, ep, eq } = state;

		return Math.max(
			this.cpeq[cp * EquatorCoord.max + eq],
			this.epeq[ep * EquatorCoord.max + eq],
		);
	}
}
