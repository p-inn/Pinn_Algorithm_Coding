function solution(quiz) {
    return quiz.map(q => {
        // 수식을 공백을 기준으로 분리
        const [X, operator, Y, , Z] = q.split(' ');

        // X와 Y는 정수로 변환
        const numX = parseInt(X);
        const numY = parseInt(Y);
        const numZ = parseInt(Z);

        let result;
        if (operator === '+') {
            result = numX + numY;
        } else if (operator === '-') {
            result = numX - numY;
        }

        return result === numZ ? "O" : "X";
    });
}
