function solution(sides) {
    var answer = 0;
    var newSides = sides.sort(function(a,b){
        return a-b;
    });
    answer = (newSides[0]+newSides[1]>newSides[2])?1 : 2;
return answer;
}