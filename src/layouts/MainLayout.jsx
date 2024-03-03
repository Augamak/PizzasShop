import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>{<Outlet />}</main>
            <footer>
                <div>
                    <logo>pizzashop</logo>
                    <div>
                        <ul>home
                            <li>To Order</li>
                            <li>About us</li>
                            <li>Evenst</li>
                            <li>Menu</li>
                        </ul>
                    </div>
                </div>

                
            </footer>
        </>
    )
}