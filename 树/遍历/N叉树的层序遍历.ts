class TreeNode {
    val: number;
    children: TreeNode[];
    constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
      this.children = [];
    }
}

var levelOrder = function(root: TreeNode | null) {
    if(!root) return [];
    const ans: number[][] = [];
    // 创建队列
    const queue: TreeNode[] = [];
    queue.push(root);

    // 开始遍历
    while(queue.length){
        // 记录当前队列元素个数，对应当前层级的节点个数
        let k = queue.length;
        // 存储当前层节点
        const arr: number[] = [];
        // 将下一层的节点入队
        while(k > 0){
            const node = queue.shift() as TreeNode;
            arr.push(node.val);
            if(node?.children){
                for(let i = 0; i < node.children.length; ++i){
                    queue.push(node.children[i]);
                }
            }
            --k;
        }

        ans.push(arr);
    }

    return ans;
};

export {levelOrder}