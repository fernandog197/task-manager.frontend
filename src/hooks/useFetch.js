import { useCallback, useState } from 'react'

import { sendRequest } from '../services/sendRequest'

const useFetch = () => {
    const [fetchState, setFetchState] = useState({
        isLoading: false,
        isSucess: false,
        isFailed: false,
        data: null,
        err: null
    })

    const fetchData = useCallback(async ({ url, method, body }) => {
        try {
            setFetchState({
                isLoading: true,
                isSucess: false,
                isFailed: false,
                data: null,
                err: null   
            })

            const result = await sendRequest({ url, method, body })

            setFetchState({
                isLoading: false,
                isSucess: true,
                isFailed: false,
                data: result,
                err: null   
            })

            if(Object.entries(result).length === 0) {
                return result
            }

            return result.tasks
        } catch (err) {
            setFetchState({
                isLoading: false,
                isSucess: false,
                isFailed: true,
                data: null,
                err   
            })
        }
    })

    return [fetchState, fetchData]
}

export default useFetch