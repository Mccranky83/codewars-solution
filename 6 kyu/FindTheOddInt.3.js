/**
 * XOR Operator Properties:
 *
 * - Commutative Property: `n ^ m` equals `m ^ n`
 * - Identity Property: `n ^ 0` equals `n`
 * - Inverse Property: `n ^ n` equals `0`
 *
 */

const findOdd = (A) => A.reduce((acc, cur) => acc ^ cur);

console.log(findOdd([1, 3, 3, 2, 1]));
