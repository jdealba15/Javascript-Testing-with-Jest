const fetchPromise = require('./sum')

test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolve.toBe('peanut butter');
});