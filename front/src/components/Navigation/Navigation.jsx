import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";

export default function Navigation() {
    const user = useSelector((store) => store.user);
    console.log(user);
    return (
        <header className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </NavLink>
            <nav>
                <NavLink to="/signin" className="main-nav-item">
                    <i class="fa fa-user-circle"></i>Sign In
                </NavLink>
                {/* {user.token && <li>
                        <NavLink to="/signout">Sign Out</NavLink>
                    </li> } */}
            </nav>
            {/* {user.test !== "" && <p>{user.test}</p>} */}
        </header>
    );
}
