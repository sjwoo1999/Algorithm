function solution(hallOfFameCapacity, roundScores) {
  const hallOfFame = [];
  const result = [];

  roundScores.forEach((currentScore, roundIndex) => {
    // 명예의 전당 초기화
    if (roundIndex < hallOfFameCapacity) {
      hallOfFame.push(currentScore);
      // 내림차순 정렬
      hallOfFame.sort((a, b) => b - a);
    } else {
      // 명예의 전당 갱신
      const minScore = Math.min(...hallOfFame);
      // 0번째가 Math.min 메서드로 최하위 점수를 구할 수 있다.
      if (currentScore > minScore) {
        hallOfFame.pop();
        hallOfFame.push(currentScore);
        // 내림차순 정렬
        hallOfFame.sort((a, b) => b - a);
      }
    }

    // 정답 배열에 추가
    result.push(Math.min(...hallOfFame));
  });

  return result;
}
