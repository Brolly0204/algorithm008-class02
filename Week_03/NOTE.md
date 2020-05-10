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


