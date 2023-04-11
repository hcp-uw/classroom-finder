const PriorityQueue = require("./priority_queue.js");
const BuildingItem = require("./building_item.js");

describe("Priority queue tests", () => {
    const testSize = 1000000;
    const priority_queue = new PriorityQueue();

    function hashCode(s){
        let h = 0, l = s.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + s.charCodeAt(i++) | 0;
        return h;
    }

    beforeAll(() => {
        for (let i = 0; i < testSize; i++) {
            priority_queue.add("tag" + i, hashCode("tag" + i));
        }
    });

    test("size checking", () => {
        expect(priority_queue.isEmpty()).toBeFalsy();
        expect(priority_queue.size()).toBe(testSize);
    });

    test("removing", () => {
        let last_distance_peeked = -1;
        for (let i = 0; i < testSize; i++) {
            const element_peeked = priority_queue.peek();
            expect(element_peeked.distance).toBeGreaterThanOrEqual(last_distance_peeked);
            last_distance_peeked = element_peeked.distance;
            const element_removed = priority_queue.remove();
            expect(element_peeked).toBe(element_removed);
        }
    });
});