function solution(a, b) {
    let carry = 0;
    let result = "";
    let i = a.length - 1, j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? +a[i--] : 0;
        const digitB = j >= 0 ? +b[j--] : 0; 
        const sum = digitA + digitB + carry;
        carry = Math.floor(sum / 10); 
        result = (sum % 10) + result;
    }

    return result;
}


