export interface IGroupedBarGraph {
    label: string;
    income: number;
    expenses: number;
}

export class GroupedBarGraph implements IGroupedBarGraph {
    label: string;
    income: number;
    expenses: number;

    constructor(label: string, income: number, expenses: number){
        this.label = label;
        this.income = income;
        this.expenses = expenses;
    }
}
