function solution(age) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    return age.toString().split('').map(digit => alphabet[digit.charCodeAt(0) - '0'.charCodeAt(0)]).join('');
}