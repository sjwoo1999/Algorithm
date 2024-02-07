function solution(strlist) {
    
    var str = [...strlist];
    
    var len = strlist.length;
    
    var answer = new Array (len);
    
    for (let i = 0 ; i < len ; i++){
        answer[i] = strlist[i].length;
    }
    
    return answer;
}