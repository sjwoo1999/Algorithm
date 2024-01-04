function solution(arr) {
    var answer = 0;
    
    for (var num of arr){
        answer += num;
    }
    
    answer /= arr.length;
    
    return answer;
}