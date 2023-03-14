// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// 递归实现
export function inorderTraversal1(root: TreeNode | null): number[] {
    // 存放答案
    const ans: number[] = [];

    // 定义一个内部函数，便于递归调用
    function _traversal(node: TreeNode | null){
        if(!node) return; // 节点为空时，结束递归
        
        // 遍历左子树
        _traversal(node.left);

        // 左子树访问完毕后，将当前节点放入结果集中
        ans.push(node.val);

        // 遍历右子树
        _traversal(node.right);
    }
    // 开始遍历
    _traversal(root);

    return ans;
};


// 迭代
function inorderTraversal2(root: TreeNode | null): number[] {
    // 结果集
    const ans : number[] = [];
    // 栈，简化递归操作
    const stack: TreeNode[] = [];
    let node = root;

    // 开始遍历
    while(stack.length || node){
        // 遍历当前节点以及其左子树
        // 并加入栈中
        while(node){
            stack.push(node);
            node = node.left;
        }
        // 当前节点左子树遍历完毕
        // 取出栈顶元素
        node = (stack.pop()) as TreeNode;
        // 根据上述步骤可知，
        // 此时节点不存在左孩子或左孩子已经访问，
        // 因此可以加入结果集
        ans.push(node.val);

        // 将node指向节点的右孩子
        // 开启下一轮遍历
        node = node.right;
    }

    return ans;
};


