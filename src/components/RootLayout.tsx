import { Outlet } from "react-router-dom";
import { Header, Footer } from "./";

export const RootLayout: React.FC = () => {
    return (
        <>
            <main>
                <Header />
                <Outlet />
                <Footer />
            </main>
        </>
    )
}