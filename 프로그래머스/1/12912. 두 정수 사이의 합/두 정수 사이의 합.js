function solution(a, b) {
    if (a === b) return a;
    
    var sum = 0;
    var idx = 0;
    
    if (a > b){
        for (idx = b; idx <= a; idx++)
            sum += idx;
    }
    else if (a < b){
        for (idx = a; idx <= b; idx++)
            sum += idx;
    }
    
    return sum;
}