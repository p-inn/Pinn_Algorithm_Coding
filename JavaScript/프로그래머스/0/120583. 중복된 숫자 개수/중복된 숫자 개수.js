function solution(my_str, n) {
  let result = 0;
  for (let i = 0; i < my_str.length; i ++) {
    if(my_str[i] == n){
        result++;
    }
  }
  return result;
}
