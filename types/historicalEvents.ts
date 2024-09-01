export type HistoricalEvents = {
    [dateKey: string]: string[];
};

export type HistoricalEvent = {
    date: Date;
    event: string;
}
