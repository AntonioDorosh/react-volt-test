import { useEffect, useState } from "react"

export const useDebounce = (inputValue: string, delay: number): string => {
    const [debounceValue, setDebounceValue] = useState(inputValue)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(inputValue)
        }, delay)

        return () => clearTimeout(handler)
    }, [])

    return debounceValue
}
