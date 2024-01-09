function solution(s) {
    
    let answer = [];
  
    let arr = s.split(" ");
    console.log(arr);
    
    let arr_len = arr.length;
    
    for (let i = 0 ; i < arr_len ; i++){
        for (let j = 0 ; j < arr[i].length; j++){
            console.log(arr[i][j]);
            if (j % 2 == 0){
                answer += arr[i][j].toUpperCase();
            } else {
                answer += arr[i][j].toLowerCase();
            }
            console.log("j : " + j + ", arr[i][j] " + arr[i][j]);
        }
        if (i === arr_len - 1) break;
        answer += " ";
    }
    
    console.log(answer);
    
    
    return answer;
}