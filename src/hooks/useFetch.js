import { useState } from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (url, method='get', body=null, headers=null, params=null) => {
        setIsLoading(true);
        try {
          const response = await axios({
            url,
            method,
            data: body,
            headers,
            params,
          });
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
    };
    return [data, fetchData, isLoading, error]
}
export default useFetch;