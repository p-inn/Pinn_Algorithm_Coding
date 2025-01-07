function solution(array) {
  const freq = {};
  array.forEach(num => freq[num] = (freq[num] || 0) + 1);

  const maxFreq = Math.max(...Object.values(freq));
  const modes = Object.keys(freq).filter(key => freq[key] === maxFreq);

  return modes.length === 1 ? Number(modes[0]) : -1;
}
