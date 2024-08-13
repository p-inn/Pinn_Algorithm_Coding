function solution(box, n) {
    const lengthFit = Math.floor(box[0] / n);
    const widthFit = Math.floor(box[1] / n);
    const heightFit = Math.floor(box[2] / n);
    
    return lengthFit * widthFit * heightFit;
}