// ...arr은 배열의 모든 요소를 전개하는 전개 문법입니다.
// Math.min() 메서드는 배열의 모든 요소 중 최소값을 반환합니다.
// indexOf() 메서드는 배열에서 특정 값을 찾고 그 값의 인덱스를 반환합니다.
// splice() 메서드는 배열의 일부를 삭제하거나 삽입하는 데 사용됩니다.

function solution(arr) {
    
    arr.splice(arr.indexOf(Math.min(...arr)),1);  
    
    if (arr.length === 0)
        arr[0] = -1;
     
    return arr;
}