function solution(num_list) {
    let totalDivisions = 0;

    num_list.forEach(num => {
        let count = 0;
        while (num > 1) {
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = (num - 1) / 2;
            }
            count++;
        }
        totalDivisions += count;
    });

    return totalDivisions;
}
