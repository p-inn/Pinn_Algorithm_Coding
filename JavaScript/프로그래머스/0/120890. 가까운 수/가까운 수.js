function solution(array, n) {
    return array.reduce((prev, curr) => {

        const diffPrev = Math.abs(prev - n);
        const diffCurr = Math.abs(curr - n);
        

        if (diffCurr < diffPrev || (diffCurr === diffPrev && curr < prev)) {
            return curr;
        }
        return prev;
    });
}