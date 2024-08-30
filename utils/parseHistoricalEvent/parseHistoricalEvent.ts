/**
 * Parses a historical event string and extracts the date and phrase.
 *
 * @param eventString - A string representing a historical event, formatted as "[DD/MM/YYYY] • Event description".
 * @returns An object containing the extracted Date and the event description.
 *
 * @throws Will throw an error if the event string is not in the expected format.
 *
 * @example
 * ```typescript
 * const eventString = "<b>[1/1/1945]</b> • A França é admitida às Nações Unidas.";
 * const parsedEvent = parseHistoricalEvent(eventString);
 * console.log(parsedEvent.date); // Outputs: Mon Jan 01 1945
 * console.log(parsedEvent.phrase); // Outputs: "A França é admitida às Nações Unidas."
 * ```
 */
export function parseHistoricalEvent(eventString:string):{date: Date, phrase:string} {

    const datePattern = /\[([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})\]/;
    const dateMatch = eventString.match(datePattern);
    console.log(dateMatch)
    if (dateMatch) {
        const day = parseInt(dateMatch[1], 10);
        const month = parseInt(dateMatch[2], 10) - 1; // Mês é indexado a partir de 0 em JavaScript
        const year = parseInt(dateMatch[3], 10);

        const eventDate = new Date(year, month, day);
        // Extraindo a frase após o símbolo "•"
        const eventPhrase = eventString.split('•')[1].trim();

        return {
            date: eventDate,
            phrase: eventPhrase
        };
    } else {
        throw new Error("Invalid event string format");
    }
}