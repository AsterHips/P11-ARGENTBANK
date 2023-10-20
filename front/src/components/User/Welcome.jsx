import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleMode } from "../../redux/actions/editmode.action";

function Welcome() {
    const user = useSelector((store) => store.user);
    const toggleEditmode = useDispatch(toggleMode)
    console.log(user)


    return (
        <section className="welcome">
        <h1>Welcome back <br></br>{user.userName} !</h1>
        <button onClick={toggleEditmode} className="edit-user-button">Edit Name</button>
        </section>
    );
}

export default Welcome;
