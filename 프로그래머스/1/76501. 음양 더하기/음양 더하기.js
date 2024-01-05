function solution(absolutes, signs) {
    
    var sum = 0;
    var idx = 0;

    for (idx = 0; idx < absolutes.length; idx++){
        if (signs[idx] === true)
            sum += absolutes[idx] * 1;
        else
            sum += absolutes[idx] * (-1);
    }
    
    
    return sum;
}