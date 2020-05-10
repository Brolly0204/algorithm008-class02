// const isAnagram = function (s: string, t: string): boolean {
//   if (s.length !== t.length) return false
// const isAnagram = (s: string, t: string): boolean => {
//   if (s.length !== t.length) return false
//   const dic: Dic = {}
//   for (let k of s) {
//     dic[k] ? dic[k]++ : dic[k] = 1
//   }
//   for (let k of t) {
//     if (dic[k]) {
//       if (--dic[k] < 0) return false
//     } else {
//       return false
//     }
//   }
//   return true
// }
var isAnagram = function (s, t) {
    if (s.length !== t.length)
        return false;
    var map = new Map();
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var k = s_1[_i];
        map.set(k, map.has(k) ? map.get(k) + 1 : 1);
    }
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var k = t_1[_a];
        if (map.has(k)) {
            map.set(k, map.get(k) - 1);
            if (map.get(k) < 0)
                return false;
        }
        else {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("anagram", "nagaram"));
