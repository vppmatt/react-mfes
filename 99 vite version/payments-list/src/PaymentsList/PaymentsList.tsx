import { PaymentsListProps } from "./indexPaymentsList";



const PaymentsList = (props: PaymentsListProps) : JSX.Element => {

    //to navigate to a new URL call props.onNavigate(newUrl)
    //when the container changes the url, we'll need to monitor searchParams / urlSearchParams
    
    return <>
    <h2>This is the payments list</h2>
    <p>Data will be obtained from {props.serverUrl}</p>
    </>
}

export default PaymentsList;

