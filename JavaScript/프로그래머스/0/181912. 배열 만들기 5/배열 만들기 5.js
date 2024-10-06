function solution(intStrs, k, s, l) {
    let result = [];

    for (let str of intStrs) {
        let slicedNum = parseInt(str.slice(s, s + l));
        if (slicedNum > k) {
            result.push(slicedNum);
        }
    }

    return result;
}
