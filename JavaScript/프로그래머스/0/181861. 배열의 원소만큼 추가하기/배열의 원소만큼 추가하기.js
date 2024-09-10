function solution(arr) {
    let X = [];
    
    arr.forEach(a => {

        for (let i = 0; i < a; i++) {
            X.push(a);
        }
    });
    
    return X;
}
