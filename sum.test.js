const fetchPromise = require('./sum')

test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolve.toBe('peanut butter');
}); 

test('the test fails with an error', () => {
    return expect(fetchPromise()).rejects.toThrow('error');
})