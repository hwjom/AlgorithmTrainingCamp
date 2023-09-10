/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;

  // 找到待删除节点
  let node: TreeNode | null = root,
    prev: TreeNode | null = null;
  while (node) {
    if (node.val === key) break;
    prev = node;
    if (node.val < key) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
  if (!node) return root; // 没有找到

  // 如果有两个孩子节点，和它的后继节点交换，删除交换后的节点
  if (node.left && node.right) {
    let p = node.right,
      pp = node;
    while (p.left) {
      pp = p;
      p = p.left;
    }
    node.val = p.val;
    prev = pp;
    node = p;
  }
  // console.log('node.val:',node.val)
  // console.log(`prev:${prev}`)
  // 如果没有孩子节点，直接删除该节点
  let ch: TreeNode | null = null;
  if (node.left) {
    ch = node.left;
  } else {
    ch = node.right;
  }
  // 如果有一个孩子节点，让父节点指向该节点即可
  if (!prev) {
    return ch;
  } else if (prev.left === node) {
    prev.left = ch;
  } else {
    prev.right = ch;
  }

  return root;
}
