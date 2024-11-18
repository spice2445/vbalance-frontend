// import {  } from 'i18next';
import { UTCTimestamp } from 'lightweight-charts';

const monthNames = [
    ('январь'),
    ('февраль'),
    ('март'),
    ('апрель'),
    ('май'),
    ('июнь'),
    ('июль'),
    ('август'),
    ('сентябрь'),
    ('ноябрь'),
    ('декабрь')
];


const padStart = (date: number) => date.toString().padStart(2, '0');
const getFullYear = (date: Date) => padStart(date.getFullYear());
const getMonthIndex = (date: Date) => padStart(date.getMonth() + 1);
const getDay = (date: Date) => padStart(date.getDate());
const getHours = (date: Date) => padStart(date.getHours());
const getMinutes = (date: Date) => padStart(date.getMinutes());

function dateAndTime(unixTimestamp: UTCTimestamp | number = 0): [string, string] {
    const date = new Date(unixTimestamp);
    const day = getDay(date);
    const month = getMonthIndex(date);
    const year = getFullYear(date);
    const hours = getHours(date);
    const minutes = getMinutes(date);
  
    return [`${day}.${month}.${year}`, `${hours}:${minutes}`];
}

function defaultDate(unixTimestamp: number = 0): string {
    const date = new Date(unixTimestamp * 1000);
    const day = getDay(date);
    const month = date.getMonth();
    const year = getFullYear(date);
  
    return `${day} ${monthNames[month]} ${year}`;
}

function hoursAndMinutes(unixTimestamp: number = 0): string {
    const date = new Date(unixTimestamp);
    const hours = getHours(date);
    const minutes = getMinutes(date);
  
    return `${hours}:${minutes}`;
}

function weeks({
    from,
    finish
}: {from: number, finish: number} = { from:0, finish:0 }): string {
    const fromDate = new Date(from);
    const fromDay = getDay(fromDate);
    const fromMonth = getMonthIndex(fromDate);

    const finishDate = new Date(finish);
    const finishDay = getDay(finishDate);
    const finishMonth = getMonthIndex(finishDate);
  
    return `${fromDay}.${fromMonth} - ${finishDay}.${finishMonth}`;
}

export function datePlane(unixTimestamp: number = 0): [string | null, string] {
    const date = new Date(unixTimestamp);
    const today = getDay(date);
    const day = getDay(date);
    const currentMonth = date.getMonth();
    const month = date.getMonth();
    const hours = getHours(date);
    const minutes = getMinutes(date);


    return [
        today === day && currentMonth === month ? ('Сегодня') : 
            +today === +day - 1 && currentMonth === month ? ('Завтра') : 
            null, 
        `${day} ${monthNames[month]} ${('в')} ${hours}:${minutes} (UTC + 3)`
    ];
    // НУЖНО ЛИ ОТОБРАЖАТЬ UTC??
}

// 1:13:12 - 4392 
function durationHoursMinutes(seconds: number = 0): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours > 1 ? `${hours} ${('часа')}` : ''} ${minutes} ${('минут')}`;
}

export const timeCountdown = (seconds: number) => seconds <= 9 ? `0${seconds}` : seconds;

export const date = {
    dateAndTime,
    defaultDate,
    hoursAndMinutes,
    weeks,
    datePlane,
    durationHoursMinutes,
    timeCountdown
};