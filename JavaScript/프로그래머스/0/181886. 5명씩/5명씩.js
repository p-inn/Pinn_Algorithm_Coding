function solution(names) {
    let result = [];
  for (let i = 0; i < names.length; i += 5) {
    result.push(names.slice(i, i + 5));
  }  
 const answer = result.map(group => group[0]);
  return answer;
}