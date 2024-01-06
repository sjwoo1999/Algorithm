function solution(a, b) {
    
    var len = a.length;
    
    var idx = 0;
    var sum = 0;
    
    for (idx = 0; idx < len ; idx++){
        sum += a[idx]*b[idx];
    }

    return sum;
}