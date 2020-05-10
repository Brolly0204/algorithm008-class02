import java.util.PriorityQueue;
import java.util.Queue;

class LeetCode23 {
  public ListNode mergeKLists(ListNode[] lists) {
    Queue<ListNode> pq = new PriorityQueue<>((o1, o2) -> o1.val - o2.val);
    for (ListNode node : lists) {
      if (node != null)
        pq.offer(node);
    }

    ListNode dummyHead = new ListNode(-1);
    ListNode cur = dummyHead;
    while (!pq.isEmpty()) {
      ListNode minNode = pq.poll();
      cur.next = minNode;
      cur = cur.next;
      if (minNode.next != null) {
        pq.offer(minNode.next);
      }
    }
    return dummyHead.next;
  }

  public static void main(String[] args) {
    LeetCode23 leet1 = new LeetCode23();
    ListNode linkList1 = new ListNode(1);
    linkList1.next = new ListNode(4);
    linkList1.next.next = new ListNode(5);
    ListNode linkList2 = new ListNode(1);
    linkList2.next = new ListNode(3);
    linkList2.next.next = new ListNode(4);
    ListNode linkList3 = new ListNode(2);
    linkList3.next = new ListNode(6);
    ListNode[] lists = new ListNode[3];
    lists[0] = linkList1;
    lists[1] = linkList2;
    lists[2] = linkList3;
    ListNode result = leet1.mergeKLists(lists);

    ListNode cur = result;
    while (cur != null) {
      System.out.print(cur.val);
      cur = cur.next;
    }
  }
}