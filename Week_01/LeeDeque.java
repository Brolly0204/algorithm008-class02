import java.util.Deque;
import java.util.LinkedList;

public class LeeDeque {
  public static void main(String[] args) {
    LeeDeque deque = new LeeDeque();
    // deque.getDeque();
    deque.getLeeDeque();
  }

  public Deque getLeeDeque() {
    Deque<String> leeDeque = new LinkedList<String>();
    leeDeque.addFirst("aa");
    leeDeque.addFirst("bb");
    leeDeque.addFirst("cc");
    System.out.println(leeDeque);

    String str = leeDeque.peekFirst();
    System.out.println(str);
    System.out.println(leeDeque);

    while (leeDeque.size() > 0) {
      System.out.println(leeDeque.removeFirst());
    }
    System.out.println(leeDeque);
    return leeDeque;
  }

  public Deque getDeque() {
    Deque<String> deque = new LinkedList<String>();
    deque.push("a");
    deque.push("b");
    deque.push("c");
    System.out.println(deque);

    String str = deque.peek();
    System.out.println(str);
    System.out.println(deque);

    while (deque.size() > 0) {
      System.out.println(deque.pop());
    }
    System.out.println(deque);
    return deque;
  }
}
