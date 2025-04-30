function solution(chicken) {
let coupon = chicken;
let service = 0;

while (coupon >= 10) {
  let newChickens = Math.floor(coupon / 10);
  service += newChickens;
  coupon = newChickens + (coupon % 10);
}
    return service;
}