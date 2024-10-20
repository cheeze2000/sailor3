import { CubeState } from "~/cube";
import { PrimaryMove } from "~/cube/move";
import { Phase1State } from "~/solver/phase1";
import { Phase1MoveTable } from "~/solver/phase1/move-table";
import { Phase1PruneTable } from "~/solver/phase1/prune-table";
import { Phase2State } from "~/solver/phase2";
import { Phase2MoveTable } from "~/solver/phase2/move-table";
import { Phase2PruneTable } from "~/solver/phase2/prune-table";
import { phase1Moves, phase2Moves } from "~/solver/util/move";

export class KociembaSolver {
	private readonly _phase1MoveTable: Phase1MoveTable;
	private readonly _phase2MoveTable: Phase2MoveTable;
	private readonly _phase1PruneTable: Phase1PruneTable;
	private readonly _phase2PruneTable: Phase2PruneTable;
	private _initial: CubeState;
	private _maxLength: number;
	private _currentSolution: PrimaryMove[];
	private _bestSolution: PrimaryMove[] | null;

	constructor() {
		this._phase1MoveTable = new Phase1MoveTable();
		this._phase2MoveTable = new Phase2MoveTable();
		this._phase1PruneTable = new Phase1PruneTable(this._phase1MoveTable);
		this._phase2PruneTable = new Phase2PruneTable(this._phase2MoveTable);

		this._initial = new CubeState();
		this._maxLength = Infinity;
		this._currentSolution = [];
		this._bestSolution = null;
	}

	solve(cube: CubeState, maxLength: number = Infinity): PrimaryMove[] | null {
		this._initial = cube;
		this._maxLength = maxLength;
		this._currentSolution = [];
		this._bestSolution = null;

		const phase1State = new Phase1State(cube);

		for (let depth1 = 0; depth1 <= this._maxLength; depth1++) {
			this.phase1Search(phase1State, depth1);

			if (this._bestSolution) break;
		}

		return this._bestSolution;
	}

	private phase1Search(state: Phase1State, depth1: number) {
		if (this._bestSolution) return;

		if (depth1 == 0 && this.isPhase1Complete(state) && this.isFinalPhase1MoveValid()) {
			let cube = this._initial;
			for (const move of this._currentSolution) cube = cube.transform(move);

			const phase2State = new Phase2State(cube);

			for (let depth2 = 0; depth2 <= this._maxLength - this._currentSolution.length; depth2++) {
				this.phase2Search(phase2State, depth2);

				if (this._bestSolution) return;
			}
		} else if (depth1 > 0) {
			if (this._phase1PruneTable.lowerBound(state) > depth1) return;

			for (const move of this.getPhase1Moves()) {
				this._currentSolution.push(move);

				const next = this._phase1MoveTable.lookup(move, state);
				this.phase1Search(next, depth1 - 1);

				this._currentSolution.pop();
			}
		}
	}

	private phase2Search(state: Phase2State, depth2: number) {
		if (this._bestSolution) return;

		if (depth2 == 0 && this.isPhase2Complete(state)) {
			this._bestSolution = [...this._currentSolution];
		} else if (depth2 > 0) {
			if (this._phase2PruneTable.lowerBound(state) > depth2) return;

			for (const move of this.getPhase2Moves()) {
				this._currentSolution.push(move);

				const next = this._phase2MoveTable.lookup(move, state);
				this.phase2Search(next, depth2 - 1);

				this._currentSolution.pop();
			}
		}
	}

	private isPhase1Complete(state: Phase1State): boolean {
		return state.co == 0 && state.eo == 0 && state.eq == 0;
	}

	private isPhase2Complete(state: Phase2State): boolean {
		return state.cp == 0 && state.ep == 0 && state.eq == 0;
	}

	private isFinalPhase1MoveValid(): boolean {
		const lastMove = this.lastMove();

		return lastMove
			? !phase2Moves.includes(lastMove)
			: true;
	}

	private getPhase1Moves(): PrimaryMove[] {
		const lastMove = this.lastMove();

		return lastMove
			? phase1Moves.filter(move => move[0] != lastMove[0])
			: phase1Moves;
	}

	private getPhase2Moves(): PrimaryMove[] {
		const lastMove = this.lastMove();

		return lastMove
			? phase2Moves.filter(move => move[0] != lastMove[0])
			: phase2Moves;
	}

	private lastMove(): PrimaryMove | null {
		return this._currentSolution[this._currentSolution.length - 1] ?? null;
	}
}
