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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    const ans: string[] = [];
    // 前序遍历，将二叉树转化为字符串
    // 空节点用null占位
    const dfs = (node: TreeNode | null)=>{
        if(!node){
            ans.push('null')
            return;
        }
        ans.push(`${node.val}`);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root)

    return ans.join(",");
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const arr: string[] = data.split(",");
    if(!arr?.length) return null;

    // 从左往右遍历字符串数组，还原节点
    const dfs = ():TreeNode | null=>{
        const val = arr.shift() as string;
        if(val === 'null') return null;
        const node = new TreeNode(parseInt(val));
        // 根据二叉树前序遍历的特性
        // 当前节点后面两位一定是其左右孩子
        // 在序列化时，用'null'为空孩子占位
        node.left = dfs();
        node.right = dfs();

        return node;
    }

    return dfs();
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */