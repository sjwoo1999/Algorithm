function solution(survey, choices) {
    // 질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와
    // 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices
    
    // 4개의 지표 (R/T), (C/F), (J/M), (A, N)
    // 근데 survey는 왜 5개? -> 질문의 개수가 5개라는 뜻이고
    // 각 질문에 대한 응답은 7종류이다
    
    var answer = '';
    
    // survey[i]의 첫 번째 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형
    // survey[i]의 두 번째 캐릭터는 i+1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형
    // survey[0]의 첫 번째 캐릭터 : A : 1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형
    // survey[0]의 두 번째 캐릭터 : N : 1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형
    // "A형 3점"-"A형 2점"-"A형 1점"-"NONE"-"N형 1점"-"N형 2점"-"N형 3점"
    // 입력 예시
    // ["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]
    
    // R형 : Ryan - K형 : Tube
    // C형 : Con - F형 : Frodo
    // J형 : Jay G - M형 : Muji
    // A형 : Apeach - N형 : Neo
    
    // "A형 3점"-"A형 2점"-"A형 1점"-"NONE"-"N형 1점"-"N형 2점"-"N형 3점"
    // "C형 3점"-"C형 2점"-"C형 1점"-"NONE"-"F형 1점"-"F형 2점"-"F형 3점"
    // "M형 3점"-"M형 2점"-"M형 1점"-"NONE"-"J형 1점"-"J형 2점"-"J형 3점"
    // "R형 3점"-"R형 2점"-"R형 1점"-"NONE"-"T형 1점"-"T형 2점"-"T형 3점"
    // "N형 3점"-"N형 2점"-"N형 1점"-"NONE"-"A형 1점"-"A형 2점"-"A형 3점"

    // 매우 비동의-비동의-약간 비동의-모르겠음-약간 동의-동의-매우 동의
    
    // 한 사람이 테스트를 진행하는 상황이며, 각 유형에 대한 정보를 저장할 수 있어야 함.
    let rScore = 0;
    let tScore = 0;
    let cScore = 0;
    let fScore = 0;
    let jScore = 0;
    let mScore = 0;
    let aScore = 0;
    let nScore = 0;
    
    // 첫 번째 캐릭터의 알파벳을 확인 후, 어떤 성격 유형의 점수를 체크할 것인지 파악해야 한다.
    // 두 번째 캐릭터의 알파벳을 확인 후, 어떤 성격 유형의 점수를 체크할 것인지 파악해야 한다.
    // 굳이 이렇게 할 필요가 있을까?
    // 첫 번째 캐릭터에 대응하는 다른 캐릭터가 주어지는 게 정상이지 않을까?
    // E-I/S-N/T-F/J-P 와 같은 형태라고 생각할 수 있겠다.
    // E와 I를 비교할 수는 있어도 E와 T를 비교할 순 없는 그런 느낌
    
    // 위 예시처럼 네오형이 비동의, 어피치형이 동의인 경우만 주어지지 않고,
    // 질문에 따라 네오형이 동의, 어피치형이 비동의인 경우도 주어질 수 있습니다.
    // 하지만 각 선택지는 고정적인 크기의 점수를 가지고 있습니다.
    
    // 라고 작성된 것을 봤을 때, survey에 주어지는 첫 번째 캐릭터와 두 번째 캐릭터에 대한
    // 정확한 틀이 잡혀있지는 않은 것으로 보인다.
    // 따라서, 첫 번쨰 캐릭터에 해당하는 타입은 비동의하는 수준이 높을수록 더 많은 점수를 얻고,
    // 두 번째 캐릭터에 해당하는 타입은 동의하는 수준이 높을수록 더 많은 점수를 얻는다고 생각하자.
    
    // 예를 들어, survey가 TR로 입력된 경우는 아래와 같다.
    // 매우 비동의 : T : 3점
    // 비동의 : T : 2점
    // 약간 비동의 : T : 1점
    // 모르겠음 : 0점
    // 약간 동의 : R : 1점
    // 동의 : R : 2점
    // 매우 동의 : 3점
    
    // 예를 들어, survey가 RT로 입력된 경우는 아래와 같다.
    // 매우 비동의 : R : 3점
    // 비동의 : R : 2점
    // 약간 비동의 : R : 1점
    // 모르겠음 : 0점
    // 약간 동의 : T : 1점
    // 동의 : T : 2점
    // 매우 동의 : T : 3점
    
    // survey와 choices가 매개변수로 주어지며,
    // survey 배열의 길이와 choices 배열의 길이는 동일하게 주어진다.
    for (let i = 0 ; i < survey.length; i++){
        let firstCharacter = survey[i][0];
        let secondCharacter = survey[i][1];
        console.log(firstCharacter + ", " + secondCharacter);
        console.log(survey[i]);
        
        let score = 0;
        
        // choices[i]의 자료형과 switch-case에서의 자료형이 달라서 비교가 안 될 수 있음
        // case '1'로 하는 경우 문자열로 처리가 되나?
        // 이유는 모르겠지만 쨌든 따옴표 제거해줘야 정상 실행됨
        
        console.log("choices[i] : " + choices[i]);
        console.log("typeof choices[i] : " + typeof choices[i]);
        
        switch(choices[i]){
            case 1:
                score = 3;
                break;
            case 2:
                score = 2;
                break;
            case 3:
                score = 1;
                break;
            case 4:
                score = 0;
                break;
            case 5:
                score = 1;
                break;
            case 6:
                score = 2;
                break;
            case 7:
                score = 3;
                break;
        }
        
        console.log("score : " + score);
        console.log("typeof firstCharacter : " + typeof firstCharacter);
        console.log("typeof secondCharacter : " + typeof secondCharacter);
        console.log("typeof score: " + typeof score);
        console.log("typeof firstCharacter[0] : " + typeof firstCharacter[0]);
        console.log("typeof secondCharacter[0] : " + typeof secondCharacter[0]);
        
        // console.log("====");
        // // r, t, c, f, j, m, a, n
        // if (firstCharacter === "R"){
        //     console.log(firstCharacter);
        //     console.log("Case RRR");
        // } else if (firstCharacter == "R"){
        //     console.log(firstCharacter);
        //     console.log("Case RR");
        // } else {
        //     console.log("Case ELSE!!");
        // }
        // console.log("====");
        
        
        
        switch(firstCharacter){
            case "R":
                console.log("case R");
                rScore += score;
                break;
            case "T":
                console.log("case T");
                tScore += score;
                break;
                //
            case "C":
                console.log("case C");
                cScore += score;
                break;
            case "F":
                console.log("case F");
                fScore += score;
                break;
                //
            case "J":
                console.log("case J");
                jScore += score;
                break;
            case "M":
                console.log("case M");
                mScore += score;
                break;
                //
            case "A":
                console.log("case A");
                aScore += score;
                break;
            case "N":
                console.log("case N");
                nScore += score;
                break;
                //
            default:
                console.log("default!!");
        }
        
        // r, t, c, f, j, m, a, n
        switch(secondCharacter){
            case "R":
                console.log("case R");
                rScore += score;
                break;
            case "T":
                console.log("case T");
                tScore += score;
                break;
                //
            case "C":
                console.log("case C");
                cScore += score;
                break;
            case "F":
                console.log("case F");
                fScore += score;
                break;
                //
            case "J":
                console.log("case J");
                jScore += score;
                break;
            case "M":
                console.log("case M");
                mScore += score;
                break;
                //
            case "A":
                console.log("case A");
                aScore += score;
                break;
            case "N":
                console.log("case N");
                nScore += score;
                break;
                //
            default:
                console.log("default!!");
        }
    }
    
    // 출력 예시
    // "TCMA"
    
    console.log(rScore);
    console.log(tScore);
    console.log(cScore);
    console.log(fScore);
    console.log(jScore);
    console.log(mScore);
    console.log(aScore);
    console.log(nScore);
    
    if (rScore > tScore)
        answer += 'R';
    else if (rScore < tScore)
        answer += 'T';
    else
        answer += 'R';
    //
    if (cScore > fScore)
        answer += 'C';
    else if (cScore < fScore)
        answer += 'F';
    else
        answer += 'C';
    //
    if (jScore > mScore)
        answer += 'J';
    else if (jScore < mScore)
        answer += 'M';
    else
        answer += 'J';
    //
    if (aScore > nScore)
        answer += 'A';
    else if (aScore < nScore)
        answer += 'N';
    else
        answer += 'A';
    //
    return answer;
}