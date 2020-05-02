const array1 = { a1: "a1的值", a2: "a2val", a3: { b1: "b1val", b2: { c1: "c1的值" } } };

const array2 = {
  a1: "a1的第二个值",
  a2: "a2val1",
  a3: { b1: "b1val", b2: { c1: "c1的第二个值" } },
  a4: "a4val"
};


const isObj = (obj: object): obj is Obj => typeof obj === 'object' && obj !== null

interface Obj {
  [prop: string]: any
}

const compareObj = function (obj1: Obj, obj2: Obj): string[] {
  let result: string[] = []
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) return result
  if (isObj(obj1) && isObj(obj2)) {
    Object.keys(obj1).forEach(key => {
      if (obj2.hasOwnProperty(key)) {
        if (isObj(obj1[key]) && isObj(obj2[key])) {
          result = [...result, ...compareObj(obj1[key], obj2[key])]
        } else {
          if (obj1[key] !== obj2[key]) {
            result.push(key)
          }
        }
      } else {
        result.push(key)
      }
    })
    Object.keys(obj2).forEach(key => {
      if (!obj1.hasOwnProperty(key)) {
        result.push(key)
      }
    })
  }
  return result
}
console.log(compareObj(array1, array2))
