//starting marvel project
//main method: asks users what file to create graph from, scans file in using scanner, calls build graph method
//      asks users for two nodes, calls find path
//Graph<String, String> build graph method(string filename): sets global graph variable
//List<String> findPaths(Graph g, String start, String dest): returns path

public class marvelPaths {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("What file do you want to create the graph?: ");
        String file = reader.nextLine();
        Graph<String, String> graph = buildGraph(file);
        System.out.println("What is your starting node?: ");
        String start = reader.nextLine();
        System.out.println("What is your destination node?: ");
        String dest = reader.nextLine();
        List<String> findPaths = findPaths(graph, start, dest);
        printList(findPaths);
    }

    public static Graph<String, String> buildGraph(String filename) {

    }

    public static List<String> findPaths(Graph g, String start, String dest) {

    }

    private static void printList(List<String> findPaths) {
        for (int i = 0; i < findPaths.length; i++) {
            String[] result = findPaths.get(i).split(", ");
            System.out.println(result[0] + " to " + result[1]);
        }
    }
}