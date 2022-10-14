import { vi, test, beforeEach, describe, expect } from 'vitest';

import { isIsHalloween } from './utils';

describe('isItHalloween', () => {

    beforeEach(() => {
        vi.useFakeTimers();
    });

    test('should know it is not halloween', () => {
        const date = new Date(2021, 9, 13);
        vi.setSystemTime(date);
        expect(isIsHalloween()).toBe(false);
    });

    test('should know it is halloween', () => {
        const date = new Date(2021, 9, 31);
        vi.setSystemTime(date);
        expect(isIsHalloween()).toBe(true);
    });

    test('should know it is halloween regardless of year', () => {
        const date = new Date(1900, 9, 31);
        vi.setSystemTime(date);
        expect(isIsHalloween()).toBe(true);
    });

});
