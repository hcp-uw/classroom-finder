const BuildingItem = require("./building_item.js");

// This is a min priority queue using heap.
class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Adds a building item into priority queue
    add(building_tag, distance) {
        this.heap.push(new BuildingItem(building_tag, distance));
        this.percolateUp(this.size() - 1);
    }

    // Returns the node on top
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.heap[0];
    }

    // Removes the node on top
    remove() {
        if (this.isEmpty()) {
            return null;
        }
        const min = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.percolateDown(0);
        return min;
    }

    clear() {
        this.heap = [];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.heap.length;
    }

    // swim
    percolateUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (parentIndex >= 0 && this.heap[index].distance < this.heap[index].distance) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    // sink
    percolateDown(index) {
        let leftChildIndex = index * 2 + 1;
        let rightChildIndex = index * 2 + 2;
        while (leftChildIndex <= this.size()) {

            let smallerChildIndex = this.heap[leftChildIndex];
            if (rightChildIndex <= this.size() && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                smallerChildIndex = this.heap[rightChildIndex];
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
            leftChildIndex = index * 2 + 1;
            rightChildIndex = index * 2 + 2;
        }
    }

    swap(a, b) {
        const x = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = x;
    }
}

module.exports = PriorityQueue;