
public class LeetCode1021 {
  public String removeOuterParentheses(String S) {
    StringBuilder ans = new StringBuilder();
    int level = 0;

    for (char s : S.toCharArray()) {
      if (s == '(') {
        if (++level > 1) {
          ans.append(s);
        }
      } else if (--level != 0) {
        ans.append(s);
      }
    }
    return ans.toString();
  }

  public String removeOuterParentheses2(String S) {
    StringBuilder ans = new StringBuilder();
    int level = 0;

    for (char s : S.toCharArray()) {
      if (s == ')') {
        --level;
      }

      if (level >= 1) {
        ans.append(s);
      }

      if (s == '(') {
        ++level;
      }
    }
    return ans.toString();
  }

  public static void main(String[] args) {
    LeetCode1021 leetCode = new LeetCode1021();
    String str = leetCode.removeOuterParentheses("(()())(())(()(()))");
    System.out.println(str);
    String str2 = leetCode.removeOuterParentheses2("(()())(())(()(()))");
    System.out.println(str2);
  }
}