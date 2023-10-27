import Transaction from "./Transaction";
import { useSelector } from "react-redux";

const data = [
    {
        id: "0",
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance",
    },
    {
        id: "1",
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        description: "Available Balance",
    },
    {
        id: "2",
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        description: "Current Balance",
    },
];

function Transactions() {
    const user = useSelector((store) => store.user);
    const edit = user.editMode;

    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {data.map((dataItem) => (
                <Transaction dataItem={dataItem} key={dataItem.id} />
            ))}
        </>
    );
}

export default Transactions;
