

describe('test matchers', function(){
    test('compare toBe and toEqual', function(){
        const nums = [3,4,5];
        const copy = [...nums];
        const nums2 = nums;

        expect(copy).toEqual(nums)
        expect(nums2).toBe(nums)
    })
    test('playing with toContain matcher', function(){
        const colors = ['red', 'orange']

        expect(colors).toContain('red')
    })

    test('playing with numeric matcher', function(){
        expect(7).toBeGreaterThanOrEqual(2)
    })
    test('playing with boolean matcher', function(){
        expect('hi').toBeTruthy();
        expect('').toBeFalsy();
    })

    test('playing with any', function(){
        const randNum = Math.random() * 6;
        expect(randNum).toEqual(expect.any(Number))
    })

    test('playing with not', function(){
        const numLives = 9;
        expect(numLives).not.toEqual(0);
    })
})