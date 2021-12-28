const _lodash = require('lodash');

const items = [1, 2, [3, 4, [5, 6]]];
const flattenedItems = _lodash.flattenDeep(items);

console.log(flattenedItems);