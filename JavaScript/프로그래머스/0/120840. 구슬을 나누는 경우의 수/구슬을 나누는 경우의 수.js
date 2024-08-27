function solution(balls, share) {
    if (share === 0 || balls === share) return 1;
    
    let result = 1;
    for (let i = 0; i < share; i++) {
        result *= (balls - i);
        result /= (i + 1);
    }
    
    return Math.round(result);
}

