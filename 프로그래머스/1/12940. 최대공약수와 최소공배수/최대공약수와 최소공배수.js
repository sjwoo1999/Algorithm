function solution(n, m) {
    var answer = [];

    let gcd = (n, m) => {
        let gcd = 1;
        for (let i = 2 ; i <= Math.min(n, m); i++){
            if (n % i === 0 && m % i === 0) gcd = i;
        }
        return gcd;
    }
    
    const lcm = (n, m) => n * m / gcd(n, m);
    
    answer.push(gcd(n,m));
    answer.push(lcm(n,m));
    
    return answer;
}