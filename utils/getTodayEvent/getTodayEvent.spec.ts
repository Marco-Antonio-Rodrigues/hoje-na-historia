import { getTodayEvent } from '../getTodayEvent';
import { HistoricalEvents } from '@/types/historicalEvents';

describe('getTodayEvent', () => {
    test('should return all historical events for today\'s date', () => {
        const today = new Date();
        const dateKey = `${today.getMonth() + 1}-${today.getDate()}`;
        
        const historicalEvents: HistoricalEvents = {
            [dateKey]: [
                "<b>[1/1/1502]</b> • Event 1",
                "<b>[1/1/1764]</b> • Event 2"
            ]
        };
        
        const events = getTodayEvent(historicalEvents);
        expect(events).toEqual(historicalEvents[dateKey]);
    });

    test('should return an empty array if no historical event is found for today', () => {
        const historicalEvents: HistoricalEvents = {
            "8-15": ["<b>[8/15/1945]</b> • Event 1"]
        };
        
        const events = getTodayEvent(historicalEvents);
        expect(events).toEqual(["No historical event found for today."]);
    });

    test('should handle leap year dates correctly', () => {
        const historicalEvents: HistoricalEvents = {
            "2-29": ["<b>[2/29/2020]</b> • Leap Year Event"]
        };

        const today = new Date();
        const isLeapYear = today.getFullYear() % 4 === 0 && (today.getFullYear() % 100 !== 0 || today.getFullYear() % 400 === 0);
        const isFeb29 = today.getMonth() + 1 === 2 && today.getDate() === 29;

        if (isLeapYear && isFeb29) {
            const events = getTodayEvent(historicalEvents);
            expect(events).toEqual(historicalEvents["2-29"]);
        } else {
            const events = getTodayEvent(historicalEvents);
            expect(events).toEqual(["No historical event found for today."]);
        }
    });

    test('should return all events if multiple events are available for today\'s date', () => {
        const today = new Date();
        const dateKey = `${today.getMonth() + 1}-${today.getDate()}`;

        const historicalEvents: HistoricalEvents = {
            [dateKey]: [
                "<b>[1/1/1502]</b> • Event 1",
                "<b>[1/1/1764]</b> • Event 2",
                "<b>[1/1/1900]</b> • Event 3"
            ]
        };

        const events = getTodayEvent(historicalEvents);
        expect(events).toEqual(historicalEvents[dateKey]);
    });
});
