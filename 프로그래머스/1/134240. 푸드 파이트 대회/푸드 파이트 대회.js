function solution(food) {
    var answer = '';
    
    // 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때
    // food에는 칼로리가 적은 순서대로 음식의 양이 담겨 있습니다.
    // 예를 들어 [1, 3, 4, 6]인 경우라면, 각각 a, b, c, d 칼로리를 갖고 있다. (a < b < c < d)
    // 한 사람이 모든 음식을 섭취하는 경우 섭취 가능한 칼로리에는 a * 1 + b * 3 + c * 4 + d * 6의 칼로리가 될 것이다.
    // 대회의 공정성을 위해 두 선수가 먹는 음식의 종류와 양이 같아야 하고, 중간에 물이 있기 때문에 어차피 가운데에는 물을 놓아야 하지 않을까?
    // 각각 2개씩이면 2 + 2 + 1 = 5 / 각각 3개씩이면 3 + 3 + 1 = 7 어찌되었든 딱 가운데에 물이 있어야 한다.
    // food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다.
    // 그렇다는 것은 food[0]은 고려할 필요가 없다는 뜻이지 않을까?
    // 대회의 조건을 고려하지 않고 음식을 주문하여 몇 개의 음식은 대회에 사용하지 못하게 되었습니다 .....
    
    
    console.log(food.length);
    
    let newArrSize = 0;
    
    for (let i = 0 ; i < food.length; i++){
        newArrSize += food[i];
    }
    
    console.log(newArrSize);
    
    let arr = new Array(newArrSize);
    
    console.log(arr.length);
    
    // 음식 종류와 양이 같아야 하고, 음식을 먹는 순서도 같아야 한다 .. 마치 데칼코마니 같은 느낌적인 느낌
    // food[0]을 제외하고 food[1]부터 food[food.length-1]까지 .. 짝수개를 갖고 있어야 양쪽에 나눠줄 수 있기 때문에..
    // 만약 홀수라면 버림을 한다
    // 칼로리가 적은 순서대로라고 했으니? 각 칼로리를 해당하는 인덱스 값으로 지정해주도록 하자.
    // 첫 번째 예제의 상황에서 food[1]은 3이니까, 1칼로리 짜리가 3개 있다는 뜻 -> 이렇게 되면 1칼로리 짜리는 2개만 사용 가능하다
    // food[2]는 4이니까, 2칼로리짜리가 4개 있다는 뜻
    // 전체 범위 돌면서 몫만 구해주도록 하자
    
    console.log(Math.floor(5/2));
    
    for (let i = 0 ; i < food.length; i++){
        food[i] = Math.floor(food[i]/2);
        console.log(food[i]);
    }
    
    for (let i = 0 ; i < food.length;i++){
        for (let j = 0 ; j < food[i]; j++){
            answer += i.toString();
        }
    }
    
    answer += "0";
    
    for (let i = food.length-1; i>= 0 ;i--){
        for (let j = 0 ; j < food[i]; j++){
            answer += i.toString();
        }
    }
    
    // 대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.
    
    // 한 선수는 왼쪽에서부터 오른쪽으로, 다른 선수는 오른쪽에서부터 왼쪽으로
    
    // 중앙에는 물이 배치되고, 물을 먼저 먹는 선수가 승리한다.
    
    return answer;
}