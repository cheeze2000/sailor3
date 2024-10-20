import { expect, test } from "vitest";

import { equals, isPermutationOf } from "~/collections/array";

test("equals()", () => {
	const arr1 = ["a", "b", "c"];
	const arr2 = ["a", "b", "c"];

	expect(equals(arr1, arr1)).toBe(true);
	expect(equals(arr1, arr2)).toBe(true);

	const arr3 = ["a", "b", "c", "c"];
	const arr4 = ["a", "b", "b"];

	expect(equals(arr1, arr3)).toBe(false);
	expect(equals(arr1, arr4)).toBe(false);
});

test("isPermutationOf()", () => {
	const arr1 = ["a", "b", "c"];
	const arr2 = ["a", "b", "c"];

	expect(isPermutationOf(arr1, arr1)).toBe(true);
	expect(isPermutationOf(arr1, arr2)).toBe(true);

	const arr3 = ["c", "a", "b"];
	const arr4 = ["c", "a", "b", "c"];

	expect(isPermutationOf(arr1, arr3)).toBe(true);
	expect(isPermutationOf(arr2, arr3)).toBe(true);

	expect(isPermutationOf(arr1, arr4)).toBe(false);
	expect(isPermutationOf(arr3, arr4)).toBe(false);
});
