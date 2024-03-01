'use client'

import { ChangeEvent, useEffect, useState } from "react";
import InnerContainer from "../Containers/InnerContainer";
import axios from "axios";
import { allCurrences } from "../Data";



const CurrencyConverter = () => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const [money, setMoney] = useState<string>('')
    const [convertedMoney, setConvertedMoney] = useState<number>()
    const [convertFrom, setConvertFrom] = useState<string>('EUR')
    const [convertTo, setConvertTo] = useState<string>('USD')
    const [date, setDate] = useState<Date | null>(null)
    const [rates, setRates] = useState<any>()
    const [displayCurrences, setDisplayCurrences] = useState<boolean>(false)
    useEffect(() => {
        const today = new Date()
        setDate(today)
    }, [])

    const changeCurrencyBtn = (currValue: string) => setConvertFrom(currValue)

    useEffect(() => {
        axios.get('/api/currency/' + convertFrom,).then((res: any) => {
            const data = res.data
            console.log(data.conversion_rates)
            setRates(data.conversion_rates)
        })
    }, [convertFrom])

    useEffect(() => {
        try{
            setConvertedMoney(Number.parseInt(money) * rates[convertTo])
        }catch(e){
            setConvertedMoney(0)
        }
    }, [money, convertFrom, convertTo, rates])

    const renderedCurrences = allCurrences.map(curr => <button onClick={() => changeCurrencyBtn(curr.value)} className="bg-blue-50 rounded-xl px-3 py-1 text-md text-blue-500">{curr.name}</button>)

    return (
        <InnerContainer className="flex-grow">
            <h4 className='text-2xl text-slate-500 '>Currency Converter</h4>
            <hr className='my-4'/>
            <div className="flex items-center justify-between">
                <h4 className="text-4xl text-slate-600 font-semibold">1 {convertFrom}</h4>
                <button onClick={() => setDisplayCurrences(prev => !prev)} className="bg-blue-50 rounded-xl px-6 py-2 text-xl text-blue-500 flex items-center gap-2">{convertFrom} <i className={`fa-solid fa-angle-down ${displayCurrences ? 'rotate-180' : ''}`}></i></button>
            </div>
            <div className={`flex-wrap gap-2 mt-4 ${displayCurrences ? 'flex' : 'hidden'}`}>
                {/* <div className="bg-blue-50 rounded-xl px-3 py-1 text-md text-blue-500">Euro</div> */}
                { renderedCurrences }
            </div>
            {
                date ? 
                <div className="text-slate-500 text-sm mt-6 font-bold flex items-center gap-1">
                    <span>{date.getDate() < 10 ? "0" + date?.getDate() : date?.getDate()}</span>
                    <span>{month[date.getMonth()]}</span>
                    <span>{date.getHours()}:{date.getMinutes()}</span>
                    <span>UTC Declaration</span>
                </div>
                :
                <p>Date was not loaded...</p>
            }
            <input type="text" value={money} onChange={e => setMoney(e.target.value)} placeholder="1000" className="bg-blue-50 rounded-lg mt-6 p-4 w-full"/>
            <div className="flex items-center justify-between gap-2">
                <input value={convertedMoney} type="text" disabled={true} placeholder="1000" className="bg-blue-50 rounded-lg mt-6 p-4 w-[50%]"/>
                <select value={convertTo} onChange={e => setConvertTo(e.target.value)} className="bg-blue-50 rounded-lg mt-6 p-4 flex-grow">
                    <option value={"USD"}>USD</option>
                    <option value={"EUR"}>EUR</option>
                    <option value={"GBP"}>GBP</option>
                    <option value={"JPY"}>JPY</option>
                    <option value={"AUD"}>AUD</option>
                    <option value={"CAD"}>CAD</option>
                </select>
            </div>

        </InnerContainer>
    );
}
 
export default CurrencyConverter;