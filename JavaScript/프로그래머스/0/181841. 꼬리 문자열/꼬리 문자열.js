function solution(str_list, ex) {
    var answer = '';
    return str_list.map(c => !c.includes(ex) ? answer + c : answer).join('');
}