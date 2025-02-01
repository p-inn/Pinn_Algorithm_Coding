function solution(my_string) {
    let counts = new Array(52).fill(0);
    
    for (let char of my_string) {
        let index;
        if (char >= 'A' && char <= 'Z') {
            index = char.charCodeAt(0) - 'A'.charCodeAt(0);
        } else if (char >= 'a' && char <= 'z') {
            index = char.charCodeAt(0) - 'a'.charCodeAt(0) + 26;
        }
        counts[index]++;
    }
    
    return counts;
}
