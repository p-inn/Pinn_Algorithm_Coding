function solution(code) {
    let mode = 0;
    let ret = [];

    for (let i = 0; i < code.length; i++) {
        const ch = code[i];

        if (ch === '1') {
            mode = 1 - mode;
        } else {
            if ((mode === 0 && i % 2 === 0) || (mode === 1 && i % 2 === 1)) {
                ret.push(ch);
            }
        }
    }

    return ret.length === 0 ? "EMPTY" : ret.join('');
}
