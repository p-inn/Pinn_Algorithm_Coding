function solution(my_string, index_list) {
    var answer = [];
    let newString = my_string.split('');
    for(let i = 0; i < index_list.length; i++){
        answer.push(newString[index_list[i]]);
    }
    return answer.join('');
}