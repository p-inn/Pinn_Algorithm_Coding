function solution(box, n) {
    let width = Math.floor(box[0] / n);
    let height = Math.floor(box[1] / n);
    let high = Math.floor(box[2] / n);
    return width * height * high;
}