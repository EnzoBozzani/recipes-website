import { Outlet } from "react-router-dom";
import { Header } from ".";
import { useState } from "react";
import useScreenWidth from "../hooks/useScreenWidth";

export const RootLayout: React.FC = () => {
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
    const width = useScreenWidth();
    if (width < 768) {
        return (
            <>
                <main className="h-full flex flex-col justify-between pb-32">
                    <Header
                        isOpen={isOffCanvasOpen}
                        setIsOpen={setIsOffCanvasOpen}
                    />
                    {
                        isOffCanvasOpen || <Outlet />
                    }
                </main>
            </>
        )
    }

    return (
        <>
            <main className="h-full flex flex-col justify-between pb-32">
                <Header
                    isOpen={isOffCanvasOpen}
                    setIsOpen={setIsOffCanvasOpen}
                />
                <Outlet />
            </main>
        </>
    )
}