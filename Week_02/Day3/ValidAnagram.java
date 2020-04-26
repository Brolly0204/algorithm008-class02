import java.util.HashMap;

public class ValidAnagram {
  public static void main(String[] args) {
    ValidAnagram leetCode = new ValidAnagram();
    boolean result = leetCode.isAnagram("abc", "bdc");
    System.out.println(result);
  }

  public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
      return false;
    }

    int[] counter = new int[26];
    int len = s.length();

    for (int i = 0; i < len; i++) {
      counter[s.charAt(i) - 'a']++;
    }

    for (int j = 0; j < len; j++) {
      int idx = t.charAt(j) - 'a';
      counter[idx]--;
      if (counter[idx] < 0) {
        return false;
      }
    }
    return true;
  }

  public boolean isAnagram3(String s, String t) {
    if (s.length() != t.length()) {
      return false;
    }

    int[] counter = new int[26];

    for (int i = 0, len = s.length(); i < len; i++) {
      counter[s.charAt(i) - 'a']++;
      counter[t.charAt(i) - 'a']--;
    }

    for (int count : counter) {
      if (count != 0) {
        return false;
      }
    }
    return true;
  }

  public boolean isAnagram2(String s, String t) {
    if (s.length() != t.length()) {
      return false;
    }

    HashMap<Character, Integer> map = new HashMap<>();
    for (char k : s.toCharArray()) {
      int val = map.containsKey(k) ? map.get(k) + 1 : 1;
      map.put(k, val);
    }

    for (char k : t.toCharArray()) {
      if (map.containsKey(k)) {
        int val = map.get(k) - 1;
        if (val < 0) {
          return false;
        }
        map.put(k, val);
      } else {
        return false;
      }
    }
    return true;
  }
}