function solution(bin1, bin2) {
    let binA = parseInt(bin1, 2);
    let binB = parseInt(bin2, 2);
    const answer = binA + binB;
    return answer.toString(2);
}