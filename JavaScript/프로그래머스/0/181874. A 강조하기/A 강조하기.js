function solution(myString) {
    myString = myString.replaceAll('a', 'A');
    let result = '';
    for (let c of myString) {
  if (c >= 'A' && c <= 'Z' && c !== 'A') {
    result += c.toLowerCase();
  } else {
    result += c;
  }
}
return result;

}
