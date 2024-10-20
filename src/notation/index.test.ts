import { expect, test } from "vitest";

test("hehe", () => {
	expect("hehe").toBe("hehe");
	expect("hehe ").toBe("hehe ");
});
