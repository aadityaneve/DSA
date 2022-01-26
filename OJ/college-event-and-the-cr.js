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
        console.log(graph);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
    2
    0 1
    1 2
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
