function solution(array) {

    const combinedString = array.join('');
    
    const countOfSevens = combinedString.split('7').length - 1;
    
    return countOfSevens;
}
