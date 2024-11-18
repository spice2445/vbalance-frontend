import numeral from 'numeral';

const DEFAULT_VALUE = '0';

export const defaultN = (value: null | number | string = 0) => {
    if(
        typeof value !== 'number' &&
        typeof value !== 'string'
    ) return DEFAULT_VALUE;

    if(+value < 0.01 && +value > 0) {
        return DEFAULT_VALUE;
    }

    return numeral(value).format('0,0[.][00]')
        .replace(/,/g, ' ');
};

// сколько я получу тикетов за x USDT
export const usdtToTickets = (usdt: number = 0) => usdt / +__PRICE_TICKET__;

// сколько я получу usdt за x Тикетов
export const ticketsToUsdt = (tickets: number = 0) => tickets * +__PRICE_TICKET__;

export const number = {
    defaultN,
    price: {
        usdtToTickets,
        ticketsToUsdt
    }
};