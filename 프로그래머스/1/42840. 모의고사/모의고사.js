// ## 완전탐색 문제: 모의고사

// ## 문제 설명
// 3명의 수포자가 각자 문제를 풀었을 때, 가장 많은 문제를 맞힌 수포자를 찾는 문제입니다. 각 수포자는 자신만의 고정된 패턴으로 문제를 풀고, 문제의 정답은 1, 2, 3, 4, 5 중 하나입니다.

// ## 코드 분석

// ### 1. 변수 선언
// - `answer`: 결과 배열
// - `a1, a2, a3`: 각 수포자의 문제 풀이 패턴
// - `a1c, a2c, a3c`: 각 수포자가 맞힌 문제 개수
// - `max`: 최대 맞힌 문제 개수

// ### 2. 각 수포자가 맞힌 문제 개수 계산
// - `filter` 함수를 사용하여 각 수포자의 패턴과 일치하는 문제 개수를 계산합니다.
// - `i % a1.length` 연산을 통해 패턴 배열의 길이를 벗어나지 않도록 합니다.

// ### 3. 최대 맞힌 문제 개수 찾기
// - `Math.max` 함수를 사용하여 세 수포자 중 최대 맞힌 문제 개수를 찾습니다.

// ### 4. 최대 점수를 받은 수포자 찾기
// - `max` 변수와 각 수포자가 맞힌 문제 개수를 비교하여 최대 점수를 받은 수포자를 찾습니다.
// - `answer` 배열에 최대 점수를 받은 수포자의 번호를 추가합니다.

// ### 5. 결과 배열 반환
// - 최종 결과 배열 `answer`를 반환합니다.

// ## 코드 구현

function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}

// function solution(answers) {
//     var prob = answers.length;
//     var score = new Array(3);
//     for (let i = 0 ; i < 3 ; i++){
//         score[i] = 0;
//     }
    
//     var first_answer = [1, 2, 3, 4, 5];
    
//     first_answer.forEach((answer, idx) => {
//         if (answer === answers[idx % 5]) score[0]++;
//     })
    
//     var second_answer = [2, 1, 2, 3, 2, 4, 2, 5];
    
//     second_answer.forEach((answer, idx) => {
//         if (answer === answers[idx % 8]) score[1]++;
//     })
   
//     var third_answer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//     // 필요할 때 꺼내쓴다
    
//     third_answer.forEach((answer, idx) => {
//         if (answer === answers[idx % 10]) score[2]++;
//     })
    
//     // 1번, 2번, 3번 수포자 점수 담은 배열에서 최댓값 구하기
//     var highest = [];
//     const highestScore = Math.max(...score);
//     for (let i = 0 ; i < 3 ; i++){
//         if (score[i] === highestScore){
//             highest.push(i+1);
//         }
//     }
//     return highest;

// }

// 1. 찍는 과정을 코드로 구현
//    -> 테스트 2/3/4 통과
//    -> 시간 초과 발생

// 2. 찍는 방식은 사전에 정해진 방식대로 찍게 되므로 배열에 넣어줌 (2번 수포자, 3번 수포자)
//    -> 테스트 1/2/3/4/9 통과
//    -> 시간 초과 X

// 3. 1번 수포자
//    -> 테스트 1/2/3/4/8/14 통과
//    -> 시간 초과 X

// 1번에서는 시간 초과가 발생했지만 2번 3번에서는 시간 초과가 발생하지 않았다
// 시간 초과는 발생했지만 실패를 했다는 건 오답이 발생했다는 뜻 ?

// map .. filter .. forEach?

// 4. forEach 사용해보기?
//    -> 테스트 1/2/3/4/8/14 통과
//    -> forEach는 딱히 상관 없는 듯

// 5. Math.max.apply 사용하지 않기
//    -> 테스트 2/3/4 통과
//    -> 테스트 1/7/8/9/11/12/13/14 런타임 에러

// Math.max.apply(null, score)을 사용하지 않고 Math.max(...score)를 사용해라

// 🤔😵‍💫🤨😵‍🫨🧐
