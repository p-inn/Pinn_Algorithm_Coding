function solution(order) {
    let clapCount = 0;
    const orderStr = order.toString();

    for (let char of orderStr) {
        if (char === '3' || char === '6' || char === '9') {
            clapCount++; 
        }
    }

    return clapCount;
}
