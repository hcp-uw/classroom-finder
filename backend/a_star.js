//import priority_queue from "priority_queue";

class a_star {
    a_star(problem) {
        let initial_state = problem.create_intial_state; //write method in graph.js
        let count = 0;
        let max_open_length = 0;
        let backlinks = {};
        let closed = [];
        backlinks[initial_state] = null;
        let open = priority_queue();
        open.enqueue(initial_state, 0); //write enqueue method in for pq
        let g = {};
        g[initial_state] = 0.0;

        while(open.length > 0) { // write length method for pq
            if (open.length > max_open_length) {
                max_open_length = open.length;
            }
            
        }
    }


};


// Priority Queue: https://www.geeksforgeeks.org/implementation-priority-queue-javascript/