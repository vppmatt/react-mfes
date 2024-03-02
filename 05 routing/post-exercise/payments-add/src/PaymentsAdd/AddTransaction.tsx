import axios, { AxiosResponse } from "axios";
import "./AddTransaction.css";
import { ChangeEvent, FormEvent, useReducer, useState } from "react";

type PaymentType =
    {id: number | null,
    amount: number,
        country: string,
        currency: string,
        date: string,
        orderId: string,
        taxCode: number,
        taxRate: number,
        type: string}

export type AddTransactionProps = { serverUrl : string, onNavigate : (url : string) => void}

const AddTransaction = (props : AddTransactionProps): JSX.Element => {

  const initialNewTransactionState: PaymentType = {
    id : null,
    orderId: "",
    date: new Date().toISOString().slice(0, 10),
    amount: 0,
    country: "USA",
    currency: "USD",
    taxCode: 0,
    taxRate: 0.21,
    type: "SALE",
  };

  
const addNewTransaction = (payment: PaymentType) : Promise<AxiosResponse<PaymentType>> => {
  return axios<PaymentType>({url : `${props.serverUrl}/api/payment`,
      method: "POST",
      headers : {'Accept': 'application/json', 'Content-Type' : 'application/json'},
      data: payment});
}

  const [message, setMessage] = useState<string>("");

  const formReducer = (state: PaymentType, data: { field: string; value: any }): PaymentType => {
    return {...state, [data.field]: data.value};
  };

  const [newTransaction, dispatch] = useReducer(
    formReducer,
    initialNewTransactionState
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setMessage("saving");
    console.log(newTransaction);
    const response = addNewTransaction(newTransaction);
    response
      .then((result) => {
        if (result.status === 200) {
          props.onNavigate(`/find/${result.data.id}`);
        } else {
          setMessage("something went wrong - error code was " + result.status);
        }
      })
      .catch((error) => console.log("something went wrong ", error));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ field: event.target.id, value: event.target.value });
  };

  const { orderId, date, amount, country, currency, taxCode, taxRate, type } =
    newTransaction;

  return (
    <form className="addTransactionsForm" onSubmit={handleSubmit}>
      <h2>New transaction</h2>
      <label htmlFor="orderId">Order Id</label>
      <input type="text" id="orderId" value={orderId} onChange={handleChange} />
      <br />
      <label htmlFor="date">Date</label>
      <input type="date" id="date" value={date} onChange={handleChange} />
      <br />
      <label htmlFor="country">Country</label>
      <input type="text" id="country" value={country} onChange={handleChange} />
      <br />
      <label htmlFor="currency">Currency</label>
      <input type="text" id="currency" value={currency} onChange={handleChange} />
      <br />
      <label htmlFor="amount">Amount</label>
      <input type="text" id="amount" value={amount} onChange={handleChange} />
      <br />
      <label htmlFor="taxCode">Tax Code</label>
      <input type="text" id="taxCode" value={taxCode} onChange={handleChange} />
      <br />
      <label htmlFor="amount">Tax Rate</label>
      <input type="text" id="taxRate" value={taxRate} onChange={handleChange} />
      <br />
      <label htmlFor="type">Type</label>
      <input type="text" id="type" value={type} onChange={handleChange} />
      <br />
      <button type="submit">Save</button>
      <div className="addTransactionMessage">{message}</div>
    </form>
  );
};

export default AddTransaction;
