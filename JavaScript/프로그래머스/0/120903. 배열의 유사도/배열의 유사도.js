function solution(s1, s2) {
    const set1 = new Set(s1);
    const set2 = new Set(s2);

    let intersection = new Set([...set1].filter(x => set2.has(x)));

    return intersection.size;
}