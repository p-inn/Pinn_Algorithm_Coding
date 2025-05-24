function solution(num_list) {
  let odd = "";
  let even = "";

  for (const n of num_list) {
    if (n % 2 === 0) {
      even += n;
    } else {
      odd += n;
    }
  }

  return Number(odd) + Number(even);
}
