import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleEdit } from "../redux/actions/user.action";

function Welcome() {
    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();

    return (
        <section className="welcome">
            <h1>
                Welcome back <br></br>
                {user.userName} !
            </h1>
            <button
                className="edit-user-button"
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(toggleEdit());
                }}
            >
                Edit Name
            </button>
        </section>
    );
}

export default Welcome;
