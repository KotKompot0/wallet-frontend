export interface ITransactionHistoryItem {
    type: string;
    title: string;
    text: string;
    sum: string;
}

export class TransactionHistoryItem implements ITransactionHistoryItem {
    type: string;
    title: string;
    text: string;
    sum: string;
    constructor(type: string, title: string, text: string, sum: string){
        this.type = type;
        this.title = title;
        this.text = text;
        this.sum = sum;
    }
}
