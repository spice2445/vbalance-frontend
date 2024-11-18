
export interface autopurchaseVBTI {
    currentPriceToken: number,
    programs: {
        keyT:string,
        value: string
    }[],
    tokens: {
        vbti: number,
        usdt: number
    },
    openLimit: number,
}

export const AUTO_PURCHASE_MOCK: autopurchaseVBTI = {
    currentPriceToken: 2.38,
    programs: [
        {
            keyT: 'Накопительная программа',
            value: 'accumulation'
        }
    ],
    tokens: {
        vbti: 403,
        usdt: 624
    },
    openLimit: 10_000
};