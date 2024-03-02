const PaymentsAdd = (props: PaymentsAddProps) : JSX.Element => {
    return <>
        <h2>This is the payments add page</h2>
        <p>Data will be obtained from {props.serverUrl}</p>
    </>
}

export default PaymentsAdd;


export type PaymentsAddProps = {
    serverUrl : string
}