function solution(s) {
    var answer = '';
    
    const arr = [...s];
    
    console.log(arr);
    
    if (arr.length % 2 === 0){
        answer += arr[Math.round(arr.length/2)-1].toString();
        answer += arr[Math.round(arr.length/2)].toString();
    } else {
        answer += arr[Math.round(arr.length/2)-1].toString();
    }
    
    console.log(answer);
    
    return answer;
}

// 코드가 많이 별로인데 일단 넘어가고 나중에 보완하자