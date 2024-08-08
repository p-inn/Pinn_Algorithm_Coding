function solution(num_list) {
    var answer = [];
    var a = [];
    var b = [];
    for(let i=0;i<num_list.length;i++){
        if(num_list[i]%2!==0){
            a.push([i]);
        }else{
            b.push([i]);
        }
    }
    answer = [b.length, a.length];
    return answer;
}