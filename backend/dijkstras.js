// import graph from "graph.json";
import Graph from "./src/graph/index.ts";
import PriorityQueue from "./src/priority_queue";

let graph = new Graph();
graph.addNode("Bag");
graph.addNode("Bgr");
graph.addNode("Cse");

graph.addEdge("Bag", "Bgr", "Path 1");
graph.addEdge("Bag", "Cse", "Path 2");
graph.addEdge("Cse", "Bgr", "Path 3");

shortestPath = dijkstras(graph, "Bag", "Bgr");
print(shortestPath);

// graph["Bag"] = {"Bag (NE)": 50, "Bgr": 60, "Den": 90};
// graph["Bag (NE)"] = {"Bag": 50, "Cse": 70, "Den": 80};
// graph["Bgr"] = {"Bag": 60, "Cs2": 100, "Den": 20};
// graph["Cse"] = {"Bag (NE)": 70, "Cs2": 150};
// graph["Cs2"] = {"Bgr": 100, "Cse": 150};
// graph["Den"] = {"Bag": 90, "Bag (NE)": 80, "Bgr": 20};

function dijkstras(graph, startNode, endNode) {
   let pq = new PriorityQueue();
   let distances = {};
   let path = [];
   let backtrace = {};
   let smallest;
   pq.add(startNode, 0);
   for (let vertex in graph.listNodes()) {
      if (vertex === startNode) {
         distances[vertex] = 0;
         pq.add(vertex, 0);
      } else {
         distances[vertex] = Infinity;
         pq.add(vertex, Infinity);
      }
      backtrace[vertex] = null;
   }

   while (!pq.isEmpty()) {
      smallest = pq.remove().val;
      if (smallest === endNode.val) {
         while(backtrace[smallest]) {
            path.push(smallest);
            smallest = backtrace[smallest];
         }
         break;
      } else { 
         for (let neighbor in graph.listChildren(smallest)) {
            let weight; // placeholder for edge weight
            if (!(neighbor in backtrace)) {
               pq.add(neighbor, weight);
               distances[neighbor] = weight;
               backtrace[neighbor] = smallest;
            } else if (weight + distances[smallest] < distances[neighbor]) {
               distances[neighbor] = weight + distances[smallest];
               backtrace[neighbor] = smallest;
            }
         }
      }

      // Build shortest path
      currNode = endNode;
      while(currNode !== startNode) {
         path.push(backtrace[currNode]);
         currNode = backtrace[currNode];
      }
   }
   return path;
}

//  References:
//  https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/
//  https://gist.github.com/Prottoy2938/66849e04b0bac459606059f5f9f3aa1a
//  https://www.cs.usfca.edu/~galles/visualization/Dijkstra.html