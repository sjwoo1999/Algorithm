function solution(numbers) {
    var answer = 0;
    
    numbers.forEach((number) => answer+=number);
    
    answer /= numbers.length;
    
    return answer;
}