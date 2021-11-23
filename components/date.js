import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = new parseISO(dateString);

    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
