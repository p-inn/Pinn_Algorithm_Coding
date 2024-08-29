function solution(score) {

    const averages = score.map((scores, index) => ({
        average: (scores[0] + scores[1]) / 2,
        index: index
    }));

    averages.sort((a, b) => b.average - a.average);

    const ranks = new Array(score.length).fill(0);
    let rank = 1;

    for (let i = 0; i < averages.length; i++) {
        if (i > 0 && averages[i].average < averages[i - 1].average) {
            rank = i + 1;
        }
        ranks[averages[i].index] = rank;
    }

    return ranks;
}
