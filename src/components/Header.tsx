import { Link } from "react-router-dom";
import { Offcanvas } from "./Offcanvas";
import useScreenWidth from "../hooks/useScreenWidth";
import { useState } from "react";

export const Header: React.FC = () => {
    const width = useScreenWidth();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    if (width < 768) {
        return (
            <>
                <header className="flex justify-between p-6 bg-white shadow-md">
                    <Link
                        to='/'
                        className='flex gap-2 items-center'
                        onClick={() => isOpen ? handleClick() : null}
                    >
                        <span className='text-xl text-orange-500 font-bold'>Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                    <button onClick={handleClick} className='border border-black border-solid rounded px-2 py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </header>
                {isOpen ? <Offcanvas setIsOpen={setIsOpen} /> : null}
            </>
        )
    }

    return (
        <header className='flex justify-between p-6 bg-white shadow-md' >
            <Link to='/' className='flex gap-2'>
                <span className='text-xl text-orange-500 font-bold'>Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </Link>
            <nav className='flex justify-center gap-4'>
                <Link
                    to='/searchByName'
                    className='link-style'
                >Search Recipes</Link>
                <Link
                    to='/searchByFirstLetter'
                    className='link-style'
                >Recipes by First Letter</Link>
                <Link
                    to='/searchByIngredient'
                    reloadDocument
                    className='link-style'
                >Recipes by Ingredient</Link>
            </nav>
        </header>
    )
}

