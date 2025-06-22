import dayjs from 'dayjs';

export function formatDate(input: string): string {
  return dayjs(input).format('DD/MM/YYYY HH:mm');
}
