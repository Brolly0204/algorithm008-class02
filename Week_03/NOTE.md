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
括号生成
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
