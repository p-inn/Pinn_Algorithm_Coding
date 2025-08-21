function solution(order) {
    let americano = order.filter((e) => e.includes("americano")).length;
    let caffeLatte = order.filter((e) => e.includes("cafelatte")).length;
    let anything = order.filter((e) => e.includes("anything")).length;    
    return ((americano + anything) * 4500) + (caffeLatte * 5000);
}