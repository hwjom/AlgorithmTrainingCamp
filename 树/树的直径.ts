// dfs
function treeDiameter_dfs(edges: number[][]): number {
    const graph = new Array( edges.length + 1);    
    const visited = new Array(edges.length + 1).fill(false);

    for (const [u, v] of edges) {
        if(!graph[u]){
            graph[u] = [];
        }
        graph[u].push(v);

        if(!graph[v]){
            graph[v] = [];
        }
        graph[v].push(u);        
    }

     let maxDist = 0, p = -1;

    const dfs = (i: number, dist: number) => {
        // console.log(`i=${i}, dist=${dist}`)
        if (dist > maxDist) {
            maxDist = dist;
            p = i;
        }

        visited[i] = true;
        if(!graph[i]?.length) return;

        for (const j of graph[i]) {
            if (!visited[j]) {
                dfs(j, dist + 1)
            }
        }
    }

    dfs(0, 0)
    // console.log('=====================')
    // console.log({p})
    for(let i = 0; i < visited.length; ++i){
        visited[i] = false;
    }
    dfs(p, 0);

    return maxDist;
};

// bfs
function treeDiameter_bfs(edges: number[][]): number {
    const graph = new Array( edges.length + 1);    
    const visited = new Array(edges.length + 1).fill(false);

    for (const [u, v] of edges) {
        if(!graph[u]){
            graph[u] = [];
        }
        graph[u].push(v);

        if(!graph[v]){
            graph[v] = [];
        }
        graph[v].push(u);        
    }

     let maxDist = 0, p = -1;

    const dfs = (i: number, dist: number) => {
        // console.log(`i=${i}, dist=${dist}`)
        if (dist > maxDist) {
            maxDist = dist;
            p = i;
        }

        visited[i] = true;
        if(!graph[i]?.length) return;

        for (const j of graph[i]) {
            if (!visited[j]) {
                dfs(j, dist + 1)
            }
        }
    }

    dfs(0, 0)
    // console.log('=====================')
    // console.log({p})
    for(let i = 0; i < visited.length; ++i){
        visited[i] = false;
    }
    dfs(p, 0);

    return maxDist;
};