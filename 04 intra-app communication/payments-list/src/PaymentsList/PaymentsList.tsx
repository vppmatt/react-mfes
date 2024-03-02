const PaymentsList = (props: PaymentsListProps) : JSX.Element => {
    return <>
    <h2>This is the payments list</h2>
    <p>Data will be obtained from {props.serverUrl}</p>
    </>
}

export default PaymentsList;

export type PaymentsListProps = {
    serverUrl : string
}