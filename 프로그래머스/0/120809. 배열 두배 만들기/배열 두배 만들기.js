function solution(numbers) {
    var answer = new Array (numbers.length);

   
    for (let i = 0 ; i < numbers.length; i++){
        answer[i] = numbers[i] * 2;        
    }
    
    return answer;
}