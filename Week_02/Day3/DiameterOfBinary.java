
class TreeNode {
  public int key;
  public TreeNode left;
  public TreeNode right;

  TreeNode(int key) {
    this.key = key;
    this.left = this.right = null;
  }
}

public class DiameterOfBinary {
  int ans = 0;
  TreeNode root;

  public static void main(String[] args) {
    DiameterOfBinary diameter = new DiameterOfBinary();
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    int result = diameter.diameterOfBinary(root);
    System.out.println(result);
  }

  public int diameterOfBinary(TreeNode root) {
    depth(root);
    return ans;
  }

  private int depth(TreeNode node) {
    if (node == null)
      return 0;

    int lh = depth(node.left);
    int rh = depth(node.right);

    ans = Math.max(ans, lh + rh);
    return Math.max(lh, rh) + 1;
  }
}