function solution(A) {
    if(A.length === 0) {
        return 1;
    } else if (A.length === 1) {
        if(A[0] === 1) {
            return 2;
        } else {
            return 1;
        }
    }
    let _tmp = {};

    A.sort((a, b) => {
        if(!_tmp.hasOwnProperty(a)) {
            _tmp[a] = 1;
        }
        if(!_tmp.hasOwnProperty(b)) {
            _tmp[b] = 1;
        }
    });

    for(let idx = 1; idx < A.length + 2; idx++) {
        if(!_tmp.hasOwnProperty(String(idx))) {
            return idx;
        }
    }
}