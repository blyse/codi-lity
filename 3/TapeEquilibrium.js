function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result;
    const reducer = (acc, curr) =>  acc + curr ;
    let total = A.reduce(reducer);
    let start = 0;

    for(let idx = 0; idx < A.length - 1; idx++) {
        start += A[idx]

        let back = total - A[idx];
        let diff = Math.abs(start - back)
        if(idx === 0 || result > diff) {
            result = diff;
        }
        total -= A[idx];
    }

    return result;
}

function before_solution(A) {
    let result;
    let position = 1;
    const reducer = (acc, curr) =>  acc + curr ;
    for(elem of A) {
        if(position === A.length ) {
            continue;
        }

        let front = A.slice(0, position).reduce(reducer);
        let back = A.slice(position).reduce(reducer);
        let diff = Math.abs(front - back);
        if(position === 1) {
            result = diff;
        }
        if(result > diff) {
            result = diff;
        }
        position++;
    }

    return result;
}