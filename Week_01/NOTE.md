## 学习笔记

### 数据结构

#### Array 和 Linked List

| name       | prepend | appendd | lookup | insert | delete |
| ---------- | ------- | ------- | ------ | ------ | ------ |
| Array      | O(n)    | O(1)    | O(1)   | O(n)   | O(n)   |
| LinkedList | O(1)    | O(1)    | O(n)   | O(1)   | O(1)   |

#### Stack 和 Queue

- Stack 先入后出
- Queue 先入先出

Stack 的方法
method | description
-|-
empty()| 栈是否为空，返回 boolean 值
peek() | 返回栈顶元素，不会删除
push() | 向栈顶添加元素，入栈
pop() | 删除栈顶元素，出栈
search(E) | 返回元素所在位置

Queue 的方法
method | description
-|-
offer() | 队列中添加排队元素
poll() | 删除队列头部元素
peek() | 返回队列头部元素，不删除

#### Deque 改写

> 用 add first 或 add last 这套新的 API 改写 Deque 的代码

```java
import java.util.Deque;
import java.util.LinkedList;

public class LeeDeque {
  public static void main(String[] args) {
    LeeDeque deque = new LeeDeque();
    deque.getLeeDeque();
  }

  public Deque getLeeDeque() {
    Deque<String> leeDeque = new LinkedList<String>();
    leeDeque.addFirst("a");
    leeDeque.addFirst("b");
    leeDeque.addFirst("c");
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
}
```

## 本周个人总结

每天坚持刷题接龙打卡，跟着老师走。这周对数据结构有了一定认识，做相关题型时，渐渐懂了栈这些数据结构以及双指针的应用场景，但还不够熟练 还待加强这些方法思想意识。

刷题时，按照老师的学习方法，自己能做出来的题，就先写写，从上到下编程。如果实在想不出来，那是你知识不够，去看题解学习别人的方法思想，多看些优质思想，多看几种。自己再去写写。刻意练习，经常回顾。

个人不足，数据结构方面还需要加强，作为一个前端，只知道数组、普通对象用法。不过这次课程让我渐渐对这些数据结构有了一定了解和认识，我会继续努力。

接下来刷题，实现数据结构时，JS 一套、Java 一套，深刻去体会理解增强自我。

最后 很喜欢覃超老师，他讲的学习方法，编程思想很有用，很喜欢他讲课。跟着大神一起飞~~
