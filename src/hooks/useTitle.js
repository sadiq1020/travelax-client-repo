import { useEffect } from 'react'

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Travelax`
    }, [title])
};

export default useTitle;

