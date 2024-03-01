import { IStat } from "./Dashboard/StatList";

export const revenueData = [
    { id: 1, date: '2024-01-01', revenue: 1000 },
    { id: 2, date: '2024-01-02', revenue: 1200 },
    { id: 3, date: '2024-01-03', revenue: 1500 },
    { id: 4, date: '2024-01-04', revenue: 1300 },
    { id: 5, date: '2024-01-05', revenue: 1100 },
    { id: 6, date: '2024-01-06', revenue: 1400 },
    { id: 7, date: '2024-01-07', revenue: 1600 },
    { id: 8, date: '2024-01-08', revenue: 1800 },
    { id: 9, date: '2024-01-09', revenue: 1700 },
    { id: 10, date: '2024-01-10', revenue: 2000 }
];


export const statsData:Array<IStat> = [
    {
        title: 'Revenue',
        subtitle: 'Today',
        body: '$35000',
        color: '#5c8def',
        percentage: 95
    },
    {
        title: 'Orders',
        subtitle: 'This Week',
        body: '35000',
        color: '#f5c05b',
        percentage: 64
    },
    {
        title: 'Leads',
        subtitle: 'This Month',
        body: '$50000',
        color: '#7be0a2',
        percentage: 75
    },
    {
        title: 'Lead Conversion Rate',
        subtitle: 'Anual',
        body: '50 %',
        color: '#9274e6',
        percentage: 85
    }
]

export interface ICurrency{
    name: string,
    value: string
}

export const allCurrences: Array<ICurrency> = [
    {
        name: 'US Dollar',
        value: 'USD'
    },
    {
        name: 'Euro',
        value: 'EUR'
    },
    {
        name: 'GB Pound',
        value: 'GBP'
    },
    {
        name: 'Japanse Yean',
        value: 'JPY'
    },
    {
        name: 'Australian Dollar',
        value: 'AUD'
    },
    {
        name: 'Canadian Dollar',
        value: 'CAD'
    }
]