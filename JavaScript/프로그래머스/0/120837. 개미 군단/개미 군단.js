function solution(hp) {
    let ant1 = 0;
    let ant2 = 0;
    let ant3 = 0;
    ant1 = Math.floor(hp / 5);
    ant2 =  Math.floor((hp % 5) / 3);
    ant3 =  Math.floor(Math.floor((hp % 5) % 3) / 1);
    
    return ant1 + ant2 + ant3;
}