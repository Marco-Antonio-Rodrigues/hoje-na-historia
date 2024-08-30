import { formatDateToBrazilianFormat } from './formatDateToBrazilianFormat';

describe('formatDateToBrazilianFormat', () => {
    test('should format a date correctly for January', () => {
        const date = new Date(2024, 0, 1); // 1st January 2024
        const formattedDate = formatDateToBrazilianFormat(date);
        expect(formattedDate).toBe('1 de Janeiro de 2024');
    });

    test('should format a date correctly for August', () => {
        const date = new Date(2024, 7, 25); // 25th August 2024
        const formattedDate = formatDateToBrazilianFormat(date);
        expect(formattedDate).toBe('25 de Agosto de 2024');
    });

    test('should format a date correctly for December', () => {
        const date = new Date(2023, 11, 31); // 31st December 2023
        const formattedDate = formatDateToBrazilianFormat(date);
        expect(formattedDate).toBe('31 de Dezembro de 2023');
    });

    test('should format a date correctly for a single-digit day', () => {
        const date = new Date(2024, 3, 5); // 5th April 2024
        const formattedDate = formatDateToBrazilianFormat(date);
        expect(formattedDate).toBe('5 de Abril de 2024');
    });
});
