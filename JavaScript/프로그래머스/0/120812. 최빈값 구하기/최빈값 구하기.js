function solution(arr) {
    let freqMap = new Map();
    let maxFreq = 0;
    let mode = [];

    for (let num of arr) {
        let freq = (freqMap.get(num) || 0) + 1;
        freqMap.set(num, freq);

        if (freq > maxFreq) {
            maxFreq = freq;
            mode = [num];
        } else if (freq === maxFreq) {
            mode.push(num);
        }
    }

    return mode.length === 1 ? mode[0] : -1;
}

