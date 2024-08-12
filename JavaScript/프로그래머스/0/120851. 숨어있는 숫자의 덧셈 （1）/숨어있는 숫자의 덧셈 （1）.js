function solution(my_string) {
    let sum = 0;
    
    for (let i = 0; i < my_string.length; i++) {
        let char = my_string[i];
        
        // 문자가 숫자인지 확인
        if (!isNaN(char) && char !== ' ') {
            sum += parseInt(char);
        }
    }
    
    return sum;
}