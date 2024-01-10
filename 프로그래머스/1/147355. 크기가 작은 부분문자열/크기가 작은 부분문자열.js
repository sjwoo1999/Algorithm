function solution(t, p) {
    var answer = 0;
    
    
    let ans_arr = "";
    
    // t에서 p와 길이가 같은 부분문자열 중에서,
    for (let arr_idx = 0 ; arr_idx <= t.length-p.length ; arr_idx++){
        for (let str_idx = arr_idx ; str_idx < arr_idx + p.length; str_idx++){
            ans_arr += t[str_idx];
        }
        if (parseInt(p) >= parseInt(ans_arr)) {
            answer++;
        }
        else {
        }
        ans_arr = "";
    }
    
    // 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것들이 나오는 횟수를 return
    
    return answer;
}