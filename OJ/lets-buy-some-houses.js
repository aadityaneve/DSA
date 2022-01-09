/* 

Let's buy some houses -515:46:50
Description

You just won a lottery and you want to spend some money. So, you want to buy some houses.

There is just one condition:

To buy two houses, you need to buy the road connecting those two houses. Now, you are given a list of roads, bought by you. You need to tell how many houses will you end up buying?


Input
Input Format

First line contains an integer T, denoting the number of test cases. The first line of each test case contains an integer E, denoting the number of roads. The next E lines contain two space separated integers X and Y, denoting that there is a road between house X and house Y.

Constraints

1 <= T <= 100

1 <= E <= 1000

1 <= X, Y <= 10000


Output
For each test case, you need to print the number of houses you will end up buying.


Sample Input 1 

1
3
1 2
2 3
1 3
Sample Output 1

3

*/

class Graph {
    constructor() {
        this.element = new Map();
        this.vertices = 0;
        this.edges = 0;
        this.visited = {};
        this.queue = [];
    }

    // add vertex
    addVertex(vertex) {
        this.element.set(vertex, []);
        this.vertices++;
    }

    //has a vertex
    hasVertex(vertex) {
        // will return true or false
        return this.element.has(vertex);
    }

    // get the values at a vertex
    neighbours(vertex) {
        return this.element.get(vertex);
    }

    // update values at a vertex
    updateVertex(vertex, value) {
        this.element.set(vertex, value);
    }

    // add edge
    addEdge(vertex1, vertex2) {
        // graph has vertex1?
        // if not, add vertex2
        if (!this.hasVertex(vertex1)) {
            this.addVertex(vertex1);
        }

        // graph has vertex2?
        // if no, add vertex2
        if (!this.hasVertex(vertex2)) {
            this.addVertex(vertex2);
        }

        // get data of vertex1
        // push vertex2, into vertex1 values
        // update vertex1 edge
        let value = this.neighbours(vertex1);
        // check if vertex exists in val
        value[value.length] = vertex2;
        // if vertex exist in val
        this.updateVertex(vertex1, value);
        this.edges++;
    }

    // has an edge
    hasEdge(vertex1, vertex2) {
        let value = this.neighbours(vertex1);
        if (value.indexOf(vertex2) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    // no of vertices
    numberOfVertices() {
        return this.vertices;
    }

    // no of edges
    numberOfEdges() {
        return this.edges;
    }

    // bfs
    bfs(vertex) {
        this.visited = {};
        this.queue.push(vertex);

        // as long as queue is not empty
        while (this.queue.length != 0) {
            let neighbours = this.neighbours(this.queue[0]);

            if (!this.visited[this.queue[0]]) {
                this.visited[this.queue[0]] = 1;

                neighbours.forEach((val) => {
                    console.log(this.queue[0], '=>', val);

                    this.queue.push(val);
                });

                this.queue.shift();
            }
        }
    }

    // dfs
    // recursion
    _dfs(vertex, level = null) {
        if (this.visited[vertex] === 1) {
            return;
        }
        this.visited[vertex] = 1;

        if (level === null) {
            let value = this.neighbours(vertex);
            value.forEach((val) => {
                console.log(vertex, '=>', val);
                this._dfs(val);
            });
        }
    }

    dfs(vertex) {
        // levels
        this.visited = {};
        this._dfs(vertex);
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;

    for (let i = 0; i < testCases; i++) {
        let n = +input[++lines];
        let graph = new Graph();
        for (let j = 0; j < n; j++) {
            let [x, y] = input[++lines].trim().split(' ');

            graph.addEdge(x, y);
        }
        console.log(graph.numberOfVertices());
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
    3
    1 1
    1 1
    1 1
    2
    1 2
    2 1
    3
    1 2
    4 9
    18 12
    `);
} else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read = '';
    process.stdin.on('data', function (input) {
        read += input;
    });
    process.stdin.on('end', function () {
        read = read.replace(/\n$/, '');
        read = read.replace(/\n$/, '');
        runProgram(read);
    });
    process.on('SIGINT', function () {
        read = read.replace(/\n$/, '');
        runProgram(read);
        process.exit(0);
    });
}

/* function bfs(adjacencyList, start) {
    const visited = new Set();

    const queue = [start];

    while (queue.length > 0) {
        console.log('queue.length:', queue.length);
        // console.log('visited:', visited);
        const house = queue.shift();

        const houses = adjacencyList.get(house);

        for (let house of houses) {
            queue.push(house);

            if (house === start) {
                console.log('Found it');
            }

            if (!visited.has(house)) {
                visited.add(house);
                queue.push(house);
            }
        }
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    let n = +input[++lines];

    let obj = {};
    let routes = [];
    for (let i = 0; i < n; i++) {
        let [x, y] = input[++lines].trim().split(' ');

        routes.push([x, y]);

        obj[x] = 1;
        obj[y] = 1;
    }

    // Creating Adjacency List 
    // The Graph
    const adjacencyList = new Map();

    // Add Node
    function addNode(node) {
        adjacencyList.set(node, []);
    }

    // Add Edge, undirected
    function addEdge(origin, destination) {
        adjacencyList.get(origin).push(destination);
        adjacencyList.get(destination).push(origin);
    }

    // Create a Graph
    for (let x in obj) {
        addNode(x);
    }
    // console.log(adjacencyList)

    routes.forEach((route) => addEdge(route[0], route[1]));

    console.log(adjacencyList);

    bfs(adjacencyList, '1');
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
    3
    2 1
    2 3
    4 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read = '';
    process.stdin.on('data', function (input) {
        read += input;
    });
    process.stdin.on('end', function () {
        read = read.replace(/\n$/, '');
        read = read.replace(/\n$/, '');
        runProgram(read);
    });
    process.on('SIGINT', function () {
        read = read.replace(/\n$/, '');
        runProgram(read);
        process.exit(0);
    });
}
 */
