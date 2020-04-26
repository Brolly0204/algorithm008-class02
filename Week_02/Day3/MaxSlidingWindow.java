import java.util.ArrayList;
import java.util.Arrays;

public class MaxSlidingWindow {
  public static void main(String[] args) {
    MaxSlidingWindow window = new MaxSlidingWindow();
    int[] nums = { 1, 3, -1, -3, 5, 3, 6, 7 };
    int[] result = window.getMaxSlidingWindow(nums, 3);
    System.out.println(Arrays.toString(result));
  }

  public int[] getMaxSlidingWindow(int[] nums, int k) {
    int[] result = new int[nums.length - k + 1];
    int maxIdx = -1;
    int max = Integer.MIN_VALUE;

    for (int i = 0, len = nums.length; i < len - k + 1; i++) {
      // 在滑动窗口内
      if (maxIdx >= i) {
        int nextIdx = i + k - 1;
        if (nums[nextIdx] > max) {
          max = nums[nextIdx];
          maxIdx = nextIdx;
        }
      } else {
        // [i k)
        max = nums[i];
        for (int j = i; j < i + k; j++) {
          if (nums[j] > max) {
            max = nums[j];
            maxIdx = j;
          }
        }
      }
      result[i] = max;
    }
    return result;
  }
}