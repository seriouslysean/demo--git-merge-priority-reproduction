// Definitely do not need `dayjs` for this, but I needed a library for the versions :)
import dayjs from 'dayjs';

export const isHalloween = () => {
    const now = dayjs();
    const isOctober = now.month() === 9;
    const is31st = now.date() === 31;
    return isOctober && is31st;
}
