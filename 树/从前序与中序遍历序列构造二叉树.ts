// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let index = 0;
  // build函数构造二叉树
  // 通过前序结果确定根节点，根据根节点分割中序序列
  // l：中序结果的起始位置
  // r：中序结果的结束位置
  const build = (l: number, r: number): TreeNode | null => {
    // 起始位置大于结束位置，终止
    if (l > r) return null;
    // 在前序结果中获取根节点
    const val = preorder[index++];
    // 获取根节点在中序中的位置
    const k = inorder.indexOf(val);
    // 构建当前节点
    const node = new TreeNode(val);

    // 递归构建左右子树，缩小中序范围
    node.left = build(l, k - 1);
    node.right = build(k + 1, r);

    return node;
  };

  return build(0, inorder.length - 1);
}
