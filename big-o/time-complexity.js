// Big O Notation - Time Complexity
// Numeric representation of the performance of code
// Big O(1) - Constant time
// Big O(n) - Linear time
// Big O(n^2) - Quadratic time
// Big O(nlog(n)) - Logarithmic time
// Big O(log(n)) - Logarithmic time

// Big O(n) - Linear time
function addUpToLinearTime(n) {
    let total = 0;
    for(let i = 1; i <=n; i++) {
        total += i;
    }
    return total;
}

// Big O(1) - Constant time
function addUpToConstantTime(n) {
    return n * (n + 1) / 2;
}

// Print answer
let answer = addUpTo(4);
console.log(answer);

