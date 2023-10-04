import { Outlet } from "react-router-dom";
import { Header } from "./";

export const RootLayout: React.FC = () => {
    return (
        <>
            <main className="h-full flex flex-col justify-between pb-32">
                <Header />
                <Outlet />
            </main>
        </>
    )
}