function solution(dots) {
    const width = Math.abs(dots[0][0] - dots[1][0]) || Math.abs(dots[0][0] - dots[2][0]);
    const height = Math.abs(dots[0][1] - dots[1][1]) || Math.abs(dots[0][1] - dots[2][1]);
    return width * height;
}
