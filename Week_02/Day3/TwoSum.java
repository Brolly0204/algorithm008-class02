import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class TwoSum {
  public static void main(String[] args) {
    TwoSum sum = new TwoSum();
    int[] nums = { 2, 7, 11, 15 };
    int target = 9;
    int[] result = sum.twoSum(nums, target);
    System.out.println(Arrays.toString(result));
  }

  public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();

    for (int i = 0, len = nums.length; i < len; i++) {
      int diff = target - nums[i];
      if (map.containsKey(diff)) {
        return new int[] { map.get(diff), i };
      }
      map.put(nums[i], i);
    }
    return new int[0];
  }
}