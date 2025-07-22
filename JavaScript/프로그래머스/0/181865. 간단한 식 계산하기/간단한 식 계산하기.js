function solution(binomial) {
    let newBinomial = binomial.split(' ');
    if(newBinomial[1] =="+"){
        return Number(newBinomial[0]) + Number(newBinomial[2]);
    }else if(newBinomial[1] =="-"){
        return Number(newBinomial[0]) - Number(newBinomial[2]);
    }else return Number(newBinomial[0]) * Number(newBinomial[2]);
}