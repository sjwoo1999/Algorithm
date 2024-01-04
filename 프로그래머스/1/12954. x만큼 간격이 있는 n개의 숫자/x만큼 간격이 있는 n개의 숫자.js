function solution(x, n) {
    var answer = [];
    
    var idx = 0;
    
    for (idx = 0; idx < n; idx++){
        answer[idx] = x*(idx+1);
    }
    
    
    return answer;
}