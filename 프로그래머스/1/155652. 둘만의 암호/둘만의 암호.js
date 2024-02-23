// filter 함수 사용

function solution(s, skip, index){
    
    // filter 함수
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
    
    return s.split("").map((a)=> alphabet[(alphabet.indexOf(a) + index) % alphabet.length]).join("");
}

// split과 map
// split

    // split 함수는 문자열을 구분자를 기준으로 나누어 배열로 반환하는 함수입니다.
    // 문자열을 여러 개의 부분 문자열로 분해하고 싶을 때 사용합니다.

// map

    // 배열의 각 요소를 변환하여 새로운 배열을 반환하는 고차 함수
    // 배열의 각 요소에 대해 함수를 적용하고, 
    // 그 결과를 새로운 배열에 담아준다.

// 아스키 코드 사용
// function solution(s, skip, index) {
//     var answer = '';
    
//     for (let i = 0 ; i < skip.length; i++){
//         console.log("skip[" + i + "] : " + skip[i]);
//     }
    
//     // s의 각 알파벳을 index 만큼의 뒤의 알파벳으로 바꿔준다.
//         // s와 skip은 알파벳 소문자로만 이루어져 있다.
//         // skip에 포함되는 알파벳은 s에 포함되지 않는다.
    
//     var newArr = new Array(s.length);
    
//     for (let i = 0 ; i < s.length; i++){
        
//         while(index){
//             // s의 각 알파벳을 index만큼의 뒤의 알파벳으로 바꿔준다.
//             // 반복문을 한 번 돌 때, 한 칸씩 이동한다.
//             newArr[i] = s.charCodeAt(i) + 1; // skip에 관련된 내용은 안 세어 주었음
//             // z보다 큰 경우, a로 돌아간다.
//             if (newArr[i] > 122){ // 현재 여기에 해당하는 경우가 발생하지 않고 있음
//                 newArr[i] -= 25;
//                 console.log("newArr[i] > 122, index : " + index);
//             }
//             // a로 돌아갔으면 
            
//             // skip에 포함된 알파벳이 되는 경우 이동 횟수를 차감하지 않는다?
//             // → 현재 인덱스에 해당하는 문자를 skip 배열에서 찾게 된다면 이동 횟수(index)를 차감하지 않는다.
//             // → 현재 인덱스에 해당하는 문자가 skip 배열에 존재하지 않는다면 이동 횟수(index)를 차감한다.
//             if (skip.indexOf(newArr[i]) === -1){
//                 console.log("\n");
//                 console.log("newArr[" + i + "]을 skip 배열에서 찾을 수 없다.");
//                 console.log("skip.indexOf(newArr[" + i + "]) : " + skip.indexOf(newArr[i]));
//                 console.log("\n");
//                 index--;
//             }
        
//             console.log("index : " + index + ", newArr[" + i + "] : " + newArr[i]);
//         }
        
//         // 아스키를 다시 문자로 바꿔줘야 함.
//         newArr[i] = String.fromCharCode(newArr[i]);
        
//         console.log("s의 " + i + "번째 문자 : " + s[i]);
//         console.log("newArr의 " + i + "번째 문자 : " + newArr[i]);
//     }
    
//     
    
//     // newArr 값이 할당되지 않고 있음
//     answer = newArr;
    
//     return answer;
// }

// 아스키 코드
// A(65) ~ Z(90)
// a(97) ~ z(122)

// js 아스키 코드

// charCodeAt() | 문자의 아스키코드를 반환
// String.fromCharCode(아스키 번호) | 아스키 번호의 문자를 반환
// codePointAt() | 문자의 아스키 코드를 반환

// charCodeAt()과 codePointAt()의 차이?
// charCodeAt() : UTF-16 코드 단위를 반환
// codePointAt() : Unicode 코드 단위를 반환
// 등등등