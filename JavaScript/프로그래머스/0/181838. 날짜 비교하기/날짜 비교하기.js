function solution(date1, date2) {
    const d1 = new Date(date1[0], date1[1] - 1, date1[2]); // 월은 0부터 시작하므로 -1
    const d2 = new Date(date2[0], date2[1] - 1, date2[2]);
    if(d1<d2){
        return 1;
    }
    return 0;
}