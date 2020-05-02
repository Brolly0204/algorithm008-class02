class MNode {
  public val: string
  public children: MNode[] | null
  constructor(val: string, children: MNode[] | null = null) {
    this.val = val
    this.children = children
  }
}

const e = new MNode('E')
const f = new MNode('F')
const b = new MNode('B', [e, f])
const c = new MNode('C')
const d = new MNode('D')
const root = new MNode('A', [b, c, d])

type Props = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | null
interface ITrk {
  [propName: string]: Props
}

interface IDis {
  [propName: string]: number
}

const backtrack = (root: MNode) => {
  let dis: IDis = {}
  let trk: ITrk = {}
  dis[root.val] = 0
  trk[root.val] = null
  const queue: MNode[] = []
  queue.push(root)
  while (queue.length !== 0) {
    const node = queue.shift() as MNode
    if (node.children) {
      node.children.forEach(child => {
        // 回溯点
        trk[child.val] = node.val as Props
        // 距离
        dis[child.val] = dis[node.val] + 1
        queue.push(child)
      })
    }
  }
  return {
    trk,
    dis
  }
}

const backs = backtrack(root)

const shortestPath = (from: string, to: string) => {
  let v: string = to
  const stack: string[] = []
  while (v !== from) {
    console.log(v)
    stack.push(v)
    v = backs.trk[v] as string
  }
  console.log(v)
  stack.push(v)

  let path = ''
  while (stack.length !== 0) {
    path += stack.pop()
  }
  console.log(path)
}
shortestPath('A', 'F')
export { }