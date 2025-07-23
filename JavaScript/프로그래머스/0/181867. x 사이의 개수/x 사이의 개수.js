function solution(myString) {
    let newmyString = myString.split('x');
    return newmyString.map((c) => c.length);
}