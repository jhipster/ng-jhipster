import {OrderByPipe} from '../../src/pipe/order-by.pipe';

describe('orderBy Tests', () => {

    let value = ['Banana', 'Orange', 'Apple', 'Mango', 'Lemon'];
    let predicate: '';
    let pipe: OrderByPipe;
    beforeEach(() => {
        pipe = new OrderByPipe();
    });

    it('Should order an array whith the predicate', () => {
        let result = pipe.transform(value, predicate , false);

        expect(result).toEqual(['Lemon', 'Mango', 'Apple', 'Orange', 'Banana']);
    });
});

