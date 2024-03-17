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


export interface ITabsStat{
    _id: number,
    date: string,
    value: number
}

export const TabsRevenue:Array<ITabsStat> = [
    { _id: 1, date: "2024-01-01", value: 100 },
    { _id: 2, date: "2024-01-02", value: 150 },
    { _id: 3, date: "2024-01-03", value: 200 },
    { _id: 4, date: "2024-01-04", value: 180 },
    { _id: 5, date: "2024-01-05", value: 220 },
    { _id: 6, date: "2024-01-06", value: 300 },
    { _id: 7, date: "2024-01-07", value: 250 },
    { _id: 8, date: "2024-01-08", value: 280 },
    { _id: 9, date: "2024-01-09", value: 320 },
    { _id: 10, date: "2024-01-10", value: 400 },
    { _id: 11, date: "2024-01-11", value: 350 },
    { _id: 12, date: "2024-01-12", value: 380 },
    { _id: 13, date: "2024-01-13", value: 420 },
    { _id: 14, date: "2024-01-14", value: 450 },
    { _id: 15, date: "2024-01-15", value: 201 },
    { _id: 16, date: "2024-01-16", value: 392 },
    { _id: 17, date: "2024-01-17", value: 482 },
    { _id: 18, date: "2024-01-18", value: 210 },
    { _id: 19, date: "2024-01-19", value: 392 },
    { _id: 20, date: "2024-01-20", value: 192 },
    { _id: 21, date: "2024-01-21", value: 482 },
    { _id: 22, date: "2024-01-22", value: 421 },
    { _id: 23, date: "2024-01-23", value: 204 },
    { _id: 24, date: "2024-01-24", value: 392 },
    { _id: 25, date: "2024-01-25", value: 343 },
]

export const TabsUsers:Array<ITabsStat> = [
    { _id: 1, date: "2024-01-01", value: 200 },
    { _id: 2, date: "2024-01-02", value: 350 },
    { _id: 3, date: "2024-01-03", value: 400 },
    { _id: 4, date: "2024-01-04", value: 240 },
    { _id: 5, date: "2024-01-05", value: 431 },
    { _id: 6, date: "2024-01-06", value: 521 },
    { _id: 7, date: "2024-01-07", value: 432 },
    { _id: 8, date: "2024-01-08", value: 143 },
    { _id: 9, date: "2024-01-09", value: 523 },
    { _id: 10, date: "2024-01-10", value: 325 },
    { _id: 11, date: "2024-01-11", value: 334 },
    { _id: 12, date: "2024-01-12", value: 432 },
    { _id: 13, date: "2024-01-13", value: 432 },
    { _id: 14, date: "2024-01-14", value: 532 },
    { _id: 15, date: "2024-01-15", value: 432 },
    { _id: 16, date: "2024-01-16", value: 432 },
    { _id: 17, date: "2024-01-17", value: 542 },
    { _id: 18, date: "2024-01-18", value: 525 },
    { _id: 19, date: "2024-01-19", value: 527 },
    { _id: 20, date: "2024-01-20", value: 257 },
    { _id: 21, date: "2024-01-21", value: 647 },
    { _id: 22, date: "2024-01-22", value: 254 },
    { _id: 23, date: "2024-01-23", value: 237 },
    { _id: 24, date: "2024-01-24", value: 283 },
    { _id: 25, date: "2024-01-25", value: 589 },
]


export const TabsDeals:Array<ITabsStat> = [
    { _id: 1, date: "2024-01-01", value: 673 },
    { _id: 2, date: "2024-01-02", value: 573 },
    { _id: 3, date: "2024-01-03", value: 482 },
    { _id: 4, date: "2024-01-04", value: 429 },
    { _id: 5, date: "2024-01-05", value: 957 },
    { _id: 6, date: "2024-01-06", value: 331 },
    { _id: 7, date: "2024-01-07", value: 382 },
    { _id: 8, date: "2024-01-08", value: 949 },
    { _id: 9, date: "2024-01-09", value: 248 },
    { _id: 10, date: "2024-01-10", value: 329 },
    { _id: 11, date: "2024-01-11", value: 839 },
    { _id: 12, date: "2024-01-12", value: 235 },
    { _id: 13, date: "2024-01-13", value: 653 },
    { _id: 14, date: "2024-01-14", value: 385 },
    { _id: 15, date: "2024-01-15", value: 758 },
    { _id: 16, date: "2024-01-16", value: 372 },
    { _id: 17, date: "2024-01-17", value: 832 },
    { _id: 18, date: "2024-01-18", value: 389 },
    { _id: 19, date: "2024-01-19", value: 320 },
    { _id: 20, date: "2024-01-20", value: 392 },
    { _id: 21, date: "2024-01-21", value: 939 },
    { _id: 22, date: "2024-01-22", value: 930 },
    { _id: 23, date: "2024-01-23", value: 385 },
    { _id: 24, date: "2024-01-24", value: 589 },
    { _id: 25, date: "2024-01-25", value: 382 },
]


export const TabsProfit:Array<ITabsStat> = [
    { _id: 1, date: "2024-01-01", value: 663 },
    { _id: 2, date: "2024-01-02", value: 621 },
    { _id: 3, date: "2024-01-03", value: 625 },
    { _id: 4, date: "2024-01-04", value: 472 },
    { _id: 5, date: "2024-01-05", value: 281 },
    { _id: 6, date: "2024-01-06", value: 482 },
    { _id: 7, date: "2024-01-07", value: 563 },
    { _id: 8, date: "2024-01-08", value: 452 },
    { _id: 9, date: "2024-01-09", value: 421 },
    { _id: 10, date: "2024-01-10", value: 563 },
    { _id: 11, date: "2024-01-11", value: 527 },
    { _id: 12, date: "2024-01-12", value: 683 },
    { _id: 13, date: "2024-01-13", value: 630 },
    { _id: 14, date: "2024-01-14", value: 742 },
    { _id: 15, date: "2024-01-15", value: 756 },
    { _id: 16, date: "2024-01-16", value: 789 },
    { _id: 17, date: "2024-01-17", value: 583 },
    { _id: 18, date: "2024-01-18", value: 430 },
    { _id: 19, date: "2024-01-19", value: 579 },
    { _id: 20, date: "2024-01-20", value: 562 },
    { _id: 21, date: "2024-01-21", value: 562 },
    { _id: 22, date: "2024-01-22", value: 482 },
    { _id: 23, date: "2024-01-23", value: 893 },
    { _id: 24, date: "2024-01-24", value: 573 },
    { _id: 25, date: "2024-01-25", value: 837 },
]

export interface IMostLeads {
    _id: number,
    title: string,
    value: number,
    color: string,
    icon: string
}

export const MostLeadsData:Array<IMostLeads> = [
    { _id: 1, title: "Email", value: 5200, color:"#44b2f2", icon: "fa-regular fa-envelope" },
    { _id: 2, title: "Social", value: 5623, color:"#3b82f6", icon: "fa-solid fa-user-group" },
    { _id: 3, title: "Call", value: 2535, color:"#f5803e", icon: "fa-solid fa-phone" },
    { _id: 4, title: "Other", value: 1256, color:"#3788d8", icon: "fa-solid fa-otter" },
]