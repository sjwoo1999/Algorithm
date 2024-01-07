function solution(s) {

    if(s.length === 4 || s.length === 6){
        return s.split("").every(c => !isNaN(c)) // 모든 요소가 number이면 true리턴
    } else {
        return false;
    }
}

// 이유는 자바스크립트에서는 숫자에 e가 붙으면 지수로 인식하여 문자인 경우도 그냥 숫자로 인식해버린다는 것이었다.