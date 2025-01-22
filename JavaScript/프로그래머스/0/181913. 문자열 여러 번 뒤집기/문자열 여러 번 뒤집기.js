function solution(my_string, queries) {
    let result = my_string.split("");

    queries.forEach(([s, e]) => {
        while (s < e) {
            [result[s], result[e]] = [result[e], result[s]];
            s++;
            e--;
        }
    });

    return result.join("");
}