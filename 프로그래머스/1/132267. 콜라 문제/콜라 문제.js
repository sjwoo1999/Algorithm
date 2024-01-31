function solution(a, b, n) {
    
    var remain = 0;
    
    while (n >= a){
        remain += Math.floor(n/a)*b;
        n = Math.floor(n/a)*b + n%a;
    }
    
    return remain;
}