function solution(A, K) {
    let _arr_length = A.length;
    K %= _arr_length;
    if( K === 0 || _arr_length === 1) {
        return A;
    }
    let _tmp = A.slice(-K);
    return _tmp.concat(A).slice(0, -K);
}
