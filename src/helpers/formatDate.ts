import { format } from 'date-fns';

const dateFormat = 'dd MMM yyy';

export const formatDate = (date: string) => format(new Date(date), dateFormat);
