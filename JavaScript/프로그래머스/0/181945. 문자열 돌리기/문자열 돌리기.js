let input = "";

process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  input = input.trim();
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
});
