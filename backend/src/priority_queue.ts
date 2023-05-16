import {PriorityElement} from "./priority_element";

// This is a min priority queue using heap.
export class PriorityQueue {
    private heap: PriorityElement[];
    constructor() { this.heap = []; }

    // Adds a building item into priority queue
    public add(element: string, priorityVal: number) {
        this.heap.push(new PriorityElement(element, priorityVal));
        this.percolateUp(this.size() - 1);
    }

    // Returns the node on top
    public peek() {
        if (this.isEmpty()) return null;
        return this.heap[0];
    }

    // Removes the node on top
    public remove() {
        const elementAtEnd = this.heap.pop();
        if (elementAtEnd === undefined) return null;
        if (this.isEmpty()) return elementAtEnd;
        const min = this.heap[0];
        this.heap[0] = elementAtEnd;
        this.percolateDown(0);
        return min;
    }

    public clear() {
        this.heap = [];
    }

    public isEmpty() {
        return this.size() === 0;
    }

    public size() {
        return this.heap.length;
    }

    // swim
    private percolateUp(index: number) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (parentIndex >= 0 && this.heap[index].priorityVal < this.heap[parentIndex].priorityVal) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    // sink
    private percolateDown(index: number) {
        let leftChildIndex = index * 2 + 1;
        let rightChildIndex = index * 2 + 2;
        while (leftChildIndex < this.size()) {

            let smallerChildIndex: number = leftChildIndex;
            if (rightChildIndex < this.size() &&
                this.heap[rightChildIndex].priorityVal < this.heap[leftChildIndex].priorityVal)
                smallerChildIndex = rightChildIndex;

            if (this.heap[index].priorityVal <= this.heap[smallerChildIndex].priorityVal) break;
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
            leftChildIndex = index * 2 + 1;
            rightChildIndex = index * 2 + 2;
        }
    }

    private swap(a: number, b: number) {
        const x = this.heap[a];
        const y = this.heap[b];
        this.heap[b] = x;
        this.heap[a] = y;
    }
}
