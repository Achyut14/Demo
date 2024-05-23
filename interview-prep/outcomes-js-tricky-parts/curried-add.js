function curriedAdd(total = 0) {
    return function(next) {
        if (next === undefined) {
            return total;
        }
        return curriedAdd(total + next);
    };
}

module.exports = { curriedAdd };