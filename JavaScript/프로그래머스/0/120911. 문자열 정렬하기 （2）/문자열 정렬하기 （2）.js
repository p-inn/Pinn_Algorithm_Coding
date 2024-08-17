function solution(my_string) {
    
    const lowerCaseString = my_string.toLowerCase();

    const answer = lowerCaseString.split('').sort().join('');
    
    return answer;
}