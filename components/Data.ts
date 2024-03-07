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


export interface IPaymentItem{
    id: number,
    bank: string,
    title: string,
    date: string,
    time: string,
    amount: number,
    currency: string
}

export const allPayments: Array<IPaymentItem> = [
    {
        id: 1,
        bank: "paypal",
        title: "Deposit PayPal",
        date: "2024-03-03",
        time: "10:10",
        amount: 2000,
        currency: "EUR"
    },
    {
        id: 2,
        bank: "apple-pay",
        title: "Deposit ApplePay",
        date: "2024-03-05",
        time: "12:38",
        amount: 1500,
        currency: "USD"
    },
    {
        id: 3,
        bank: "google-pay",
        title: "Deposit GooglePay",
        date: "2024-03-06",
        time: "13:29",
        amount: 300,
        currency: "JPY"
    },
    {
        id: 4,
        bank: "paypal",
        title: "Deposit PayPal",
        date: "2024-03-04",
        time: "11:54",
        amount: 2000,
        currency: "EUR"
    },
    {
        id: 5,
        bank: "amazon-pay",
        title: "Deposit AmazonPay",
        date: "2024-03-07",
        time: "14:36",
        amount: 250,
        currency: "CAD"
    }
]


export interface ISingleRecentActivity{
    id: number,
    country: string,
    percentage: number,
    color: string,
}

export const allRecentActivities:Array<ISingleRecentActivity> = [
    {
        id: 1,
        country: 'USA',
        percentage: 43,
        color: '#f2444a'
    },
    {
        id: 2,
        country: 'Germany',
        percentage: 20,
        color: '#c444f2'
    },
    {
        id: 3,
        country: 'France',
        percentage: 12,
        color: '#44b2f2'
    },
    {
        id: 4,
        country: 'Canada',
        percentage: 5,
        color: '#44f28c'
    },
    {
        id:5,
        country: 'Japan',
        percentage: 2,
        color: '#d5f244'
    },
    {
        id: 6,
        country: 'Poland',
        percentage: 18,
        color: '#f29e44'
    }
]


export interface IBrowserVisitors {
    id: string,
    browser: string,
    visitors: number
}

export const allVisitorsByBrowser: Array<IBrowserVisitors> = [
    {
        id: '1',
        browser: 'Google',
        visitors: 1583
    },
    {
        id: '2',
        browser: 'Safari',
        visitors: 1204
    },
    {
        id: '3',
        browser: 'Opera',
        visitors: 1120,
    },
    {
        id: '4',
        browser: 'Yandex',
        visitors: 752
    },
    {
        id: '5',
        browser: 'FireFox',
        visitors: 339
    },
    {
        id: '6',
        browser: 'Edge',
        visitors: 995
    }
] 


export interface IMedia {
    id: string,
    name: string,
    description: string,
    color: string,
    icon: string,
    date: string,
    time: string,
    companyTitle: string,
    companySubtitle: string,
    status: 'Active' | 'Ending' | 'Closed' | 'Posed'
}

export const allSocialMedia: Array<IMedia> = [
    {
        id: "1",
        name: "Facebook",
        description: "Summer Campain",
        color: "#7799ff",
        icon: "facebook-f",
        date: "2024-03-05",
        time: "10:00 AM",
        companyTitle: "Facebook Inc.",
        companySubtitle: "Connecting People",
        status: "Active"
    },
    {
        id: "2",
        name: "Twitter",
        description: "Unique Watch",
        color: "#56d5ff",
        icon: "twitter",
        date: "2024-03-05",
        time: "11:30 AM",
        companyTitle: "Twitter",
        companySubtitle: "What's happening?",
        status: "Active"
    },
    {
        id: "3",
        name: "Instagram",
        description: "Released Single",
        color: "#ff72c2",
        icon: "instagram",
        date: "2024-03-05",
        time: "1:00 PM",
        companyTitle: "Instagram",
        companySubtitle: "Bringing closer",
        status: "Closed"
    },
    {
        id: "4",
        name: "LinkedIn",
        color: "#0077b5",
        icon: "linkedin-in",
        date: "2024-03-05",
        description: 'Jobs',
        time: "2:30 PM",
        companyTitle: "LinkedIn",
        companySubtitle: "Connecting the world",
        status: "Ending"
    },
    {
        id: "5",
        name: "YouTube",
        color: "#ff7171",
        icon: "youtube",
        description: 'Premier',
        date: "2024-03-05",
        time: "4:00 PM",
        companyTitle: "YouTube",
        companySubtitle: "Broadcast Yourself",
        status: "Posed"
    }
];


export const AllMonths: Array<string> = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];