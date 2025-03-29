function solution(my_string) {
  const tokens = my_string.split(' ');
  let result = +tokens[0];

  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i];
    const num = +tokens[i + 1];

    if (op === '+') result += num;
    else if (op === '-') result -= num;
  }

  return result;
}
