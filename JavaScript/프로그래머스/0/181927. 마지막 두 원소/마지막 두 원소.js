function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const secondLast = num_list[num_list.length - 2];
    
    num_list.push(last > secondLast ? last - secondLast : last * 2);
    
    return num_list;
}
