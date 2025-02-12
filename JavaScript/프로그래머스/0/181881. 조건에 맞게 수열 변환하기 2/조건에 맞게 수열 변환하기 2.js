function solution(arr) {
    let count = 0;
    while (true) {
        let newArr = arr.map(num => {
            if (num >= 50 && num % 2 === 0) return num / 2;
            if (num < 50 && num % 2 === 1) return num * 2 + 1;
            return num;
        });

        if (arr.every((num, index) => num === newArr[index])) break;
        arr = newArr;
        count++;
    }
    return count;
}
