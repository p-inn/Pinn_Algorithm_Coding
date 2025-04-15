function solution(id_pw, db) {
  const [inputId, inputPw] = id_pw;

  const user = db.find(([dbId, dbPw]) => dbId === inputId);

  if (!user) return "fail";
  if (user[1] !== inputPw) return "wrong pw";
  return "login";
}