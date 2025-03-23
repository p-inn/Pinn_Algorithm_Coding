function solution(numbers) {
    let numbersSort = numbers.sort((a, b) => b - a);
    
    return numbersSort[0] * numbersSort[1];
}