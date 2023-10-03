export const Footer: React.FC = () => {
    return (
        <footer
            className='bg-gray-100 mt-16 w-full flex flex-col justify-center items-center py-8 px-4 text-xl text-center text-orange-500 font-bold'
        >
            <p style={{ WebkitTextStroke: '.5px #000' }}>Built using TypeScript, React, Vite and TailwindCSS ;)</p>
            <span className='text-gray-500 text-sm'>
                <a
                    className='underline'
                    href="https://github.com/EnzoBozzani/recipes-website"
                    target="_blank"
                > https://github.com/EnzoBozzani/recipes-website</a>
            </span>
        </footer>
    )
}