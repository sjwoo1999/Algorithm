function solution(nums) {
    var answer = 0;
    
    for (let i = 0 ; i < nums.length - 2 ; i++){
        for (let j = i + 1 ; j < nums.length - 1 ; j++){
            for (let k = j + 1 ; k < nums.length ; k++){
                
                var sum = nums[i] + nums[j] + nums[k];
                var isPrime = true;
                
                for (let z = 2; sum > z; z++){
                    if (sum % z === 0){
                        isPrime = false;
                        break;
                    }
                }
               
                if (isPrime) answer++;
                                
            }
        }
    }
    
    return answer;
}