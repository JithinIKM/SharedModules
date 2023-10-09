import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { DATE_FORMAT } from 'pages/common/constants';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(utc);
dayjs.extend(customParseFormat);

export { dayjs };

export const dateDifference = (from = dayjs(), to = dayjs(), unit = 'day') => dayjs(from).diff(dayjs(to), unit);

export const dateToTimeStamp = (date) => {
  const parsedDate = dayjs(date, {
    format: DATE_FORMAT.DATE_TIME_GMT
  });
  const utcDate = parsedDate.utc();
  const timeStampInMillis = utcDate.valueOf();
  return timeStampInMillis;
};

export const convertToUTC = (date) => {
  const parsedDate = dayjs(date, {
    format: DATE_FORMAT.DATE_TIME_GMT
  });
  return parsedDate.utc();
};

export const formatDate = (date, format = DATE_FORMAT.DATE_LOCAL) => {
  const parsedDate = dayjs(date, {
    format: DATE_FORMAT.DATE_TIME_GMT
  });
  const formattedDate = parsedDate.format(format);
  return formattedDate;
};
