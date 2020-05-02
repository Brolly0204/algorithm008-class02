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

const bfs = (root: MNode, callback: (val: string) => void) => {
  const queue: MNode[] = []
  queue.push(root)
  while (queue.length !== 0) {
    const ele = queue.shift() as MNode
    callback(ele.val)
    if (ele.children) {
      ele.children.forEach(item => queue.push(item))
    }
  }
}

bfs(root, (val: string) => {
  console.log(val)
})
