const airports = '0 1 2 3 5'.split(' ');
const routes = [
    ['0', '2'],
    ['0', '1'],
    ['1', '3'],
    ['2', '5'],
];

// The Graph
const adjacencyList = new Map();

// Add Node
function addNode(origin) {
    adjacencyList.set(origin, []);
}

// Add Edge, Undirected Graph
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    // adjacencyList.get(destination).push(origin);
}

// BFS: Breadth First Search
function bfs(start) {
    const visited = new Set();

    const queue = [start];

    while (queue.length != 0) {
        const origin = queue.shift(); // Mutates the queue

        const destinations = adjacencyList.get(origin);

        if (!visited[origin]) {
            visited[origin] = 1;

            for (const destination of destinations) {
                console.log(origin, '=>', destination);

                queue.push(destination);
            }
        }
    }
}

// Create the Graph
airports.forEach((node) => addNode(node));
routes.forEach((route) => addEdge(...route));

// console.log(adjacencyList);
bfs('0');
