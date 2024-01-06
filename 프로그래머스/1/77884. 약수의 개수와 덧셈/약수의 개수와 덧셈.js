function solution(left, right) {
    let answer = 0;
    
    let main_idx = 0;
    
    for (main_idx = left; main_idx <= right; main_idx++){
        let num = main_idx;
        let index = 1;
        let count = 0;
        
        while (index <= num){
            if (num % index == 0){
                count++;
            }
            index++;
        }
        
        if (count % 2 === 0)
            answer += main_idx;
        else
            answer -= main_idx;
        
    }
    
    return answer;
}