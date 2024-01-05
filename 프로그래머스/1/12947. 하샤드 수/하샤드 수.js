function solution(x) {
    
    // 자리수의 합을 구하고
    
    var str = x.toString();
    
    var i = 0;
    var sum = 0;
    
    for (i = 0 ; i < str.length; i++){
        sum += parseInt(str[i]);
    }
    
    console.log(sum);
    
    // x / (자리수의 합)이 가능해야 한다. 나누어져야 한다는 것 나누어 떨어져야 한다는 뜻.
    
    if (x % sum === 0)
        return true;
    else
        return false;
    
}