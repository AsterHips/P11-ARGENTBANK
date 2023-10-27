import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import { Outlet } from "react-router";

function App() {
    return (
        <main className="main-content">
            <Navigation />
            <Outlet />
            <Footer />
        </main>
    );
}

export default App;
