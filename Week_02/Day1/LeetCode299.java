import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class LeetCode299 {
  public static void main(String[] args) {
    LeetCode299 lt = new LeetCode299();
    String s1 = lt.getHint("1197", "0111");
    System.out.println(s1);
  }

  public String getHint(String secret, String guess) {
    int a = 0;
    int b = 0;
    int[] mapS = new int[10];
    int[] mapG = new int[10];

    for (int i = 0, len = secret.length(); i < len; i++) {
      char s = secret.charAt(i);
      char g = guess.charAt(i);
      if (s == g) {
        a++;
      } else {
        // mapS[s - '0']++;
        // mapG[g - '0']++;
        mapS[s - '0']++;
        mapG[g - '0']++;
      }
    }

    for (int i = 0; i < 10; i++) {
      b += Math.min(mapS[i], mapG[i]);
    }

    return a + "A" + b + "B";
  }
}

// public class LeetCode299 {
// public static void main(String[] args) {
// LeetCode299 lt = new LeetCode299();
// String s1 = lt.getHint("1197", "0111");
// System.out.println(s1);
// }

// public String getHint(String secret, String guess) {
// int cA = 0;
// int cB = 0;
// ArrayList<Character> list = new ArrayList<>();
// HashMap<Character, Integer> map = new HashMap<>();
// for (int i = 0, len = secret.length(); i < len; i++) {
// char s = secret.charAt(i);
// if (s == guess.charAt(i)) {
// cA++;
// } else {
// list.add(guess.charAt(i));
// map.put(s, map.containsKey(s) ? map.get(s) + 1 : 1);
// }
// }

// for (Character s : list) {
// if (map.containsKey(s) && map.get(s) > 0) {
// cB++;
// map.put(s, map.get(s) - 1);
// }
// }
// return cA + "A" + cB + "B";
// }
// }