function solution(s) {

    const arr = s.split(' ');

    let sum = 0;

    let lastValue = 0;

    arr.forEach(item => {
        if (item === "Z") {
            sum -= lastValue;
        } else {
            lastValue = parseInt(item);
            sum += lastValue;
        }
    });
    
    return sum;
}
