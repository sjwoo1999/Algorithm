function solution(n) {
  // `n`은 함수의 매개변수입니다. 이 함수는 양의 정수를 입력으로 받습니다.

  let nString = n.toString().split('').map(Number);
  // `n.toString()`은 `n`을 문자열로 변환합니다.
  // `.split('')`은 문자열을 문자 단위로 나눕니다.
  // `.map(Number)`은 문자 배열의 각 요소를 숫자로 변환합니다.
  // 따라서 `nString`은 `n`의 각 자릿수를 숫자로 변환한 배열이 됩니다.

  return (parseInt(nString.sort((a, b) => b-a).join('')));
  // `nString.sort((a, b) => b-a)`는 문자 배열을 내림차순으로 정렬합니다.
  // `.join('')`은 문자 배열을 문자열로 합칩니다.
  // `parseInt()`은 문자열을 정수로 변환합니다.
  // 따라서 `return` 값은 `n`의 각 자릿수를 내림차순으로 정렬한 숫자입니다.
}
