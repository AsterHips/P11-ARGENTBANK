import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

import Welcome from "../../components/Welcome/Welcome";
import Transactions from "../../components/Transactions/Transactions";
import Edit from "../../components/Edit/Edit";

function User() {
    const user = useSelector((store) => store.user);
    const edit = user.editMode;

    const navigate = useNavigate();

    useEffect(() => {
        if (!user.token) {
            navigate("/signin");
        }
    },[user.token, navigate]);

    return (
        <main className={`main ${edit ? "" : "bg-dark"}`}>
            {edit ? <Edit /> : <Welcome />}
            <Transactions />
        </main>
    );
}

export default User;
