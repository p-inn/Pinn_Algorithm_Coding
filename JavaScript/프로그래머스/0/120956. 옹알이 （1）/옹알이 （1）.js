function solution(babbling) {
  const canSpeak = ["aya", "ye", "woo", "ma"];

  return babbling.filter((word) => {
    for (let sound of canSpeak) {
      if (word.includes(sound + sound)) return false;
    }

    for (let sound of canSpeak) {
      word = word.replaceAll(sound, " ");
    }

    return word.trim() === "";
  }).length;
}



