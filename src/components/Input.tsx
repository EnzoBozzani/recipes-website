interface props {
    value?: any;
    setValue?: any;
    placeholder: string;
    handleFunction: any;
}

export const Form: React.FC<props> = ({ value, setValue, placeholder, handleFunction }: props) => {

    return (
        <input
            type="text"
            className='w-full mx-6 md:mx-32 p-3 focus:outline-none border-2 focus:border-orange-500 rounded'
            placeholder={placeholder}
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            onKeyDown={(ev) => handleFunction(value, ev)}
        />
    )
}