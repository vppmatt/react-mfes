import { useNavigate, useParams } from "react-router-dom";
import Search from "./Search/Search"
import Transactions from "./Transactions/Transactions";
import {useState} from "react";
import { PaymentsListProps } from "./indexPaymentsList";

const FindTransactionPage = (props: PaymentsListProps) => {

    const params = useParams();

    const [searchTerm, setSearchTerm] = useState<string>(params.orderId ? params.orderId : "");

    const navigate = useNavigate();

    const applySearchTerm = (searchTerm : string) : void => {
        setSearchTerm(searchTerm);
        navigate(`/find/${searchTerm}`);
        props.onNavigate(`/find/${searchTerm}`)
    }

    return (
        <div>
                <Search initialSearchTerm={searchTerm} setSearchTerm={applySearchTerm} />
                <Transactions searchTerm={searchTerm} serverUrl={props.serverUrl} onNavigate={props.onNavigate} />
        </div>
    );
}

export default FindTransactionPage;
