# 学习笔记

## 递归
> 递归也是一种循环

递归模板
```js
const recursion = (level, param) => {
  // terminator 
  if (level > MAX_LEVEL) {
    return
  }
  
  // current logic
  pocess(level, param)
  
  // drill down
  recursion(level + 1, newParam)
 
  // restore current status 
}
```
### 括号生成
```js
const generateParenthesis = (n) => {
  const result = []
  const generator = (s, left, right) => {
    if (left === n && right === n) {
       result.push(s)
       return
    }
    
    if (left < n) {
      generator(s + '(', left + 1, right)
    }
   
    if (right < left) {
      generator(s + ')', left, right + 1)
    }
  }
  generator('', 0, 0)
  return result
}
```


## 分治

> 将一个问题 划分为多个重复子问题 进行解决 (一种特殊的递归)

分治模板
```js
const divideConquer = (problem, param1, param2) => {
  if (!problem) {
    return
  }
  
  // 划分子问题 
  subproblems = split_problem(problem, data) 
 
  // 分解
  subresult1 = divideConquer(subproblems[0], p1, ...) 
  subresult2 = divideConquer(subproblems[1], p1, ...) 
  subresult3 = divideConquer(subproblems[2], p1, ...) 

  // 合并结果
  return subresult1.cancat(subresult2, subresult3)
}
```

### 电话号码组合

```ts
const letterCombinations = (digits: string) => {
  // 创建hashmap
  const phone = new Map<string, string>()
  phone.set("2", "abc");
  phone.set("3", "def");
  phone.set("4", "ghi");
  phone.set("5", "jkl");
  phone.set("6", "mno");
  phone.set("7", "pqrs");
  phone.set("8", "tuv");
  phone.set("9", "wxyz");

  const combine = (combination: string, digits: string) => {
    // terminator condition
    if (digits.length === 0) { // '23' -> ''
      output.push(combination)
      return
    }

    // '23'-> '2' or '3'
    const digit: string = digits.substring(0, 1);
    // '2' -> phone.get('2') -> 'abc'
    const letters: string = phone.get(digit) as string
    for (let i = 0; i < letters.length; i++) {
      // 'abc' -> 0: 'a'
      // 'abc' -> 1: 'b'
      // 'abc' -> 2: 'c'
      // 获取当前的一个字母
      const letter = letters.substring(i, i + 1)
      // 用当前字母 和下一个 digit进行组合  digit -> '3'
      combine(combination + letter, digits.substring(1))
    }
  }

  const output: string[] = []
  if (digits.length !== 0) {
    combine('', digits)
  }
  return output
}
```

