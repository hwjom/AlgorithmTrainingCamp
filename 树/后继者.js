/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    if (!root) return null;

    // 根据二叉搜索树的性质查找p节点的位置
    let prev = null; // 记录p的父节点中，大于p、最小的
    let node = root;
    while (node) {
        if (node === p) break;

        if (node.val > p.val) {
            if (!prev) { prev = node; }
            else { prev = prev.val > node.val ? node : prev; }

            node = node.left;
        } else {
            node = node.right;
        }
    }
    if (!node) return null; // 没有找到p

    // 后继者可能出现的位置：
    // 若p有右子树，则位于右子树中第一个没有左孩子的节点
    if (p.right) {
        node = p.right
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    // 否则，位于p的父节点之中，即大于p的最小的那个
    return prev;
};