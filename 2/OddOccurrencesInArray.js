function before_solution(A) { // big random test n=999,999 =>  TIMEOUT ERROR, running time: 2.160 sec., time limit: 1.488 sec.
    // write your code in JavaScript (Node.js 8.9.4)
    let _tmp = {};
    for(elem of A) {
        if(!_tmp.hasOwnProperty(elem)) {
            _tmp[elem] = 0;
        }
        _tmp[elem] += 1;
    }

    for(elem in _tmp) {
        if(_tmp[elem] % 2 === 1) {
            return parseInt(elem);
        }

    }
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result;
    for(elem of A) {
        result ^= elem
    }
    return result;
}