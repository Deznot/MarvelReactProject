import { useState, useCallback } from "react";

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) => {
        setLoading(true);
        setProcess('loading');
        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            setLoading(false);
            return await response.json();
        } catch (e) {
            setProcess("error");
            setError(e.message);
            setLoading(false);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null);
        setProcess('waiting');
    }, []);

    return {
        loading,
        request,
        error,
        clearError,
        process,
        setProcess
    }
}

export default useHttp;
