function solution(num_list) {

    const oddStr = num_list.filter(num => num % 2 !== 0).join('');

    const evenStr = num_list.filter(num => num % 2 === 0).join('');
    
    return Number(oddStr) + Number(evenStr);
}
