export class Queue<T> {
	private _items: T[] = new Array(1);
	private _head: number = 0;
	private _tail: number = 0;
	private _size: number = 0;

	private get capacity() {
		return this._items.length;
	}

	get size() {
		return this._size;
	}

	*[Symbol.iterator]() {
		for (let i = this._head; i != this._tail; i = (i + 1) % this.capacity) {
			yield this._items[i];
		}
	}

	enqueue(item: T) {
		this._size++;
		if (this._size == this.capacity) this.reallocate();

		this._items[this._tail] = item;
		this._tail = (this._tail + 1) % this.capacity;
	}

	dequeue(): T | null {
		if (this._size == 0) return null;
		this._size--;

		const item = this._items[this._head];
		this._head = (this._head + 1) % this.capacity;

		return item;
	}

	private reallocate() {
		const arr = new Array(this.capacity * 2);

		let index = 0;
		for (const item of this) {
			arr[index++] = item;
		}

		this._head = 0;
		this._tail = index;
		this._items = arr;
	}
}
