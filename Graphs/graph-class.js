console.log('\n\n\n\n\n\n');

let node = new Map();

node.set(0, 5);
node.set(2, [2, 3, 4, 5]);
node.set(3, 6);

console.log(node);

console.log(node.has(2));
console.log(node.get(2));
// console.log(node.delete(3));

console.log(node);

let val = node.get(2);
val.push(99);
console.log(node);

console.log(node.keys());
console.log(node.values());

let iterator = node.keys();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

let iterator2 = node.values();
/* console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value); */
