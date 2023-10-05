interface props {
    handleClick: any;
}

export const Letters: React.FC<props> = ({ handleClick }: props) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
        <span className="w-full mx-6 md:mx-32 flex flex-wrap justify-center gap-4 cursor-pointer">
            {letters.map((letter: string, index: number) => (
                <span
                    key={index}
                    onClick={() => handleClick(letter)}
                    className='hover:scale-150 hover:text-orange-500 font-bold transition-colors'
                >
                    {letter}
                </span>
            ))}
        </span>
    )
}