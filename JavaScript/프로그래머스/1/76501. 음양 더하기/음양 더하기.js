function solution(absolutes, signs) {
    var add = [];
    for(let i = 0; i < signs.length; i++){
        if(signs[i] == true){
            add.push(absolutes[i]);
        }else add.push(-absolutes[i]);
    }
    return add.reduce((acc, cur) => acc + cur, 0);
}