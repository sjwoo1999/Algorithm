function solution(n) {
    var answer = 0;
    
    if (Math.sqrt(n) == Math.floor(Math.sqrt(n)))
        return (Math.sqrt(n)+1)*(Math.sqrt(n)+1);
    else
        return -1;

}