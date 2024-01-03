function solution(n) {
    var answer = 0;
    
    var val = 0;
    
    for (val = 0; val <= n; val++){
        if (val % 2 == 0){
            answer += val;
        }
    }
    
    return answer;
}