interface props {
    handleClick: any;
}

export const Letters: React.FC<props> = ({ handleClick }: props) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
        <span className="w-full mx-6 md:mx-32 flex flex-wrap justify-center gap-4 cursor-pointer">
            {letters.map(letter => (
                <span
                    onClick={() => handleClick(letter)}
                    className='hover:scale-150 font-bold transition duration-200'
                >
                    {letter}
                </span>
            ))}
        </span>
    )
}