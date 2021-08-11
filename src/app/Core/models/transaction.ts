import { TransactionType } from '../enums';

export interface Transaction {
    id: number;
    items: TransactionItem[];
    cashflow: number;
    date: Date;
}

export interface TransactionItem {
    id: number;
    icon: string;
    title: string;
    type: TransactionType;
    date: Date;
    total: number;
}