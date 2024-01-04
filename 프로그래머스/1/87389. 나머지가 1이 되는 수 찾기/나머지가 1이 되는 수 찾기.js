function solution(n) {
    var answer = 0;
    
    var val = 1;
    
    for (val = 1 ; val <= n; val++){
        if (n % val == 1) return val;
    }
    
    return answer;
}