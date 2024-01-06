function solution(n) {
    var answer = '';
    
    var idx = 0;
    
    for (idx = 0 ; idx < n ; idx++){
        if (idx % 2 === 0)
            answer += '수';
        else
            answer += '박';
    }
    
    return answer;
}