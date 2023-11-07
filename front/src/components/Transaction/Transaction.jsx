import { useSelector } from "react-redux";

function Transaction({ dataItem }) {
    const user = useSelector((store) => store.user);
    const edit = user.editMode;

    return (
        <section className={`${edit ? "account-edit" : "account"}`}>
            <div className="account-content-wrapper">
                <h3 className="account-title">{dataItem.title}</h3>
                <p className="account-amount">{dataItem.amount}</p>
                <p className="account-amount-description">
                    {dataItem.description}
                </p>
            </div>
            {!edit && (
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            )}
        </section>
    );
}

export default Transaction;
