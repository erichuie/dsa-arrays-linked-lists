/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {
  if(arr[0] === val) return true
  if(arr.length === 0) return false

  return find(arr.slice(1), val);
}

export { find };



// const numbers = [1, 2, 3];

// find(animals, 1);  // true
// find(animals, 0);   // false