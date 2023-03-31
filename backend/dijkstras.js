import graph from "graph.json";

// let adj = {};
// adj["Bag"] = ["Bag (NE)", "Bgr", "Den"];
// adj["Bag (NE)"] = ["Bag", "Cse", "Den"];
// adj["Bgr"] = ["Bag", "Cs2", "Den"];
// adj["Cse"] = ["Bag (NE)", "Cs2"];
// adj["Cs2"] = ["Bgr", "Cse"];
// adj["Den"] = ["Bag", "Bag (NE)", "Bgr"];

let graph = {};
graph["Bag"] = {"Bag (NE)": 50, "Bgr": 60, "Den": 90};
graph["Bag (NE)"] = {"Bag": 50, "Cse": 70, "Den": 80};
graph["Bgr"] = {"Bag": 60, "Cs2": 100, "Den": 20};
graph["Cse"] = {"Bag (NE)": 70, "Cs2": 150};
graph["Cs2"] = {"Bgr": 100, "Cse": 150};
graph["Den"] = {"Bag": 90, "Bag (NE)": 80, "Bgr": 20};

function dijkstras(graph, startNode, endNode) {
   let distances = {};
   let visited = [];
   let backtrace = {};
   let pq = new priority_queue();
   pq.add(startNode, 0);
   // this.nodes.forEach(node => {
   for (let key in graph) {
      if (key !== startNode) {
         distances[node] = Infinity;
      }
      backtrace[node] = null;
   }

   let currNode = startNode;
   let weight = 0;
   while (!pq.isEmpty()) {
      // let minNode = pq.remove();
      // let currNode = minNode.data;
      // let weight = minNode.priority;

      for (let neighbor in graph[currNode]) {
         if(!visited.includes(neighbor)) {
            pq.add(neighbor);
         }
         backtrace[neighbor.node] = currNode;
      }
   }

   priority_queue.add(getNext(node))
   let node = closest(startNode)
}

 function closest(node) {
   for (let child in adj[node]) {
      adj[child]
   }
 }

 function getNext(node) {
   for (let child in graph[node]) {

   }
 }

 console.log(dijkstras(graph, "Bag", "Den"));