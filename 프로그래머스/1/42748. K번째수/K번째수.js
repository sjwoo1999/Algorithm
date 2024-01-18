function solution(array, commands) {
    let answer = [];
    let sliceArr = []; // 자른 배열을 저장하기 위한 배열
    for (let i = 0 ; i < commands.length; i++){
        // 입력 받은 commands의 길이만큼 반복
        sliceArr = array.slice(commands[i][0]-1, commands[i][1]);
        // 입력 받은 배열의 commands[i][0]번째부터
        // commands[i][1]번째까지 잘라서 sliceArr 배열에 저장
        sliceArr.sort((a, b) => a - b);
        // sliceArr 오름차순 정렬
        answer.push(sliceArr[commands[i][2]-1]);
        // answer 배열에 sliceArr 배열의 commands[i][2]번째 숫자를 추가
    }
    return answer;
}