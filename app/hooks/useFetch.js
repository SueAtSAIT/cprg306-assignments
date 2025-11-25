import { useState, useEffect } from "react";

export function useFetch(url) {
  // empty array can cause trouble
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP Response Error: ${res.status}`);
      }
      const result = await res.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return { data, error, isLoading };
}
