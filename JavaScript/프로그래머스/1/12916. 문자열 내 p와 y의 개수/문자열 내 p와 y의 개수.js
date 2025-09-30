function solution(s){
    let p = s.toLowerCase().split('').filter(e => e == 'p').length;
    let y = s.toLowerCase().split('').filter(e => e == 'y').length;

    return p == y ? true : false;
}