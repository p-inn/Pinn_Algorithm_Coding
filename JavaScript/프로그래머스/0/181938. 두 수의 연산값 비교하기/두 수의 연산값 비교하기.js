function solution(a, b) {
    let sumA = a.toString() + b.toString()
    let sumB = 2 * a * b;
    if(sumA > sumB){
         return Number(sumA);
    }else if(sumB > sumA){
         return sumB;
    }else return Number(sumA);
}