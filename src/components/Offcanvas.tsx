import { Link } from "react-router-dom"

interface props {
    setIsOpen: Function;
}

export const Offcanvas: React.FC<props> = ({ setIsOpen }: props) => {
    return (
        <>
            <nav className='min-h-screen flex flex-col items-center w-full pt-32 text-xl gap-8'>
                <Link
                    onClick={() => setIsOpen(false)}
                    to='/searchByName'
                    className='text-orange-500'
                >Search Recipes</Link>
                <Link
                    onClick={() => setIsOpen(false)}
                    to='/searchByFirstLetter'
                    className='text-orange-500'
                >Recipes by First Letter</Link>
                <Link
                    onClick={() => setIsOpen(false)}
                    to='/searchByIngredient'
                    reloadDocument
                    className='text-orange-500'
                >Recipes by Ingredient</Link>
                <button
                    onClick={() => setIsOpen(false)}
                    className='flex items-center justify-center border-2 
                    border-black border-solid rounded py-2 px-4 bg-orange-500 
                    mt-8 shadow-xl gap-2'
                >
                    Close
                    <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </nav>
        </>
    )
}