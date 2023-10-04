interface props {
    value: any;
    setValue: any;
    placeholder: string;
    handleKeyPress: any;
}

export const Form: React.FC<props> = ({ value, setValue, placeholder, handleKeyPress }: props) => {

    return (
        <input
            type="text"
            className='w-full mx-6 md:mx-32 p-2 focus:outline-none border-2 focus:border-orange-500 rounded'
            placeholder={placeholder}
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            onKeyDown={(ev) => handleKeyPress(value, ev)}
        />
    )
}