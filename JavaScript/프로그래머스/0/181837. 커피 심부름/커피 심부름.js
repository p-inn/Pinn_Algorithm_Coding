function solution(order) {
  let total = 0;

  order.forEach(item => {
    if (item.includes("americano") || item === "anything") {

      total += 4500;
    } else if (item.includes("cafelatte")) {
      total += 5000;
    }
  });

  return total;
}
