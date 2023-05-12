import {PriorityQueue} from "./priority_queue";
import {PriorityElement} from "./priority_element";

describe("Priority queue tests", () => {
    const test_size = 10000;
    const priority_queue = new PriorityQueue();

    function hashCode(s: string){
        let h = 0, l = s.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + s.charCodeAt(i++) | 0;
        return h;
    }

    beforeEach(() => {
        for (let i = 0; i < test_size; i++) {
            priority_queue.add("tag" + i, Math.abs(hashCode("tag")) + i);
        }
    });

    test("size checking", () => {
        expect(priority_queue.isEmpty()).toBeFalsy();
        expect(priority_queue.size()).toBe(test_size);
        priority_queue.clear();
        expect(priority_queue.isEmpty()).toBeTruthy();
        expect(priority_queue.size()).toBe(0);
    });

    // Only use when changing the heap array to public.
    // test("array inner ordering, assuming public heap array", () => {
    //     for (let i = 0; i < test_size; i++) {
    //         const val = priority_queue.heap[i].priorityVal;
    //         const leftChildIndex = i * 2 + 1;
    //         const rightChildIndex = i * 2 + 2;
    //         if (rightChildIndex < test_size) {
    //             expect(val).toBeLessThanOrEqual(priority_queue.heap[leftChildIndex].priorityVal);
    //             expect(val).toBeLessThanOrEqual(priority_queue.heap[rightChildIndex].priorityVal);
    //         } else if (leftChildIndex < test_size) {
    //             expect(val).toBeLessThanOrEqual(priority_queue.heap[leftChildIndex].priorityVal);
    //         }
    //     }
    //     priority_queue.clear();
    // });

    test("removing", () => {
        let lastVal = -1;
        for (let i = 0; i < test_size; i++) {
            const element_peeked = priority_queue.peek();
            if (element_peeked === null) fail();
            expect(element_peeked.priorityVal).toBeGreaterThanOrEqual(lastVal);
            lastVal = element_peeked.priorityVal;
            const element_removed = priority_queue.remove();
            expect(element_removed).toBe(element_peeked);
        }
    });
});