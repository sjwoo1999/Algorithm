function solution(n) {
    var answer = [];
    
    var str = n.toString();
    
    console.log(str);
    
    var idx = 0;
    
    for (idx = 0; idx < str.length; idx++){
        answer[idx] = parseInt(str[idx])
    }
    
    answer = answer.reverse();
    
    return answer;
}