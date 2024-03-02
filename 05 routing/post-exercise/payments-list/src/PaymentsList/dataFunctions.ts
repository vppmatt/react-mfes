import axios, { AxiosResponse } from "axios";

export type PaymentType =
    {id: number | null,
    amount: number,
        country: string,
        currency: string,
        date: string,
        orderId: string,
        taxCode: number,
        taxRate: number,
        type: string}

        export const getAllPaymentsForCountry = (country: string, serverURL: string) : Promise<AxiosResponse<PaymentType[]>> => {
            const transactionsPromise = axios<PaymentType[]>({url : `${serverURL}/api/payment?country=${country}`, method: "GET", headers : {'Accept': 'application/json'} });
            return transactionsPromise;
        }
        
        export const getCountries = (serverURL: string) : Promise<AxiosResponse<string[]>> => {
            return axios<string[]>({url : `${serverURL}/api/country`, method: "GET", headers : {'Accept': 'application/json'} });
        }
        
        
        
        export const getAllPaymentsForOrderId = (orderId: string, serverURL: string) : Promise<AxiosResponse<PaymentType[]>> => {
            const transactionsPromise = axios<PaymentType[]>({url : `${serverURL}/api/payment?order=${orderId}`, method: "GET", headers : {'Accept': 'application/json'} });
            return transactionsPromise;
        }
        
        