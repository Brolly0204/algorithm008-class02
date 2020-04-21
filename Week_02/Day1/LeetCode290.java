import java.util.HashMap;

public class LeetCode290 {
  public Boolean wordPattern(String pattern, String str) {
    // 根据空格将字符串str分割为数组 {"dog", "cat", "cat", "dog"}
    String[] arr = str.split(" ");
    // 如果长度不一样 说明没有一一对应 也就不能是双向映射
    if (pattern.length() != arr.length)
      return false;

    // 把单词每个索引位置上的字符转换成对应的数字编号
    // 比如 {a=0, b=1} "abba" => "0110"
    // 比如 {cat=1, dog=0} "dog cat cat dog" => "0110"
    return wordToNumber(pattern.split("")).equals(wordToNumber(arr));
  }

  private String wordToNumber(String[] s) {
    // 采用HashMap缓存字母对应编号（索引），同一字母只有统一编号，这里把索引作为对应编号
    HashMap<String, Integer> map = new HashMap<>();
    String result = ""; // 拼接编号
    for (int i = 0, len = s.length; i < len; i++) {
      // 如果当前map中有了这个字符对应的编号就拼接起来
      if (map.containsKey(s[i])) {
        result += map.get(s[i]);
      } else {
        // 没有编号，就把它当前索引作为编号
        map.put(s[i], i);
      }
    }
    return result;
  }

  public static void main(String[] args) {
    LeetCode290 leetCode1 = new LeetCode290();
    Boolean res1 = leetCode1.wordPattern("abba", "dog cat cat dog");
    System.out.println(res1);
  }
}