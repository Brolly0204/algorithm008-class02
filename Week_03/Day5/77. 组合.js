var combine = function (n, k) {
  var dfs = function (pos, list) {
    if (list.length === k) {
      result.push(list.slice(0));
      return;
    }
    // pos ~ 4
    var len = list.length;
    for (var i = pos; i <= n - (k - len) + 1; i++) {
      list.push(i);
      console.log(pos, list)
      dfs(i + 1, list);
      console.log('============')
      list.pop();
      console.log(pos, list)
    }
  };
  var result = [];
  var list = [];
  dfs(1, list);
  return result;
};
console.log(combine(4, 2));
