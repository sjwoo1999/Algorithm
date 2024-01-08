function solution(n) {
  // 3진법으로 변환
  const three = n.toString(3);
  // 3진법을 거꾸로 뒤집기
  const reversed = three.split("").reverse().join("");
  // 10진법으로 변환
  return parseInt(reversed, 3);
}
