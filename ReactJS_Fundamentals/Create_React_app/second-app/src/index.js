import fruits from './fruits';
import { choice, remove } from './helpers';

let fruit = choice.apply(fruits);

console.log(`I would like one ${fruit}, Please`);
console.log(`Here your ${fruit}`)

let remaining = remove(fruit, fruits)

console.log(`I am sorry we are all out, We have ${remaining.length}`);