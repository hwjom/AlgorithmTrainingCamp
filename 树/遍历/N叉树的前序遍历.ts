class TreeNode {
  val: number;
  children: TreeNode[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

var preorder = function (root: TreeNode | null) {
  if (!root) return [];
  const stack: TreeNode[] = [];
  const ans: number[] = [];

  stack.push(root);
//  开始遍历
  while (stack.length) {
    root = stack.pop() as TreeNode;
    ans.push(root.val);

    const { children } = root;
    // 遍历当前节点的孩子节点
    if (children?.length) {
      const n = children.length;
    // 从后往前入栈
      for (let i = n - 1; i >= 0; --i) {
        stack.push(children[i]);
      }
    }
  }

  return ans;
};

export { preorder };
