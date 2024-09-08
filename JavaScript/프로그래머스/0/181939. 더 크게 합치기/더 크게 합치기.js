function solution(a, b) {

    const concatAB = Number(String(a) + String(b));
    
    const concatBA = Number(String(b) + String(a));

    return concatAB >= concatBA ? concatAB : concatBA;
}
