import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login, toggleEdit } from "../../redux/actions/user.action";

function Edit() {
    const user = useSelector((store) => store.user);
    const [userName, setUsername] = useState(user.userName);

    const dispatch = useDispatch();

    const handleUpdate = async () => {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({ userName: userName }),
            }
        );
        const data = await response.json();

        if (response.ok) {
            dispatch(login({...data.body, editMode: false}));
        }
    };

    return (
        <>
            <h1>Edit user info</h1>
            <section className="edit-user-info">
                <form>
                    <div className="edit-wrapper">
                        <label htmlFor="username">User Name:</label>
                        <input
                            type="text"
                            id="username"
                            value={userName}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="edit-wrapper">
                        <label htmlFor="firstname">First Name:</label>
                        <input
                            className="disabled"
                            type="text"
                            id="firstname"
                            value={user.firstName}
                            disabled
                        />
                    </div>
                    <div className="edit-wrapper">
                        <label htmlFor="lastname">Last Name:</label>
                        <input
                            className="disabled"
                            type="type"
                            id="lastname"
                            value={user.lastName}
                            disabled
                        />
                    </div>
                    <div className="buttons-wrapper">
                        <button
                            type="submit"
                            className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                handleUpdate()
                            }}
                        >
                            Save
                        </button>
                        <button
                            className="edit-button"
                            type="button"
                            onClick={(e) => {
                                dispatch(toggleEdit());
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Edit;
