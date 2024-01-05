function solution(numbers) { 
    var sum = 0;
    var num_idx = 0;
    var idx = 0;
    
    var torf = new Array(10);
    var torf_idx = 0;
    
    for (torf_idx = 0 ; torf_idx < 10; torf_idx++){
        torf[torf_idx] = false;
    }
    
    // numbers에서 0이 존재하는지, 1이 존재하는지, 2가 존재하는지, ... 체크하는 것
    // numbers의 모든 원소에 대해 돌아줘야 하므로 바깥 for문은 numbers에 대해 돌아준다.
    
    for (num_idx = 0 ; num_idx < numbers.length; num_idx++){
        // numbers[num_idx] 값 체크한다 ...
        var idx = 0;
        for (idx = 0; idx <= 9; idx++){
            if (numbers[num_idx] == idx){
                torf[idx] = true;
                break;
            }
        }
    }

    
    for (torf_idx = 0 ; torf_idx < 10; torf_idx++){
        if (torf[torf_idx] == false)
            sum += torf_idx;
    }
    
    return sum;
}