// 2635. Apply Transform Over Each Element in Array

function map(arr, fn) {
  const result = new Array(arr.length); // Pre-allocate result array

  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i); // Directly assign transformed values to each index
  }

  return result;
}

// Test cases
console.log(map([1, 2, 3], function plusOne(n) { return n + 1; })); // Output: [2, 3, 4]
console.log(map([1, 2, 3], function plusI(n, i) { return n + i; })); // Output: [1, 3, 5]
console.log(map([10, 20, 30], function constant() { return 42; })); // Output: [42, 42, 42]