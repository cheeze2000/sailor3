# sailor3
A 3x3x3 Rubik's Cube library

## Usage
```ts
import { Cube, Solver } from "sailor3";

let cube = new Cube();
cube = cube.move("B2 R F2 U' B U F L' D' F2 R2 B L2 F2 R2 D2 B' U2 B L2 B' L");

// instantiating the Solver takes roughly 4-5 seconds
const solver = new Solver();

const solution = solver.solve(cube);
console.log(solution.join(" "));
// U' F U D2 B2 L F2 B2 U' B U B2 D' L2 U' L2 D' B2 D2 B2 L2 D' R2 D F2
```
