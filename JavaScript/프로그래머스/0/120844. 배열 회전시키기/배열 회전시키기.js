function solution(numbers, direction) {
    directionType = 0;
    if(direction == 'right') directionType = -1;
    if(direction == 'left') directionType = 1;
    directionType = directionType % numbers.length;
    return numbers.slice(directionType).concat(numbers.slice(0, directionType));
}