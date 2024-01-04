function solution(n)
{
    var answer = 0;

    n = n.toString();
    
    var length = n.length;
    
    var i = 0;
    while(n[i]){
        if (n[i])
            answer += parseInt(n[i]);
        i++;
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}