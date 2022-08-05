import { parseISO, format } from 'date-fns';

export const Date = ({ dateString }: { dateString: string }) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'yyyy年MM月dd日')}</time>;
}