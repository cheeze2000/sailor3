import { expect, test } from "vitest";

import { Queue } from "~/collections/queue";

test("empty queue", () => {
	const queue = new Queue<number>();
	expect(queue.size).toBe(0);

	expect(queue.dequeue()).toBe(null);
	expect(queue.size).toBe(0);
});

test("enqueue() before dequeue()", () => {
	const queue = new Queue<string>();

	queue.enqueue("A");
	expect(queue.size).toBe(1);

	queue.enqueue("B");
	expect(queue.size).toBe(2);

	expect(queue.dequeue()).toBe("A");
	expect(queue.size).toBe(1);

	expect(queue.dequeue()).toBe("B");
	expect(queue.size).toBe(0);

	expect(queue.dequeue()).toBe(null);
	expect(queue.size).toBe(0);
});

test("enqueue() and dequeue() alternating", () => {
	const queue = new Queue<string>();

	queue.enqueue("A");
	expect(queue.size).toBe(1);

	expect(queue.dequeue()).toBe("A");
	expect(queue.size).toBe(0);

	queue.enqueue("B");
	expect(queue.size).toBe(1);

	queue.enqueue("C");
	expect(queue.size).toBe(2);

	expect(queue.dequeue()).toBe("B");
	expect(queue.size).toBe(1);

	queue.enqueue("D");
	expect(queue.size).toBe(2);

	queue.enqueue("E");
	expect(queue.size).toBe(3);

	expect(queue.dequeue()).toBe("C");
	expect(queue.size).toBe(2);

	expect(queue.dequeue()).toBe("D");
	expect(queue.size).toBe(1);

	queue.enqueue("F");
	expect(queue.size).toBe(2);

	expect(queue.dequeue()).toBe("E");
	expect(queue.size).toBe(1);

	expect(queue.dequeue()).toBe("F");
	expect(queue.size).toBe(0);

	expect(queue.dequeue()).toBe(null);
	expect(queue.size).toBe(0);
});

test("[Symbol.iterator]()", () => {
	const queue = new Queue<number>();

	queue.enqueue(1);
	queue.enqueue(2);

	expect([...queue]).toEqual([1, 2]);

	queue.enqueue(3);
	queue.dequeue();
	queue.dequeue();

	expect([...queue]).toEqual([3]);

	queue.enqueue(4);
	queue.enqueue(5);
	queue.dequeue();

	expect([...queue]).toEqual([4, 5]);
});

test("randomized test", () => {
	const repetitions = 9999;

	const array = [];
	const queue = new Queue<string>();

	for (let i = 0; i < repetitions; i++) {
		if (Math.random() < 0.5) {
			const item = Math.random().toString();
			array.push(item);
			queue.enqueue(item);
		} else {
			const item = array.shift() ?? null;
			expect(queue.dequeue()).toBe(item);
		}

		expect(queue.size).toBe(array.length);
	}
});
