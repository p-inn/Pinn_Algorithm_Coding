function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    
    // 방향 벡터: 주변 8방향과 자기 자신을 포함
    const directions = [
        [-1, -1], [-1, 0], [-1, 1], 
        [0, -1], [0, 0], [0, 1], 
        [1, -1], [1, 0], [1, 1]
    ];
    
    // 지뢰가 있는 위치와 그 주변을 위험지역으로 표시
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 1) {
                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] === 0) {
                        board[nr][nc] = -1; // 위험지역 표시
                    }
                }
            }
        }
    }
    
    // 안전한 지역의 칸 수 계산
    let safeCount = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 0) {
                safeCount++;
            }
        }
    }
    
    return safeCount;
}

