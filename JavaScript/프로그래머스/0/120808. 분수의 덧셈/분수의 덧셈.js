function solution(numer1, denom1, numer2, denom2) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    let commonDenominator = lcm(denom1, denom2);
    let newNumer1 = (commonDenominator / denom1) * numer1;
    let newNumer2 = (commonDenominator / denom2) * numer2;
    
    let resultNumerator = newNumer1 + newNumer2;
    let resultDenominator = commonDenominator;

    let commonDivisor = gcd(resultNumerator, resultDenominator);

    return [resultNumerator / commonDivisor, resultDenominator / commonDivisor];
}

