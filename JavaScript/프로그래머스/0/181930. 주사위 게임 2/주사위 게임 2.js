function solution(a, b, c) {
    const sum = a + b + c;
    const sumOfSquares = a * a + b * b + c * c;
    const sumOfCubes = a * a * a + b * b * b + c * c * c;
    
    if (a === b && b === c) {
        return sum * sumOfSquares * sumOfCubes;
    } else if (a === b || b === c || a === c) {
        return sum * sumOfSquares;
    } else {
        return sum;
    }
}
