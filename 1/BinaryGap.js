function solution(N) {
    let _tmp = N.toString(2).split("1");
    let res = 0;
    for(let idx = 0; idx < _tmp.length - 1; idx++) {
        if(_tmp[idx].length !== 0 && res < _tmp[idx].length) {
            res = _tmp[idx].length
        }
    }
    return res;
}