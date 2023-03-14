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

// 迭代
export function postorderTraversal(root: TreeNode | null): number[] {
    const stack: TreeNode[] = [];
    const ans: number[]  = [];
    let prev: TreeNode | null = null;

    // 开始遍历
    while(stack.length > 0 || root !== null){
        // 遍历左子树
        while(root !== null){
            stack.push(root);
            root = root.left;
        }
        // 栈顶元素出栈
        root = stack.pop() as TreeNode;

        // 判端当前元素是否可以访问
        // 可以访问：
        // 1.当前元素的右子树为空；
        // 2.当前元素的右子树已经访问了；
        // 否则，继续循环
        if(root.right === null || root.right === prev){
            ans.push(root.val);
            // 难点1：记录上一次访问的节点
            // 由于后序遍历的特性，当前节点的右孩子一定是其前驱节点
            prev = root; 
            // 便于继续执行出栈操作
            root = null;
        }else{
            // 当前节点还不能访问
            // 重新入栈
            stack.push(root);
            // 遍历其右子树
            root = root.right;
        }
    }

    return ans;
};