function unroll(squareArray) {
    let result = [];

    while(squareArray.length > 0) {
        result.push(...squareArray.shift());

        squareArray.forEach(row => result.push(row.pop()));

        if (squareArray.length > 0) {
            result.push(...squareArray.pop().reverse());
        }

        for(let i = squareArray.length -1; i >=0; i--){
            if (squareArray[i].length > 0){
                result.push(squareArray[i].shift());
            }
        }
            
        }
        return result;
    }

module.exports = unroll;
