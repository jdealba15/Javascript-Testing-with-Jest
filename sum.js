function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeOut(() => resolve('peanut butter'), 1000)
    });
}

module.exports = fetchPromise;