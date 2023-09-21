export interface IMonthlyStats {
    label: string;
    count: number;
}

export class MonthlyStats implements IMonthlyStats {
    label: string;
    count: number;

    constructor(
        label: string, 
        count: number, 
    ){
        this.label = label;
        this.count = count;
    }
}
