function solution(order) {
    order = String(order).split('');
    const targets = ['3','6','9'];
    const count = order.filter(el => targets.includes(el)).length;
    return count;
}