import { parseISO, format } from 'date-fns';

type Props = {
    dateString: string
}

const Date = ({ dateString }: Props) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'yyyy年MM月dd日')}</time>;
}

export default Date