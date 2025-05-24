function solution(num_list) {
    const sumA = num_list.filter(n => n % 2 === 1).join("");
    const sumB = num_list.filter(n => n % 2 === 0).join("");
    return Number(sumA) +Number(sumB);
}