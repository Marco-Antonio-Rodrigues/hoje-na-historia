import { getTodayEvent } from './path-to-your-function';
import { HistoricalEvents } from '@/types/historicalEvents';

describe('getTodayEvent', () => {
    test('should return a historical event for today\'s date', () => {
        const today = new Date();
        const dateKey = `${today.getMonth() + 1}-${today.getDate()}`;
        
        const historicalEvents: HistoricalEvents = {
            [dateKey]: [
                "<b>[1/1/1502]</b> • Event 1",
                "<b>[1/1/1764]</b> • Event 2"
            ]
        };
        
        const event = getTodayEvent(historicalEvents);
        expect(historicalEvents[dateKey]).toContain(event);
    });

    test('should return a message if no historical event is found for today', () => {
        const historicalEvents: HistoricalEvents = {
            "8-15": ["<b>[8/15/1945]</b> • Event 1"]
        };
        
        const event = getTodayEvent(historicalEvents);
        expect(event).toBe("No historical event found for today.");
    });

    test('should handle leap year dates correctly', () => {
        const historicalEvents: HistoricalEvents = {
            "2-29": ["<b>[2/29/2020]</b> • Leap Year Event"]
        };

        const today = new Date();
        const isLeapYear = today.getFullYear() % 4 === 0 && (today.getFullYear() % 100 !== 0 || today.getFullYear() % 400 === 0);
        const isFeb29 = today.getMonth() + 1 === 2 && today.getDate() === 29;

        if (isLeapYear && isFeb29) {
            const event = getTodayEvent(historicalEvents);
            expect(event).toBe("<b>[2/29/2020]</b> • Leap Year Event");
        } else {
            const event = getTodayEvent(historicalEvents);
            expect(event).toBe("No historical event found for today.");
        }
    });

    test('should randomly select an event if multiple events are available', () => {
        const today = new Date();
        const dateKey = `${today.getMonth() + 1}-${today.getDate()}`;

        const historicalEvents: HistoricalEvents = {
            [dateKey]: [
                "<b>[1/1/1502]</b> • Event 1",
                "<b>[1/1/1764]</b> • Event 2",
                "<b>[1/1/1900]</b> • Event 3"
            ]
        };

        const event = getTodayEvent(historicalEvents);
        expect(historicalEvents[dateKey]).toContain(event);
    });
});
