import { sum2numbers } from '../utils';
describe('This is just a simple starting point for this workshop', () => {
    it('this should sum two numbers', () => {
        const result = sum2numbers(1, 2);
        expect(result).toBe(3);
    })
})