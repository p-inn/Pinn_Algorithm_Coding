function solution(a, b) {
    const isOdd = (n) => n % 2 !== 0;
    
    if (isOdd(a) && isOdd(b)) {

        return a * a + b * b;
    } else if (isOdd(a) || isOdd(b)) {

        return 2 * (a + b);
    } else {

        return Math.abs(a - b);
    }
}
