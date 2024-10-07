function solution(arr) {

    let length = arr.length;
    let newLength = 1;
    
    while(newLength<length){
        newLength *= 2;
    }
    while (arr.length < newLength) {
        arr.push(0);
    }
    return arr;
}