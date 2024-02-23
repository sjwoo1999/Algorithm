function solution(s) {
    var answer = '';
    
    const num = s.split(" ");
    
    for (let i = 0 ; i < num.length ; i++){
        num[i] = Number(num[i]);
    }
    
    var max = Math.max.apply(null, num);
    var min = Math.min.apply(null, num);
    
    // Math.max와 Math.max.apply의 차이?
    // Math.min과 Math.min.apply의 차이?
    
    // Math.max와 Math.min은 숫자를 매개변수로 전달해야 한다.
    // Math.max.apply와 Math.min.apply는 배열을 매개변수로 전달해야 한다.
    
    answer = min + " " + max;
    
    return answer;
}