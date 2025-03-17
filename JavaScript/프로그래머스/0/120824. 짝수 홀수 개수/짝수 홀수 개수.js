function solution(num_list) {
    let num = 0;
    let num1 = 0;
    for(let i = 0; i< num_list.length; i++){
        if(num_list[i] % 2 == 0){
            num++;
        }else num1++;
    }
    return [num, num1];
}