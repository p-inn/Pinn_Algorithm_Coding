function solution(strArr) {
    return strArr.map((e, index) => index % 2 === 1 ? e.toUpperCase() : e.toLowerCase());
}