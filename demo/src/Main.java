import java.lang.Math.*;
import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Docker!");

        System.out.println("Here is a test if system libs and Java8 works...");
        
        List<Integer> l = Arrays.asList(1, 2, 3, 4);

        List<Integer> mapped = l.stream().map(i -> Math.max(i, 2)).collect(Collectors.toList());

        System.out.println(mapped);
    }
}