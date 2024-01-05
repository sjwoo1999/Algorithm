function solution(phone_number) {
    var answer = '';
    
    var length = phone_number.length - 4;
    var idx = 0;
    
    // string 타입의 경우 내용 변경이 불가능하다.
    // 배열로 바꿔준 다음 수정하고 다시 바꿔주거나 그렇게 해야 할 듯?
    
    var arr = new Array(phone_number.length);
    
    for (idx = 0 ; idx < phone_number.length; idx++){
        arr[idx] = parseInt(phone_number[idx]);
    }
    
    for (idx = 0 ; idx < length; idx++){
        arr[idx] = '*';
    }
    
    for (idx = 0 ; idx < phone_number.length; idx++){
        answer += arr[idx].toString();
    }
    
    return answer;
}