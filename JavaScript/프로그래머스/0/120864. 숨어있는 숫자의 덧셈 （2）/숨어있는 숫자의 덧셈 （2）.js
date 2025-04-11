function solution(my_string) {
    const numbers = my_string.match(/[0-9]+/g);
    return numbers ? numbers.reduce((acc, cur) => acc + Number(cur), 0) : 0;
}