class AddString {
  public static void main(String[] args) {
    AddString str = new AddString();
    String result = str.addString("9333852702227987", "85731737104263");
    System.out.println(result);
  }

  public String addString(String num1, String num2) {
    int i = num1.length() - 1;
    int j = num2.length() - 1;
    int carry = 0;

    StringBuilder res = new StringBuilder("");
    while (i >= 0 || j >= 0) {
      System.out.println(num1);
      System.out.println(i);
      System.out.println(num1.charAt(i) - '0');
      int n1 = i >= 0 ? num1.charAt(i) - '0' : 0;
      int n2 = j >= 0 ? num2.charAt(j) - '0' : 0;
      int tmp = n1 + n2 + carry;
      carry = tmp / 10;
      res.append(tmp % 10);
      i--;
      j--;
    }
    if (carry == 1) {
      res.append(1);
    }
    return res.reverse().toString();
  }
}