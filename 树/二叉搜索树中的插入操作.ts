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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);

  let node: TreeNode | null = root,
    p: TreeNode | null = null;
  while (node) {
    p = node;
    if (node.val < val) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
  if (p) {
    if (p.val > val) {
      p.left = new TreeNode(val);
    } else {
      p.right = new TreeNode(val);
    }
  }
  return root;
}
