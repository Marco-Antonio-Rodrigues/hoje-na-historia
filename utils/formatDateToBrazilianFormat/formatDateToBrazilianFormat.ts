/**
 * Formats a given Date object to a string in the Brazilian format "DD de MMMM de YYYY".
 *
 * @param date - The Date object to be formatted.
 * @returns A string representing the formatted date in the Brazilian format.
 *
 * @example
 * ```typescript
 * const date = new Date(2024, 7, 25); // 25th August 2024
 * const formattedDate = formatDateToBrazilianFormat(date);
 * console.log(formattedDate); // "25 de Agosto de 2024"
 * ```
 */
export function formatDateToBrazilianFormat(date: Date): string {
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} de ${month} de ${year}`;
}

