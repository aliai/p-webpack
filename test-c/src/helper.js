import { sum } from "lodash-es";

// sum(1, 2, 3);
// cloneDeep({ foo: 'bar' });

export function log(message) {
  console.log(message);
}

export function getSum(...args) {
  return sum(args);
}
