import { CubeState } from "~/cube";
import { PrimaryMove } from "~/cube/move";
import { KociembaSolver } from "~/solver";

export class Cube {
	constructor(readonly state: CubeState = new CubeState()) {}

	move(input: string): Cube {
		let state = this.state;

		const moves = input.match(/[ULFRBD][2']?/g) ?? [];
		for (const move of moves) state = state.transform(move as PrimaryMove);

		return new Cube(state);
	}
}

export class Solver {
	private readonly _kociembaSolver: KociembaSolver;

	constructor() {
		this._kociembaSolver = new KociembaSolver();
	}

	solve(cube: Cube): PrimaryMove[] {
		return this._kociembaSolver.solve(cube.state) ?? [];
	}
}
