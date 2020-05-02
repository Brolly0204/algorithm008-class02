type ReplaceSpaceFn = (s: string) => string
const replaceSpace: ReplaceSpaceFn = function (s) {
  let str: string = ''
  for (let char of s) {
    if (char === ' ') {
      str += '%20'
    } else {
      str += char
    }
  }
  return str
}
console.log(replaceSpace("We are happy."))