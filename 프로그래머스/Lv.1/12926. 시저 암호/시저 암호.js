function solution(s, n) {
    var answer = '';
    
    console.log(typeof(s));
    
    let arr = new Array(s.length);
    
    for (let i = 0 ; i < s.length; i++){
        arr[i] = s[i];
        console.log(i + "번째 : " + arr[i]);
    }
  
    for (let i = 0 ; i < s.length; i++){
        // 대문자인 경우
        if (65 <= arr[i].charCodeAt() && arr[i].charCodeAt() <= 90){
            arr[i] = String.fromCharCode(arr[i].charCodeAt() + n);
            if (arr[i].charCodeAt() > 90)
                arr[i] = String.fromCharCode(arr[i].charCodeAt() - 26);
        }
        // 소문자인 경우
        else if (97 <= arr[i].charCodeAt() && arr[i].charCodeAt() <= 122){
            arr[i] = String.fromCharCode(arr[i].charCodeAt() + n);
            if (arr[i].charCodeAt() > 122)
                arr[i] = String.fromCharCode(arr[i].charCodeAt() - 26);
        }
        
        answer += arr[i];
    }

    return answer;
}