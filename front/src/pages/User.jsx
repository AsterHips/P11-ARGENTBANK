import { useSelector } from "react-redux";

import Welcome from "../components/Welcome";
import Transactions from "../components/Transactions";
import Edit from "../components/Edit";

function User() {
    const user = useSelector((store) => store.user);
    const edit = user.editMode;

    return (
        <main className={`main ${edit ? "" : "bg-dark"}`}>
            {edit ? <Edit /> : <Welcome />}
            <Transactions />
        </main>
    );
}

export default User;
