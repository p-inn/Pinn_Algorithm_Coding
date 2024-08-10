function solution(hp) {
    const generalAntPower = 5;
    const soldierAntPower = 3;
    const workerAntPower = 1;

    let generals = Math.floor(hp / generalAntPower);
    hp %= generalAntPower;

    let soldiers = Math.floor(hp / soldierAntPower);
    hp %= soldierAntPower;

    let workers = hp;

    return generals + soldiers + workers;
}
