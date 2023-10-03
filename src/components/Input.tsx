import { useState } from "react"

export const Input: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <input
            type="text"
            className='w-full mx-8'
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
        />
    )
}