
let cancel: () => void = () => {}

let timer: NodeJS.Timeout

const sleep = (timeout: number): Promise<any> => {
  let resolveFn: () => void

  const promise = new Promise((resolve, reject) => {
    resolveFn = resolve
    timer = setTimeout(resolve, timeout)
  })

  cancel = () => {
    clearTimeout(timer)
    resolveFn()
  }
  return promise
}

const sp = sleep(3000)

// console.time('sleep')
// sp.then(() => {
  // console.log('done')
  // console.timeEnd('sleep')
// })

// cancel()

const startTime = Date.now()
// sp.then(() => {
//   console.log(Date.now() - startTime)
// })
// cancel()


// {
//   rss: 151326720,
//   heapTotal: 105824256,
//   heapUsed: 76575496,
//   external: 1394456
// }

// {
//   rss: 151937024,
//   heapTotal: 103727104,
//   heapUsed: 78850176,
//   external: 1410840
// }

console.log(process.memoryUsage());
