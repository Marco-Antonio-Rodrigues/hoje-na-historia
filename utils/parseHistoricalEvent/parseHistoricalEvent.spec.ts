import { parseHistoricalEvent } from './parseHistoricalEvent';

describe('parseHistoricalEvent', () => {
    test('should parse a list with one valid historical event string', () => {
        const eventStrings = ["<b>[1/1/1945]</b> • A França é admitida às Nações Unidas."];
        const parsedEvents = parseHistoricalEvent(eventStrings);
        
        expect(parsedEvents).toHaveLength(1);
        expect(parsedEvents[0].date).toEqual(new Date(1945, 0, 1)); // Janeiro é 0 em JS
        expect(parsedEvents[0].event).toBe("A França é admitida às Nações Unidas.");
    });

    test('should parse a list with multiple valid historical event strings', () => {
        const eventStrings = [
            "<b>[1/1/1945]</b> • A França é admitida às Nações Unidas.",
            "<b>[15/8/1947]</b> • A Índia se torna independente do domínio britânico."
        ];
        const parsedEvents = parseHistoricalEvent(eventStrings);
        
        expect(parsedEvents).toHaveLength(2);
        expect(parsedEvents[0].date).toEqual(new Date(1945, 0, 1)); // Janeiro é 0 em JS
        expect(parsedEvents[0].event).toBe("A França é admitida às Nações Unidas.");
        expect(parsedEvents[1].date).toEqual(new Date(1947, 7, 15)); // Agosto é 7 em JS
        expect(parsedEvents[1].event).toBe("A Índia se torna independente do domínio britânico.");
    });

    test('should throw an error for an invalid event string in the list', () => {
        const invalidEventStrings = ["This is not a valid event string"];
        
        expect(() => parseHistoricalEvent(invalidEventStrings)).toThrow("Invalid event string format");
    });

    test('should throw an error for a string with an invalid date format in the list', () => {
        const invalidDateStrings = ["<b>[32/13/1945]</b> • Invalid date format."];
        
        expect(() => parseHistoricalEvent(invalidDateStrings)).toThrow("Invalid event string format");
    });

    test('should parse a valid historical event with single-digit day and month', () => {
        const eventStrings = ["<b>[5/7/1962]</b> • A Argelia declara independência da França."];
        const parsedEvents = parseHistoricalEvent(eventStrings);
        
        expect(parsedEvents).toHaveLength(1);
        expect(parsedEvents[0].date).toEqual(new Date(1962, 6, 5)); // Julho é 6 em JS
        expect(parsedEvents[0].event).toBe("A Argelia declara independência da França.");
    });
});
