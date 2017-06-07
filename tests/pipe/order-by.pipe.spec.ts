/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import {OrderByPipe} from '../../src/pipe/order-by.pipe';

describe('OrderByPipe Tests', () => {
    let pipe: OrderByPipe;
    beforeEach(() => {
        pipe = new OrderByPipe();
    });

    it('Should order an array', () => {
        const value = ['Banana', 'Orange', 'Apple', 'Mango', 'Lemon'];
        let result = pipe.transform(value);

        expect(result).toEqual(['Apple', 'Banana', 'Lemon', 'Mango', 'Orange']);
    });

    it('Should order an array in reverse', () => {
        const value = ['Banana', 'Orange', 'Apple', 'Mango', 'Lemon'];
        let result = pipe.transform(value, '', true);

        expect(result).toEqual(['Apple', 'Banana', 'Lemon', 'Mango', 'Orange'].reverse());
    });

    it('Should order an array of objects with the predicate', () => {
        const value = [
            {
                name: 'Banana',
                order: 13
            },
            {
                name: 'Apple',
                order: 12
            },
            {
                name: 'Orange',
                order: 10
            },
            {
                name: 'Lemon',
                order: 11
            }
        ];
        let result = pipe.transform(value, 'name' , false);

        expect(result).toEqual([
            {
                name: 'Apple',
                order: 12
            },
            {
                name: 'Banana',
                order: 13
            },
            {
                name: 'Lemon',
                order: 11
            },
            {
                name: 'Orange',
                order: 10
            }
        ]);

        let result2 = pipe.transform(value, 'order' , true);

        expect(result2).toEqual([
            {
                name: 'Banana',
                order: 13
            },
            {
                name: 'Apple',
                order: 12
            },
            {
                name: 'Lemon',
                order: 11
            },
            {
                name: 'Orange',
                order: 10
            }
        ]);
    });
});
