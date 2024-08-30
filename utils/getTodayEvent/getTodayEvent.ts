import { HistoricalEvents } from '@/types/historicalEvents';

/**
 * Retrieves a random historical event for the current date.
 *
 * @param historicalEvents - An object containing arrays of historical events keyed by date strings in the format "M-D".
 * @returns A string representing a random historical event for the current date, or a message if no event is found.
 *
 * @example
 * ```typescript
 * const historicalEvents: HistoricalEvents = {
 *   "1-1": ["<b>[1/1/1502]</b> • Event 1", "<b>[1/1/1764]</b> • Event 2"],
 *   "8-30": ["<b>[8/30/1945]</b> • Event 3"]
 * };
 * const event = getTodayEvent(historicalEvents);
 * console.log(event); // Outputs a random event for today's date or "No historical event found for today."
 * ```
 */
export function getTodayEvent(historicalEvents:HistoricalEvents) {

    const today = new Date();
    const dateKey = `${today.getMonth()+ 1}-${today.getDate()}`;

    if (historicalEvents.hasOwnProperty(dateKey)) {
        const events = historicalEvents[dateKey];

        return events[Math.floor(Math.random() * events.length)];
    } else {
        return "No historical event found for today.";
    }
}