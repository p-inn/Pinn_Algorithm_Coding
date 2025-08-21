function solution(picture, k) {
    return picture.reduce((acc, row) => {
    const expandedRow = [...row].map(ch => ch.repeat(k)).join("");
    return acc.concat(Array(k).fill(expandedRow));
  }, []);
}