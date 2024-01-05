// array의 각 

function solution(arr, divisor) {
    var answer = new Array();
    var arr_idx = 0;
    var ans_idx = 0;
   
    for (arr_idx = 0 ; arr_idx < arr.length ; arr_idx++){
        if (arr[arr_idx] % divisor === 0){
            answer[ans_idx] = arr[arr_idx];
            ans_idx++;
        }
    }
     
    // 오름차순 정렬
    answer.sort(function(a, b){ 
        return a - b;
    });
    
    if (answer.length == 0)
        answer[0] = -1;
    
    return answer;
}