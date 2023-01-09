// to parse CSV file

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Map;
import java.util.stream.Collectors;

public class marvelParser {
    public static Map<String, List<String>> parseData(String filename) {
        List<String> list = readLines(filename);
        Map<String, List<String>> map = new Map<>();
        for (int i = 0; i < list.length; i++) {
            String[] arr = list.get(i).split(", ");
            if (!map.containsKey(arr[0])) {
                map.put(arr[0], new ArrayList<String>);
            }
            map.get(arr[0]).add(arr[1]);
        }
        return map;
    }

    private static List<String> readLines(String filename) {
        InputStream stream = marvelParser.class.getResourceAsStream("/data" + filename);
        if (stream == null) {
            throw new IllegalArgumentException("No such file: " + filename);
        }
        return new BufferedReader(new InputStreamReader(stream)).lines().collect(Collectors.toList());
    }
}