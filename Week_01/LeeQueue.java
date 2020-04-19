import java.util.LinkedList;
import java.util.Queue;

public class LeeQueue {
  public static void main(String[] args) {
    Queue<String> leeQueue = new LinkedList<String>();
    leeQueue.offer("one");
    leeQueue.offer("two");
    leeQueue.offer("three");
    leeQueue.offer("four");
    leeQueue.offer("five");
    System.out.println(leeQueue);

    String polledElement = leeQueue.poll();
    System.out.println(polledElement);
    System.out.println(leeQueue);

    String peekElement = leeQueue.peek();
    System.out.println(peekElement);
    System.out.println(leeQueue);

    while (leeQueue.size() > 0) {
      System.out.println(leeQueue.poll());
    }
  }
}
