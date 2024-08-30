import { parseHistoricalEvent } from './parseHistoricalEvent'

describe('parseHistoricalEvent', () => {
    test('should parse a valid historical event string', () => {
        const eventString = "<b>[1/1/1945]</b> • A França é admitida às Nações Unidas.";
        const parsedEvent = parseHistoricalEvent(eventString);
        
        expect(parsedEvent.date).toEqual(new Date(1945, 0, 1)); // Janeiro é 0 em JS
        expect(parsedEvent.phrase).toBe("A França é admitida às Nações Unidas.");
    });

    test('should parse another valid historical event string', () => {
        const eventString = "<b>[15/8/1947]</b> • A Índia se torna independente do domínio britânico.";
        const parsedEvent = parseHistoricalEvent(eventString);
        
        expect(parsedEvent.date).toEqual(new Date(1947, 7, 15)); // Agosto é 7 em JS
        expect(parsedEvent.phrase).toBe("A Índia se torna independente do domínio britânico.");
    });

    test('should throw an error for an invalid event string', () => {
        const invalidEventString = "This is not a valid event string";
        
        expect(() => parseHistoricalEvent(invalidEventString)).toThrow("Invalid event string format");
    });

    test('should throw an error for a string with an invalid date format', () => {
        const invalidDateString = "<b>[32/13/1945]</b> • Invalid date format.";
        
        expect(() => parseHistoricalEvent(invalidDateString)).toThrow("Invalid event string format");
    });

    test('should parse a valid historical event with single-digit day and month', () => {
        const eventString = "<b>[5/7/1962]</b> • A Argelia declara independência da França.";
        const parsedEvent = parseHistoricalEvent(eventString);
        
        expect(parsedEvent.date).toEqual(new Date(1962, 6, 5)); // Julho é 6 em JS
        expect(parsedEvent.phrase).toBe("A Argelia declara independência da França.");
    });
});
