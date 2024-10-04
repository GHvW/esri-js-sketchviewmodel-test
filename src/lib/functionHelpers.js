// @ts-check

/**
 * @template A, B, C
 * @param {(a: A) => B} ab 
 * @param {(b: B) => C} bc 
 * @returns {(a: A) => C}
 */
function pipe(ab, bc) {
    return (input) => bc(ab(input));
}