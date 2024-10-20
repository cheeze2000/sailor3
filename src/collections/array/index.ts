export function equals<T>(arr1: T[], arr2: T[]): boolean {
	return arr1.length == arr2.length && arr1.every((item, i) => arr2[i] == item);
}

export function isPermutationOf<T>(arr1: T[], arr2: T[]): boolean {
	return equals([...arr1].sort(), [...arr2].sort());
}
