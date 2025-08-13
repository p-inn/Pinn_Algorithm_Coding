function solution(my_strings, parts) {
   return my_strings
    .map((str, idx) => {
      const [start, end] = parts[idx];
      return str.slice(start, end + 1);
    })
    .join('');
}