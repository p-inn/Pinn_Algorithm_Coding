function solution(sides) {
    const sortArray = sides.sort((a,b) => b - a);
    if(sortArray[0] < sortArray[1] + sortArray[2]){
        return 1;
    } else return 2;
}