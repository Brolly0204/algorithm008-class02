import java.util.Stack;

public class LeeStack {
  public static void main(String[] args) {
    Stack<Integer> leeStack = new Stack<>();
    leeStack.push(1);
    leeStack.push(2);
    leeStack.push(3);
    leeStack.push(4);
    leeStack.push(5);
    System.out.println(leeStack);
    System.out.println(leeStack.search(4));
    System.out.println(leeStack.search(5));
    System.out.println(leeStack.search(1));
    leeStack.pop();
    leeStack.pop();
    Integer topElement = leeStack.peek();
    System.out.println(topElement);
    System.out.println("3的位置 " + leeStack.search(3));
  }
}
