function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(numer1, denom1, numer2, denom2) {

    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;

    const gcdValue = gcd(numer, denom);

    return [numer / gcdValue, denom / gcdValue];
}
