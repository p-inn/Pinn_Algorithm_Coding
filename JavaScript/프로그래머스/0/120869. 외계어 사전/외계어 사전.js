function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');

    for (const word of dic) {
        if (sortedSpell === word.split('').sort().join('')) {
            return 1;
        }
    }
    return 2;
}
