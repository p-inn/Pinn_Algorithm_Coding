function solution(chicken) {
    let totalChick = 0;
    let coupons = chicken;

    while (coupons >= 10) {
        let newChickens = Math.floor(coupons / 10);
        totalChick += newChickens;
        coupons = newChickens + (coupons % 10);
    }

    return totalChick;
}
